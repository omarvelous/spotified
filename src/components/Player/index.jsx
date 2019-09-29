import React from 'react';

import './style.css';

const Player = () => {
  return (
    <div className="card">
      <img src="https://www.rockhall.com/sites/default/files/styles/header_image_portrait/public/percysledge_001_0.jpg?itok=vpzOUZWp" className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">Cover Me</h5>
        <h6 class="card-subtitle mb-2 text-muted">Percy Sledge</h6>
        <audio controls src="/audio/Percy Sledge - Cover Me.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </div>
  )
};

export default Player;
