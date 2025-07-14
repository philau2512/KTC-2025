import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { ThunkDispatch } from "redux-thunk";
import type { AuthActionTypes } from "../types/authTypes";
import type { RootState } from "../store";
import { login } from "../actions/authActions";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch: ThunkDispatch<RootState, undefined, AuthActionTypes> =
    useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <h2>Login</h2>
      {auth.loading && <p>Loading...</p>}
      {auth.error && <p style={{ color: "red" }}>{auth.error}</p>}
      {auth.isAuthenticated && <p style={{ color: "green" }}>Logged in!</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;