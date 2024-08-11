import { Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Center from "../utils/Center";
import FirebaseAuthHookService from '../../hooks/FirebaseAuthHookService';

const AuthContainer = (props) => {
  const { disabled, errorMessage, signInWithGoogle } = FirebaseAuthHookService();

  return (
    <Center height={"auto"}>
      <Button
        startIcon={<GoogleIcon />}
        size="large"
        disabled={disabled}
        variant="contained"
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </Button>
      <Typography sx={{ mt: 2 }} color={"red"}>
        {errorMessage}
      </Typography>
    </Center>
  );
};

export default AuthContainer;
