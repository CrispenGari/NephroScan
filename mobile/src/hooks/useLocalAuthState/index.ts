import React from "react";
import * as LocalAuthentication from "expo-local-authentication";
const useLocalAuthState = () => {
  const [state, setState] = React.useState({
    hasHadWare: false,
    isEnrolled: false,
    types: [
      LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION,
      LocalAuthentication.AuthenticationType.FINGERPRINT,
    ],
  });

  React.useEffect(() => {
    (async () => {
      const hasHadWare = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      const types =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      setState({
        hasHadWare,
        isEnrolled,
        types,
      });
    })();
  }, []);

  return state;
};

export default useLocalAuthState;
