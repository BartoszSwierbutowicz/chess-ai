type SquareProps = {
  isLight: boolean;
};

export default function Square({ isLight }: SquareProps) {
    
    const backgroundClass = isLight ? "bg-[#769656]" : "bg-[#eeeed2]"

    return (
        <div className={"w-16 h-16 " + backgroundClass}></div>
    );
}