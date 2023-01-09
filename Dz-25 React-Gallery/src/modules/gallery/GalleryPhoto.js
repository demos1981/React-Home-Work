import React, { useEffect, useState } from 'react';
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';
import './Gallery.css';
import useAlbums from '../hooks/useAlbums';
import usePhoto from '../hooks/usePhoto';



function GalleryPhoto() {
  const [choosingAlbum, setChoosingAlbum] = useState(null)
 const albums = useAlbums();
 const photos = usePhoto(choosingAlbum);
 useEffect(()=>{
  
  if(!albums.length) return
  setChoosingAlbum(albums[0].id);

 },[albums])
   
  return (
    <div className='row'>
      <div className='listTable'>
        <AlbumsList list={albums} onOpened={setChoosingAlbum}/>
      </div>
      <div className='listPhoto'>
        <PhotosList list={photos}/>
      </div>

    </div>
  )
}

export default GalleryPhoto