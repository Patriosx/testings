import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { evaluate } from "mathjs";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const operationalSignals = ["+", "-", "*", "/"];
const equalSign = "=";

const Calculator = () => {
  const [value, setValue] = useState("");
  const handleClickedBtn = (e) => {
    setValue(value.concat(e.target.value));
  };
  return (
    <section>
      <h1>Calculator</h1>
      <div className="grid">
        <input value={value} readOnly />
        {rows.map((row) => {
          return (
            <div role="row">
              {row.map((number) => {
                return (
                  <button
                    onClick={handleClickedBtn}
                    value={number}
                    key={number}
                  >
                    {number}
                  </button>
                );
              })}
            </div>
          );
        })}
        {operationalSignals.map((sign) => {
          return (
            <button value={sign} onClick={handleClickedBtn}>
              {sign}
            </button>
          );
        })}
        <button value={equalSign} onClick={() => setValue(evaluate(value))}>
          {equalSign}
        </button>
      </div>
    </section>
  );
};

describe("calculator", () => {
  afterEach(cleanup);
  it("should render", () => {
    render(<Calculator />); //renderiza el componente
  });
  it("should render the title", () => {
    render(<Calculator />);
    screen.getByText("Calculator");
  });
  it("should render numbers", () => {
    render(<Calculator />);
    numbers.forEach((number) => {
      screen.getByText(number);
    });
  });
  it("should render numbers by rows of 4", () => {
    render(<Calculator />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(4);
  });
  it("should render operational signs", () => {
    render(<Calculator />);
    operationalSignals.forEach((sign) => {
      screen.getByText(sign);
    });
  });
  it("should render equal sign", () => {
    render(<Calculator />);
    screen.getByText(equalSign);
  });
  it("should render the input where we show the operatios", () => {
    render(<Calculator />);
    screen.getByRole("textbox");
  });
  it("should show the value of the button clicked", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("1");
  });
  it("should show all the numbers when the user click several numbers", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);
    const two = screen.getByText("2");
    fireEvent.click(two);
    const three = screen.getByText("3");
    fireEvent.click(three);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("123");
  });
  it("should show the numbers and operational signs", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);
    const plus = screen.getByText("+");
    fireEvent.click(plus);
    const two = screen.getByText("2");
    fireEvent.click(two);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("1+2");
  });
  it("should show the result of the operation", () => {
    render(<Calculator />);

    const one = screen.getByText("1");
    fireEvent.click(one);
    const plus = screen.getByText("+");
    fireEvent.click(plus);
    const two = screen.getByText("2");
    fireEvent.click(two);
    const equal = screen.getByText("=");
    fireEvent.click(equal);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("3");
  });
});
