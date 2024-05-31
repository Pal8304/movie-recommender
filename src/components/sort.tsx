import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MovieDataContext from "./movie-data-context";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

export default function Sort() {
  const { movieList, setMovieList } = useContext(MovieDataContext);
  const [popularity, setPopularity] = useState(false);
  const [name, setName] = useState(false);
  const [releaseDate, setReleaseDate] = useState(false);
  const [viewCount, setViewCount] = useState(false);
  const [rating, setRating] = useState(false);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = () => {
    if (options[selectedIndex] === "Sort by Name") sortByName();
    if (options[selectedIndex] === "Sort by Popularity") sortByPopularity();
    if (options[selectedIndex] === "Sort by Release Date") sortByReleaseDate();
    if (options[selectedIndex] === "Sort by View Count") sortByViewCount();
    if (options[selectedIndex] === "Sort by Rating") sortByRating();
    console.log(movieList);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const options = [
    "Sort by Name",
    "Sort by Popularity",
    "Sort by Release Date",
    "Sort by View Count",
    "Sort by Rating",
  ];

  function sortByPopularity() {
    setPopularity(!popularity);
    const movieListCpy = [...movieList];
    if (popularity) {
      movieListCpy.sort((a, b) => b.popularity - a.popularity);
    } else {
      movieListCpy.sort((a, b) => a.popularity - b.popularity);
    }
    setMovieList(movieListCpy);
    navigate("/");
  }

  function sortByName() {
    setName(!name);
    const movieListCpy = [...movieList];
    if (name) {
      movieListCpy.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
      movieListCpy.sort((a, b) => (b.title > a.title ? 1 : -1));
    }
    setMovieList(movieListCpy);
    navigate("/");
  }

  function sortByReleaseDate() {
    setReleaseDate(!releaseDate);
    const movieListCpy = [...movieList];
    if (releaseDate) {
      movieListCpy.sort((a, b) => a.release_date.localeCompare(b.release_date));
    } else {
      movieListCpy.sort((a, b) => b.release_date.localeCompare(a.release_date));
    }
    setMovieList(movieListCpy);
    navigate("/");
  }

  function sortByViewCount() {
    setViewCount(!viewCount);
    const movieListCpy = [...movieList];
    if (viewCount) {
      movieListCpy.sort((a, b) => b.vote_count - a.vote_count);
    } else {
      movieListCpy.sort((a, b) => a.vote_count - b.vote_count);
    }
    setMovieList(movieListCpy);
    navigate("/");
  }

  function sortByRating() {
    setRating(!rating);
    const movieListCpy = [...movieList];
    if (rating) {
      movieListCpy.sort((a, b) => b.vote_average - a.vote_average);
    } else {
      movieListCpy.sort((a, b) => a.vote_average - b.vote_average);
    }
    setMovieList(movieListCpy);
    navigate("/");
  }

  return (
    <div>
      <ButtonGroup
        variant="outlined"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
        sx = {{color: "white", backgroundColor: "rgb(30 41 59}"}}
      >
        <Button onClick={handleClick}
        sx = {{color: "white", height: "55px"}}
        >
          {options[selectedIndex]}
          {selectedIndex === 0 && name === false ? <ArrowDownwardIcon /> : null}
          {selectedIndex === 0 && name === true ? <ArrowUpwardIcon /> : null}
          {selectedIndex === 1 && popularity === false ? <ArrowDownwardIcon /> : null}
          {selectedIndex === 1 && popularity === true ? <ArrowUpwardIcon /> : null}
          {selectedIndex === 2 && releaseDate === false ? <ArrowDownwardIcon /> : null}
          {selectedIndex === 2 && releaseDate === true ? <ArrowUpwardIcon /> : null}
          {selectedIndex === 3 && viewCount === false ? <ArrowDownwardIcon /> : null}
          {selectedIndex === 3 && viewCount === true ? <ArrowUpwardIcon /> : null}
          {selectedIndex === 4 && rating === false ? <ArrowDownwardIcon /> : null}
          {selectedIndex === 4 && rating === true ? <ArrowUpwardIcon /> : null}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          variant="outlined"
          sx={{ color: "white"}}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
