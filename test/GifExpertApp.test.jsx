import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifexpertApp/>", () => {
    test("debe hacer match con el snapshot", () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
        //screen.debug();
    });

    test("Debe de mostrar el titulo en el componente", () => {
        render(<GifExpertApp />);
        expect(screen.getByText("GifExpertApp"));
    });

    test("No debe agregar una categoría si ya existe", () => {
        render(<GifExpertApp />);

        const input = screen.getByPlaceholderText("search gifs");
        const form = screen.getByRole("form", { name: "form" });

        fireEvent.change(input, { target: { value: "Dragon Ball" } });
        fireEvent.submit(form);

        const categories = screen.getAllByText("Dragon Ball");
        expect(categories.length).toBe(1);
    });
});
