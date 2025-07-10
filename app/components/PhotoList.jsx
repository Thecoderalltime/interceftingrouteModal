import Image from "next/image";
import Link from "next/link";

const PhotoList = ({ photo}) => {
  return (
    <Link href={`./photo/${photo?.id}`} className="group border bg-gray-400">
      <Image src={photo?.url} height={200} width={300} alt="imgae" />

      <div className="title-container">
        <h4 className="title">{photo?.title}</h4>
      </div>
    </Link>
  );
};

export default PhotoList;
