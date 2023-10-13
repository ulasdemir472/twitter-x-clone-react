import { useSelector } from "react-redux";
const useModal = () => useSelector((state) => state.modal.modal);

export default useModal;
