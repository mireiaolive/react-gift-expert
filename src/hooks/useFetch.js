import { useEffect, useState } from "react";

export const useFetch = () => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
        getFetch();

        return () => {};
    }, []);

    const getFetch = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: { code: response.status, message: response.statusText },
            });
            return;
        }
        const data = await response.json();

        console.log({ data });
    };

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};
