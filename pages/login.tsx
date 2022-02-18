import type { NextPage } from "next";

import PagesHead from "../src/infra/components/PagesHead";

import LoginScreen from "../src/screens/Login";


const Login: NextPage = () => {
  return (
    <div>
      <PagesHead title="Login - Found N Share" />

      <LoginScreen />
    </div>
  );
};

export default Login;
