import React from 'react';

function IconBell(props) {
  const viewBox = props.viewBox || '0 0 64 65';
  const className = props.className || 'icon';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
      <title id="bell-icon">Bell Icon</title>
      <path d="M52,45c-1.657,0-3-1.343-3-3V22c0-7.732-6.268-14-14-14c0-1.657-1.343-3-3-3s-3,1.343-3,3c-7.732,0-14,6.268-14,14v20c0,1.657-1.343,3-3,3s-3,1.343-3,3s1.343,3,3,3h40c1.657,0,3-1.343,3-3S53.657,45,52,45z M32,60c3.314,0,6-2.686,6-6H26C26,57.314,28.686,60,32,60z"/>
    </svg>
   );
}

IconBell.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string
};

export default IconBell;