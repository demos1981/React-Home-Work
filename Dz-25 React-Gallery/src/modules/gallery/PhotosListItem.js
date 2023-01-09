import React from 'react'

function PhotosListItem({photo: {thumbnailUrl,title}}) {
  return (
      <img className='photoColumns' src={thumbnailUrl} alt={title}/>
  );
}

export default PhotosListItem;