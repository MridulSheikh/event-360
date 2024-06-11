import { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProgressBar } from "react-loader-spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import uploadImage from "@/lib/uploadImage";
import ImageUpload from "../ImageUpload";
import {
  TDataService,
  updateServiceApi,
} from "@/api/admin/services/servicesApi";

type TCreateItemModal = {
  id: string;
  img: string;
  title: string;
  discription: string;
  isOpen: boolean;
  handleModalController: () => void;
};

type Inputs = {
  title: string;
  discription: string;
};

const UpdateServiceModal = ({
  id,
  img,
  title,
  discription,
  isOpen,
  handleModalController,
}: TCreateItemModal) => {
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
    mutationFn: async (data: TDataService) => {
      return await updateServiceApi(id as string, data as TDataService);
    },
    onSuccess: () => {
      setIsSuccess(true);
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: () => {
      setIsError(true);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let imgUrl = img;
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

  const modalOpenController = () => {
    handleModalController();
    setIsSuccess(false);
    setIsError(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={modalOpenController}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>update New Service</DialogTitle>
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
                    Suceessfully updated Service!
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
                    <div className="overflow-y-scroll h-96 scrollbar-hide">
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
                            {...register("title", {
                              required: "Title is required",
                            })}
                            defaultValue={title}
                            type="text"
                            className=" w-full text-md px-3 py-2 rounded-md border bg-primary-foreground"
                          />
                          {errors.title && (
                            <p className=" text-red-600 text-xs mt-2">
                              {errors.title.message}
                            </p>
                          )}
                        </div>
                        <div className="mt-5">
                          <label htmlFor="" className=" block">
                            Description
                          </label>
                          <textarea
                            defaultValue={discription}
                            {...register("discription", {
                              required: "Descritption is required",
                            })}
                            className=" w-full text-md px-3 py-2 rounded-md border bg-primary-foreground h-40 resize-none"
                          />
                          {errors.discription && (
                            <p className=" text-red-600 text-xs mt-2">
                              {errors.discription.message}
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

export default UpdateServiceModal;
