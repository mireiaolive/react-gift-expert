import React from "react";
import { render, screen } from "@testing-library/react";
import { GifItem } from "./../../src/components/GifItem";

describe("Probando componente <GifItem/>", () => {
    const title = "Tim Burton Film GIF by Tech Noir";
    const url =
        "https://media4.giphy.com/media/l396BoOTIFem9xqQU/giphy.gif?cid=638e8c3cq4ztdf635cj607e70x2q3w7z0k6y8h04e3g6vw79&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    test("debe hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test("debe mostrar el url y el alt indicado de la imagen", () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test("debe de mostrar el titulo en el componente", () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
