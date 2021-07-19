import React from 'react';

const Video = () => {
  const [clickVideo, isClickVideo] = React.useState(false);

  return (
    <div className="video">
      {!clickVideo && (
        <div className="img-preview-box">
          <button className="video__button" aria-label="Запустить видео">
            <svg viewBox="0 0 68 48">
              <path
                className="video__button-shape"
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              ></path>
              <path
                className="video__button-icon"
                d="M 45,24 27,14 27,34"
              ></path>
            </svg>
          </button>
          <img
            className="video__media"
            src="/img/video-preview.jpg"
            onClick={() => isClickVideo(true)}
          />
        </div>
      )}
      {clickVideo && (
        <iframe
          allowfullscreen=""
          allow="autoplay"
          src="https://www.youtube.com/embed/C1pAeQ85fxs?rel=0&amp;showinfo=0&amp;autoplay=1"
          class="video__media"
        />
      )}
    </div>
  );
};

export default Video;