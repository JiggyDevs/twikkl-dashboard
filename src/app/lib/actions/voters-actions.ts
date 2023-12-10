import { setModalState } from "../entities/modal.entity";

export const viewAllVoters = () =>
  setModalState({ type: "view-voters", data: null });
