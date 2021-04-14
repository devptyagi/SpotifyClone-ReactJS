import { useDataLayerValue } from '../../../util/DataLayer';
import './Body.css';
import Header from './Header/Header';
import SongRow from './SongRow/SongRow';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({spotify}) => {

    const [{top_playlist}, dispatch] = useDataLayerValue();

    const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
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

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body__info">
                <img src={top_playlist?.images[0]?.url} alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{top_playlist?.name}</h2>
                    <p>{top_playlist?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {top_playlist?.tracks.items.map(item => (
                    <SongRow key={item.track.id} playSong={playSong} track={item.track}/>
                ))}

                <div className="body_bottomPadding">

                </div>

            </div>
        </div>
    )
}

export default Body
