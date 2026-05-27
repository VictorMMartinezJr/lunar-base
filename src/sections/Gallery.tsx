import GalleryImage from "../components/GalleryImage";
import { GALLERY_IMAGES } from "../constants";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="gallery w-full h-auto flex overflow-x-auto scrollbar-none"
    >
      <div className="group gap-[1em] pr-[1em] flex animate-slide-left">
        {GALLERY_IMAGES.map((image, i) => (
          <GalleryImage key={i} src={image.src} alt={image.alt} />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="group gap-[1em] pr-[1em] flex animate-slide-left"
      >
        {GALLERY_IMAGES.map((image, i) => (
          <GalleryImage key={i} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
