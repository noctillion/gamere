import React from 'react'
import Actor from '../actor/actor'
import SpriteElementFront from '../../creatures/lizard/sprites/test7.png'
import useKeyPress from '../../hooks/useKeyPress'
import useWalk from '../../hooks/useWalk'

const datax = {
  'uno':{'h':320, 'w':320},
  'dos':{'h':140, 'w':140},
}

const Player = () => {

const { dir, step, walk, position } = useWalk(4)
const data= { h:datax.uno.h,
    w:datax.uno.w}

    



useKeyPress((e)=>{
    e.preventDefault()
    const dir = e.key.replace('Arrow', '').toLowerCase();
    const sal = e.key.replace('Backspace', '').toLowerCase();
    console.log(sal)
    walk(dir)
    
  })



  

  return (
    <div>
       <Actor sprite={SpriteElementFront} data={data} step={step} dir={dir} position={position}/>
    </div>
  )
}

export default Player
