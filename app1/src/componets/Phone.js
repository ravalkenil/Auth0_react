import React, { useState } from "react";
import firebase from "../componets/firebase";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useAuth0 } from "@auth0/auth0-react";

function Phone() {
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState("");
  const { loginWithRedirect ,isAuthenticated ,logout } = useAuth0();

  const configurCaptch = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recatptch varified");
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configurCaptch();
    const phoneNumber = "+91 " + value;
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        console.log("otp has been sent");
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("User is verified");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Login form</h2>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input
          type="number"
          name="mobile"
          placeholder="Enter your number"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit"> submit</button>
      </form>

      <h2>OTP</h2>
      <form onSubmit={onSubmitOTP}>
      <input
        type="number"
        name="otp"
        placeholder="Enter your otp"
        onChange={(e) => setOtp(e.target.value)}
      />
      <button type="submit" onClick={onSubmitOTP}>submit </button>
      </form>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
         Launch static backdrop modal
        </button> 
          {
        isAuthenticated ?
        (<button type="button" class="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
        ):(
        <button  type="button"  class="btn btn-primary" onClick={() => loginWithRedirect({returnTo:`${window.location.origin}/phone`} )}>Get certificate</button>
        )

       }  
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Mobile Verification</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <h2>Login form</h2>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input type="number" name="mobile" placeholder="Enter your number" reqired onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" class="btn btn-primary" > submit</button>
      </form>
      <h2>OTP</h2>  
      <form onSubmit={onSubmitOTP}>
      <input type="number" name="otp" placeholder="Enter your otp" reqired onChange={(e) => setOtp(e.target.value)}/>
      <button type="submit"  class="btn btn-primary" data-bs-dismiss="modal" onClick={onSubmitOTP}>submit </button>
      </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Understood</button> */}
      

      </div>
    </div>
  </div>
</div>  
    </div>
  );
}

export default Phone;
