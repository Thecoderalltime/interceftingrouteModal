import { photos } from "@/data/image-data";

// get all photos
export const getAllPhotos = () => {
  return photos;
};

// get photos by id

export const getPhotoById = (Id) => {
  const singlePhoto = photos.find((photo) => photo.id === Id);
  return singlePhoto;
};
