import React from 'react';
import MainThumbnail from '../mainThumbnail';
import Thumbnail from '../thumbnail';
import './style.css';

function ThumbnailContainer() {
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
      <div className="col-6 thumbnail">
        <Thumbnail
          country="demo country"
          flag="https://disease.sh/assets/img/flags/us.png"
          cases={100}
          todayCases={14}
        />
      </div>
      <div className="col-6 thumbnail">
        <Thumbnail
          country="demo country"
          flag="https://disease.sh/assets/img/flags/us.png"
          cases={100}
          todayCases={14}
        />
      </div>
    </div>
  );
}

export default ThumbnailContainer;
