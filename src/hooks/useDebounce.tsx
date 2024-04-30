import { useRef, useEffect, useMemo } from "react";
import { debounce } from "lodash";

export const useDebounce = (callback: () => any) => {
    const ref = useRef<any>();

    useEffect(() => {
        console.log(ref.current);
        ref.current = callback;
    }, [callback]);

    const debouncedCallback = useMemo(() => {
        const func = () => {
            ref.current?.();
        };

        return debounce(func, 1000);
    }, []);

    return debouncedCallback;
};
