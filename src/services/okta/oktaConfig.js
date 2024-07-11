// src/oktaConfig.js
export default {
  clientId: "0oai9x9mzmN1h2AuZ5d7",
  issuer: "https://dev-37549338.okta.com/oauth2/default",
  redirectUri: window.location.origin + "/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
};
