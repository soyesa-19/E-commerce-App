import { useState } from "react";
import { Link } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import api from "../../services/axios/http";

const REACT_APP_OCTA_API_TOKEN = process.env.REACT_APP_OCTA_API_TOKEN;

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
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
    console.log(oktaAuth.options.issuer);
  };
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="fname">Full Name</label>
        <input
          type="text"
          name="fname"
          placeholder="Enter name"
          className=" border border-brandStroke rounded-lg py-2 px-3 "
          value={formData.fname}
          onChange={(e) => onChangeHandler(e, "fname")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="lname">Full Name</label>
        <input
          type="text"
          name="lname"
          placeholder="Enter name"
          className=" border border-brandStroke rounded-lg py-2 px-3 "
          value={formData.name}
          onChange={(e) => onChangeHandler(e, "lname")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          className=" border border-brandStroke rounded-lg py-2 px-3 "
          value={formData.email}
          onChange={(e) => onChangeHandler(e, "email")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Password"
          className=" border border-brandStroke rounded-lg py-2 px-3 "
          value={formData.password}
          onChange={(e) => onChangeHandler(e, "password")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="mobile">Mobile</label>
        <input
          type="number"
          name="mobile"
          placeholder="Enter Number"
          className=" border border-brandStroke rounded-lg py-2 px-3 "
          value={formData.mobile}
          onChange={(e) => onChangeHandler(e, "mobile")}
        />
      </div>
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
