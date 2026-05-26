const Footer = () => {
  return (
    <footer className="footer-section relative col-center after:content-[''] after:absolute after:left-0 after:bg-black after:z-30 after:w-[110%] after:h-10 after:-top-5 after:blur-lg">
      <h2
        className="general-title text-center text-white py-5 z-10 relative"
        style={{
          filter: `
            drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))  /* Inner white glow */
            drop-shadow(0 0 15px rgba(255, 255, 255, 0.7)) /* Outer white glow */
            drop-shadow(0 0 30px rgba(255, 255, 255, 0.1)) /* Far outer fade */ `,
        }}
      >
        NASA
      </h2>

      <video
        src="assets/videos/moving-stars.mp4"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        poster="assets/images/stars-poster.png"
        className="absolute w-full h-full inset-0 object-cover pointer-events-none z-0"
      />

      {/* Social media icons row. */}
      <div className="flex-center gap-5 relative z-10 my-5">
        <div className="social-btn">
          <img src="assets/images/footer/yt.svg" alt="YouTube" />
        </div>
        <div className="social-btn">
          <img src="assets/images/footer/insta.svg" alt="Instagram" />
        </div>
        <div className="social-btn">
          <img src="assets/images/footer/tiktok.svg" alt="TikTok" />
        </div>
      </div>

      {/* links */}
      <ul className="flex justify-center items-center gap-4 mb-5 relative z-10 lg:text-xl cursor-pointer">
        <li>Artemis Missions</li>
        <li>Lunar Base</li>
        <li>Mars Missions</li>
      </ul>

      <div className="copyright-box flex-center">
        <p>&copy;2026 VMMJr. - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
