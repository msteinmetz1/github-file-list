import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className='age'>
            {timeString}
        </span>
    );
};
Time.propTypes = {
    time: PropTypes.string.isRequired
};

export default Time;