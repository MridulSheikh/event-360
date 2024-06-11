import { Dialog, DialogContent } from "../dialog";

type THomeVideoModal = {
  isOpen: boolean;
  modalOpenController: () => void;
};

const HomeVideoModal = ({ isOpen, modalOpenController }: THomeVideoModal) => {
  return (
    <Dialog open={isOpen} onOpenChange={modalOpenController}>
      <DialogContent className=" h-[400px]">
        <div className="">
          <iframe
            className="rounded-md"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/7GBCHRxq3Sc?si=9AY_ysx33J2LC8to"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HomeVideoModal;
