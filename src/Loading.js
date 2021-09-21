import React from 'react';
import PropTypes from 'prop-types';
import spinner from './spinner.gif';

const Loading = props => {
    return (
        <div>
            <img
                src={spinner}
                alt="Loading..."
                style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
            />
        </div>
    );
};

Loading.propTypes = {

};

export default Loading;
