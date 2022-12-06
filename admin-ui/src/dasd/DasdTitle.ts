import { Dasd as TDasd } from "../api/dasd/Dasd";

export const DASD_TITLE_FIELD = "id";

export const DasdTitle = (record: TDasd): string => {
  return record.id || record.id;
};
