import React from "react";
import Header from "./Header";
import SongRow from "./SongRow";
import { PlayCircleFilled } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { MoreHoriz } from "@material-ui/icons";
import { UseDataLayerValue } from "./DataLayer";
import "./Body.css";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = UseDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcVO5HgjXcwSp`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });

          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track: ${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  //console.log(discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="discover_weekly" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" onClick={playPlaylist} />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks.items.map((song) => {
          return (
            <SongRow
              track={song.track}
              playSong={playSong}
              key={song.track.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
