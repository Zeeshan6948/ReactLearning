import React from 'react'

function FunctionalClick() {
    function clickHandler(){
        console.log('button Clicked my');
    }
  return (
    <div><button onClick={clickHandler}>click</button></div>
  ) 
}

export default FunctionalClick