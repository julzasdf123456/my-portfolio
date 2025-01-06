import "./App.css";
import Landing from "./components/Landing";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <div className="w-full flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <TopNav />
        <Landing />
      </div>
    </>
  );
}

export default App;
