const initialState = {
  rootPageLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROOT_PAGE_LOADING:
      return {
        ...state,
        rootPageLoading: true,
      };
    case ROOT_PAGE_LOADING_DONE:
      return {
        ...state,
        rootPageLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
