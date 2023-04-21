const ImageViewer = ({ images, currentImage }: any) => {

    return (
        <div className="grid-container2">
            <img className="grid-item2" src={images[currentImage]} />
            </div>
    );
}
export default ImageViewer;