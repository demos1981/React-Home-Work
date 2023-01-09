import React from 'react';
import AlbumsListItem from './AlbumsListItem';

function AlbumsList({list,onOpened}) {
  return (
    <ul>
        {list.map((item)=>(
        <AlbumsListItem key={item.id} albums={item} onOpened={onOpened}/>
        ))}
    </ul>
  );
}

export default AlbumsList