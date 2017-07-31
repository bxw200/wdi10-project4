/**
 * Action Creators for  Reducer reducer
**/

// import ACTION_TYPE from './constants';

export function  updateCategories (payload) {
    return {
        type: 'UPDATE_CATEGORIES',
        payload
    }
}



export function  updateCategory (payload) {
    return {
        type: 'UPDATE_CATEGORY',
        payload
    }
}
