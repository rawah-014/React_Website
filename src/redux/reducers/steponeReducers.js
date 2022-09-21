import {
    ALL_STEPONES_REQUEST,
    ALL_STEPONES_SUCCESS,
    ALL_STEPONES_FAIL,
    ADMIN_STEPONES_REQUEST,
    ADMIN_STEPONES_SUCCESS,
    ADMIN_STEPONES_FAIL,
    NEW_STEPONE_REQUEST,
    NEW_STEPONE_SUCCESS,
    NEW_STEPONE_RESET,
    NEW_STEPONE_FAIL,
    DELETE_STEPONE_REQUEST,
    DELETE_STEPONE_SUCCESS,
    DELETE_STEPONE_RESET,
    DELETE_STEPONE_FAIL,
    UPDATE_STEPONE_REQUEST,
    UPDATE_STEPONE_SUCCESS,
    UPDATE_STEPONE_RESET,
    UPDATE_STEPONE_FAIL,
    STEPONE_DETAILS_REQUEST,
    STEPONE_DETAILS_SUCCESS,
    STEPONE_DETAILS_FAIL,
 
    CLEAR_ERRORS

} from '../constants/steponeConstants'

export const steponesReducer = (state = { stepones: [] }, action) => {
    switch (action.type) {
        case ALL_STEPONES_REQUEST:
        case ADMIN_STEPONES_REQUEST:
            return {
                loading: true,
                stepones: []
            }

        case ALL_STEPONES_SUCCESS:
            return {
                loading: false,
                stepones: action.payload.stepones,
                steponesCount: action.payload.steponesCount,
                resPerPage: action.payload.resPerPage,
                filteredSteponesCount: action.payload.filteredSteponesCount
            }

        case ADMIN_STEPONES_SUCCESS:
            return {
                loading: false,
                stepones: action.payload
            }

        case ALL_STEPONES_FAIL:
        case ADMIN_STEPONES_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const newSteponeReducer = (state = { stepone: {} }, action) => {
    switch (action.type) {

        case NEW_STEPONE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_STEPONE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                STEPONE: action.payload.STEPONE
            }

        case NEW_STEPONE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_STEPONE_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const steponeReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_STEPONE_REQUEST:
        case UPDATE_STEPONE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_STEPONE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_STEPONE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_STEPONE_FAIL:
        case UPDATE_STEPONE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_STEPONE_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_STEPONE_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const steponeDetailsReducer = (state = { stepone: {} }, action) => {
    switch (action.type) {

        case STEPONE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case STEPONE_DETAILS_SUCCESS:
            return {
                loading: false,
                STEPONE: action.payload
            }

        case STEPONE_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

