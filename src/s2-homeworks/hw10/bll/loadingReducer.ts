const initState = {
  isLoading: false,
};

type InitState = typeof initState

export const loadingReducer = (state: InitState = initState, action: LoadingActionType): InitState => {
  switch (action.type) {
    case "CHANGE_LOADING":
      return {...state, isLoading: action.isLoading};
    default:
      return state;
  }
};

type LoadingActionType = {
  type: "CHANGE_LOADING" ;
  isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
  type: "CHANGE_LOADING",
  isLoading,
});
