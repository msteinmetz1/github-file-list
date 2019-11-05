import React from 'react';
import PropTypes from 'prop-types';

function FileIcon({ file }) {
    let icon = file.type === 'file' ? 'fa-file-text-o' : 'fa-folder';
    return (
        <span className='file-icon'>
            <i className={`fa ${icon}`} />
        </span>
    )
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileIcon;