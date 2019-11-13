
function getMoves() {

fetch(url)
  .then(function(data) {
    // Here you get the data to modify as you please
    })
  })
  .catch(function(error) {
    // If there is any error you will catch them here
  });
}

function getShoppingBag(isWCS, setCookies = []) {
    const { options } = this || {};
    const reqCookies = getOptionsReqCookies(options);
    const isMergedBag = getIsMergedBag(reqCookies);

    if (isWCS) {
        return async dispatch => {
            try {
                const { data = {}, meta = {} } = await createUDAL(options).read(
                    'wcsStoresServlet',
                    {
                        query: {
                            ajaxReq: 'Y',
                        },
                        servletName: LLB_SHOPPINGCART_DISPLAY,
                        sendReqCookies: true,
                    },
                );
                const location = hasRedirect(meta);
                updateCookies(meta, setCookies);
                if (options && options.req) {
                    mergeCookies(options.req.headers, meta);
                }
                if (location) {
                    const redirectData = await followRedirect(
                        options,
                        location,
                        setCookies,
                        0,
                    );
                    const adaptRedirect = shoppingBagAdapter.adaptShoppingBagData(
                        redirectData,
                    );
                    return dispatch({
                        type: GET_SHOPPING_BAG,
                        data: adaptRedirect,
                    });
                }
                const adaptedData = shoppingBagAdapter.adaptShoppingBagData(
                    data,
                );
                return dispatch({
                    type: GET_SHOPPING_BAG,
                    data: { ...adaptedData, isMergedBag },
                });
            } catch (error) {
                return dispatch({
                    type: GET_SHOPPING_BAG_ERROR,
                    id: 'cart',
                    error,
                });
            }
        };
    }
    return dispatch =>
        getUDAL(options)
            .read('llbeanAPI', {
                resourceName: 'shoppingbag',
                sendReqCookies: true,
            })
            .then(res => {
                const { data = {}, meta = {} } = res;
                const { properties = {} } = data;
                updateCookies(meta, setCookies);
                const adaptedData = shoppingBagAdapter.adaptShoppingBagData(
                    properties,
                );
                dispatch({
                    type: GET_SHOPPING_BAG,
                    data: { ...adaptedData, isMergedBag },
                });
            })
            .catch(error => {
                dispatch({ type: GET_SHOPPING_BAG_ERROR, id: 'cart', error });
            });
}


// function getPayPalCheckoutResponse(isWCS, orderId) {
//     const { options } = this || {};
//     if (isWCS) {
//         return dispatch =>
//             getUDAL(options)
//                 .read('wcsStoresServlet', {
//                     query: {
//                         action: 'payPal',
//                         storeId: 1,
//                         catalogId: 1,
//                         orderId,
//                         langId: -1,
//                     },
//                     sendReqCookies: true,
//                     noCache: true,
//                     servletName: 'LLBShoppingCartUpdate',
//                 })
//                 .then(res => {
//                     const { data = {} } = res;
//                     const adaptedData = shoppingBagAdapter.adaptShoppingBagData(
//                         data,
//                     );
//                     const {
//                         allowPayPalExpress = true,
//                         hasInstantCCType = false,
//                         member = {},
//                     } = adaptedData || {};
//                     const { isLoyaltyPromote = false, isOapUser = false } =
//                         member || {};

//                     dispatch({
//                         type: GET_PAYPAL_CHECKOUT,
//                         data: {
//                             allowPayPalExpress,
//                             hasInstantCCType,
//                             member: {
//                                 isLoyaltyPromote,
//                                 isOapUser,
//                             },
//                         },
//                     });
//                 })
//                 .catch(() => {
//                     dispatch({
//                         type: GET_PAYPAL_CHECKOUT_ERROR,
//                         id: 'cart',
//                         error: new Error(GENERIC_SB_ERROR),
//                     });
//                 });
//     }
//     return dispatch => {
//         dispatch({
//             type: GET_PAYPAL_CHECKOUT_ERROR,
//             id: 'cart',
//             error: new Error(
//                 'Invalid API parameter specified for PayPal Shopping Bag retrieval.',
//             ),
//         });
//     };
// }

// /**
//  * Add new item to shopping bag
//  * @param {object} params
//  */
// function addItemToShoppingBag(params) {
//     const {
//         productId,
//         catEntryId,
//         itemId,
//         isWCS,
//         alphaCode,
//         quantity,
//         attributes,
//     } = params || {};
//     return dispatch =>
//         getUDAL()
//             .create(
//                 'llbeanAPI',
//                 {
//                     resourceName: 'shoppingbag',
//                     sendReqCookies: true,
//                     headers: { 'Content-Type': 'application/json' },
//                 },
//                 {
//                     productId,
//                     catEntryId,
//                     itemId,
//                     alphaCode,
//                     quantity,
//                     attributes: formatAttributes(attributes),
//                 },
//             )
//             .then(res => {
//                 const { properties = {} } = res.data;
//                 dispatch({ type: ADD_ITEM_TO_SHOPPING_BAG, data: properties });
//                 dispatch(fetchClientState());
//                 // get updated shopping bag
//                 getShoppingBag(isWCS);
//             })
//             .catch(error => {
//                 dispatch({
//                     type: ADD_ITEM_TO_SHOPPING_BAG_ERROR,
//                     id: 'cart',
//                     error,
//                 });
//             });
// }

