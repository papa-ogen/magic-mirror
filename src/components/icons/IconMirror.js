import React  from 'react';

function IconMirror(props) {
  const viewBox = props.viewBox || '0 0 64 55';
  const className = props.className || 'icon';
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
      <title id="mirror-icon">Mirror Icon</title>
      <path d="M12,18c-1.657,0-3,1.343-3,3v22c0,1.657,1.343,3,3,3s3-1.343,3-3V21C15,19.343,13.657,18,12,18z M3,12c-1.657,0-3,1.343-3,3v34c0,1.657,1.343,3,3,3s3-1.343,3-3V15C6,13.343,4.657,12,3,12z M52,18c-1.657,0-3,1.343-3,3v22c0,1.657,1.343,3,3,3s3-1.343,3-3V21C55,19.343,53.657,18,52,18z M61,12c-1.657,0-3,1.343-3,3v34c0,1.657,1.343,3,3,3s3-1.343,3-3V15C64,13.343,62.657,12,61,12z M43,18H21c-1.657,0-3,1.343-3,3v22c0,1.657,1.343,3,3,3h22c1.657,0,3-1.343,3-3V21C46,19.343,44.657,18,43,18z M40,40H24V24h16V40z"/>
    </svg>
   );
}

IconMirror.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string
};

export default IconMirror;