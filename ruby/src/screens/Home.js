import { useEffect } from "react";
import Logout from "../components/auth/Logout";
import Center from "../components/utils/Center";
import AccountAvatars from "../components/account/AccountAvatars";

const Home = (props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Center>
      <AccountAvatars />
      <Logout />
    </Center>
  );
};

export default Home;
