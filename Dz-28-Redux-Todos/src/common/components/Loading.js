import React from 'react'

function Loading({isLoading}) {
  return isLoading ? <div>
  <div style={backgroundLoadingStyles}></div>
  <div style={labelLoadingStyles}>Loading</div>
  </div>:null;
}

export default Loading
const backgroundLoadingStyles={
    height:'100%',
    width:'100%',
    backgroundColor:'grey',
    position:'absolute',
    top:0,
    left:0,
    opacity:0.8,
};
const labelLoadingStyles={
    fontSize:'40px',
    position:'absolute',
    top:'50%',
    left:'50%',
};