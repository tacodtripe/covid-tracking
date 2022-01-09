/* eslint-disable no-unused-vars, max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextCountries, nextElements, setMainFilter, sortList,
} from '../../redux/dataReducer';
import MainThumbnail from '../mainThumbnail';
import Thumbnail from '../thumbnail';
import './style.css';

function ThumbnailContainer() {
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

  const filterElements = (paramToFilter) => {
    let filteredArr = [];
    switch (paramToFilter) {
      case '1': {
        filteredArr = data[1].sort((a, b) => (a.cases < b.cases ? 1 : -1));
        dispatch(setMainFilter(['cases', filteredArr[0]]));
        break;
      }
      case '2': {
        filteredArr = data[1].sort((a, b) => (a.todayCases < b.todayCases ? 1 : -1));
        dispatch(setMainFilter(['todayCases', filteredArr[0]]));
        break;
      }
      case '3': {
        filteredArr = data[1].sort((a, b) => (a.recovered < b.recovered ? 1 : -1));
        dispatch(setMainFilter(['recovered', filteredArr[0]]));
        break;
      }
      case '4': {
        filteredArr = data[1].sort((a, b) => (a.critical < b.critical ? 1 : -1));
        dispatch(setMainFilter(['critical', filteredArr[0]]));
        break;
      }
      case '5': {
        filteredArr = data[1].sort((a, b) => (a.deaths < b.deaths ? 1 : -1));
        dispatch(setMainFilter(['deaths', filteredArr[0]]));
        break;
      }
      default:
        return null;
    }
    return filteredArr;
  };

  const mainThumbnailChange = (e) => {
    filterElements(e.target.value);
  };

  const sortListElements = (paramToFilter) => {
    let filteredArr = [];
    switch (paramToFilter) {
      case '1': {
        filteredArr = data[1].sort((a, b) => (a.cases < b.cases ? 1 : -1));
        dispatch(sortList(filteredArr));
        break;
      }
      case '2': {
        filteredArr = data[1].sort((a, b) => (a.todayCases < b.todayCases ? 1 : -1));
        dispatch(sortList(filteredArr));
        break;
      }
      case '3': {
        filteredArr = data[1].sort((a, b) => (a.recovered < b.recovered ? 1 : -1));
        dispatch(sortList(filteredArr));
        break;
      }
      case '4': {
        filteredArr = data[1].sort((a, b) => (a.critical < b.critical ? 1 : -1));
        dispatch(sortList(filteredArr));
        break;
      }
      case '5': {
        filteredArr = data[1].sort((a, b) => (a.deaths < b.deaths ? 1 : -1));
        dispatch(sortList(filteredArr));
        break;
      }
      default:
        return null;
    }
    return filteredArr;
  };

  const ThumbnailContainerChange = (e) => {
    sortListElements(e.target.value);
    for (let i = 0; i < 10; i += 1) {
      nextToShow.push(data[1][i]);
    }
    dispatch(nextCountries(nextToShow));
  };

  return (
    <div className="row justify-content-center" data-test="thumbnailContainer">
      <div className="col-12 row justify-content-between">
        <p className="col-3">Most: </p>
        <select className="col-9" onChange={(e) => mainThumbnailChange(e)}>
          <option value={1}>Total cases</option>
          <option value={2}>Today cases</option>
          <option value={3}>Total recovered</option>
          <option value={4}>Critical state patients</option>
          <option value={5}>Deaths</option>
        </select>
      </div>
      <div className="col-12">
        {data[3]
        && (
        <MainThumbnail
          country={data[3][1].country}
          flag={data[3][1].flag}
          cases={data[3][1].cases}
          todayCases={data[3][1].todayCases}
        />
        )}
      </div>
      <div className="col-12 statsHeader">
        <p>Stats by country</p>
      </div>
      <div className="col-12 row justify-content-between">
        <p className="col-4">Sort by: </p>
        <select className="col-8" onChange={(e) => ThumbnailContainerChange(e)}>
          <option value={1}>Total cases</option>
          <option value={2}>Today cases</option>
          <option value={3}>Total recovered</option>
          <option value={4}>Critical state patients</option>
          <option value={5}>Deaths</option>
        </select>
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
