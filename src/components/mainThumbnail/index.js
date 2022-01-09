import React from 'react';
import PropTypes from 'prop-types';
import './mainThumbnail.css';

function MainThumbnail(props) {
  const {
    country, flag, cases, todayCases,
  } = props;

  if (!country) {
    return null;
  }
  return (
    <div className="row mainThumbnail" data-test="mainThumbnail">
      <div className="col-6 row align-content-center">
        <img className="mainThumbnailImg col" src={flag} alt="country flag" />
      </div>
      <div className="col-6">
        <h5 className="text-center" data-test="countryName">{country}</h5>
        <p className="text-center" data-test="totalCases">
          Total cases:
          {cases}
        </p>
        <p className="text-center" data-test="todayCases">
          Today cases:
          {todayCases}
        </p>
      </div>
    </div>
  );
}

MainThumbnail.propTypes = {
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
};

export default MainThumbnail;
