import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseAuthHookService from '../../hooks/FirebaseAuthHookService';

const AuthChecker = ({ children }) => {
  const navigate = useNavigate();
  const { auth } = FirebaseAuthHookService()

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};

export default AuthChecker;
