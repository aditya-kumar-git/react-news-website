import axios from "axios";

export let trialAction = (data) => {
  return {
    type: "TRIAL",
    payload: data,
  };
};
export var getHeadLines = () => {
  return async (dis) => {
    var output = await axios({
      baseURL: "https://newsapi.org/v2/top-headlines/",
      params: {
        country: "in",
        apiKey: "",
      },
    });
    try {
      dis({ type: "HEAD_LINES", payload: output.data.articles });
    } catch (error) {
      console.log(error);
    }
  };
};

export var getCat = (cat) => {
  return async (dis) => {
    var output = await axios({
      baseURL: "https://newsapi.org/v2/top-headlines/",
      params: {
        country: "in",
        apiKey: "",
        category: cat,
      },
    });
    try {
      dis({ type: "CATEGORY", payload: output.data.articles });
    } catch (error) {
      console.log(error);
    }
  };
};
