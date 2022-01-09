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
        <div className="col-12 detailData" data-test="totalDeaths">
          <p className="text-center">
            Total deaths:
            <span> </span>
            {detailsToShow.deaths}
          </p>
        </div>
        <div className="col-12 detailData" data-test="todayDeaths">
          <p className="text-center">
            Today deaths:
            <span> </span>
            {detailsToShow.todayDeaths}
          </p>
        </div>
        <div className="col-12 detailData" data-test="recovered">
          <p className="text-center">
            Total recovered:
            <span> </span>
            {detailsToShow.recovered}
          </p>
        </div>
        <div className="col-12 detailData" data-test="todayRecovered">
          <p className="text-center">
            Today recovered:
            <span> </span>
            {detailsToShow.todayRecovered}
          </p>
        </div>
        <div className="col-12 detailData" data-test="active">
          <p className="text-center">
            Country active covid cases:
            <span> </span>
            {detailsToShow.active}
          </p>
        </div>
        <div className="col-12 detailData" data-test="critical">
          <p className="text-center">
            Critical state patients:
            <span> </span>
            {detailsToShow.critical}
          </p>
        </div>
        <div className="col-12 detailData" data-test="population">
          <p className="text-center">
            Country population:
            <span> </span>
            {detailsToShow.population}
          </p>
        </div>
      </div>
    </>
  );
}

// ThumbnailDetails.propTypes = {
//   country: PropTypes.string.isRequired,
//   flag: PropTypes.string.isRequired,
//   cases: PropTypes.number.isRequired,
//   todayCases: PropTypes.number.isRequired,
//   deaths: PropTypes.number.isRequired,
//   todayDeaths: PropTypes.number.isRequired,
//   recovered: PropTypes.number.isRequired,
//   todayRecovered: PropTypes.number.isRequired,
//   active: PropTypes.number.isRequired,
//   critical: PropTypes.number.isRequired,
//   population: PropTypes.number.isRequired,
// };

export default ThumbnailDetails;
