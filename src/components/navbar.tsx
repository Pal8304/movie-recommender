export default function Navbar() {
  return (
    <div className="fixed flex items-start justify-center w-screen">
      <div className="flex w-2/3 items-center justify-between bg-slate-700 p-4 text-2xl rounded-lg">
        <div>MovieRecommender</div>
        <div className="flex flex-row gap-4">
          <div>Edit</div>
          <div>Sort</div>
          <div>Search</div>
        </div>
      </div>
    </div>
  );
}
