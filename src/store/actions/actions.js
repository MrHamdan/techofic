import axios from 'axios';
import { HTTP_ENDPOINT } from '../../config';

export const blogActionTypes = {
    GET_ALL_BLOGS: 'GET_ALL_BLOGS',
    SET_FORM_STATE: 'SET_FORM_STATE',
    SET_SELECTED_BLOG: 'SET_SELECTED_BLOG'
}

export const getAllBlogs = () => {
    return dispatch => {return  axios.get(`${HTTP_ENDPOINT}/app/techofice/getStudents`)
    .then(({data}) => data)
    .then(blogs => dispatch({type: blogActionTypes.GET_ALL_BLOGS, data: blogs.data}))
   }
}

export const saveBlog = (blog) => {
    return dispatch => { return axios.post(`${HTTP_ENDPOINT}/app/techofice/editStudents`, blog)
    .then(({data}) => getAllBlogs())
    }
}

export const setSelectedBlog = (blog) => {
    return dispatch => dispatch({type: blogActionTypes.SET_SELECTED_BLOG, data: blog})
}

export const createBlog = (blog) => {
    return dispatch => { return axios.post(`${HTTP_ENDPOINT}/app/techofice/createStudents`, blog)
    .then(({data}) => getAllBlogs())
   }
}

export const deleteBlog = (id) => {
    return dispatch => { return axios.post(`${HTTP_ENDPOINT}/app/techofice/removeStudent/${id}`)
    .then(({data}) => getAllBlogs())
   } 
}

export const setFormState = (state) => {
    return dispatch => dispatch({type: blogActionTypes.SET_FORM_STATE, data: state})
}