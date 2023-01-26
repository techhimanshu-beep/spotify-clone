import React from "react";
import Header from "./Header";
// import discover from "./images/discover weekly.jpg";
import { useStateValue } from "./StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import "./Body.css";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          className="discoverWeekly_img"
          src={discover_weekly?.images[0]?.url}
          alt="discover_weekly"
        />
        <div className="body__infotext">
          <strong>PLAYLISTS</strong>
          <h2 className="main_heading">Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        <hr />
      </div>
      {discover_weekly?.tracks.items.map((item) => (
        <SongRow track={item.track} />
      ))}
    </div>
  );
};

export default Body;
