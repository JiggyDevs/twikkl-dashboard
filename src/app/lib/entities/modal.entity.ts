import { entity } from "simpler-state";
import { ModalStateAttribute } from "../types";

export const defaultModalState: ModalStateAttribute = {
  type: null,
  data: null,
  isEnabled: false,
};

export const modalEntity = entity(defaultModalState);

export const setModalState = (
  data: Pick<ModalStateAttribute, "data" | "type">
) =>
  modalEntity.set((state) => ({
    ...state,
    ...data,
    isEnabled: !state.isEnabled,
  }));

export const toggleModalState = () =>
  modalEntity.set((state) => ({
    ...state,
    isEnabled: !state.isEnabled,
  }));

export const resetModalState = () => modalEntity.set(defaultModalState);
