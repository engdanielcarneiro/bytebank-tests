import { render } from "@testing-library/react";
import React from "react";
import Transacoes from "./Transacoes";

describe("Componente de listagem de transações", () => {
  it("O snapshot do componente deve sempre ser o mesmo", () => {
    const transacoes = [
      {
        id: 1,
        transacao: "saque",
        valor: "20.00",
        data: "18/03/2022",
      },
      {
        id: 2,
        transacao: "deposito",
        valor: "30.00",
        data: "15/03/2022",
      },
    ];
    const { container } = render(<Transacoes transacoes={transacoes} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
