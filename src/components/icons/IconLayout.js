import React from 'react';

function IconLayout(props) {
  const viewBox = props.viewBox || '0 0 64 65';
  const className = props.className || 'icon small-icon';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
		<title id="layout-icon">Layout Icon</title>
		<path d="M62,14c0-1.304-0.837-2.403-2-2.816V7.816C61.163,7.403,62,6.305,62,5c0-1.657-1.343-3-3-3c-1.305,0-2.402,0.838-2.816,2
			h-3.367C52.402,2.838,51.305,2,50,2s-2.402,0.838-2.816,2h-3.367C43.402,2.838,42.305,2,41,2s-2.402,0.838-2.816,2h-3.367
			C34.402,2.838,33.305,2,32,2c-1.304,0-2.403,0.838-2.816,2h-3.367C25.403,2.838,24.304,2,23,2s-2.403,0.838-2.816,2h-3.367
			C16.403,2.838,15.304,2,14,2s-2.403,0.838-2.816,2H7.816C7.403,2.838,6.304,2,5,2C3.343,2,2,3.343,2,5
			c0,1.304,0.837,2.403,2,2.816v3.367C2.837,11.597,2,12.696,2,14s0.837,2.403,2,2.816v3.367C2.837,20.597,2,21.696,2,23
			s0.837,2.403,2,2.816v3.367C2.837,29.597,2,30.696,2,32c0,1.305,0.837,2.402,2,2.816v3.367C2.837,38.598,2,39.695,2,41
			s0.837,2.402,2,2.816v3.367C2.837,47.598,2,48.695,2,50s0.837,2.402,2,2.816v3.367C2.837,56.598,2,57.695,2,59
			c0,1.657,1.343,3,3,3c1.304,0,2.403-0.837,2.816-2h3.367c0.413,1.162,1.512,2,2.816,2s2.403-0.837,2.816-2h3.367
			c0.413,1.162,1.512,2,2.816,2c1.304,0,2.403-0.837,2.816-2h3.367c0.413,1.162,1.512,2,2.816,2c1.304,0,2.403-0.837,2.815-2h3.367
			c0.413,1.162,1.512,2,2.816,2c1.304,0,2.402-0.837,2.816-2h3.367c0.412,1.162,1.512,2,2.815,2s2.403-0.837,2.815-2h3.367
			c0.413,1.162,1.512,2,2.816,2c1.656,0,3-1.343,3-3c0-1.305-0.837-2.402-2-2.816v-3.367c1.162-0.412,2-1.512,2-2.815
			s-0.837-2.403-2-2.815v-3.367c1.162-0.414,2-1.512,2-2.816c0-1.304-0.837-2.402-2-2.816v-3.367c1.162-0.412,2-1.512,2-2.815
			s-0.837-2.403-2-2.816V25.82c1.162-0.413,2-1.512,2-2.816c0-1.304-0.837-2.403-2-2.816v-3.367C61.163,16.403,62,15.304,62,14z
			M54,54H10V10h44V54z"/>
      </svg>
   );
}

IconLayout.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string
};

export default IconLayout;

