import React, { useState, useRef } from "react";
import Icons from "../components/Icons";
import CurrentTime from "../components/CurrentTime";
import { Button, Spinner, TextInput } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [otp, setOtp] = useState(["1", "2", "3", "4", "5", "6"]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

  const userLogin = async () => {
    const phone = localStorage.getItem("phoneNumber");
    try {
      setLoading(true);
      await axios
        .post(
          "https://staging.fastor.in/v1/pwa/user/login",
          {
            phone: phone,
            otp: Number(otp.join("")),
            dial_code: +91,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          setLoading(false);
          console.log(res)
          localStorage.setItem("token", res.data.data.token);
          navigate("/restaurant");
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(otp.join(""));
  return (
    <div className="h-screen flex flex-col items-center max-w-full p-4">
      <div className="fixed top-0 left-0 w-full flex justify-between self p-4 bg-white z-10">
        <div className="">
          <CurrentTime />
        </div>
        <div className="">
          <Icons />
        </div>
      </div>
      <div className="h-screen w-full flex flex-col xl:w-[50%] xl:m-auto justify-center items-center">
        <div className="">
          <h3 className="text-xl font-semibold">OTP Verification</h3>
          <p className="text-sm text-gray-500">
            Enter the verification code we just sent on your mobile Number
          </p>
        </div>
        <div className="w-full">
          <div className="flex justify-between mt-2 w-full gap-2">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={refs[index]}
                type="number"
                maxLength={1}
                max="1"
                className="w-1/6 text-center rounded-md py-2 px-1 focus:outline-none"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
              />
            ))}
          </div>
          <Button
            className="bg-[#ff6d6a] text-white w-full mt-7"
            color="white"
            onClick={userLogin}
          >
            {loading ? (
              <span>
                <Spinner className="mr-2" /> ...Verifying
              </span>
            ) : (
              " Verify"
            )}
          </Button>
          <p className="text-center mt-4">
            Didn't received code?{" "}
            <span className="text-blue-500 font-semibold ">Resend</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
