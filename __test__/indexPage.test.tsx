/** * @jest-environment jsdom */
import "@testing-library/jest-dom/extend-expect";
import { getByText, queryByText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { allProducts } from "../__mockData__/allProducts";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Home from "../pages/index";

const server = setupServer(
  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(allProducts));
  })
);

const queryClient = new QueryClient();

beforeEach(() => server.listen({ onUnhandledRequest: "bypass" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Data fetching and product search", () => {
  test("That user can type in the search filter", async () => {
    const { getByPlaceholderText, getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    const input = getByRole("searchbox");
    await userEvent.type(input, "iphone");
    expect(input).toHaveValue("iphone");
  });

  test("That user can type in the search filter and data would would change", async () => {
    const { getByRole, queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    const input = getByRole("searchbox");
    await userEvent.type(input, "iphone");
    const text = queryByText("Brown Perfume");
    expect(text).not.toBeInTheDocument();
  });
});
