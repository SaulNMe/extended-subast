import React from 'react';
import { shallow } from 'enzyme';

import ReqItem from 'cotizame-native/app/components/ReqItem';
import moment from 'moment';

import {
	Image,
	TouchableOpacity
} from 'react-native';

import SmallText from 'cotizame-native/app/components/SmallText';

function createTestProps (props) {
	return {
		// common props
		label: '',
		title: '',
		price: '',
		expirationDatetime: String(moment('2137-11-24').format('YYYY-MM-DD HH:mm:ss')),
		marginHorizontal: false,
		noImage: false,
		noMoreButton: false,
		// allow to override common props
		...props,
	}
}

describe('rendering', () => {
	let wrapper;
	const createWrapper = props => shallow(<ReqItem {...props}/>);
	beforeEach(() => {
		const props = createTestProps()
		wrapper = createWrapper(props);
	});
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	describe('With default props', () => {
		beforeEach(() => {
			wrapper = createWrapper();
		});
		it('has correct values', () => {
			let props = wrapper.instance().props;
			expect(props.expirationDatetime).toBe(moment(0).format('YYYY-MM-DD HH:mm:ss'));
		});
	});
	describe('when noImage and noMoreButton are set to True', () => {
		beforeEach(() => {
			const props = createTestProps({ noImage: true, noMoreButton: true })
			wrapper = createWrapper(props);
		});
		it('the image is not rendered', () => {
			expect(wrapper.find(Image).exists()).toBe(false);
		});
		it('the button is not rendered', () => {
			expect(wrapper.find(TouchableOpacity).exists()).toBe(false);
		});
	});
	describe('when expiration date is in the past', () => {
		beforeEach(() => {
			const props = createTestProps({ expirationDatetime: moment(0).format('YYYY-MM-DD HH:mm:ss') })
			wrapper = createWrapper(props);
		});
		it('Expired message is shown', () => {
			expect(wrapper.find(SmallText).findWhere(node=> node.prop('color') === 'red')).toBeTruthy();
		});
	});
})

// describe('callbacks');
