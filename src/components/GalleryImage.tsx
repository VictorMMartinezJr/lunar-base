interface GalleryImage {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImage) => {
  return (
    <div className="card w-100 h-100 relative p-2 text-center content-center rounded-lg">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default GalleryImage;
