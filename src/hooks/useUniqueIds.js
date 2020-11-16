import { useRef } from "react";
import uniqid from "uniqid";

export const useUniqueIds = (count) => useRef([...new Array(count)].map(() => uniqid())).current;
