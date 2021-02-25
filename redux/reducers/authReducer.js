import { GET_PROFILE } from "../../utils/constants";
const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
  }
  return state;
};

export default reducer;
