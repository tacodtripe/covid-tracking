import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './thumbnail.css';

function Thumbnail(props) {
  const {
    country, flag, cases, todayCases,
  } = props;
  if (!country) {
    return null;
  }
  return (
    <div className="row thumbnailContainer my-1" data-test="Thumbnail">
      <div className="col-12 position-relative">
        <img className="thumbnailImg" src={flag} alt="country flag" />
        <Link to="thumbnailDetails">
          <span className="position-absolute thumbnailLink">Details</span>
          <i className="position-absolute bi bi-arrow-right-circle" />
        </Link>
      </div>
      <div className="col-12">
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

Thumbnail.propTypes = {
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
};

export default Thumbnail;
