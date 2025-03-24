import { useEffect } from 'react';

const imagePaths = [
  '/images/Home/hero.webp',
  '/images/Home/healing.webp',
  '/images/Home/healthcareservices.webp',
  '/images/Home/medicalassistance.webp',
  '/images/Home/worldclasstraetment.webp',
  '/images/Home/accomodation.webp',
];

export default function ImagePreloader() {
  useEffect(() => {
    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  }, []);

  return null;
}
