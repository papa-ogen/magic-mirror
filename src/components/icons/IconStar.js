import React from 'react';

function IconStar(props) {
  const viewBox = props.viewBox || '0 0 60 60';
  const className = props.className || 'icon';
  const id = props.id || "star1";

  return (
    <svg id={id} xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
     <title id="star-icon">Star Icon</title>
     <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
    </svg>
   );
}

IconStar.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string,
  id: React.PropTypes.string
};

export default IconStar;

