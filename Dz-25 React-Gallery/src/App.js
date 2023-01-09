import React from 'react'
import Users from './modules/Users/components/Users'
import Todos from './modules/Todo/components/Todos'
import Navigation from './modules/common/components/Navigation';
import { useState } from 'react';
import GalleryPhoto from './modules/gallery/GalleryPhoto';

export default function App() {
  const [currentPath, setCurrentPath] = useState('gallery');
  return (
    <>
    <Navigation currentPath={currentPath} navigate={setCurrentPath}/>
    {currentPath === 'todos'?<Todos/> :null}
    {currentPath === 'users'?<Users/> :null}
    {currentPath === 'gallery'?<GalleryPhoto/> :null}


    </>
  )
}





