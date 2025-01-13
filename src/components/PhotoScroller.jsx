import styles from "./PhotoScroller.module.css";
import { useState } from "react";

function PhotoScroller({ photos }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  function changePhoto(direction) {
    const numPhotos = photos.length;
    const index = currentPhotoIndex;
    if (index === 0 && direction === "previous") {
      setCurrentPhotoIndex(numPhotos - 1);
    } else if (index === numPhotos - 1 && direction === "next") {
      setCurrentPhotoIndex(0);
    } else if (direction === "next") {
      setCurrentPhotoIndex(index + 1);
    } else {
      setCurrentPhotoIndex(index - 1);
    }
  }

  return (
    <div className={styles.photoScroller}>
      <button
        className={`${styles.button} ${styles.previousButton}`}
        onClick={() => changePhoto("previous")}
      >
        ←
      </button>
      <img
        className={styles.photo}
        src={photos[currentPhotoIndex]}
        alt={`Photo ${currentPhotoIndex + 1}`}
      />
      <button
        className={`${styles.button} ${styles.nextButton}`}
        onClick={() => changePhoto("next")}
      >
        →
      </button>
    </div>
  );
}

export default PhotoScroller;
