/** * @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import Product from "../index";

describe("Check that product card render required product info", () => {
  test("card renders amount", () => {
    render(
      <Product
        product={{
          id: "123",
          description:
            "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
          price: 13,
          title: "perfume Oil",
          thumbnail: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
          category: "fragrances",
        }}
      />
    );
    const amount = screen.getByText("$13");
    expect(amount).toBeInTheDocument;
  });

  test("card renders title", () => {
    render(
      <Product
        product={{
          id: "123",
          description:
            "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
          price: 13,
          title: "perfume Oil",
          thumbnail: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
          category: "fragrances",
        }}
      />
    );
    const title = screen.getByText("perfume Oil");
    expect(title).toBeInTheDocument;
  });

  test("card renders category", () => {
    render(
      <Product
        product={{
          id: "123",
          description:
            "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
          price: 13,
          title: "perfume Oil",
          thumbnail: "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
          category: "fragrances",
        }}
      />
    );
    const title = screen.getByText("fragrances");
    expect(title).toBeInTheDocument;
  });
});
