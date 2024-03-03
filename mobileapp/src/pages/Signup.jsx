import { Button, TextInput } from "flowbite-react";
import React from "react";
import CurrentTime from "../components/CurrentTime";
import Icons from "../components/Icons";

const Signup = () => {
  const userSignup = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="h-screen flex flex-col  items-center  max-w-full p-4">
      <div className="flex justify-between w-full self">
        <div className="">
          <CurrentTime />
        </div>
        <div className="">
          <Icons />
        </div>
      </div>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="">
          <h3 className="text-xl font-semibold">Enter Your Mobile Number</h3>
          <p className="text-sm text-gray-500">
            We will send you the 4 digit verification code
          </p>
        </div>
        <div className="w-full">
          <TextInput
            className="mt-2 w-full"
            placeholder="Enter Your Mobile Number"
          ></TextInput>
          <Button className="bg-[#ff6d6a] text-white w-full mt-4" color="white">
            Send Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
