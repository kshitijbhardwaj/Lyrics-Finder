import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Loading from "./Loading";

function Lyrics(props) {
    const [lyrics, setLyrics] = useState({})
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=787890e5631ac970194f7b29451f0145`)
            .then((response) => {
                setSpinner(false);
                setLyrics(response.data.message.body);
            })
            .catch(err => console.log(err))
    }, []);
    if (spinner) {
        return <Loading/>
    } else {
        return (
            <div className="lyrics-body">
                <Link to={"/"}>Back</Link>
                <h4 className="lyrics-header">Lyrics</h4>
                <p>{lyrics?.lyrics?.lyrics_body}</p>
            </div>
        );
    }
}

export default Lyrics;
