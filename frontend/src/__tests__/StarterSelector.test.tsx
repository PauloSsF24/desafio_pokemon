import { render, screen, fireEvent } from "@testing-library/react";
import StarterSelector from "@/components/StarterSelector";
import { ThemeProvider } from "@/context/ThemeContext";

describe("StarterSelector", () => {
  it("seleciona Charmander e salva tema", () => {
    render(
      <ThemeProvider>
        <StarterSelector />
      </ThemeProvider>
    );

    const charmander = screen.getByText("Charmander");

    fireEvent.click(charmander);

    expect(charmander).toBeInTheDocument();
  });
});