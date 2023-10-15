import modalsRoute from "~/routes/modalsRoute";
import { removeModal } from "~/store/modal/actions";
import useModal from "~/store/modal/hooks";

const Modal = () => {
  const modal = useModal();
  const currentModal = modalsRoute.find((m) => m.name === modal.name);

  return (
    <div className="inset-0 fixed bg-[color:var(--background-modal)] flex items-center justify-center z-[10]">
      <div className="bg-[color:var(--background-primary)] max-w-[600px] max-h-[90vh] overflow-auto rounded-2xl">
        {currentModal && <currentModal.element close={removeModal} />}
      </div>
    </div>
  );
};

export default Modal;
