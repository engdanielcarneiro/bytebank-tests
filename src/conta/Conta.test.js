import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Conta from "./Conta";

describe("Componente de conta", () => {
  it("Exibir o saldo da conta com formatação monetária", () => {
    render(<Conta saldo={1000} />);
    const saldo = screen.getByTestId("saldo-conta");

    expect(saldo.textContent).toBe("R$ 1000");
  });

  it("Não chama a função de realizar transação quando o botão é clicado quando o form não está preenchido", () => {
    const funcaoRealizarTransacao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />);

    fireEvent.click(screen.getByText("Realizar operação"));

    expect(funcaoRealizarTransacao).not.toHaveBeenCalled();
  });
});
