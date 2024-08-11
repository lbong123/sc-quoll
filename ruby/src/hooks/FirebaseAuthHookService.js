import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, Providers } from "../config/firebase";
import { signOut } from "firebase/auth";

const FirebaseAuthHookService = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [disabled, setDisabled] = useState(false);

    const signInWithGoogle = () => {
        setDisabled(true);
        signInWithPopup(auth, Providers.google)
          .then(() => {
            setDisabled(false);
            console.info("TODO: navigate to authenticated screen");
            navigate("/");
          })
          .catch((error) => {
            setErrorMessage(error.code + ": " + error.message);
            setDisabled(false);
          });
    };

    const signOutWithGoogle = () => {
        setDisabled(true);
        signOut(auth)
          .then(() => {
            navigate("/login");
          })
          .catch((error) => {
            console.error(error);
            setDisabled(false);
          });
      };
      
    return { disabled, errorMessage, signInWithGoogle, signOutWithGoogle };
  };
  
export default FirebaseAuthHookService;