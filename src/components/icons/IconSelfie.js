import React from 'react';

function IconSelfie(props) {
  const viewBox = props.viewBox || '0 0 64 65';
  const className = props.className || 'icon small-icon';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
      <title id="selfie-icon">Selfie Icon</title>
      <path d="M32,22c-6.627,0-12,5.372-12,12c0,6.627,5.373,12,12,12s12-5.373,12-12S38.627,22,32,22z M61,12H48.243l-5.095-5.094
        l-0.002,0.003C42.602,6.35,41.843,6,41,6H23c-0.976,0-1.835,0.474-2.383,1.196L15.813,12H3c-1.657,0-3,1.343-3,3v40
        c0,1.657,1.343,3,3,3h58c1.657,0,3-1.343,3-3V15C64,13.343,62.657,12,61,12z M32,52c-9.941,0-18-8.059-18-18
        c0-9.941,8.059-18,18-18c9.941,0,18,8.059,18,18C50,43.941,41.941,52,32,52z"/>
    </svg>
   );
}

IconSelfie.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string
};

export default IconSelfie;

