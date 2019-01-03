import { CONNECTION_COMPANY, CONNECTION_STUDENT } from "./types";

export const selectCompany = id => ({
  type: CONNECTION_COMPANY,
  payload: id
});

export const selectStudent = id => ({
  type: CONNECTION_STUDENT,
  payload: id
});

