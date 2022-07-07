import { render, screen } from "@testing-library/react";
import App from "./App";

test("header renders with react testing",()=>{
  render(<App />);
  const linkElement = screen.getByText(/This is React Testing Tutorial/i)
  expect(linkElement).toBeInTheDocument();
})

test("render login component in the document",()=>{
   render(<App />);
  // console.log(component);
  const childElement = screen.getByLabelText("Email");
  expect(childElement).toBeTruthy();
})

