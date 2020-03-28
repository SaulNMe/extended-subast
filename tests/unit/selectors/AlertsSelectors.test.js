import {
	getAlerts,
	getIsLoadingAlerts,
	getAlertsPaginationData,
	getErrorAlerts,
	getAlertsEndReached,
	getIsRefreshingAlerts,
} from "cotizame-native/app/reducers/AlertsReducer";

//Keep the state shape the same as the ones in the reducer test
const emptyState = {
	byId: {},
	allIds: [],
	isLoading: false,
	error: '',
	limit: 15,
	offset: 0,
	endReached: false
};

const fullState = {
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

describe('alerts selectors', () => {
	describe('getAlerts', () => {
		it('returns empty array when the state is empty', () => {
			const actual = getAlerts(emptyState);
			const expected = [];
			expect(actual).toEqual(expected)
		});
		it('Returns the right ammount of items', () => {
			const actual = getAlerts(fullState);
			const expected = [];
			expect(actual).toHaveLength(fullState.allIds.length)
		});
	});
	describe('getAlertsPaginationData', () => {
		it('return an object with the right keys', () => {
			const actual = getAlertsPaginationData(fullState);
			expect(actual).toMatchObject({
				limit: fullState.limit,
				offset: fullState.offset
			})
		});
	});
	describe('getIsLoadingAlerts', () => {
		it('returns isLoading state', () => {
			const actual = getIsLoadingAlerts(fullState);
			expect(actual).toBe(false);
		});
	});
	describe('getErrorAlerts', () => {
		it('returns error state', () => {
			const actual = getErrorAlerts(fullState);
			expect(actual).toBe('');
		});
	});
	describe('getAlertsEndReached', () => {
		it('returns error state', () => {
			const actual = getAlertsEndReached(fullState);
			expect(actual).toBe(false);
		});
	});
	describe('getIsRefreshingAlerts', () => {
		it('returns whether the refresh wheel should be showing', () => {
			const actual = getIsRefreshingAlerts(fullState);
			expect(actual).toBe(false);
		});
	});
});
