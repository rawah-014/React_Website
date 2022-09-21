import {
    ALL_STEPTWOS_REQUEST,
    ALL_STEPTWOS_SUCCESS,
    ALL_STEPTWOS_FAIL,
    ADMIN_STEPTWOS_REQUEST,
    ADMIN_STEPTWOS_SUCCESS,
    ADMIN_STEPTWOS_FAIL,
    NEW_STEPTWO_REQUEST,
    NEW_STEPTWO_SUCCESS,
    NEW_STEPTWO_RESET,
    NEW_STEPTWO_FAIL,
    DELETE_STEPTWO_REQUEST,
    DELETE_STEPTWO_SUCCESS,
    DELETE_STEPTWO_RESET,
    DELETE_STEPTWO_FAIL,
    UPDATE_STEPTWO_REQUEST,
    UPDATE_STEPTWO_SUCCESS,
    UPDATE_STEPTWO_RESET,
    UPDATE_STEPTWO_FAIL,
    STEPTWO_DETAILS_REQUEST,
    STEPTWO_DETAILS_SUCCESS,
    STEPTWO_DETAILS_FAIL,
 
    CLEAR_ERRORS

} from '../constants/steptwoConstants'

export const steptwosReducer = (state = { steptwos: [] }, action) => {
    switch (action.type) {
        case ALL_STEPTWOS_REQUEST:
        case ADMIN_STEPTWOS_REQUEST:
            return {
                loading: true,
                STEPTWOs: []
            }

        case ALL_STEPTWOS_SUCCESS:
            return {
                loading: false,
                steptwos: action.payload.steptwos,
                steptwosCount: action.payload.SteptwosCount,
                resPerPage: action.payload.resPerPage,
                filteredSteptwosCount: action.payload.filteredSteptwosCount
            }

        case ADMIN_STEPTWOS_SUCCESS:
            return {
                loading: false,
                steptwos: action.payload
            }

        case ALL_STEPTWOS_FAIL:
        case ADMIN_STEPTWOS_FAIL:
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

export const newSteptwoReducer = (state = { steptwo: {} }, action) => {
    switch (action.type) {

        case NEW_STEPTWO_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_STEPTWO_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                steptwo: action.payload.steptwo
            }

        case NEW_STEPTWO_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_STEPTWO_RESET:
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

export const steptwoReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_STEPTWO_REQUEST:
        case UPDATE_STEPTWO_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_STEPTWO_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_STEPTWO_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_STEPTWO_FAIL:
        case UPDATE_STEPTWO_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_STEPTWO_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_STEPTWO_RESET:
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

export const steptwoDetailsReducer = (state = { steptwo: {} }, action) => {
    switch (action.type) {

        case STEPTWO_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case STEPTWO_DETAILS_SUCCESS:
            return {
                loading: false,
                steptwo: action.payload
            }

        case STEPTWO_DETAILS_FAIL:
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

