import React from 'react';

import './SocialMedia.css';

const SocialMedia = ({item}) => {
  return (
    <div>
      {
          item.map((data) => (
            <a target="_blank" rel="noopener noreferrer" href={data.profileurl}><img className="iconSoc" src={data.imgurl} alt={data.alt} /></a>
            ))
      }
    </div>
  );
}

export default SocialMedia;