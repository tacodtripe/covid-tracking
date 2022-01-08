/* eslint-disable no-unused-vars, max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextCountries, nextElements } from '../../redux/dataReducer';
import MainThumbnail from '../mainThumbnail';
import Thumbnail from '../thumbnail';
import './style.css';

function ThumbnailContainer(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataReducer);
  const nextToShow = [];
  const previous = () => {
    const nextIndex = data[0].map((e) => e - 10);
    dispatch(nextElements(nextIndex));
    for (let i = nextIndex[0]; i <= nextIndex[9]; i += 1) {
      nextToShow.push(data[1][i]);
    }
    dispatch(nextCountries(nextToShow));
  };
  const next = () => {
    const nextIndex = data[0].map((e) => e + 10);
    dispatch(nextElements(nextIndex));
    for (let i = nextIndex[0]; i <= nextIndex[9]; i += 1) {
      nextToShow.push(data[1][i]);
    }
    dispatch(nextCountries(nextToShow));
  };
  return (
    <div className="row justify-content-center" data-test="thumbnailContainer">
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
      {data[2]
        && data[2].map((e) => (
          <div key={e.id} className="col-6 thumbnail">
            <Thumbnail
              country={e.country}
              flag={e.flag}
              cases={e.cases}
              todayCases={e.todayCases}
            />
          </div>
        ))}
      <div className="col-12 row justify-content-end">
        <div
          onClick={() => previous()}
          onKeyPress={() => previous()}
          className={data[0][0] >= 10 ? 'col-6' : 'col-6 disabled'}
          role="button"
          tabIndex={0}
        >
          <i className="bi bi-arrow-left-circle" />
          <span> Previous 10</span>
        </div>
        <div
          onClick={() => next()}
          onKeyPress={() => next()}
          className={data[0][9] < 219 ? 'col-6 text-end' : 'col-6 text-end disabled'}
          role="button"
          tabIndex={0}
        >
          <span>Next 10 </span>
          <i className="bi bi-arrow-right-circle" />
        </div>
      </div>
    </div>
  );
}

export default ThumbnailContainer;
