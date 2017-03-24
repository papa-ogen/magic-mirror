import React  from 'react';

function IconModules(props) {
  const viewBox = props.viewBox || '0 0 64 55';
  const className = props.className || 'icon';
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
      <title id="modules-icon">Modules Icon</title>
      <path d="M45,12H3c-1.657,0-3,1.343-3,3v46c0,1.657,1.343,3,3,3h42c1.657,0,3-1.343,3-3V15C48,13.343,46.657,12,45,12z M42,49H6V18h36V49z M61,0H19c-1.657,0-3,1.343-3,3v6h6V6h36v31h-7v15h10c1.657,0,3-1.343,3-3V3C64,1.343,62.657,0,61,0z"/>
    </svg>
   );
}

IconModules.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string
};

export default IconModules;

