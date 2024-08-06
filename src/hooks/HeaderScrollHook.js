import React, {useState, useEffect, useRef} from 'react';
import MenuComp from "../components/MenuComp";

const HeaderScrollHook = () => {
    const ref = useRef(null);
    let nScrollY = 0;
    let is_cls = "";

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY < window.outerHeight / 4) {
            ref.current.classList.remove('off');
            ref.current.classList.add('on');
        } else if (window.scrollY < nScrollY ) {
            ref.current.classList.remove('off');
            ref.current.classList.add('on');
        } else if (window.scrollY > window.outerHeight / 4) {
            ref.current.classList.remove('on');
            ref.current.classList.add('off');
        } else if (window.scrollY > nScrollY ) {
            ref.current.classList.remove('on');
            ref.current.classList.add('off');
        }

        if (window.location.pathname === '/') {
            if (window.scrollY === 0) {
                ref.current.classList.remove('white');
            } else if (window.scrollY > window.outerHeight / 3) {
                ref.current.classList.add('white');
            }
        }
        nScrollY =  window.scrollY;
    };

    if (window.location.pathname !== '/'){
        is_cls = " white";
    }

    return (
        <header className={"header" + is_cls} ref={ref} >
            <div className={"header-wrap"}>
                <span className={"header-logo"}/>
                <MenuComp/>
            </div>
        </header>
    );
};

export default HeaderScrollHook;
