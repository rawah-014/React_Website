import {
    ALL_STEPTHREES_REQUEST,
    ALL_STEPTHREES_SUCCESS,
    ALL_STEPTHREES_FAIL,
    ADMIN_STEPTHREES_REQUEST,
    ADMIN_STEPTHREES_SUCCESS,
    ADMIN_STEPTHREES_FAIL,
    NEW_STEPTHREE_REQUEST,
    NEW_STEPTHREE_SUCCESS,
    NEW_STEPTHREE_RESET,
    NEW_STEPTHREE_FAIL,
    DELETE_STEPTHREE_REQUEST,
    DELETE_STEPTHREE_SUCCESS,
    DELETE_STEPTHREE_RESET,
    DELETE_STEPTHREE_FAIL,
    UPDATE_STEPTHREE_REQUEST,
    UPDATE_STEPTHREE_SUCCESS,
    UPDATE_STEPTHREE_RESET,
    UPDATE_STEPTHREE_FAIL,
    STEPTHREE_DETAILS_REQUEST,
    STEPTHREE_DETAILS_SUCCESS,
    STEPTHREE_DETAILS_FAIL,
 
    CLEAR_ERRORS

} from '../constants/stepthreeConstants'

export const stepthreesReducer = (state = { stepthrees: [] }, action) => {
    switch (action.type) {
        case ALL_STEPTHREES_REQUEST:
        case ADMIN_STEPTHREES_REQUEST:
            return {
                loading: true,
                stepthrees: []
            }

        case ALL_STEPTHREES_SUCCESS:
            return {
                loading: false,
                stepthrees: action.payload.Stepthrees,
                stepthreesCount: action.payload.StepthreesCount,
                resPerPage: action.payload.resPerPage,
                filteredStepthreesCount: action.payload.filteredStepthreesCount
            }

        case ADMIN_STEPTHREES_SUCCESS:
            return {
                loading: false,
                stepthrees: action.payload
            }

        case ALL_STEPTHREES_FAIL:
        case ADMIN_STEPTHREES_FAIL:
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

export const newStepthreeReducer = (state = { stepthree: {} }, action) => {
    switch (action.type) {

        case NEW_STEPTHREE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_STEPTHREE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                stepthree: action.payload.stepthree
            }

        case NEW_STEPTHREE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_STEPTHREE_RESET:
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

export const stepthreeReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_STEPTHREE_REQUEST:
        case UPDATE_STEPTHREE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_STEPTHREE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_STEPTHREE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_STEPTHREE_FAIL:
        case UPDATE_STEPTHREE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_STEPTHREE_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_STEPTHREE_RESET:
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

export const stepthreeDetailsReducer = (state = { stepthree: {} }, action) => {
    switch (action.type) {

        case STEPTHREE_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case STEPTHREE_DETAILS_SUCCESS:
            return {
                loading: false,
                stepthree: action.payload
            }

        case STEPTHREE_DETAILS_FAIL:
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

