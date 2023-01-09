import { useState,useEffect } from 'react';
import api from '../../api';

export default function useAlbums() {
    const [album, setAlbum] = useState([]);
    
    useEffect(() => {
      api.get('albums').then(({data})=>setAlbum(data));
    }, []);
   console.log(album);
    return album;
    
}