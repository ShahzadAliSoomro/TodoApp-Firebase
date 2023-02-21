import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethods";
import CircularProgress from '@mui/material/CircularProgress';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isLoading, setLoader] = useState(false);
     
    const signupuser=()=>{
        setLoader(true);
        navigate("/login")
        signUpUser({
            email,
            password,
            userName: "Shahzad Ali",
            contact: "123sahza",
        })
            .then((success) => {
                setLoader(false);
                console.log(success);
            })
            .catch((error) => {
                setLoader(false);
                console.log(error);
            });
    }
   

    return (
        <>
            <h1>Signup</h1>
            <Box>
                <Box>
                    <TextField
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        variant="standard"
                    />
                </Box>
                <Box>
                    <TextField
                        label="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        variant="standard"
                    />
                </Box>
            </Box>
            <Button variant="contained" disabled={isLoading} onClick={signupuser}> 
            {isLoading? <CircularProgress />:"Sign Up" }{" "}</Button>
            
        </>
    );
}
export default Signup;