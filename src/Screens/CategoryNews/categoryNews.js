import FirstNewsBlock from 'Components/FirstNewsBlock';
import Loading from 'Components/Loading';
import NewsBlock from 'Components/NewsBlock';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getCat} from 'Redux/Actions'

export default function CategoryNews(props) {
    const categories = useSelector((state) => state.categoryReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCat(props.location.catName))
    }, [dispatch,props.location.catName])

    let renderNews = () => {
        if (categories.length > 0) {
          return categories.map((news, index) => {
            if(index===0)
              {
                return <FirstNewsBlock data={news} key={"newsBlockKey-" + index} />
              }
            else
            {return <NewsBlock data={news} key={"newsBlockKey-" + index} />}
          });
        } else {
          return <Loading/>;
        }
      };
    
      return <>{renderNews()}</>;
}
