import DisplayText from "./DisplayText";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test DisplayText", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(
      <DisplayText
        getUserFullname={function (username: string): Promise<string> {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(baseElement).toBeInTheDocument();
  });

  it("receives input text", () => {
    const testUser = "testUser";
    const { getByTestId } = render(
      <DisplayText
        getUserFullname={function (username: string): Promise<string> {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const input = screen.getByTestId("user-input");
    fireEvent.change(input, { target: { value: testUser } });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(testUser);
  });

  it("shows welcome message", () => {
    const testuser = "testuser";
    const msg = `Welcome to React testing ${testuser}!`; // Removed the extra spaces
    const { getByTestId } = render(
      <DisplayText
        getUserFullname={function (username: string): Promise<string> {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const input = screen.getByTestId("user-input");
    const label = screen.getByTestId("final-msg");
    fireEvent.change(input, { target: { value: testuser } });
    const btn = screen.getByTestId("input-submit");
    fireEvent.click(btn);
    expect(label).toBeInTheDocument();
    expect(label.innerHTML).toBe(msg);
  });

  it("matches snapshot", () => {
    const { baseElement } = render(
      <DisplayText
        getUserFullname={function (username: string): Promise<string> {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
