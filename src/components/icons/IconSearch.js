import React from 'react';

function IconSearch(props) {
  const viewBox = props.viewBox || '0 0 64 65';
  const className = props.className || 'icon module-search-icon';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} aria-labelledby="title">
      <title id="search-icon">Search Icon</title>
      <path d="M62.243,53.758L44.658,36.173C46.768,32.602,48,28.449,48,24C48,10.745,37.255,0,24,0S0,10.745,0,24s10.745,24,24,24
        c4.449,0,8.602-1.232,12.173-3.342l17.585,17.584C54.843,63.329,56.343,64,58,64c3.314,0,6-2.686,6-6
        C64,56.343,63.328,54.843,62.243,53.758z M24,42c-9.941,0-18-8.059-18-18c0-9.941,8.059-18,18-18c9.941,0,18,8.059,18,18
        C42,33.941,33.941,42,24,42z M34,21h-7v-7c0-1.657-1.343-3-3-3s-3,1.343-3,3v7h-7c-1.657,0-3,1.343-3,3s1.343,3,3,3h7v7
        c0,1.657,1.343,3,3,3s3-1.343,3-3v-7h7c1.657,0,3-1.343,3-3C37,22.344,35.657,21,34,21z"/>
    </svg>
   );
}

IconSearch.propTypes = {
  viewBox: React.PropTypes.string,
  className: React.PropTypes.string
};

export default IconSearch;

