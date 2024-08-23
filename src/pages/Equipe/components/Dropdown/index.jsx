import React, { useState, useEffect, useRef } from 'react';

import './styles.scss';

import { MdKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({ selected, setSelected, type }) => {
    const [isActive, setIsActive] = useState(false);

    const description = ['Líder', 'Consultor', 'Gerente'];
    const seniority = ['Junior', 'Pleno', 'Senior'];

    function useOuterClick(callback) {
        const callbackRef = useRef();
        const innerRef = useRef();

        useEffect(() => { callbackRef.current = callback; });

        useEffect(() => {
            document.addEventListener("click", handleClick);
            return () => document.removeEventListener("click", handleClick);
            function handleClick(e) {
                if (innerRef.current && callbackRef.current &&
                    !innerRef.current.contains(e.target)
                ) callbackRef.current(e);
            };
        }, []);

        return innerRef;
    };

    const innerRef = useOuterClick(() => setIsActive(false));

    return (
        <div className='dropdown' ref={innerRef}>
            <div className='dropdown-btn' onClick={() => setIsActive(!isActive)}>
                <span>{selected}</span>

                <MdKeyboardArrowDown />
            </div>
            {isActive &&
                <div className='dropdown-content'>
                    {(type === 'seniority' ? seniority : description).map((item, index) =>
                        <div
                            key={index}
                            className={'dropdown-item-' + item.toLocaleLowerCase()}
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