import Modal from "@/app/components/Modal";
import { PhotoDetails } from "@/app/components/PhotoDetails";
import {  getPhotoById } from "@/app/utils";
import { getDictionary } from "../../dictionaries";

const page = async ({ params: { id, lang } }) => {
 const photo = await getPhotoById(id)
   const dectionary =  await getDictionary(lang)
  
  return (
    <Modal>
      <PhotoDetails lang={lang} id={id} photo={photo}/>
      
    </Modal>
  );
};

export default page;
