"use client";
import { useState } from "react";
import Square from "./square";
import createInitialBoard from "../lib/board";
import type { PieceColor } from "../types/chess";

export default function Chessboard() {
    
    const [board, setBoard] = useState(createInitialBoard);

    const [selectedPosition, setSelectedPosition] = 
        useState<number | null>(null);

    const [turn, setTurn] = useState<PieceColor>("white");

    function handleSquareClick(position: number) {
        
        if(selectedPosition === null){
            if (board[position] !== null && board[position].color === turn){
                setSelectedPosition(position)
                
            }
            return;
        }
        
        if(selectedPosition === position){
            setSelectedPosition(null)    
            
            return;
        }
        
        if(board[position] === null) {
            const nextBoard = [...board];
            nextBoard[position] = nextBoard[selectedPosition]
            nextBoard[selectedPosition] = null
            setBoard(nextBoard);
            setSelectedPosition(null);
            setTurn(turn === "white" ? "black" : "white");
            return;
        }
        
        if(board[position].color === turn){
            setSelectedPosition(position)
        }
    }
    
    return (
        <div className="grid grid-cols-8 w-fit">
            {board.map((piece, position) => {
                
                const row = Math.floor(position / 8);
                const column = position % 8;
                
                return (
                    <Square 
                        key={position} 
                        isLight={(row + column) % 2 === 0} 
                        piece={piece} 
                        isSelected={selectedPosition === position} 
                        onClick={() => handleSquareClick(position)}
                    />
                )

            })}
        </div>
        
    );
}