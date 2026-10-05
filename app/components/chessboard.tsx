import Square from "./square";

export default function Chessboard() {
    
    const positions = Array.from({ length: 64 }, (_, index) => index);

    return (
        <div className="grid grid-cols-8 w-fit">
            {positions.map(position => {
                
                const row = Math.floor(position / 8);
                const column = position % 8;
                
                return (
                    <Square key={position} isLight={(row + column) % 2 === 0}/>
                )

            })}
        </div>
        
    );
}