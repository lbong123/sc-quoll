import { Button } from "@mui/material";
import FirebaseAuthHookService from '../../hooks/FirebaseAuthHookService';

const Logout = () => {
  const { disabled, signOutWithGoogle } = FirebaseAuthHookService();

  return (
    <div>
      <Button disabled={disabled} onClick={signOutWithGoogle}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
