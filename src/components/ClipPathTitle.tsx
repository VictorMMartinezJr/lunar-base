interface ClipPathTitleProps {
  title: string;
  color: string;
  bg: string;
  className?: string;
  borderColor?: string;
}

const ClipPathTitle = ({
  title,
  color,
  bg,
  className,
  borderColor,
}: ClipPathTitleProps) => {
  return (
    <div className="clip_path_title">
      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          borderColor: borderColor,
        }}
        className={`${className} text-nowrap opacity-0`}
      >
        <div
          className="py-7 md:py-10 px-3 xs:px-5 sm:px-14"
          style={{
            backgroundColor: bg,
          }}
        >
          <h2
            style={{
              color: color,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
