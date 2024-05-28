import Navbar from "./components/navbar";
import MovieList from "./components/movie-list";
function App() {
  return (
    <div className="flex text-white bg-slate-800 w-screen h-screen">
      <div className="fixed mt-6">
        <Navbar />
      </div>
      <div className="flex flex-wrap items-center justify-center m-4 overflow-scroll">
          <MovieList />
      </div>
    </div>
  );
}

export default App;
