import React from 'react';
import { shallow } from 'enzyme';

import StatsBarItem from 'cotizame-native/app/components/StatsBarItem';

function createTestProps (props) {
	return {
		// common props
		data: '',
		title: '',
		// allow to override common props
		...props,
	}
}

describe('redering', ()=> {
	let wrapper;
	const createWrapper = props => shallow(<StatsBarItem {...props} />);
	beforeEach(()=>{
		const props = createTestProps()
		wrapper = createWrapper(props);
	});
	it('renders as expected', ()=>{
		expect(wrapper).toMatchSnapshot();
	});
	describe('whit default props', ()=>{
		beforeEach(()=>{
			wrapper = createWrapper()
		})
		it('data is correct', () => {
			let props = wrapper.instance().props;
			expect(props.data).toBe('- -');
		});
		it('title is correct', () => {
			let props = wrapper.instance().props;
			expect(props.title).toBe('- -');

		})
	})


})