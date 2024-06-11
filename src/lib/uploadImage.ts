import { storage } from "@/config/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

const uploadImage = async (
  imageFile: File | null,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  if (imageFile === null) {
    alert("Image file not Found!");
    setLoading(false);
    return;
  }
  const imageRef = ref(storage, `images/${imageFile.name + uuidv4()}`);
  try {
    const res = await uploadBytes(imageRef, imageFile);
    const snapshot = await getDownloadURL(res.ref);
    setLoading(false);
    return snapshot;
  } catch (err) {
    alert(err);
    setLoading(false);
  }
};

export default uploadImage;
