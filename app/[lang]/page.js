import PhotoCart from "../components/PhotoCart";
import { getAllPhotos } from "../utils";

export default async function LangingPage() {
  const photo = getAllPhotos();
  return (
    <div className="container my-4 lg:my-8">
      <PhotoCart photo={photo} />
    </div>
  );
}
