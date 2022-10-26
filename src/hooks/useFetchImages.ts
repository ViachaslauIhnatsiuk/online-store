import { useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function useFetchImages() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const storage = getStorage();

  return {
    imageUrl,
    getImageUrls(name: string): void {
      getDownloadURL(ref(storage, `images/${name}.webp`))
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }
};

export { useFetchImages };