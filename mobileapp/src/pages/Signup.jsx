import { Alert, Button, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";
import CurrentTime from "../components/CurrentTime";
import Icons from "../components/Icons";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userSignup = async () => {
    if (phoneNumber == "") {
      return setError("Please enter a phone number");
    }
    try {
      setLoading(true);
      await axios
        .post(
          "https://staging.fastor.in/v1/pwa/user/register",
          {
            phone: Number(phoneNumber),
            dial_code: Number(+91),
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          console.log(res);
          localStorage.setItem("phoneNumber", phoneNumber);
          setError(null);
          setLoading(false);
          navigate("/signin");
        });
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(phoneNumber);

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
      <div className="h-screen w-full flex flex-col xl:w-[50%] xl:m-auto justify-center items-center">
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
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></TextInput>
          <Button
            className="bg-[#ff6d6a] text-white w-full mt-4"
            color="white"
            onClick={userSignup}
          >
            {loading ? (
              <span>
                <Spinner className="mr-2" /> ...Sending
              </span>
            ) : (
              " Send Code"
            )}
          </Button>
          {error && (
            <Alert className="mt-5 text-center" color={"failure"}>
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
