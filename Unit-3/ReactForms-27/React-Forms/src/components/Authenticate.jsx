import {useState} from 'react';


export default function Authenticate(token, setToken){
    const [showUsername, setShowUsername] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    async function handleClick() {
        console.log(token);
        try{
          const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token.token}`,
            },
          }
        );
          const result = await response.json();    
          if(result.success) {
            setSuccessMessage(result.message);
            setShowUsername(result.data.username);
            setError(false);
          } else {
            setError(result.message);
          }
          console.log(result);
        }catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
         <div className="authenticate-container">
          <h2>Authenticate</h2>
          {showUsername && <p className="auth-user-p">{showUsername} has been authenticated!</p>}
          {successMessage && <p className="auth-success-p">{successMessage}</p>}
          {error && <p className="auth-failure-p">Please sign up before attempting to authenticate! Full error message: {error}</p>}
          <button onClick={handleClick}>Authenticate Token</button>
         </div>
        </>
    )
}