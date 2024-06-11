import { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProgressBar } from "react-loader-spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import uploadImage from "@/lib/uploadImage";
import ImageUpload from "../ImageUpload";
import axios from "../../../config/axios";

type TAddRecentEventModal = {
  isOpen: boolean;
  modalOpenController: () => void;
};

type Inputs = {
  title: string;
};

const AddRecentEventModal = ({
  isOpen,
  modalOpenController,
}: TAddRecentEventModal) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { handleSubmit, reset } = useForm<Inputs>();

  type TData = { img: string | null };

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: TData) => {
      return await axios.post("/recent-event", data as TData);
    },
    onSuccess: () => {
      setIsSuccess(true);
      queryClient.invalidateQueries({ queryKey: ["recent-events"] });
    },
    onError: () => {
      setIsError(true);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async () => {
    const body = {
      img: await uploadImage(imageFile as File | null, setLoading),
    };
    if (imageFile === null) return;
    await mutateAsync(body as TData);
    reset();
  };

  const onOpenChange = () => {
    modalOpenController();
    setIsSuccess(false), setIsError(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Recent Events</DialogTitle>
        </DialogHeader>
        <>
          {isError ? (
            <div>
              <h2 className=" text-center text-red-600">
                Something went wrong!
              </h2>
            </div>
          ) : (
            <>
              {isSuccess ? (
                <div>
                  <h2 className=" text-center text-green-600">
                    Suceessfully Create Recent Event!
                  </h2>
                </div>
              ) : (
                <>
                  {loading || isPending ? (
                    <div>
                      <ProgressBar
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="w-full"
                      />
                    </div>
                  ) : (
                    <div>
                      <ImageUpload
                        setImageFile={
                          setImageFile as Dispatch<SetStateAction<File>>
                        }
                      />
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" mt-5 flex justify-end">
                          <button className=" bg-secondary text-white px-5 py-2 rounded-md">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </>
      </DialogContent>
    </Dialog>
  );
};

export default AddRecentEventModal;
