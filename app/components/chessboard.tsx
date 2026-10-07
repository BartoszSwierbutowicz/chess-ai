import Square from "./square";
import createInitialBoard from "../lib/board";

export default function Chessboard() {
    
    const board = createInitialBoard()

    return (
        <div className="grid grid-cols-8 w-fit">
            {board.map((piece, position) => {
                
                const row = Math.floor(position / 8);
                const column = position % 8;
                
                return (
                    <Square key={position} isLight={(row + column) % 2 === 0} piece={piece}/>
                )

            })}
        </div>
        
    );
}