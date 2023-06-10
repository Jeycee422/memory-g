import Tiles from './components/Tiles'
import { useState, useEffect } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import { Montserrat } from 'next/font/google'
import Resetsvg from '../public/reset.svg'
import Brainsvg from '../public/brain.svg'
import Exitsvg from '../public/exit.svg'

const montserrat = Montserrat({subsets:['latin'] ,weight: '900'})

export default function Home() {
  const [score, setScore] = useState(0)
  const [easy,setEasy] = useState(0)
  const [hard,setHard] = useState(0)
  const [insane,setInsane] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [tiles, setTiles] = useState([])
  const [level, setLevel] = useState()
  const [levelSelect, setLevelSelect] = useState(true)
  const [counter,setCounter] = useState(0)
  const [disabled, setDisabled] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [showPlay, setShowPlay] = useState(true)
  const [selectedTile,setSelectedTile] = useState([])

  const objects = [
    {name:'coin',isShow:false,showTile:false,color:'#fbbf24'},{name:'bb',isShow:false,showTile:false,color:'#fbbf24'},{name:'bhole',isShow:false,showTile:false,color:'#fbbf24'},{name:'cassiopeia',isShow:false,showTile:false,color:'#fbbf24'},{name:'dipper',isShow:false,showTile:false,color:'#fbbf24'},{name:'laser',isShow:false,showTile:false,color:'#fbbf24'},{name:'moon',isShow:false,showTile:false,color:'#fbbf24'},{name:'naut',isShow:false,showTile:false,color:'#fbbf24'},
    {name:'apple',isShow:false,showTile:false,color:'#ef4444'},{name:'bomb',isShow:false,showTile:false,color:'#ef4444'},{name:'pepper',isShow:false,showTile:false,color:'#ef4444'},{name:'strawberry',isShow:false,showTile:false,color:'#ef4444'},{name:'tomato',isShow:false,showTile:false,color:'#ef4444'},{name:'sleep',isShow:false,showTile:false,color:'#ef4444'},{name:'wink',isShow:false,showTile:false,color:'#ef4444'},{name:'happy',isShow:false,showTile:false,color:'#ef4444'},

    {name:'bored',isShow:false,showTile:false,color:'#22c55e'},{name:'cry',isShow:false,showTile:false,color:'#22c55e'},{name:'kiwi',isShow:false,showTile:false,color:'#22c55e'},{name:'lettuce',isShow:false,showTile:false,color:'#22c55e'},{name:'onion',isShow:false,showTile:false,color:'#22c55e'},{name:'pickle',isShow:false,showTile:false,color:'#22c55e'},{name:'smile',isShow:false,showTile:false,color:'#22c55e'},{name:'eyeheart',isShow:false,showTile:false,color:'#22c55e'},

    {name:'bear',isShow:false,showTile:false,color:'#3b82f6'},{name:'deer',isShow:false,showTile:false,color:'#3b82f6'},{name:'dolphin',isShow:false,showTile:false,color:'#3b82f6'},{name:'elephant',isShow:false,showTile:false,color:'#3b82f6'},{name:'fox',isShow:false,showTile:false,color:'#3b82f6'},{name:'penguin',isShow:false,showTile:false,color:'#3b82f6'},{name:'rabbit',isShow:false,showTile:false,color:'#3b82f6'},{name:'seal',isShow:false,showTile:false,color:'#3b82f6'},
  ]

  const board = tiles.map((el,id) => {
    return <Tiles key={id} name={el.name} color={el.color} isShow={el.isShow} showTile={el.showTile} onClick={() => {disabled ? null :handleClick(id)}} id={id} font={montserrat.style} />
  })

  const easyHs = easy ? <div className='text-[#fefce8] text-sm sm:text-lg w-24 capitalize text-center sm:mr-4 flex flex-row items-center' style={montserrat.style}>best: <div className='text-[#fde047] text-lg sm:text-2xl ml-2'>{easy}</div></div> : null

  const hardHs = hard ? <div className='text-[#fefce8] text-sm sm:text-lg w-24 capitalize text-center sm:mr-4 flex flex-row items-center' style={montserrat.style}>best: <div className='text-[#fde047] text-lg sm:text-2xl ml-2'>{hard}</div></div> : null

  const insaneHs = insane ? <div className='ml-4 text-[#fefce8] text-sm sm:text-lg w-24 capitalize text-center sm:mr-4 flex flex-row items-center' style={montserrat.style}>best: <div className='text-[#fde047] text-lg sm:text-2xl ml-2'>{insane}</div></div> : null
  
  useEffect(() => {
    checkCounter()
    checkWin()
    if(gameOver){
      setBestScore()
    }
  },[counter])

  useEffect(() => {
    setHs()
  },[level])

  const setHs = () => {
    const diff = level === 4 ? 'easy' : level === 6 ? 'hard' : level === 8 ? 'insane' : null 
    const localScore = parseInt(localStorage.getItem(diff))
    if(localScore){
      level === 4 ? setEasy(localScore) : level === 6 ? setHard(localScore) : level === 8 ? setInsane(localScore) : null
      // setHighScore(localScore)
    } else {
      level === 4 ? setEasy(0) : level === 6 ? setHard(0) : level === 8 ? setInsane(0) : null
    }
  }
  
  function setBestScore(){
    const diff = level === 4 ? 'easy' : level === 6 ? 'hard' : level === 8 ? 'insane' : null 
    let bestScore = parseInt(localStorage.getItem(diff))

    if(score <= bestScore){
      localStorage.setItem(diff,score)
      level === 4 ? setEasy(score) : level === 6 ? setHard(score) : level === 8 ? setInsane(score) : null
    }else {
      level === 4 ? setEasy(bestScore) : level === 6 ? setHard(bestScore) : level === 8 ? setInsane(bestScore) : null
    }
  }

  async function checkCounter() {
    if(counter === 2){
      setDisabled(true)
      await sleep(450)
      setDisabled(false)
      unShowTile()
      setCounter(0)
      setSelectedTile([])
    }
  }

  async function checkWin(){
    const isWin = tiles.length > 0 ? tiles.every(tile => tile.isShow) : false
    if(isWin){
      setGameOver(true)
      setShowPlay(false)
      setShowScore(false)
      setDisabled(true)
      // setScore(0)
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function play(){
    setDisabled(false)
    setGameOver(false)
    setShowPlay(false)
    setShowScore(true)
    console.log(tiles)
  }

  async function playAgain(){
    await sleep(250)
    const diff = level === 4 ? 16 : level === 6 ? 36 : level === 8 ? 64 : null
    shuffle(diff)
    setDisabled(false)
    setGameOver(false)
    setShowScore(true)
    setScore(0)
    setCounter(0)
    setSelectedTile([])
  }


  function unShowTile() {
    const newArr = tiles.map(el => ({...el,showTile: false}))
    setTiles(newArr)
  }
  
  async function restart() {
    await sleep(250)
    const diff = level === 4 ? 16 : level === 6 ? 36 : level === 8 ? 64 : null
    shuffle(diff)
    setDisabled(true)
    setShowPlay(true)
    setScore(0)
    setCounter(0)
    setSelectedTile([])
  }

  async function handleClick(id){
    setSelectedTile(prevState => {
      const newState = [...prevState,tiles[id]]
      return newState
    })
    const isSelectedSame = selectedTile.every(tile => tile.name === tiles[id].name)
    if(selectedTile.length >= 1 && isSelectedSame){
      setTiles(prevState => {
        const newArr = [...prevState]
        for(let i = 0; i < newArr.length; i++){
          if(newArr[i].name === tiles[id].name){
            newArr[i].isShow = true
          }
        }
        return newArr
      })
      // setScore ++
    }else if(selectedTile.length >= 1){
      setScore(a => a + 1)
    }
    setTiles(prevState => {
      const newState = [...prevState]
      newState[id] = {...newState[id],showTile: true}
      return newState
    })
    // await sleep(500)
    setCounter(a => a + 1)
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  function shuffle(num){
    
    let colorArr = []
    const dummyTile = {
      name: '',
      isShow: true,
      showTile: true,
      color: ''
    }
    const red = shuffleArray(objects.filter(obj => obj.color === '#ef4444'))
    const green = shuffleArray(objects.filter(obj => obj.color === '#22c55e'))
    const blue = shuffleArray(objects.filter(obj => obj.color === '#3b82f6'))
    const yellow = shuffleArray(objects.filter(obj => obj.color === '#fbbf24'))

    if(num === 16){
      for(let i = 0; i < 2;i++){
        colorArr.push(red[i])
        colorArr.push(green[i])
        colorArr.push(blue[i])
        colorArr.push(yellow[i])
      }

      setTiles(shuffleArray(multiArr(num,colorArr)))
    }else if(num === 36){
      for(let i = 0; i < 4;i++){
        colorArr.push(red[i])
        colorArr.push(green[i])
        colorArr.push(blue[i])
        colorArr.push(yellow[i])
      }

      const newArr = shuffleArray(multiArr(num-4,colorArr))
      newArr.splice(0,0,dummyTile)
      newArr.splice(5,0,dummyTile)
      newArr.splice(30,0,dummyTile)
      newArr.splice(35,0,dummyTile)
      setTiles(newArr)

    }else {
      for(let i = 0; i < 8;i++){
        colorArr.push(red[i])
        colorArr.push(green[i])
        colorArr.push(blue[i])
        colorArr.push(yellow[i])
      }

      setTiles(shuffleArray(multiArr(num,colorArr)))
    }

  }

  function multiArr(num,arr){
    const newArr = []
    for(let i = 0; i < num/2; i++){
      for(let j = 0; j < 2; j++){
        newArr.push(arr[i])
      }
    }

    return newArr
  }

  async function handleLevel(lvl){
    await sleep(250)
    const diff = lvl === 4 ? 16 : lvl === 6 ? 36 : lvl === 8 ? 64 : null
    shuffle(diff)
    setLevel(lvl)
    setLevelSelect(false)
    setGameOver(false)
  }
  
  function goBack(){
    setLevelSelect(true)
    setGameOver(false)
    setShowPlay(true)
    setDisabled(true)
    setScore(0)
    setCounter(0)
    setSelectedTile([])
  }

  return (
    <div className="no-select bg-[#0d131c] w-full sm:w-screen h-screen text-white text-4xl justify-center items-center flex flex-col">
      {levelSelect
        ?
          <div className='flex flex-col space-y-10 items-center' style={montserrat.style}>
            <div className='text-3xl sm:text-5xl space-x-4 flex flex-row justify-center items-center mb-6'><Brainsvg className='w-10 h-10 sm:h-14 sm:w-14' /><div>Memory Game</div></div>
            <button className='text-xl sm:text-3xl text-[#d97706] hover:text-[#f59e0b] text-left w-36 sm:w-60' onClick={() => {handleLevel(4)}}>
              <div>Easy</div>
            </button>

            <button className='text-xl sm:text-3xl text-[#b91c1c] hover:text-[#dc2626] text-left w-36 sm:w-60' onClick={() => {handleLevel(6)}}>
              <div>Hard</div>
            </button>
            <button className='text-xl sm:text-3xl text-[#881337] hover:text-[#be123c] text-left w-36 sm:w-60' onClick={() => {handleLevel(8)}}>
              <div>Insane</div>
            </button>
          </div>
        : 
          <div className='justify-center items-center flex flex-col'>
            {gameOver ? <ConfettiExplosion force={0.8} duration={3000} particleCount={250} width={1600}/> : null}
            {
              level === 4 ? <div className="grid grid-cols-4 sm:gap-2 gap-1.5" style={{userSelect: 'none'}}>
                {board}
                
              </div>
              : level === 6 ? <div className="grid grid-cols-6 sm:gap-2 gap-1.5" style={{userSelect: 'none'}}>
                {board}
              </div>
              : level === 8 ? <div className="grid grid-cols-8 sm:gap-2 gap-1" style={{userSelect: 'none'}}>
                {board}
              </div> : null
            }
            <div className='mt-4 w-11/12 h-8 sm:h-12 flex justify-center items-center'>
              <div className='mr-6' onClick={goBack}><Exitsvg className="w-7 h-7 sm:w-9 sm:h-9 cursor-pointer" /></div> 
              {level === 4 ? easyHs : level === 6 ? hardHs : level === 8 ? insaneHs : null}
              <button onClick={showPlay ? play : showScore ? null : playAgain} className='mr-2 sm:mr-4 capitalize w-28 sm:w-40 h-full bg-red-500 text-xs sm:text-base flex justify-center items-center border border-none rounded-md cursor-pointer' style={montserrat.style}><div style={{userSelect: 'none'}}>{showPlay ? 'Play' : showScore ? `Score: ${score}` : 'Play Again'}</div>
              </button>
              
              <div onClick={restart}>
                <Resetsvg className="w-6 sm:w-8 cursor-pointer" />
              </div>
            </div>
          </div>
        }
    </div>
  )
}
