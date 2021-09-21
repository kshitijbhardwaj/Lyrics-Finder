import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FaMusic} from "react-icons/all";
import SongList from "./SongList";
import axios from "axios";
import Loading from "./Loading";

SearchSong.propTypes = {};

function SearchSong(props) {

    const [songsList, setsongList] = useState([]);
    const [search, setSearch] = useState('');
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        getDefaultList();
    }, [])

    function getDefaultList() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=us&f_has_lyrics=1&apikey=787890e5631ac970194f7b29451f0145`)
            .then((response) => {
                setSpinner(false);
                setsongList(response.data.message.body);
            })
            .catch(err => console.log(err))
    }

    const getSongs = () => {
        setSpinner(true);
        if (search) {
            axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q=${search}&page_size=10&page=1&apikey=787890e5631ac970194f7b29451f0145`)
                .then((response) => {
                    setSpinner(false);
                    setsongList(response.data.message.body);
                })
                .catch(err => console.log(err))
        } else {
            getDefaultList();
        }
    }

    if (spinner) {
        return <Loading/>
    } else {
        return (
            <>
                <div className="search-header">
                    <FaMusic size="30px" margin-right="5px"/>
                    <span className="se-header-label">Search For A Song</span>
                </div>
                <form className="header-label" onSubmit={getSongs}>
                    {/*<label className="header-label">Get the lyrics for any track</label>*/}
                    <input aria-label="Text" className="input-box" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button className="add-tran" onClick={getSongs}>Get Track Lyrics</button>
                </form>
                <div>
                    {songsList.track_list?.length && <SongList songList={songsList}/>}
                    {!songsList.track_list?.length && <b>No Tracks Found</b>}
                </div>
            </>
        );
    }
}

export default SearchSong;
