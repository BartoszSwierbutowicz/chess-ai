import Square from "./square";
import { Piece } from "../types/chess";

export default function Chessboard() {
    
    const positions = Array.from({ length: 64 }, (_, index) => index);

    return (
        <div className="grid grid-cols-8 w-fit">
            {positions.map(position => {
                
                const piece: Piece | null = 
                    position === 48 ? {color: "white", type: "pawn"} : null

                const row = Math.floor(position / 8);
                const column = position % 8;
                
                return (
                    <Square key={position} isLight={(row + column) % 2 === 0} piece={piece}/>
                )

            })}
        </div>
        
    );
}