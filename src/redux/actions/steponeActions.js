import axios from 'axios';

import {
    ALL_STEPONES_REQUEST,
    ALL_STEPONES_SUCCESS,
    ALL_STEPONES_FAIL,
    ADMIN_STEPONES_REQUEST,
    ADMIN_STEPONES_SUCCESS,
    ADMIN_STEPONES_FAIL,
    NEW_STEPONE_REQUEST,
    NEW_STEPONE_SUCCESS,
    NEW_STEPONE_FAIL,
    DELETE_STEPONE_REQUEST,
    DELETE_STEPONE_SUCCESS,
    DELETE_STEPONE_FAIL,
    UPDATE_STEPONE_REQUEST,
    UPDATE_STEPONE_SUCCESS,
    UPDATE_STEPONE_FAIL,
    STEPONE_DETAILS_REQUEST,
    STEPONE_DETAILS_SUCCESS,
    STEPONE_DETAILS_FAIL,
   
    CLEAR_ERRORS

} from '../constants/steponeConstants'

export const getStepones = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try {

        dispatch({ type: ALL_STEPONES_REQUEST })

        let link = `/api/v1/STEPONEs?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&ratings[gte]=${rating}`

        if (category) {
            link = `/api/v1/STEPONEs?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}&category=${category}&ratings[gte]=${rating}`
        }

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_STEPONES_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_STEPONES_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newStepone = (steponeData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_STEPONE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`http://34.171.183.179/api/business/account/create`, steponeData, config)

        dispatch({
            type: NEW_STEPONE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_STEPONE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete STEPONE (Admin)
export const deleteStepone = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_STEPONE_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/STEPONE/${id}`)

        dispatch({
            type: DELETE_STEPONE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_STEPONE_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update STEPONE (ADMIN)
export const updateStepone = (id, steponeData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_STEPONE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/stepone/${id}`, steponeData, config)

        dispatch({
            type: UPDATE_STEPONE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_STEPONE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getSteponeDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: STEPONE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/STEPONE/${id}`)

        dispatch({
            type: STEPONE_DETAILS_SUCCESS,
            payload: data.STEPONE
        })

    } catch (error) {
        dispatch({
            type: STEPONE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}




export const getAdminStepones = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_STEPONES_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/STEPONEs`)

        dispatch({
            type: ADMIN_STEPONES_SUCCESS,
            payload: data.STEPONEs
        })

    } catch (error) {

        dispatch({
            type: ADMIN_STEPONES_FAIL,
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