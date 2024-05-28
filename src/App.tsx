import Navbar from "./components/navbar";

import {
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

function App() {
  return (
    <div className="flex text-white bg-slate-800 w-screen h-screen">
      <div className="fixed mt-6">
        <Navbar />
      </div>
      <div className="flex flex-wrap items-center justify-center m-4">
        <Card className="w-48 h-96">
          <CardMedia
            component="img"
            height="100"
            image="/"
            alt=""
          >
          </CardMedia>
          <CardContent className="bg-slate-700 w-full h-full">
            <div>
              ans
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
