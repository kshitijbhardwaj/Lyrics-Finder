import React from 'react';
import PropTypes from 'prop-types';
import img_avatar from "./img_avatar.png";
import Basicmenu from "./Basicmenu";
import FormDialog from "./FormDialog";

Navbar.propTypes = {};

function Navbar(props) {
    return (
        <div className="lyric-finder-header">
            <span>LyricFinder</span>
            <FormDialog />
            <Basicmenu />
        </div>
    );
}

export default Navbar;
