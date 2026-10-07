import Image from "next/image";
import type { Piece } from "../types/chess";

type SquareProps = {
  isLight: boolean;
  piece: Piece | null;
  isSelected: boolean;
  onClick: () => void;
};

export default function Square({ isLight, piece, isSelected, onClick }: SquareProps) {
    
    const backgroundClass = isLight ? "bg-[#eeeed2] " : "bg-[#769656] "

    const selectionClass = isSelected ? "ring-4 ring-inset ring-yellow-400 " : " "

    return (
        <button className={"w-16 h-16 " + backgroundClass + selectionClass} onClick={onClick} type="button" aria-pressed={isSelected}>
            {piece && (
                <Image
                    src={`/pieces/${piece.color}-${piece.type}.svg`}
                    alt={`${piece.color} ${piece.type}`}
                    width={64}
                    height={64}
                />
            )}
        </button>
    );
}