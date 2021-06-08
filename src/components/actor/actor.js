import React from 'react'

import Sprites from '../sprites/Sprites';
//import SpriteElement from '../../creatures/lizard/sprites/front_walk_sprite.png'


const Actor = ({sprite, data, position={x:0, y:0}, step=0, dir=0}) => {

  const {h, w} = data

  return (
    <>
     <Sprites 
     image={sprite} 
     position={position} 
     data={
   {x: step * w,
   y: dir * h,
   h,
   w}}
   
   />
    </>
  )
}

export default Actor
