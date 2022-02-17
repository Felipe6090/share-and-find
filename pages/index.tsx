import type { NextPage } from "next";

import PagesHead from "../src/infra/components/PagesHead";
import LoginScreen from "../src/screens/Login";

const Home: NextPage = () => {
  return (
    <div>
      <PagesHead title="Home - Found N Share" />

      <LoginScreen />
    </div>
  );
};

export default Home;
