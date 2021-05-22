import { combineReducers } from "redux";

let categoryReducer = (iniState = [], action) => {
  switch (action.type) {
    case "CATEGORY": {
      return action.payload;
    }
    default: {
      return iniState;
    }
  }
};
let headlineReducer = (iniState = [], action) => {
  switch (action.type) {
    case "HEAD_LINES": {
      return action.payload;
    }
    default: {
      return iniState;
    }
  }
};

let allReducers = combineReducers({
  categoryReducer,
  headlineReducer,
});

export default allReducers;
