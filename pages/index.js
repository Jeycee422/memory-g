import Tile from './components/Tile'
import { useState, useEffect } from 'react'
import { Montserrat } from 'next/font/google'
import Resetsvg from '../public/reset.svg'

const montserrat = Montserrat({subsets: ['latin'], weight: '600'})

export default function Home() {
  const [tiles, setTiles] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [showTiles, setShowTiles] = useState(false)
  
  useEffect(() => {
    shuffle()
    setGameOver(false)
    setDisabled(false)
    setShowTiles(false)
  },[gameOver])

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function show() {
    const newArr = tiles.map(el => ({...el,isShow: !el.isShow}))
    setTiles(newArr)
    setShowTiles(!showTiles)
  }
  
  function restart() {
    setGameOver(true)
  }

  async function handleClick(id){
    await sleep(60)
    setTiles((prev) => {
      const arr = [...prev]
      arr[id].isShow = true
      arr[id].showTile = true
      return arr
    })
    if(tiles[id].name === 'bomb'){
      setDisabled(true)
      await sleep(1500)
      setGameOver(true)
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  function shuffle(){
    const newArr = []
    for(let i = 0; i < 25; i++){
      if(i < 21){
        newArr.push({
          name: 'coin',
          isShow: false,
          showTile: false
        })
      }else {
        newArr.push({
          name: 'bomb',
          isShow: false,
          showTile: false
        })
      }
    }
    const shuffled = shuffleArray(newArr)
    setTiles(shuffled)
  }

  return (
    <div className="no-select bg-[#0d131c] w-screen h-screen text-white text-4xl justify-center items-center flex flex-col">
      <div className="w-80 sm:w-96 h-max grid grid-cols-5 gap-2" style={{userSelect: 'none'}}>
        {tiles.map((el,id) => {
          return <Tile key={id} name={el.name} isShow={el.isShow} showTile={el.showTile} onClick={() => {disabled || showTiles ? null :handleClick(id)}} id={id} />
        })}
      </div>
      <div className='mt-4 w-96 h-12 flex justify-center items-center space-x-4'>
        <button onClick={() => {disabled ? null : show()}} className='capitalize w-4/12 h-full bg-red-500 text-base flex justify-center items-center border border-none rounded-md cursor-pointer' style={montserrat.style}><div style={{userSelect: 'none'}}>{showTiles ? 'hide' : 'show'}</div></button>
        <div onClick={() => {disabled ? null : restart()}}>
          <Resetsvg className="w-7 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
