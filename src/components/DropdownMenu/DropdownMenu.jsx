import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './DropdownMenu.scss';

const DropdownMenu = ({ isOpen }) => {
    return (
        <div className={classNames('dropdown-menu', { '-isOpen': isOpen })}>
            <div className="dropdown-menu__nav">
                <div className="dropdown-menu__nav-item">
                    <span>WORLD NEWS</span>
                </div>
                <div className="dropdown-menu__nav-item">
                    <span>TRAVEL</span>
                </div>
                <div className="dropdown-menu__nav-item">
                    <span>TECHNOLOGY</span>
                </div>
                <div className="dropdown-menu__nav-item">
                    <span>CITY</span>
                </div>
                <div className="dropdown-menu__nav-item">
                    <span>CULTURE</span>
                </div>
                <div className="dropdown-menu__nav-item">
                    <span>MORE...</span>
                </div>
            </div>
        </div>
    );
};

DropdownMenu.propTypes = {
    isOpen: PropTypes.bool
};

DropdownMenu.defaultProps = {
    isOpen: false
};

export default DropdownMenu;
