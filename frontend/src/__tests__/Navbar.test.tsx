import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("deve renderizar os links principais", () => {
    render(<Navbar />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Registrar")).toBeInTheDocument();
  });
});