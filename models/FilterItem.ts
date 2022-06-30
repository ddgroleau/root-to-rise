import { RefObject } from "react";

interface FilterItem<T> {
    elements:T[];
    references:RefObject<HTMLInputElement>[];
};

export default FilterItem;