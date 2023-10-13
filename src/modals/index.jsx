import { useSelector } from "react-redux";
import modalsRoute from "~/routes/modalsRoute";

const Modal = () => {
  const modal = useSelector((state) => state.modal.modal);
  const currentModal = modalsRoute.find((m) => m.name === modal.name);

  return (
    <div className="inset-0 fixed bg-black/50 flex items-center justify-center z-[10]">
      <div className="bg-black">{currentModal && <currentModal.element />}</div>
    </div>
  );
};

export default Modal;
