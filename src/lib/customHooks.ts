import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../contexts/ItemContextProvider";

export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T) => void] {
    const [value, setValue] = useState(() =>
        JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
    );
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    return [value, setValue];
}

export function useItemcontext() {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error(
            "use of context should be within the children of react you are using outside of it"
        );
    }
    return context;
}
