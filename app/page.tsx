import Square from "./components/square";


export default function App() {
  return (
    <main>
        <h1 className="text-3xl font-bold text-center">moje szachy</h1>
        <Square isLight = {true}/>
        <Square isLight = {false}/>
    </main>
  );
}
