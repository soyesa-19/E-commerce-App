import { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const SignInRedirect = () => {
  const { oktaAuth } = useOktaAuth();

  useEffect(() => {
    localStorage.setItem("page", `${window.location.origin}`);
    void oktaAuth.signInWithRedirect();
  }, [oktaAuth]);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <p className="text-xl">Redirecting to Login page...</p>
    </section>
  );
};

export default SignInRedirect;
