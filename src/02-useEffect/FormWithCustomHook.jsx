import React from "react";
import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password, onResetForm } =
        useForm({
            username: "",
            email: "",
            password: "",
        });

    // const { username, email, password } = formState;

    useEffect(() => {
        // console.log("useEffect called!");
    }, []);

    useEffect(() => {
        // console.log("email changed!");
    }, [email]);

    useEffect(() => {
        // console.log("name changed!");
    }, [username]);

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            ></input>
            <input
                type="email"
                className="form-control mt-2"
                placeholder="mireia@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            ></input>
            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            ></input>

            <button onClick={onResetForm} className="btn btn-primary mt-2">
                Borrar
            </button>
        </>
    );
};
