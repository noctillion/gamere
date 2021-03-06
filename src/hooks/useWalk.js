import {useState} from 'react'

const useWalk = (maxSteps) => {
  const [dir, setDir] = useState(0)
  const [step, setStep] = useState(0)
  const [position, setPos] = useState({x: 0, y: 0})/// posicion donde comienza el bicho

  const directions= {
    down: 0,
    left: 2,
    right: 1,
    up: 3
  }

 const stepSize =16/// numero de pixeles que se mueve

 const modifier ={
   down: {x:0, y: stepSize},
   left: {x: -stepSize, y:0},
   right: {x: stepSize, y:0},
   up: {x:0, y:-stepSize}
 }



function walk(dir){
  //setDir(directions[dir])
  setDir((prev) => {
    if(directions[dir]=== prev) move(dir)
    return directions[dir]


  })
  setStep(prev => prev < maxSteps -1 ? prev + 1 : 0)
}

function move(dir){
setPos((prev) =>({
  x: prev.x + modifier[dir].x,
  y: prev.y + modifier[dir].y
}
))
}






  return { walk, dir, step, position}
    
}

export default useWalk
