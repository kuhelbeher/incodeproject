import * as actionTypes from '../actions/actionTypes';

const initialState = {
  authToggle: false,
  token: null,
  userId: null,
  login: null,
  isAdmin: false,
  loading: null,
  error: null,
};

const authStart = state => ({ ...state, error: null, loading: true });

const authSuccess = (state, action) => ({
  ...state,
  token: action.token,
  userId: action.userId,
  isAdmin: action.isAdmin,
  login: action.login,
  error: null,
  loading: false,
});

const authFail = (state, action) => ({
  ...state,
  error: action.error,
  loading: false,
});

const authToggle = state => ({
  ...state,
  authToggle: !state.authToggle,
  error: null,
  loading: false,
});

const authLogout = state => ({
  ...state,
  token: null,
  userId: null,
  isAdmin: false,
  login: null,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START: {
      return authStart(state, action);
    }
    case actionTypes.AUTH_SUCCESS: {
      return authSuccess(state, action);
    }
    case actionTypes.AUTH_FAIL: {
      return authFail(state, action);
    }
    case actionTypes.AUTH_LOGOUT: {
      return authLogout(state, action);
    }
    case actionTypes.AUTH_TOGGLE: {
      return authToggle(state, action);
    }
    default:
      return state;
  }
};

export default reducer;
