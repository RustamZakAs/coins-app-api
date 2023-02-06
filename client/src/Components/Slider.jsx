import React, { useState } from 'react'

function Slider() {
    let [slideIndex, setSlideIndex] = useState(1);

    const showDivs = (n) => {
        var i;
        var x = document.body.querySelectorAll(".mySlides");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        // for (i = 0; i < x.length; i++) {
        //     x[i].style.display = "none";
        // }
        // x[slideIndex - 1].style.display = "block";
    }

    const plusDivs = (n) => {
        showDivs(slideIndex += n);
    }

    showDivs(slideIndex);

    return (
        <div className="w3-content w3-display-container">
            <img className="mySlides" src='../images/1manat.jpg' alt='1' style={{display: 'block'}} />
            <img className="mySlides" src='../images/5manat.jpg' alt='2'/>
            <img className="mySlides" src='../images/20manat.jpg' alt='3' />
            <img className="mySlides" src='../images/50manat.jpg' alt='4' />

            <button className="w3-button w3-black w3-display-left" onclick={plusDivs(-1)}>&#10094;</button>
            <button className="w3-button w3-black w3-display-right" onclick={plusDivs(1)}>&#10095;</button>
        </div>
    )
}

export default Slider