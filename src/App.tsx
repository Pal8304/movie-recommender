import Navbar from "./components/navbar";
import MovieList from "./components/movie-list";
function App() {
  return (
    <div className="flex flex-col text-white bg-slate-800 w-screen h-screen gap-2">
      <div className="sticky mt-6">
        <Navbar />
      </div>
      <div className="flex justify-center items-center overflow-scroll mb-16">
        <div className="flex flex-wrap items-center justify-center h-2/3">
          <MovieList />
        </div>
      </div>
    </div>
  );
}

export default App;
