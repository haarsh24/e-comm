import { useState } from "react";

export function Carousel() {
    const carouselImage = [
        "https://raw.githubusercontent.com/haarsh24/assets/main/c-1.webp",
        "https://raw.githubusercontent.com/haarsh24/assets/main/c-2.webp",
        "https://raw.githubusercontent.com/haarsh24/assets/main/c-3.webp",
        "https://raw.githubusercontent.com/haarsh24/assets/main/c-4.webp",
        "https://raw.githubusercontent.com/haarsh24/assets/main/c-6.webp",
        
        ];
const [displayImage, setDisplayImage] = useState(0);

function slideshowIndex() {
    setTimeout(() => displayImage < carouselImage.length - 1 ? setDisplayImage(displayImage + 1): setDisplayImage(0), 3500);
}
slideshowIndex();

return (
    <div className="caraousel-container">
        <img
        alt="carousel-image"
        className="image-responsive caraousel-img"
        src={carouselImage[displayImage]}
        />
    </div>
);
}