import MovieTable from "./components/movie-table";
import Navbar from "./components/navbar";

export default function EditAll() {
  return (
    <div className=" flex flex-col text-white bg-slate-800 w-screen h-screen gap-2">
      <div className="sticky m-6">
        <Navbar />
      </div>
      <div>
        <MovieTable />
      </div>
    </div>
  );
}
