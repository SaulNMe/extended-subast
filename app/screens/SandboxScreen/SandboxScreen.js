import React, { Component } from 'react';
import {
	View,
	Text,
	ScrollView
} from 'react-native';
import styles from './SandboxScreenStyle';

import AlertButton from 'cotizame-native/app/components/AlertButton';
import BottomBar from 'cotizame-native/app/components/BottomBar';
import LabelText from 'cotizame-native/app/components/LabelText';
import ServItem from 'cotizame-native/app/components/ServItem';
import AlertItem from 'cotizame-native/app/components/AlertItem';
import NotificationCard from 'cotizame-native/app/components/NotificationCard';
import SimpleCard from 'cotizame-native/app/components/SimpleCard';
import OfferItem from 'cotizame-native/app/components/OfferItem';
import SmallText from 'cotizame-native/app/components/SmallText';
import HelpItem from 'cotizame-native/app/components/HelpItem';
import OffersTabs from 'cotizame-native/app/components/OffersTabs';
import StatsBar from 'cotizame-native/app/components/StatsBar';
import BackBtn from 'cotizame-native/app/components/BackBtn';
import HugeText from 'cotizame-native/app/components/HugeText';
import OrdersCardContent from 'cotizame-native/app/components/OrdersCardContent';
import StatsBarItem from 'cotizame-native/app/components/StatsBarItem';
import BodyText from 'cotizame-native/app/components/BodyText';
import IconButton from 'cotizame-native/app/components/IconButton';
import PositionDisplay from 'cotizame-native/app/components/PositionDisplay';
import SubtitleText from 'cotizame-native/app/components/SubtitleText';
import BottomDrawer from 'cotizame-native/app/components/BottomDrawer';
import PositionDisplayDetail from 'cotizame-native/app/components/PositionDisplayDetail';
import SwitchBtn from 'cotizame-native/app/components/SwitchBtn';
import CheckItem from 'cotizame-native/app/components/CheckItem';
import InlineBodyText from 'cotizame-native/app/components/InlineBodyText';
import PrimaryBtn from 'cotizame-native/app/components/PrimaryBtn';
import TagItem from 'cotizame-native/app/components/TagItem';
import Divider from 'cotizame-native/app/components/Divider';
import InlineDrawer from 'cotizame-native/app/components/InlineDrawer';
import ReqItem from 'cotizame-native/app/components/ReqItem';
import TextDivider from 'cotizame-native/app/components/TextDivider';
import DropSpace from 'cotizame-native/app/components/DropSpace';
import InlineSwitch from 'cotizame-native/app/components/InlineSwitch';
import SecondaryBtn from 'cotizame-native/app/components/SecondaryBtn';
import TitleText from 'cotizame-native/app/components/TitleText';
import EntryCard from 'cotizame-native/app/components/EntryCard';
import InputIcon from 'cotizame-native/app/components/InputIcon';
import SegmentedControlOffersTab from 'cotizame-native/app/components/SegmentedControlOffersTab';
import FormInput from 'cotizame-native/app/components/FormInput';
import LabelDisplay from 'cotizame-native/app/components/LabelDisplay';
import SelectList from 'cotizame-native/app/components/SelectList';

export default class SandboxContainer extends Component {	
	render() {
		return (
			<ScrollView>
				<View style={[styles.paddedContainer]}>
					<SimpleCard>
						<LabelText 
							text='Sandbox es solo una screen para probar los componentes despues se va a borrar'
						/>
						<Divider />
						<BodyText 
							text='Sandbox es solo una screen para probar los componentes despues se va a borrar'
						/>
						<Divider />
						<SubtitleText 
							text='Sandbox es solo una screen para probar los componentes despues se va a borrar'
						/>
						<Divider />
						<InlineBodyText 
							text='Sandbox es solo una screen para probar los componentes despues se va a borrar'
						/>
						<Divider />
						<TextDivider 
							text='Sandbox es solo una screen para probar los componentes despues se va a borrar'
						/>
						<Divider />
						<TitleText 
							text='Sandbox es solo una screen para probar los componentes despues se va a borrar'
						/>
						<Divider />
						<HugeText 
							text='Sandbox es solo una screen para probar los componentes despues se va a borrar'
						/>
						<Divider />
						<SmallText 
							text='Sandbox es solo una screen para probar los componentes despues se va a borrar'
						/>
						<Divider />
						<AlertButton />
						<Divider />
						<ServItem />
						<Divider />
						<AlertItem />
						<Divider />
						<NotificationCard />
						<Divider />
						<Divider />
						<HelpItem />
						<Divider />
						<StatsBar />
						<Divider />
						<BackBtn />
						<Divider />
						<IconButton />
						<Divider />
						<PositionDisplay />
						<Divider />
						<OrdersCardContent />
						<Divider />
						<StatsBarItem 
							number='1337'
							title='Cotemar'
						/>
						<Divider />
						<PositionDisplayDetail />
						<Divider />
						<SwitchBtn />
						<Divider />
						<PrimaryBtn />
						<Divider />
						<TagItem />
						<Divider />
						<InlineDrawer 
							left = {(<TagItem />)}
							right = {(<TagItem />)}
						/>
						<Divider />
						<ReqItem />
						<Divider />
						<DropSpace>
							<TagItem />
							<Divider />
						</DropSpace>
						<InlineSwitch />
						<Divider />
						<SecondaryBtn />
						<Divider />
						<EntryCard />
						<Divider />
						<InputIcon />
						<Divider />
						<FormInput />
						<Divider />
						<LabelDisplay />
						<Divider />
						<SelectList />
						<Divider />
						<BottomBar />
					</SimpleCard>
				</View>
			</ScrollView>
		);
	}
}

					


