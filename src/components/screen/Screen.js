import React, {useRef, useEffect, useState} from 'react'
import svgdos from './svgdos'
import InputManager from '../inputManager/InputMarager'

const Screen = ({width, height, tilesize}) => {

  const canvasRef = useRef()
  let inputManager = new InputManager()
  const [player, setPlayer] = useState({x:0, y:0});

  const handleInput = (action,data)=>{
console.log(`handle input: ${action}:${JSON.stringify(data)}`)
var newPlayer = {...player};
newPlayer.x += data.x * 320;
newPlayer.y += data.y * 320;
setPlayer(newPlayer)
  }

  useEffect(() => {
    inputManager.bindKeys()
    inputManager.subscribe(handleInput)
    return () =>{
      inputManager.unbindKeys()
      inputManager.unsubscribe(handleInput)
    }
    
  }, [])

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0,0,1200,1200)
    var data= svgdos 

    var DOMURL = window.URL || window.webkitURL || window;
    var img1 = new Image()
    var svg = new Blob([data], {type: 'image/svg+xml'})
    var url = DOMURL.createObjectURL(svg)
    img1.onload = ()=>{
      ctx.drawImage(img1,player.x,player.y)
      DOMURL.revokeObjectURL(url)
    }
    img1.src = url;
    console.log(img1)

 
  }, [player]);




  return (
    <canvas 
    ref={canvasRef}
    width='1200'
    height='1200'
    style={{border:'1px solid black'}}>
    </canvas>
  )
}

export default Screen
