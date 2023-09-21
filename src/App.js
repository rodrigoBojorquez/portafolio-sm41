import Header from "./components/Header";
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar/>

      {/* se recorre a la derecha por la navbar  */}
      <div className="ml-24 p-3">
        <Header/> 
      </div>
    </>
  );
}

export default App;
