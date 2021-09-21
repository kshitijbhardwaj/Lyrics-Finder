import './App.css';
import SearchSong from "./SearchSong";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Lyrics from "./Lyrics";
import Navbar from "./Navbar";

function App() {

    return (
        <Router>
            <>
                <Navbar/>
                <div className="search-container">
                    <Switch>
                        <Route exact path="/" component={SearchSong}/>
                        <Route exact path="/lyrics/track_id/:id" component={Lyrics}/>
                    </Switch>
                </div>
            </>
        </Router>

    );
}

export default App;
