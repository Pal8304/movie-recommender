import { movieList } from "../assets/movie-data";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  return (
    <div className=" w-52">
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={movieList.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    console.log("Searched for: ", e.target.value);
                }
            }}
          />
        )}
      />
    </div>
  );
}
