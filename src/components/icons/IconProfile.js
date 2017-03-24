import React  from 'react';

function IconProfile(props) {
  const viewBox = props.viewBox || '0 0 64 55';
  const className = props.className || 'icon';
  
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
      <title id="profile-icon">Profile Icon</title>
      <path d="M64.001,59.993c0,0,0-10.933-7.987-14.906c-5.055-2.515-3.107-0.591-9.313-3.164c-6.205-2.569-7.675-3.409-7.675-3.409l-0.055-5.893c0,0,2.324-1.764,3.049-7.337c1.451,0.42,1.942-1.701,2.021-3.056c0.086-1.309,0.858-5.389-0.917-5.025c0.363-2.724,0.648-5.187,0.52-6.491c-0.444-4.576-3.608-9.355-11.595-9.704c-6.79,0.349-11.198,5.131-11.643,9.707c-0.128,1.304,0.133,3.765,0.496,6.494c-1.774-0.369-1.01,3.719-0.932,5.027c0.086,1.355,0.566,3.482,2.02,3.062c0.722,5.574,3.046,7.351,3.046,7.351l-0.058,5.925c0,0-1.47,0.897-7.675,3.466c-6.205,2.574-4.259,0.533-9.314,3.047C0,49.062,0,59.993,0,59.993h0.002C0.001,59.995,0,59.998,0,60c0,1.657,1.343,3,3,3h58c1.657,0,3-1.343,3-3c0-0.003-0.001-0.005-0.001-0.007H64.001z"/>
    </svg>
   );
}

IconProfile.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string
};

export default IconProfile;