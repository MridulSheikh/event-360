import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProgressBar } from "react-loader-spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import uploadImage from "@/lib/uploadImage";
import ImageUpload from "../ImageUpload";
import { postEventItem } from "@/api/admin/event-items/eventItemApi";

type TCreateItemModal = {
  children: ReactNode;
};

type Inputs = {
  title: string;
};

const CreateItemModal = ({ children }: TCreateItemModal) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      return await postEventItem(data as TData);
    },
    onSuccess: () => {
      setIsSuccess(true);
      queryClient.invalidateQueries({ queryKey: ["event-items"] });
    },
    onError: () => {
      setIsError(true);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const body = {
      ...data,
      img: await uploadImage(imageFile as File | null, setLoading),
    };
    if (imageFile === null) return;
    await mutateAsync(body as TData);
    reset();
  };

  const modalOpenController = () => {
    setIsOpen((prev) => !prev);
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={modalOpenController}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Events Item</DialogTitle>
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
                    Suceessfully Post Event!
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
                        <div className="mt-5">
                          <label htmlFor="" className=" block">
                            Title
                          </label>
                          <input
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

export default CreateItemModal;
