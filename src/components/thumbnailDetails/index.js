import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainThumbnail from '../mainThumbnail';
import './thumbnailDetails.css';

function ThumbnailDetails() {
  const detailsToShow = useSelector((state) => state.dataReducer)[4][0];

  if (!detailsToShow) {
    return null;
  }
  return (
    <>
      <Link to="/">
        <i className="col homeLink bi bi-arrow-left-circle" />
        <span className="homeLink"> Home</span>
      </Link>
      <MainThumbnail
        country={detailsToShow.country}
        flag={detailsToShow.flag}
        cases={detailsToShow.cases}
        todayCases={detailsToShow.todayCases}

      />
      <div className="row" data-test="thumbnailDetails">
        <div className="col-12 hstack detailData" data-test="totalDeaths">
          <p className="text-center">
            Total deaths:
          </p>
          <p className="text-center ms-auto">
            {detailsToShow.deaths}
          </p>
        </div>
        <div className="col-12 hstack detailData" data-test="todayDeaths">
          <p className="text-center">
            Today deaths:
          </p>
          <p className="text-center ms-auto">
            {detailsToShow.todayDeaths}
          </p>
        </div>
        <div className="col-12 hstack detailData" data-test="recovered">
          <p className="text-center">
            Total recovered:
          </p>
          <p className="text-center ms-auto">
            {detailsToShow.recovered}
          </p>
        </div>
        <div className="col-12 hstack detailData" data-test="todayRecovered">
          <p className="text-center">
            Today recovered:
          </p>
          <p className="text-center ms-auto">
            {detailsToShow.todayRecovered}
          </p>
        </div>
        <div className="col-12 hstack detailData" data-test="active">
          <p className="text-center">
            Country active covid cases:
          </p>
          <p className="text-center ms-auto">
            {detailsToShow.active}
          </p>
        </div>
        <div className="col-12 hstack detailData" data-test="critical">
          <p className="text-center">
            Critical state patients:
          </p>
          <p className="text-center ms-auto">
            {detailsToShow.critical}
          </p>
        </div>
        <div className="col-12 hstack detailData" data-test="population">
          <p className="text-center">
            Country population:
          </p>
          <p className="text-center ms-auto">
            {detailsToShow.population}
          </p>
        </div>
      </div>
    </>
  );
}

export default ThumbnailDetails;
