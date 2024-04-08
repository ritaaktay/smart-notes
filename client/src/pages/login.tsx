import {
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";

import { Visibility, VisibilityOff, Login } from "@mui/icons-material";

import { useState } from "react";
export function Component() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel>Username</InputLabel>
        <OutlinedInput
          id="username-input"
          label="Username"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
          }}
        />
      </FormControl>

      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          id="password-input"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />
      </FormControl>

      <Button
        sx={{ m: 1 }}
        variant="outlined"
        color="primary"
        onClick={() => {
          console.log("Logging in:", username, password);
        }}
      >
        <Login />
      </Button>
    </>
  );
}

Component.displayName = "Login";
