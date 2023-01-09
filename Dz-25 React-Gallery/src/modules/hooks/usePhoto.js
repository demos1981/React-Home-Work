import { useState,useEffect } from "react";
import api from "../../api";

export default  function usePhoto(albumId){

    const [photos, setPhotos] = useState([]);

    useEffect(()=>{
        if (albumId===null) return;
        api.get('photos?albumsId='+albumId).then(({data})=>setPhotos(data));
    },[albumId]);
    return photos;
}