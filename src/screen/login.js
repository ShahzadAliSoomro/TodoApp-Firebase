import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../config/firebasemethods";
import { Navigate, useNavigate } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setLoader] = useState(false);

  let login = () => {
    setLoader(true)
    loginUser({
      email,
      password,

    })
      .then((success) => {
        setLoader(false)
        console.log(success);
        navigate("/todoapp")
      })
      .catch((err) => {
        setLoader(false)
        console.log(err);
      });
  };
  return (
    <>
      <h1>Login</h1>
      <Box>
        <Box>
          <TextField
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            type="password"
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box>
          <Button disabled={isLoading} onClick={login} variant="contained">
          {isLoading? <CircularProgress />:"Login" }
          </Button>
        </Box>
      </Box> 
    </>
  );
}
export default Login;