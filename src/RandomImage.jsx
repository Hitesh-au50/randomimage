import React, { useState, useEffect } from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FaTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const RandomImage = () => {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  // Function to fetch a random image
  const fetchRandomImage = async () => {
    try {
      const response = await fetch("https://picsum.photos/400"); // Specify the desired image size here
      const randomImageUrl = response.url;
      setRandomImage(randomImageUrl);
    } catch (error) {
      console.error("Error fetching random image:", error);
    }
  };

  return (
    <div className="random-image-container">
      {/* Heading */}
      <h2 className="heading display-4 text-center mb-4">Random Images</h2>

      {/* Random Image */}
      {randomImage ? (
        <img src={randomImage} alt="" className="random-image img-fluid" />
      ) : (
        <div className="loading">Loading...</div>
      )}

      {/* Share Buttons */}
      <div className="share-buttons mt-3">
        {/* Facebook Share Button */}
        <FacebookShareButton url={window.location.href} quote="Check out this random image!" className="btn btn-primary share-button">
          <FaFacebookF className="share-icon" />
          <span className="button-text">Facebook</span>
        </FacebookShareButton>

        {/* Twitter Share Button */}
        <TwitterShareButton url={window.location.href} title="Check out this random image!" className="btn btn-primary share-button">
          <FaTwitter className="share-icon" />
          <span className="button-text">Twitter</span>
        </TwitterShareButton>

        {/* WhatsApp Share Button */}
        <WhatsappShareButton url={window.location.href} title="Check out this random image!" className="btn btn-primary share-button">
          <FaWhatsapp className="share-icon" />
          <span className="button-text">WhatsApp</span>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default RandomImage;
