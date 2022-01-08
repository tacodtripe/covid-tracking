/* eslint-disable no-unused-vars, max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/dataReducer';
import { setElements } from '../../redux/elementsPerPageReducer';
import MainThumbnail from '../mainThumbnail';
import Thumbnail from '../thumbnail';
import './style.css';

function ThumbnailContainer() {
  const dispatch = useDispatch();
  const elementsPerPage = useSelector((state) => state.elementsPerPageReducer);
  const data = useSelector((state) => state.dataReducer).filter((e, index) => index === elementsPerPage[index]);
  if (data.length === 0) {
    dispatch(fetchData());
  }
  const handleChange = (event) => {
    dispatch(setElements(parseInt(event.target.value, 10)));
  };
  return (
    <div className="row" data-test="thumbnailContainer">
      <div className="col-12">
        <MainThumbnail
          country="demo country"
          flag="https://disease.sh/assets/img/flags/us.png"
          cases={100}
          todayCases={14}
        />
      </div>
      <div className="col-12 statsHeader">
        <p>Stats by country</p>
      </div>
      {data.length > 0
      && data.map((e) => (
        <div key={e.id} className="col-6 thumbnail">
          <Thumbnail
            country={e.country}
            flag={e.flag}
            cases={e.cases}
            todayCases={e.todayCases}
          />
        </div>
      ))}
      {/* <form className="row">
        <select className="col-12" onChange={handleChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </form> */}
    </div>
  );
}

export default ThumbnailContainer;
