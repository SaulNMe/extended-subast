import reducer from 'cotizame-native/app/reducers/AlertsReducer'

import {
	FETCH_ALERTS_BEGIN,
	FETCH_ALERTS_SUCCESS,
	FETCH_ALERTS_FAILURE,
	INCREMENT_ALERTS_PAGE,
	RESET_ALERTS,
	RESET_ALERTS_PAGINATION
} from 'cotizame-native/app/actions/AlertsActions';


const initialState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
	limit: 15,
	offset: 0,
	endReached: false
	
};

const sampleState = {
	byId: {
		1: { AlertId: 1, title: "alerta" },
		2: { AlertId: 2, title: "alerta" },
		3: { AlertId: 3, title: "alerta" }
	},
	allIds: [1,2,3],
	isLoading: false,
	error: '',
	limit: 15,
	offset: 15,
	endReached: false
};

const samplePayload = {
	alerts: {
		byId: {
			4: { AlertId: 4, title: "alerta" } 
		},
		allIds: [4]
	}
}

//This one should have an item already existing in sampleState
const overwritingPayload = {
	alerts: {
		byId: {
			3: { id: 3, title: "Overridden" }
		},
		allIds: [3]
	}
}


//MORE STATES

describe('Alerts reducer', () => {
	it('should return the initial state', () => {
		const actual = reducer(undefined, {});
		const expected = initialState;
		expect(actual).toEqual(expected)
	});
	describe('FETCH_ALERTS_BEGIN', () => {
		const action = {
			type: FETCH_ALERTS_BEGIN
		};
		const actual = reducer({ ...sampleState, error: 'im some error' }, action);
		it('sets isLoading to true and resets error field',() => {
			const expected = {
				...sampleState,
				isLoading: true,
				error: ''
			};
			expect(actual).toEqual(expected)
		});
	})
	describe('FETCH_ALERTS_SUCCESS', () => {
		describe('when just adding items', () => {
			const action = {
				type: FETCH_ALERTS_SUCCESS,
				payload: samplePayload
			};
			const result = reducer({ ...sampleState, isLoading: true }, action);
			it('keeps the old items on byId', () => {
				expect(result.byId).toMatchObject(sampleState.byId);
			});
			it('adds the new items to byId', () => {
				expect(result.byId).toMatchObject(samplePayload.alerts.byId);
			});
			it('merges new allIds into old ones in the correct order', () => {
				expect(result.allIds).toEqual([...sampleState.allIds, ...samplePayload.alerts.allIds ])
			});
			it('returns isLoading to false', () => {
				expect(result.isLoading).toEqual(false);
			});
			it('sets endReached to true if the ammount of fetched records is lower than the set limit', () => {
				expect(result.endReached).toEqual(true);
			});
		});
		describe('when overwriting items', () => {
			const action = {
				type: FETCH_ALERTS_SUCCESS,
				payload: overwritingPayload
			};
			const result = reducer(sampleState, action);
			it('overwrites items with same Id', () => {
				const overwrittenId = overwritingPayload.alerts.allIds[0];
				expect(result.byId[overwrittenId]).toEqual(overwritingPayload.alerts.byId[overwrittenId]);
			})
			it('doesnt repeat ids on allIds', () => {
				expect(result.allIds).toEqual([...new Set(result.allIds)]);
			})
		});
	})
	describe('FETCH_ALERTS_FAILURE', () => {
		const action = {
			type: FETCH_ALERTS_FAILURE,
			payload: { error: 'Test error' }
		};
		const actual = reducer({ ...sampleState, isLoading: true }, action);
		it('sets error string and resets isLoading',() => {
			const expected = {
				...sampleState,
				error: 'Test error',
				isLoading: false
			};
			expect(actual).toEqual(expected)
		});
	})
	describe('INCREMENT_ALERTS_PAGE', () => {
		it('increments the offset by the limit', () => {
			const action = {
				type: INCREMENT_ALERTS_PAGE
			};
			const actual = reducer(sampleState, action);
			const expected = {
				...sampleState,
				offset: sampleState.offset + sampleState.limit
			};
			expect(actual).toEqual(expected)
		});
	})
	describe('RESET_ALERTS_PAGINATION', () => {
		it('returns pagination data to its initial state', () => {
			const action = {
				type: RESET_ALERTS_PAGINATION
			};
			const actual = reducer(sampleState, action);
			const expected = {
				...sampleState,
				offset: initialState.offset,
				limit: initialState.limit
			};
			expect(actual).toEqual(expected)
		});
	})
	describe('RESET_ALERTS', () => {
		it('resets the state', () => {
			const action = {
				type: RESET_ALERTS
			};
			const actual = reducer(sampleState, action);
			const expected = {
				...initialState
			};
			expect(actual).toEqual(expected)
		});
	})
});
