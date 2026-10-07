export type PieceColor = "white" | "black";
export type PieceType = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";
export type Board = (Piece | null)[];
export type Piece = {
    color: PieceColor,
    type: PieceType
}