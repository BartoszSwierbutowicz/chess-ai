import Image from "next/image";
import type { Piece } from "../types/chess";

type SquareProps = {
  isLight: boolean;
  piece: Piece | null
};

export default function Square({ isLight, piece }: SquareProps) {
    
    const backgroundClass = isLight ? "bg-[#eeeed2]" : "bg-[#769656]"

    return (
        <div className={"w-16 h-16 " + backgroundClass}>
            {piece && (
                <Image
                    src={`/pieces/${piece.color}-${piece.type}.svg`}
                    alt={`${piece.color} ${piece.type}`}
                    width={64}
                    height={64}
                />
            )}
        </div>
    );
}