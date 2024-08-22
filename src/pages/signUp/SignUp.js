import Logo from "../../assets/images/logo.jpeg";
import SignUpForm from "./signUpForm";

const SignUp = () => {
  return (
    <div className="h-100vh w-100vh bg-brandGray3 flex items-center justify-center">
      <div className=" bg-brandWhite shadow-brandShadow py-6 px-12 rounded-lg max-w-[500px]">
        <div className="flex flex-col gap-4">
          <img src={Logo} alt="logo" className=" mx-auto w-[237px]" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-brandDark text-xl font-semibold text-center">
                SignUp
              </p>
              <p className=" text-brandTextPrimary text-sm font-normal text-center">
                Create for an account and enjoy exclusive benefits, including
                streamlined checkout and access to special offers
              </p>
            </div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
