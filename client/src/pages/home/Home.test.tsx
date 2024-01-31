import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders learn react link", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Smart Notes/i);
  expect(linkElement).toBeInTheDocument();
});