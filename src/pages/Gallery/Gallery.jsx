import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../../components/Navbar/Navbar";

const images = [
    {
        original: "https://i.ibb.co/q03gXbM/david1.jpg",
        thumbnail: "https://i.ibb.co/q03gXbM/david1.jpg",
    },
    {
        original: "https://i.ibb.co/wWXf3ns/david4.jpg",
        thumbnail: "https://i.ibb.co/wWXf3ns/david4.jpg",
    },
    {
        original: "https://i.ibb.co/87bJ7SF/david3.jpg",
        thumbnail: "https://i.ibb.co/87bJ7SF/david3.jpg",
    },
    {
        original: "https://i.ibb.co/hKkvk6Z/david2.jpg",
        thumbnail: "https://i.ibb.co/hKkvk6Z/david2.jpg",
    },
];

function Gallery() {


    return (
        <>
            <Navbar ></Navbar>
            <ImageGallery items={images} />
        </>
    )
}

export default Gallery;
