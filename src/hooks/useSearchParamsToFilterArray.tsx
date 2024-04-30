import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "./useDebounce";

export default function useSearchParamsToFilterArray(key: string) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchArray, setsearchArray] = useState((!!searchParams && searchParams.size && searchParams?.get(key).split(",")) || []);
    const [inputValue, setInputValue] = useState(searchArray.join(" "));

    const debouncedRequest = useDebounce(() => {
        setSearchParams({ [key]: [inputValue.split(" ")] } as unknown as URLSearchParams);
        setsearchArray(inputValue.split(" "));
    });

    function handleChange(event) {
        const value = event.target.value;
        setInputValue(value);
        debouncedRequest();
    }

    function handleClick() {
        setsearchArray([]);
        setSearchParams({});
        setInputValue("");
    }

    return { inputValue, searchArray, handleChange, handleClick };
}
