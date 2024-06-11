import { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProgressBar } from "react-loader-spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import uploadImage from "@/lib/uploadImage";
import ImageUpload from "../ImageUpload";
import { updateEventItem } from "@/api/admin/event-items/eventItemApi";

type UpdateItemModal = {
  id: string;
  img: string;
  title: string;
  isOpen: boolean;
  modalOpenController: () => void;
};

type Inputs = {
  title: string;
};

const UpdateItemModal = ({
  title,
  img,
  id,
  isOpen,
  modalOpenController,
}: UpdateItemModal) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  type TData = Extract<Inputs, { img: string }>;

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data) => {
      return await updateEventItem(id, data as TData);
    },
    onSuccess: () => {
      setIsSuccess(true);
      queryClient.invalidateQueries({ queryKey: ["event-items"] });
    },
    onError: () => {
      setIsError(true);
    },
  });

  // handle submition

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let imgUrl = img;

    // check imgUrl has or null
    if (imageFile) {
      imgUrl = (await uploadImage(
        imageFile as File | null,
        setLoading
      )) as string;
    }
    const body = {
      ...data,
      img: imgUrl,
    };
    await mutateAsync(body as TData);
    reset();
  };

  const onOpenChange = () => {
    modalOpenController();
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>update Events Item</DialogTitle>
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
                    Suceessfully update Event!
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
                        defaultImage={img}
                      />
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-5">
                          <label htmlFor="" className=" block">
                            Title
                          </label>
                          <input
                            defaultValue={title}
                            {...register("title", {
                              required: "Title is required",
                              maxLength: 20,
                            })}
                            type="text"
                            className=" w-full text-md px-3 py-2 rounded-md border bg-primary-foreground"
                          />
                          {errors.title && (
                            <p className=" text-red-600 text-xs mt-2">
                              {errors.title.message}
                            </p>
                          )}
                        </div>
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

export default UpdateItemModal;
