import FirstNewsBlock from "Components/FirstNewsBlock";
import Loading from "Components/Loading";
import NewsBlock from "Components/NewsBlock";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeadLines } from "Redux/Actions";

export default function HomeScreen() {
  const headlines = useSelector((state) => state.headlineReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    headlines.length === 0 && dispatch(getHeadLines());
  }, [dispatch, headlines.length]);

  let renderNews = () => {
    if (headlines.length > 0) {
      return headlines.map((news, index) => {
        if(index===0)
          {
            return <FirstNewsBlock data={news} key={"newsBlockKey-" + index} />
          }
        else
        {
          return <NewsBlock data={news} key={"newsBlockKey-" + index} />
        }
      });
    } else {
      return <Loading/>;
    }
  };

  return <>{renderNews()}</>;
}
