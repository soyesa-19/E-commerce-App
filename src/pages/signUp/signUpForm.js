import { useState } from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import api from "../../services/axios/http";
import Input from "../../components/InputContainer/Input";

const REACT_APP_OCTA_API_TOKEN = process.env.REACT_APP_OCTA_API_TOKEN;

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    login: "",
    password: "",
    mobile: "",
  });
  const { oktaAuth } = useOktaAuth();
  const onChangeHandler = (e, flag) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, [flag]: value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const { fname, lname, email, password, mobile } = formData;
    console.log(password);
    try {
      const response = await api.post(
        "/signup",
        {
          profile: {
            firstName: fname,
            lastName: lname,
            email,
            login: email, // The login is typically the email address
            mobilePhone: mobile, // assuming mobilePhone attribute is enabled in Okta
          },
          credentials: {
            password: {
              value: password,
            },
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        await oktaAuth.signInWithRedirect({
          sessionToken: response?.data?.sessionToken,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      <Input
        containerClass="flex flex-col gap-1"
        type="text"
        name="fname"
        placeholder="Enter name"
        label="First Name"
        inputClass=" border border-brandStroke rounded-lg py-2 px-3 "
        value={formData.fname}
        onChange={(e) => onChangeHandler(e, "fname")}
      />
      <Input
        containerClass="flex flex-col gap-1"
        type="text"
        name="lname"
        placeholder="Last Name"
        label="Last Name"
        inputClass=" border border-brandStroke rounded-lg py-2 px-3 "
        value={formData.lname}
        onChange={(e) => onChangeHandler(e, "lname")}
      />

      <Input
        containerClass="flex flex-col gap-1"
        type="text"
        name="email"
        placeholder="Enter email"
        label="Email"
        inputClass=" border border-brandStroke rounded-lg py-2 px-3 "
        value={formData.email}
        onChange={(e) => onChangeHandler(e, "email")}
      />

      <Input
        containerClass="flex flex-col gap-1"
        type="password"
        name="password"
        placeholder="Enter password"
        label="Password"
        inputClass=" border border-brandStroke rounded-lg py-2 px-3 "
        value={formData.password}
        onChange={(e) => onChangeHandler(e, "password")}
      />

      <Input
        containerClass="flex flex-col gap-1"
        type="number"
        name="mobile"
        placeholder="Enter number"
        label="Mobile"
        inputClass=" border border-brandStroke rounded-lg py-2 px-3 "
        value={formData.mobile}
        onChange={(e) => onChangeHandler(e, "mobile")}
      />

      <button className="bg-brandPrimary py-[13px] px-8 rounded-lg">
        Sign Up
      </button>
      <p>
        Already ave an account?{" "}
        <Link to={"/signIn_redirect"}>
          <span className=" text-brandPrimary text-xs font-light">Login</span>
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
