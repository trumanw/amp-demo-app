import { SearchSpace as TSearchSpace } from "../api/searchSpace/SearchSpace";

export const SEARCHSPACE_TITLE_FIELD = "id";

export const SearchSpaceTitle = (record: TSearchSpace): string => {
  return record.id?.toString() || String(record.id);
};
