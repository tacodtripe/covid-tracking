import React from 'react';
import MainThumbnail from '../mainThumbnail';

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
      <div className="col-6" />
      <div className="col-6" />
    </div>
  );
}

export default ThumbnailContainer;
