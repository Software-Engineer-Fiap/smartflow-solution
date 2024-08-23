import React, { useState } from 'react';

import './styles.scss';

import { MdKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({ selected, setSelected, type, onChange }) => {
    const [isActive, setIsActive] = useState(false);

    const description = ['lider', 'consultor', 'gerente'];
    const seniority = ['junior', 'pleno', 'senior'];

    const updateDropdown = () => {
        
    };

    return (
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>
                <span>{selected}</span>

                <MdKeyboardArrowDown />
            </div>
            {isActive &&
                <div className='dropdown-content'>
                    {(type === 'seniority' ? seniority : description).map((item, index) =>
                        <div
                            key={index}
                            className={'dropdown-item-'+item}
                            onClick={() => { setSelected(item); setIsActive(false) }}
                        >
                            {item}
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default Dropdown;