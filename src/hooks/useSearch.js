import { useRef } from "react";

export const useSearch = (searchParams,queryParamToRetrieve) => {
    const searchParamsCurrent = new URLSearchParams(useRef(searchParams).current);
    const searchParamsValues = searchParamsCurrent.get(queryParamToRetrieve);

    return searchParamsValues;
};
