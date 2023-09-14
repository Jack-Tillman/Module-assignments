import { useState } from "react";

export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [signupResult, setSignupResult] = useState(false);
  const [userCheck, setUserCheck] = useState("");
  const [passCheck, setPassCheck] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const submissionData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      };
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        submissionData
      );
      const result = await response.json();
      console.log(result);
      setSignupResult(result.success);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="form-container">
        <h2>Sign Up</h2>
        {/*If user input doesn't pass validation, show error message */}
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          {userCheck.length < 8 && (
            <p className="usercheck-p">
              Please enter a username that is at least 8 characters long
            </p>
          )}
          <label>
            Username:{" "}
            <input
              value={username}
              required
              minLength="8"
              onChange={(e) => {
                e.preventDefault();
                {/*UserCheck and PassCheck are states used for validation purposes */}
                setUserCheck(e.target.value);
                setUsername(e.target.value);
              }}
            />
          </label>
          {passCheck.length < 8 && (
            <p className="passcheck-p">
              Please enter a password that is at least 8 characters long
            </p>
          )}
          <label>
            Password:{" "}
            <input
              value={password}
              required
              minLength="8"
              onChange={(e) => {
                e.preventDefault();
                setPassCheck(e.target.value);
                setPassword(e.target.value);
              }}
            />
          </label>
          <button>Submit</button>
          {signupResult && (
            <p className="signup-result-p">
              Sign-up Successful! Welcome, {username}!
            </p>
          )}
        </form>
      </div>
    </>
  );
}
