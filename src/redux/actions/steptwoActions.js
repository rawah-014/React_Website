import axios from 'axios';

import {
    ALL_STEPTWOS_REQUEST,
    ALL_STEPTWOS_SUCCESS,
    ALL_STEPTWOS_FAIL,
    ADMIN_STEPTWOS_REQUEST,
    ADMIN_STEPTWOS_SUCCESS,
    ADMIN_STEPTWOS_FAIL,
    NEW_STEPTWO_REQUEST,
    NEW_STEPTWO_SUCCESS,
    NEW_STEPTWO_FAIL,
    DELETE_STEPTWO_REQUEST,
    DELETE_STEPTWO_SUCCESS,
    DELETE_STEPTWO_FAIL,
    UPDATE_STEPTWO_REQUEST,
    UPDATE_STEPTWO_SUCCESS,
    UPDATE_STEPTWO_FAIL,
    STEPTWO_DETAILS_REQUEST,
    STEPTWO_DETAILS_SUCCESS,
    STEPTWO_DETAILS_FAIL,
   
    CLEAR_ERRORS

} from '../constants/steptwoConstants'

export const getSteptwos = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try {

        dispatch({ type: ALL_STEPTWOS_REQUEST })

        let link = `/api/v1/STEPTWOs?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        if (category) {
            link = `/api/v1/STEPTWOs?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_STEPTWOS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_STEPTWOS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newSteptwo = (steptwoData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_STEPTWO_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`http://34.171.183.179/api/business/account/create`, steptwoData, config)

        dispatch({
            type: NEW_STEPTWO_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_STEPTWO_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete STEPTWO (Admin)
export const deleteSteptwo = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_STEPTWO_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/STEPTWO/${id}`)

        dispatch({
            type: DELETE_STEPTWO_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_STEPTWO_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update STEPTWO (ADMIN)
export const updateSteptwo = (id, steptwoData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_STEPTWO_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/STEPTWO/${id}`, steptwoData, config)

        dispatch({
            type: UPDATE_STEPTWO_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_STEPTWO_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSteptwoDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: STEPTWO_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/STEPTWO/${id}`)

        dispatch({
            type: STEPTWO_DETAILS_SUCCESS,
            payload: data.STEPTWO
        })

    } catch (error) {
        dispatch({
            type: STEPTWO_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}




export const getAdminSTEPTWOs = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_STEPTWOS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/STEPTWOs`)

        dispatch({
            type: ADMIN_STEPTWOS_SUCCESS,
            payload: data.STEPTWOs
        })

    } catch (error) {

        dispatch({
            type: ADMIN_STEPTWOS_FAIL,
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