import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {BsPlayFill, RiAlbumLine} from "react-icons/all";
import axios from "axios";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom'

SongList.propTypes = {
    track_list: PropTypes.array
};
// SongList.defaultProps = {
//     track_list: []
// };

function SongList(props) {
    let history = useHistory();
    const [trackId, settrackId] = useState('')

    const getTrackId = (Id) => {
        settrackId(Id);
        console.log(Id);
        history.push(`/lyrics/track_id/${Id}`);
    }
    return (
        <div>{
            props.songList.track_list?.map(song => (
                <div className="cards" key={song.track.track_id}>
                    <div className="card-items">
                        <p className="text-bold">{song.track.artist_name}</p>
                        <span><BsPlayFill/><span className="text-bold">Track:</span> {song.track.track_name}</span>
                        <p><RiAlbumLine/><span className="text-bold">Album: </span>{song.track.album_name}</p>
                        <button className="get-lyrics" onClick={() => getTrackId(song.track.track_id)}>Get Lyrics</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SongList;
