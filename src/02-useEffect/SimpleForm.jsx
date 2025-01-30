import React from "react";
import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "mireia",
        email: "mireia@gmail.com",
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

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
            <h1>Formulario Simple</h1>
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
            {username === "mireia1" && <Message />}
        </>
    );
};
