import modalsRoute from "~/routes/modalsRoute";
import useModal from "~/store/modal/hooks";

const Modal = () => {
  const modal = useModal();
  const currentModal = modalsRoute.find((m) => m.name === modal.name);

  return (
    <div className="inset-0 fixed bg-[#5b7083]/40 flex items-center justify-center z-[10]">
      <div className="bg-[color:var(--background-primary)] max-w-[600px] max-h-[90vh] overflow-auto rounded-2xl">
        {currentModal && <currentModal.element />}
      </div>
    </div>
  );
};

export default Modal;
