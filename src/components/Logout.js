import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { oktaAuth } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      // Clear Okta session and tokens
      await oktaAuth.signOut();
      // Navigate to home page after logout
      navigate("/");
    };

    logout();
  }, [oktaAuth, navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <p className="text-xl">Logging out...</p>
    </section>
  );
};

export default Logout;
