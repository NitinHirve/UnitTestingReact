import { render, screen } from "@testing-library/react";
import App from "./App";

test("header renders with react testing",()=>{
  render(<App />);
  const linkElement = screen.getByText(/This is React Testing Tutorial/i)
  expect(linkElement).toBeInTheDocument();
})

test("render login component in the document",()=>{
  const component = render(<App />);
  console.log(component);
})

