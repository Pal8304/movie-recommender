import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="sticky flex items-start justify-center w-screen">
      <div className="flex w-2/3 items-center justify-between bg-slate-700 p-4 text-2xl rounded-lg">
        <div className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          MovieRecommender
        </div>
        <div className="flex flex-row gap-4">
          <div>Edit</div>
          <div>Sort</div>
          <div>Search</div>
        </div>
      </div>
    </div>
  );
}
