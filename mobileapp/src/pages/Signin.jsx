import React, { useState, useRef } from "react";
import Icons from "../components/Icons";
import CurrentTime from "../components/CurrentTime";
import { Button } from "flowbite-react";

const Signin = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      refs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.keyCode === 8 && index > 0 && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      refs[index - 1].current.focus();
    }
  };

  console.log(otp.join(""))
  return (
    <div className="h-screen flex flex-col items-center max-w-full p-4">
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
          <h3 className="text-xl font-semibold">OTP Verification</h3>
          <p className="text-sm text-gray-500">
            Enter the verification code we just sent on your mobile Number
          </p>
        </div>
        <div className="w-full">
          <div className="flex justify-between mt-2 w-full gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={refs[index]}
                type="text"
                maxLength={1}
                className="w-1/6 text-center rounded-md py-2 px-3 focus:outline-none"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
              />
            ))}
          </div>
          <Button className="bg-[#ff6d6a] text-white w-full mt-4" color="white">
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
