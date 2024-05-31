import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import type {} from "@mui/x-data-grid/themeAugmentation";

import Movie from "../assets/movie-interface";
import MovieDataContext from "./movie-data-context";
import { useContext } from "react";

//import { createTheme } from "@mui/system";
// const theme = createTheme({
//   components: {
//     MuiDataGrid: {
//       styleOverrides: {
//         root: {
//           color: "white",
//           backgroundColor: "rgb(30 41 59)",
//         },
//       },
//     },
//   },
// });

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "text-white bg-slate-700",
    width: 90,
    sortable: false,
    filterable: false,
  },
  {
    field: "title",
    headerName: "Movie Name",
    headerClassName: "text-white bg-slate-700",
    width: 150,
    sortable: false,
    editable: true,
    filterable: true,
  },
  {
    field: "overview",
    headerName: "Description",
    headerClassName: "text-white bg-slate-700",
    width: 500,
    sortable: false,
    editable: true,
  },
  {
    field: "release_date",
    headerName: "Release Date",
    headerClassName: "text-white bg-slate-700",
    width: 150,
    editable: true,
  },
  {
    field: "original_language",
    headerName: "Language",
    headerClassName: "text-white bg-slate-700",
    width: 150,
    editable: true,
    sortable: false,
  },
  {
    field: "popularity",
    headerName: "Popularity",
    headerClassName: "text-white bg-slate-700",
    width: 150,
    sortable: true,
    sortingOrder: ["asc", "desc"],
  },
  {
    field: "vote_average",
    headerName: "Vote Average",
    headerClassName: "text-white bg-slate-700",
    width: 150,
    //sortable: true,
  },
  {
    field: "vote_count",
    headerName: "Vote Count",
    headerClassName: "text-white bg-slate-700",
    width: 150,
    //sortable: true,
    //sortingOrder: ["asc", "desc"],
  },
];

export default function MovieTable() {
  const { movieList, setMovieList } = useContext(MovieDataContext);
  return (
    <div className="flex justify-center items-center">
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgb(30 41 59)",
          color: "white",
        }}
      >
        <DataGrid
          processRowUpdate={(newRow, oldRow) => {
            const movieListCpy = [...movieList];
            for(let i = 0;i < movieListCpy.length;i++){
              if(movieListCpy[i].id === oldRow.id){
                movieListCpy[i].title = newRow.title;
                movieListCpy[i].overview = newRow.overview;
                movieList[i].original_language = newRow.original_language;
                movieList[i].release_date = newRow.release_date;
              }
            }
            setMovieList(movieListCpy);
            return newRow;
          }}
          onProcessRowUpdateError={(error) => {
            console.log("error", error);
          }}
          sx={{ color: "white", backgroundColor: "rgb(30 41 59)" }}
          rows={movieList as Movie[]}
          columns={columns}
          className="text-white bg-slate-700"
          loading={movieList.length === 0}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          //checkboxSelection
          //disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
