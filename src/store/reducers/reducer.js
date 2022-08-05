import { blogActionTypes } from "../actions/actions";

const blogInitialState = {
    allBlogs: [],
    form: "",
    selectedBlog:{
        first_name: '',
        last_name: '',
        email: '',
        phone:'',
        profession:'',
        interest_type:''
      }
}

export default (state = blogInitialState, action) => {
    switch(action.type) {
        case blogActionTypes.GET_ALL_BLOGS:
        return {
            ...state,
            allBlogs: action.data
        }
        case blogActionTypes.SET_SELECTED_BLOG:
        return {
            ...state,
            selectedBlog: action.data
        }
        case blogActionTypes.SET_FORM_STATE:
        return {
            ...state,
            form: action.data
        }
        default:
        return state;
    }
}