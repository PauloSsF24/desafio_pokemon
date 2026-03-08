import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PokemonForm from "@/components/PokemonForm";

test("envia formulário com dados preenchidos", async () => {

  const onSubmit = jest.fn();

  render(<PokemonForm onSubmit={onSubmit} />);

  await userEvent.type(screen.getByPlaceholderText("Nome"), "Pikachu");
  await userEvent.type(screen.getByPlaceholderText("Tipo"), "Elétrico");

  await userEvent.click(screen.getByText("Salvar Pokémon"));

  expect(onSubmit).toHaveBeenCalled();

});