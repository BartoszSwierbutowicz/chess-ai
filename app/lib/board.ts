import type { Board, PieceType } from "../types/chess";

export default function createInitialBoard(): Board {

    const board: Board = Array.from({ length: 64 }, () => null);

    const backRank: PieceType[] = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

    for(let column = 0; column < 8; column++) {
        board[column] = {color: "black", type: backRank[column]}
        board[56 + column] = {color: "white", type: backRank[column]}
    }

    for(let boardIndex = 48; boardIndex < 56; boardIndex++) {
        board[boardIndex] = {color: "white", type: "pawn"}
    }

    for(let boardIndex = 8; boardIndex < 16; boardIndex++) {
        board[boardIndex] = {color: "black", type: "pawn"}
    }

    return (
        board
    )
}