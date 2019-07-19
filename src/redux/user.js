export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_USERDATA = 'UPDATE_USERDATA';

export const updateUsername = username => ({
    type: UPDATE_USERNAME,
    username,
});

export const updateUserData = data => ({
    type: UPDATE_USERDATA,
    data,
});

const initialState = {
  username: '',
  data:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
        return {
            ...state,
            username: action.username,
        };
    case UPDATE_USERDATA:
        return{
            ...state, [action.data.id]: action.data,
        };
    default:
      return state;
  }
};