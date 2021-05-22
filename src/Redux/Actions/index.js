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
        apiKey: "546122fcebed4d9d80e215e4bc11ea28",
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
        apiKey: "546122fcebed4d9d80e215e4bc11ea28",
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
