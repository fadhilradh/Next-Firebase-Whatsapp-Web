import { Button, Logo } from "@material-ui/core";
import styled from "styled-components";
import Head from "next/head";
import { auth, provider } from "../firebase";

function Login() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).catch(alert);
    console.log(auth);
    console.log(provider);
  };
  return (
    <div style={loginContainer}>
      <Head>
        <title>Login</title>
      </Head>

      <div style={buttonContainer}>
        <img src="46068.png" width={200} height={200} />
        <Button onClick={signInWithGoogle} variant="outlined">
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;

const loginContainer = {
  display: "grid",
  placeItems: "center",
  background: "#f5f5f5",
  height: "100vh",
};

const buttonContainer = {
  height: "500px",
  width: "500px",
  background: "white",
  display: "grid",
  placeItems: "center",
  borderRadius: "8px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};
