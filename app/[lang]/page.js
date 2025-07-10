import PhotoCart from "../components/PhotoCart";
import { getAllPhotos } from "../utils";
import { getDictionary } from "./dictionaries";

export default async function LangingPage({ params: { lang } }) {
  const dictonary = await getDictionary(lang);
  const photo = getAllPhotos();
  return (
    <div className="container my-4 lg:my-8">
      <PhotoCart photo={photo} />
    </div>
  );
}
