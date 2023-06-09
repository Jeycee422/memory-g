import Tile from './Tile'

export default function Tiles(props){
    const monts = props.font
    const animationBlink = props.animation
    return (
        <>
            {props.isShow || props.showTile
            
                ? <Tile animation={animationBlink} isGameOver={props.isGameOver} name={props.name} color={props.color} />
            
                :<div onClick={props.onClick} className={`bg-[#053876] h-11 w-11 sm:w-[72px] sm:h-[72px] border border-none rounded-lg sm:rounded-xl cursor-pointer`}>
                    <div className="bg-[#2281f6] h-10 sm:h-16 sm:text-4xl border border-none rounded-lg sm:rounded-xl justify-center items-center flex text-2xl" style={monts}>
                        {/* <Question className="w-8 h-8" /> */}?
                    </div>
                </div>
            }
        </>
    )
}