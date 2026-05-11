import React from 'react';
import './scrollup.css';

function ScrollUp() {
    window.addEventListener("scroll", function () {
        const scrollup = this.document.querySelector(".scrollup");
        if (this.scrollY >= 560)
            scrollup.classList.add("show-scroll");
        else
            scrollup.classList.remove("show-scroll");
    })
    return (
        <button className="scrollup" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </button>
    )
}

export default ScrollUp;
