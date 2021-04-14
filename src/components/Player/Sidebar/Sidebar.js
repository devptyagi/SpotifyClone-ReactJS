import './Sidebar.css';
import SidebarOption from './SidebarOption/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../../util/DataLayer';

const Sidebar = () => {

    const [{playlists}] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            <div className="sidebar__lists">
                {playlists?.items?.map(playlist => (
                    <SidebarOption key={playlist.id} title={playlist.name}/>
                ))}
            </div>
            
        </div>
    )
}

export default Sidebar