// /**
//  * Clear/Remove all items from shopping bag
//  */
// function clearShoppingBag(isWCS) {
//     return dispatch =>
//         getUDAL()
//             .delete('llbeanAPI', {
//                 resourceName: 'shoppingbag',
//                 sendReqCookies: true,
//             })
//             .then(response => {
//                 const { properties = {} } = response.data;
//                 const { isRequestAccepted = false } = properties;
//                 if (isRequestAccepted) {
//                     dispatch({ type: CLEAR_SHOPPING_BAG, data: {} });

//                     /* Currently the `llbeanAPI::shoppingbag` servlet is returning an incorrect 'LLBOI' cookie value
//                 on the response (it contains the old item count instead of the expected 0 value)
//                 This is a patch to manually update the cookie with the correct values.
//                 This patch can be removed once the service is fixed to return the correct 'LLBOI' cookie value */
//                     clearCartItemsCookie();

//                     // Must update the cookie values stored in state...
//                     dispatch(fetchClientState());

//                     getShoppingBag(isWCS);
//                 } else {
//                     dispatch({
//                         type: CLEAR_SHOPPING_BAG_ERROR,
//                         id: 'cart',
//                         data: properties,
//                     });
//                 }
//             })
//             .catch(error => {
//                 dispatch({ type: CLEAR_SHOPPING_BAG_ERROR, id: 'cart', error });
//             });
// }

// /**
//  * Ship entire order or single orderItem to a nickname
//  * @param {object} params
//  */
// function shipToNickname(params) {
//     const { orderId, addressId, isWCS } = params || {};

//     if (!orderId || !addressId) {
//         return dispatch => {
//             dispatch({
//                 type: SHIP_TO_NICKNAME_ERROR,
//                 id: orderId,
//                 error: new Error(
//                     'Unable to ship order to nickname. Information is missing.',
//                 ),
//             });
//         };
//     }

//     return dispatch =>
//         getUDAL()
//             .update(
//                 'llbeanAPI',
//                 {
//                     resourceName: 'shoppingbag',
//                     path: 'nickname',
//                     sendReqCookies: true,
//                     headers: { 'Content-Type': 'application/json' },
//                 },
//                 params,
//             )
//             .then(() => {
//                 getShoppingBag(isWCS);
//             })
//             .catch(error => {
//                 dispatch({ type: SHIP_TO_NICKNAME_ERROR, id: orderId, error });
//             });
// }

// /**
//  * Ship entire order or single orderItem to a store
//  * @param {object} params
//  */
// function shipToStore(params) {
//     const { addressId, isWCS, orderId, storeLocationId } = params || {};

//     if (!orderId || !addressId || !storeLocationId) {
//         return dispatch => {
//             dispatch({
//                 type: SHIP_TO_STORE_ERROR,
//                 id: orderId,
//                 error: new Error(
//                     'Unable to ship order to a store. Information is missing.',
//                 ),
//             });
//         };
//     }

//     return dispatch =>
//         getUDAL()
//             .update(
//                 'llbeanAPI',
//                 {
//                     resourceName: 'shoppingbag',
//                     path: 'store',
//                     sendReqCookies: true,
//                     headers: { 'Content-Type': 'application/json' },
//                 },
//                 params,
//             )
//             .then(() => {
//                 getShoppingBag(isWCS);
//             })
//             .catch(error => {
//                 dispatch({ type: SHIP_TO_STORE_ERROR, id: orderId, error });
//             });
// }

// function getStores() {
//     return dispatch =>
//         getUDAL()
//             .read('wcsStoresServlet', {
//                 servletName: 'ShowShipToStoreJSON',
//             })
//             .then(res => {
//                 const { data = {} } = res;
//                 const { isError = 'true' } = data || {};

//                 if (isError !== 'true') {
//                     dispatch({ type: GET_STORES, data });
//                 } else {
//                     dispatch({
//                         type: GET_STORES_ERROR,
//                         id: 'cart',
//                         error: new Error(GENERIC_SB_ERROR),
//                     });
//                 }
//             })
//             .catch(error => {
//                 dispatch({ type: GET_STORES_ERROR, id: 'cart', error });
//             });
// }

// function addItemQuantityError(
//     id,
//     messsage = 'Item quantity must be between 1 and 99.',
// ) {
//     return dispatch => {
//         dispatch({
//             type: CART_ITEM_QUANTITY_ERROR,
//             id,
//             error: new Error(messsage),
//         });
//     };
// }

// function addShipToStoreMismatchError(
//     id,
//     messsage = 'Item not available for in-store pickup.',
// ) {
//     return dispatch => {
//         dispatch({
//             type: SHIP_TO_STORE_MISMATCH_ERROR,
//             id,
//             error: new Error(messsage),
//         });
//     };
// }

export {
    addItemQuantityError,
    addItemToShoppingBag,
    addShipToStoreMismatchError,
    clearShoppingBag,
    followRedirect,
    getShoppingBag,
    getPayPalCheckoutResponse,
    getStores,
    shipToNickname,
    shipToStore,
};
