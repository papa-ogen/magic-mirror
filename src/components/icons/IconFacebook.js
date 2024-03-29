import React from 'react';

function IconFacebook(props) {
  const viewBox = props.viewBox || '0 0 64 65';
  const className = props.className || 'icon facebook';

  return (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
    <title id="facebook-icon">Facebook Icon</title>
    <path d="M59.059-0.006H4.942c-2.722,0-4.929,2.208-4.929,4.932v54.354c0,2.725,2.207,4.728,4.929,4.728h54.117
    c2.721,0,4.928-2.002,4.928-4.728V4.926C63.986,2.202,61.781-0.006,59.059-0.006z M33.615,21.199
    c-1.562-0.912-2.803-1.634-4.351-1.634c-1.523,0-2.836,0.383-3.497,1.024c-0.661,0.64-0.992,1.872-0.992,3.692v2.691h8.148
    l-1.768,7.494h-6.381v24.894H14.545V34.465H9.759v-7.494h4.787v-2.859c0-3.012,0.355-4.817,1.067-6.301
    c0.711-1.483,2.089-3.134,3.998-4.066c1.909-0.932,4.741-1.399,7.661-1.399c2.995,0,5.337,0.994,8.208,1.803L33.615,21.199z"/>			
  </svg>
   );
}

IconFacebook.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string
};

export default IconFacebook;

