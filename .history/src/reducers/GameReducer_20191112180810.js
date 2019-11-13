import {
    ACKNOWLEDGE_ADDRESS_CHANGE_ERROR,
    ADD_ADDRESS_ERROR_CHECKOUT,
    ADD_CREDIT_CARD_ERROR,
    ADD_GIFT_CARD_ERROR_CHECKOUT,
    ADD_PROMO_CODE_ERROR,
    ADD_REWARDS_ERROR_CHECKOUT,
    AUTO_COMPLETE_LOCATION,
    AUTO_COMPLETE_LOCATION_ERROR,
    CLEAR_ADDRESS_VALIDATIONS,
    CLEAR_ERRORS,
    EXCHANGE_CREDIT_CARD_ERROR,
    FETCH_PAYMENT_TOKEN_ERROR,
    FETCH_TOKEN,
    FETCH_TOKEN_ERROR,
    INIT_CHECKOUT_ERROR,
    INIT_PAYMENT_AUTHORIZATION_ERROR,
    PROCESS_PAYPAL_CHECKOUT_ERROR,
    REMOVE_CREDIT_CARD_ERROR,
    REMOVE_GIFT_CARD_ERROR_CHECKOUT,
    REMOVE_PROMO_CODE_ERROR,
    REMOVE_REWARDS_ERROR_CHECKOUT,
    SET_PAYMENT_CHOICE_ERROR,
    SHIPPING_OPTIONS,
    SHIPPING_OPTIONS_ERROR,
    SUBMIT_ORDER_ERROR,
    UPDATE_ADDRESS_ERROR_CHECKOUT,
    UPDATE_CHECKOUT,
    UPDATE_CREDIT_CARD_ERROR,
    UPDATE_SHIPPING_OPTIONS_ERROR,
    VALIDATION,
    VALIDATION_ERROR,
} from 'actions/ActionTypes';
import { parseAllStepErrors } from 'utilities/checkoutUtils';

const initialState = {
    allStepErrors: {},
    autoComplete: {},
    authentication: {},
    errors: [],
    isError: false,
    isExpress: false,
    isPersistErrors: false,
    isRefresh: false,
    order: {},
    shippingOptions: [],
    shippingOptionsAddress: {}, // the address used to populate the shippingOptions array
    steps: [],
    validations: {},
};

// eslint-disable-next-line max-statements
export default function checkoutReducer(state = initialState, action) {
    const { data = {} } = action;

    switch (action.type) {
        case AUTO_COMPLETE_LOCATION: {
            return Object.assign({}, state, { autoComplete: data });
        }
        case AUTO_COMPLETE_LOCATION_ERROR: {
            // don't store auto-complete errors; no need to alert user to things like
            // the service being doinw or 404's if no match is found.
            // in these cases, just empty out our auto-complete state
            return Object.assign({}, state, { autoComplete: {} });
        }
        case CLEAR_ADDRESS_VALIDATIONS: {
            const { validations } = state;
            const nextValidations = { ...validations };
            delete nextValidations.address;
            return { ...state, validations: nextValidations };
        }
        case CLEAR_ERRORS: {
            const { isPersistErrors } = state;

            if (isPersistErrors) {
                return state;
            }

            return Object.assign({}, state, { errors: [], allStepErrors: {} });
        }
        case ACKNOWLEDGE_ADDRESS_CHANGE_ERROR:
        case ADD_ADDRESS_ERROR_CHECKOUT:
        case ADD_CREDIT_CARD_ERROR:
        case ADD_GIFT_CARD_ERROR_CHECKOUT:
        case ADD_PROMO_CODE_ERROR:
        case ADD_REWARDS_ERROR_CHECKOUT:
        case EXCHANGE_CREDIT_CARD_ERROR:
        case FETCH_PAYMENT_TOKEN_ERROR:
        case FETCH_TOKEN_ERROR:
        case INIT_CHECKOUT_ERROR:
        case INIT_PAYMENT_AUTHORIZATION_ERROR:
        case PROCESS_PAYPAL_CHECKOUT_ERROR:
        case REMOVE_CREDIT_CARD_ERROR:
        case REMOVE_GIFT_CARD_ERROR_CHECKOUT:
        case REMOVE_PROMO_CODE_ERROR:
        case REMOVE_REWARDS_ERROR_CHECKOUT:
        case SET_PAYMENT_CHOICE_ERROR:
        case SHIPPING_OPTIONS_ERROR:
        case SUBMIT_ORDER_ERROR:
        case UPDATE_ADDRESS_ERROR_CHECKOUT:
        case UPDATE_CREDIT_CARD_ERROR:
        case UPDATE_SHIPPING_OPTIONS_ERROR:
        case VALIDATION_ERROR: {
            const {
                type: newType = 'TYPE_UNKNOWN',
                id: newId = 'ID_UNKNOWN',
                error = {},
                isCritical = false,
            } = action;
            const { errors = [] } = state;
            const newError = {
                type: newType,
                id: newId,
                error,
                isCritical,
            };
            // don't store the same error key for the same id twice in the errors array:
            const newErrors = errors.filter(
                err => !(err.type === newType && err.id === newId),
            );

            return Object.assign({}, state, {
                errors: newErrors.concat(newError),
            });
        }
        case FETCH_TOKEN: {
            return Object.assign({}, state, { authentication: data });
        }
        case SHIPPING_OPTIONS: {
            const { address, shippingOptions } = data;
            return Object.assign({}, state, {
                shippingOptions,
                shippingOptionsAddress: address,
            });
        }
        case UPDATE_CHECKOUT: {
            const { isError, isExpress, isPersistErrors = false, isRefresh = false, order, steps } =
                data || {};

            const allStepErrors = parseAllStepErrors(steps);

            return Object.assign({}, state, {
                allStepErrors,
                isError,
                isExpress,
                isPersistErrors,
                isRefresh,
                order,
                steps,
            });
        }
        case VALIDATION: {
            const validations = Object.assign({}, state.validations, data);
            return Object.assign({}, state, { validations });
        }
        default:
            return state;
    }
}
