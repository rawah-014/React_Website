import axios from 'axios';

import {
    ALL_STEPTHREES_REQUEST,
    ALL_STEPTHREES_SUCCESS,
    ALL_STEPTHREES_FAIL,
    ADMIN_STEPTHREES_REQUEST,
    ADMIN_STEPTHREES_SUCCESS,
    ADMIN_STEPTHREES_FAIL,
    NEW_STEPTHREE_REQUEST,
    NEW_STEPTHREE_SUCCESS,
    NEW_STEPTHREE_FAIL,
    DELETE_STEPTHREE_REQUEST,
    DELETE_STEPTHREE_SUCCESS,
    DELETE_STEPTHREE_FAIL,
    UPDATE_STEPTHREE_REQUEST,
    UPDATE_STEPTHREE_SUCCESS,
    UPDATE_STEPTHREE_FAIL,
    STEPTHREE_DETAILS_REQUEST,
    STEPTHREE_DETAILS_SUCCESS,
    STEPTHREE_DETAILS_FAIL,
   
    CLEAR_ERRORS

} from '../constants/stepthreeConstants'

export const getStepthrees = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try {

        dispatch({ type: ALL_STEPTHREES_REQUEST })

        let link = `/api/v1/STEPTHREEs?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        if (category) {
            link = `/api/v1/STEPTHREEs?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_STEPTHREES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_STEPTHREES_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newStepthree = (stepthreeData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_STEPTHREE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`http://34.171.183.179/api/business/account/create`, stepthreeData, config)

        dispatch({
            type: NEW_STEPTHREE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_STEPTHREE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete STEPTHREE (Admin)
export const deleteStepthree = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_STEPTHREE_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/STEPTHREE/${id}`)

        dispatch({
            type: DELETE_STEPTHREE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_STEPTHREE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update STEPTHREE (ADMIN)
export const updateStepthree = (id, stepthreeData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_STEPTHREE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/STEPTHREE/${id}`, stepthreeData, config)

        dispatch({
            type: UPDATE_STEPTHREE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_STEPTHREE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getStepthreeDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: STEPTHREE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/STEPTHREE/${id}`)

        dispatch({
            type: STEPTHREE_DETAILS_SUCCESS,
            payload: data.stepthree
        })

    } catch (error) {
        dispatch({
            type: STEPTHREE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}




export const getAdminStepthrees = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_STEPTHREES_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/STEPTHREEs`)

        dispatch({
            type: ADMIN_STEPTHREES_SUCCESS,
            payload: data.stepthrees
        })

    } catch (error) {

        dispatch({
            type: ADMIN_STEPTHREES_FAIL,
            payload: error.response.data.message
        })
    }
}




// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}