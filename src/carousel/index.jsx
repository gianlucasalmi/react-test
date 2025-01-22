import React, { useState } from "react";

export const Carousel = () => {
    const images = [
        "https://milano.corriere.it/methode_image/2022/03/14/Milano/Foto%20Milano%20-%20Trattate/Settimio%20Benedusi-kkDH-U3330521700195KQE-656x492@Corriere-Web-Milano.jpg",
        "https://www.donnamoderna.com/content/uploads/2020/07/Immagini-rilassanti-di-panorami-naturali-830x625.jpg",
        "https://www.markcom.it/wp-content/uploads/2015/12/immagini-per-siti-web.jpg",
        "https://ilfotografo.it/wp-content/uploads/2021/07/DCM184.feature.jarrodcastaing_1405145051.jpg",
        "https://www.repstatic.it/content/contenthub/img/2023/10/10/150449789-27f85abf-28f0-4708-9e04-b2db6ab553ab.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div style={{display: "flex"}}>
            <button onClick={handlePrev} style={{width: "60px", backgroundColor: "gray", fontSize: "30px"}}>&lt;</button>
            <img src={images[currentImage]} alt="carousel" style={{ width: "800px", height: "500px" }} />
            <button onClick={handleNext} style={{width: "60px", backgroundColor: "gray", fontSize: "30px"}}>&gt;</button>
        </div>
    );
};
