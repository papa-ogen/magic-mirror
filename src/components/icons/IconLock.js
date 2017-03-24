import React from 'react';

function IconLock(props) {
  const viewBox = props.viewBox || '-5 0 74 65';
  const className = props.className || 'icon';
  
  return (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
    <title id="lock-icon">Lock Icon</title>
    <path d="M55,32h-5V18c0-9.941-8.059-18-18-18c-9.941,0-18,8.059-18,18v14H9c-1.657,0-3,1.343-3,3v26c0,1.657,1.343,3,3,3h46c1.657,0,3-1.343,3-3V35C58,33.343,56.657,32,55,32z M35,49.168V55c0,1.657-1.343,3-3,3s-3-1.343-3-3v-5.832c-1.786-1.039-3-2.953-3-5.168c0-3.314,2.686-6,6-6c3.314,0,6,2.686,6,6C38,46.215,36.786,48.129,35,49.168z M44,32H20V18c0-6.627,5.373-12,12-12s12,5.373,12,12V32z"/>
  </svg>
   );
}

IconLock.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string
};

export default IconLock;

