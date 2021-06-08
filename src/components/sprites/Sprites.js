import React from 'react'
//import styled from 'styled-components'
///import SpriteElement from '../../creatures/lizard/sprites/front_walk_sprite.png'

/* const MainDiv = styled.div`
display: inline-block;
///background-image: 'url(../../creatures/lizard/sprites/front_walk_sprite.png)';
position: absolute;
top: ${props => props.position.y}px;
left: ${props => props.position.x}px;
background-image: url(${props => props.image});
///background-size: 2900px, 4000px;
background-repeat:no-repeat;
background-position:-${props => props.data.x}px -${props => props.data.y}px;
height: ${props => props.data.h}px ;///732px ;
width: ${props => props.data.w}px;///332px;
` */

const Sprites = ({data, image, position}) => {
  return (
    <div>
      {/* <MainDiv data={data} image={image} position={position}/> */}
      <div data={data} image={image} position={position} style={{
        display: 'inline-block',
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `-${data.x}px -${data.y}px`,
        height:`${data.h}px`,
        width:`${data.w}px`

      }}/>
    </div>
  )
}

export default Sprites
