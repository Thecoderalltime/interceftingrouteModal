import { getPhotoById } from "@/app/utils";
import React from "react";
import { getDictionary } from "../../dictionaries";
import { PhotoDetails } from "@/app/components/PhotoDetails";

const postDetailsPage = async ({params:{id,lang}}) => {
    const photo = await getPhotoById(id)
  const dectionary =  await getDictionary(lang)
   
  return (
    <PhotoDetails photo={photo} dectionary={dectionary}/>
  );
};

export default postDetailsPage;
