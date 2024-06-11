import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import AddImage from "../icons/AddImage";
import { cn } from "@/lib/utils";

type TIamgeUpload = {
  setImageFile: Dispatch<SetStateAction<File>>;
  defaultImage?: string;
};

const ImageUpload = ({ setImageFile, defaultImage }: TIamgeUpload) => {
  const [image, setImage] = useState<string | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    const file = e.currentTarget.files[0];

    // convert file to blob
    const blob = file.slice(0, file.size, file.type) as Blob;

    // upload img on firebasestorage
    const imageUrl = URL.createObjectURL(blob);
    setImageFile(file);

    // set img url
    setImage(imageUrl);
  };
  return (
    <div className=" bg-primary-foreground w-full h-60 border border-dashed rounded-lg mt-3 relative cursor-pointer">
      {image || defaultImage ? (
        <div className="relative w-full h-full">
          <img
            src={image || defaultImage}
            className=" object-contain h-full mx-auto"
          />
        </div>
      ) : (
        <div className=" absolute top-[30%] right-[42%] text-center">
          <AddImage className="mx-auto text-xl text-gray-400" />
          <span className=" mt-5 text-primary text-sm">Click to Open</span>
        </div>
      )}
      <input
        type="file"
        onChange={handleImageChange}
        className={cn(
          " w-full h-full opacity-0 ursor-pointer z-40 cursor-pointer",
          {
            "absolute top-0 right-0": image || defaultImage,
          }
        )}
      />
    </div>
  );
};

export default ImageUpload;
