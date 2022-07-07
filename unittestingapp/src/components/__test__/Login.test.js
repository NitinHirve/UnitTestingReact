import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login, {validateEmail} from '../Login';
import { fireEvent } from '@testing-library/react';

describe("Test the Login Component",()=>{


    test("render the login form with 2 buttons",async ()=>{
        render(<Login />)
        const buttonList =await  screen.findAllByRole("button");
        // console.log(buttonList);
        expect(buttonList).toHaveLength(2);
    })

    test("should fail on email validation",()=>{
        const testEmail="nitin.com";
         expect(validateEmail(testEmail)).not.toBe(true);
    })

    test("Email input field should accept email",()=>{
        render(<Login />);
        const email = screen.getByPlaceholderText("Enter email");
        userEvent.type(email,"nitin");
        expect(email.value).not.toMatch("nitin@gmail.com");
    })

    test("Password should have type password",()=>{
        render(<Login />);
        const password = screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type","password");
    })

    test("should be able to reset the form",()=>{
      
        render(<Login />)
        const resetBtn =  screen.getByTestId("reset");
        const emailInputNode = screen.getByPlaceholderText("Enter email");
        const passwordInputNode = screen.getByPlaceholderText("Password");

        fireEvent.click(resetBtn)
        expect(emailInputNode.value).toMatch("");
        expect(passwordInputNode.value).toMatch("");

    })

    test("should be able to submit the form",()=>{
      
        render(<Login />)
        const submitBtn =  screen.getByTestId("submit");
        const emailInputNode = screen.getByPlaceholderText("Enter email");
        const passwordInputNode = screen.getByPlaceholderText("Password");

        userEvent.type(emailInputNode,"hirvenitin@gmail.com");
        userEvent.type(passwordInputNode,"12345")

        userEvent.click(submitBtn);

        const userInfo = screen.getByText("hirvenitin@gmail.com")

        expect(userInfo).toBeInTheDocument();

    })

    test("should give error on incorrect email",()=>{
        render(<Login />);
        const submitBtn = screen.getByTestId("submit");
        const emailInputNode = screen.getByPlaceholderText("Enter email");
        const passwordInputNode = screen.getByPlaceholderText("Password");

        userEvent.type(emailInputNode,"hirvenitin.com");
        userEvent.type(passwordInputNode,"123");

        fireEvent.click(submitBtn);

        const errorMsg = screen.getByText("Email is not valid");

        expect(errorMsg).toBeInTheDocument();
    })


})

