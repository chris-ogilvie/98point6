import { combineReducers } from 'redux';
import {
    addressLookupReducer,
    addressVerificationReducer,
    akamaiDeviceCharacteristicsReducer,
    checkoutPayPalReducer,
    clientStateReducer,
    contentReducer,
    eventOccurrenceReducer,
    headerReducer,
    loginReducer,
    odsReservationReducer,
    pageMetaReducer,
    productDiscoveryReducer,
    productPurchaseReducer,
    productSizeChartReducer,
    qfsReducer,
    recentlyViewedReducer,
    recommendationReducer,
    storeFlagsReducer,
    visaReducer,
} from 'web-components';
import shoppingBagReducer from './shoppingBagReducer';
import checkoutCreditCardReducer from './checkoutCreditCardReducer';
import checkoutReducer from './checkoutReducer';
import checkoutEditsReducer from './checkoutEditsReducer';
import orderThanksReducer from './orderThanksReducer';

const rootReducer = combineReducers({
    addressLookupReducer,
    addressVerificationReducer,
    akamaiDeviceCharacteristicsReducer,
    checkoutCreditCardReducer,
    checkoutReducer,
    checkoutEditsReducer,
    checkoutPayPalReducer,
    clientStateReducer,
    contentReducer,
    eventOccurrenceReducer,
    headerReducer,
    loginReducer,
    odsReservationReducer,
    orderThanksReducer,
    pageMetaReducer,
    productDiscoveryReducer,
    productPurchaseReducer,
    productSizeChartReducer,
    qfsReducer,
    recentlyViewedReducer,
    recommendationReducer,
    shoppingBagReducer,
    storeFlagsReducer,
    visaReducer,
});

export default rootReducer;
