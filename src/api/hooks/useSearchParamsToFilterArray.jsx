import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useSearchParamsToFilterArray(key) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchArray, setsearchArray] = useState((searchParams.size && searchParams.get(key).split(",")) || []);

    function handleChange(event) {
        setsearchArray(event.target.value.split(" "));
        setSearchParams({ [key]: [event.target.value.split(" ")] });
    }

    function handleClick() {
        setsearchArray([]);
        setSearchParams({});
    }

    return { searchArray, handleChange, handleClick };
}
