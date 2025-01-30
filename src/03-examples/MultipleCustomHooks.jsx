import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
    const { data } = useFetch();

    return (
        <>
            <h1>Informacion de pokemons</h1>
            <hr />
            <pre>{data}</pre>
        </>
    );
};
