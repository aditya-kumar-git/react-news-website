import { combineReducers } from "redux";

let trialReducer = (iniState = 1, action) => {
  switch (action.type) {
    case "TRIAL": {
      return iniState + action.payload;
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
  trialReducer,
  headlineReducer,
});

export default allReducers;
