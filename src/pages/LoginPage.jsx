import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../states/stateUser";
import { useQueryClient } from "@tanstack/react-query";

export default function LoginPage() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const { user } = useAuthenticator((context) => [context.user]);
  const [userIdState, setUserIdState] = useRecoilState(userState);
  // const queryClient = useQueryClient();

  const navigate = useNavigate();
  useEffect(() => {
    if (authStatus === "authenticated") {
      navigate("/");
      setUserIdState({ userId: user.attributes.sub });
      // queryClient.removeQueries(["info"]);
    }
  }, [authStatus]);

  return <Authenticator />;
}

// const isLocalhost = Boolean(
//   window.location.hostname === "localhost" ||
//     // [::1] is the IPv6 localhost address.
//     window.location.hostname === "[::1]" ||
//     // 127.0.0.1/8 is considered localhost for IPv4.
//     window.location.hostname.match(
//       /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );

// // Assuming you have two redirect URIs, and the first is for localhost and second is for production
// const [localRedirectSignIn, productionRedirectSignIn] =
//   awsConfig.oauth.redirectSignIn.split(",");

// const [localRedirectSignOut, productionRedirectSignOut] =
//   awsConfig.oauth.redirectSignOut.split(",");

// const updatedAwsConfig = {
//   ...awsConfig,
//   oauth: {
//     ...awsConfig.oauth,
//     redirectSignIn: isLocalhost
//       ? localRedirectSignIn
//       : productionRedirectSignIn,
//     redirectSignOut: isLocalhost
//       ? localRedirectSignOut
//       : productionRedirectSignOut,
//   },
// };

// Amplify.configure(updatedAwsConfig);
