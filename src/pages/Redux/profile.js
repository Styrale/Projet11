const initialState = {
    isLoading: false,
    firstName: '',
    lastName: '',
    error: '',
  };
  
  // Types d'actions
  const PROFILE_PENDING = 'profile/pending';
  const PROFILE_FIRST_NAME = 'profile/first_name';
  const PROFILE_LAST_NAME = 'profile/last_name';
  const PROFILE_ERROR = 'profile/error';
  const PROFILE_OUT = 'profile/out';
  
  // Action creators
  export const profilePending = () => ({
    type: PROFILE_PENDING,
  });
  
  export const profileFirstName = (firstName) => ({
    type: PROFILE_FIRST_NAME,
    payload: firstName,
  });
  
  export const profileLastName = (lastName) => ({
    type: PROFILE_LAST_NAME,
    payload: lastName,
  });
  
  export const profileError = (error) => ({
    type: PROFILE_ERROR,
    payload: error,
  });
  
  export const profileOut = () => ({
    type: PROFILE_OUT,
  });
  
  // Réducteur
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case PROFILE_PENDING:
        return {
          ...state,
          isLoading: true,
        };
      case PROFILE_FIRST_NAME:
        return {
          ...state,
          isLoading: false,
          firstName: action.payload,
          error: '',
        };
      case PROFILE_LAST_NAME:
        return {
          ...state,
          isLoading: false,
          lastName: action.payload,
          error: '',
        };
      case PROFILE_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case PROFILE_OUT:
        return {
          ...state,
          isLoading: false,
          firstName: '',
          lastName: '',
          error: '',
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;