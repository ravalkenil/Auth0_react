import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import firebase from "../componets/firebase";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
// import Modal from 'react-bootstrap/Modal';
import { useAuth0 } from "@auth0/auth0-react";


const Home=()=>{

  const { loginWithRedirect ,isAuthenticated ,logout } = useAuth0();


  const [value, setValue] = useState("");
  const [otp, setOtp] = useState("");

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
    return(

        <div className="row">
    <div className="col-md-6 col-12">
    
    <div class="card">
      <div class="card-body">
      <h4 class="card-title">Obtain lending approval certificate</h4>
    </div>
    </div>


    <div class="card">
      <div class="card-body">
      <h5 class="card-title">1.Validating your identity</h5>
      <p class="card-text">Onboard with our passwordiess authentication and
proceed with Know Your Customer (KYC) verification
with our dynamic solution. Verity your identity through
Government-issued ID card, driving license of passport
and tace match. Verification as simple as taking a seitfie.</p>

      </div>
    </div>

    <div class="card">
      <div class="card-body">
      <h5 class="card-title">2.Validate lending approval</h5>
      <p class="card-text">Connect your eeyptocurrency wallet to Amadeus secured
webs onboard application in one-click. Select token to
Certiy and sign token lending approval to prove watet
ownership and provide transparent on-chain proof of
holding of assets which aims to ensure that en-chain
holdings of cryptocurrescies are sufficient to complete
athe lending transaction.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
      <h5 class="card-title">3.Get your proof of lending certificate</h5>
      <p class="card-text">Download your Proof of Lending certificate</p>
      </div>
    </div>

      </div>
      <div className="col-md-5 col-12">

      <div class="card">
      <div class="card-body">
      <h5 class="card-title">Prepare the following:</h5>
      <p>-Valid proof of identity.Personal identification documents accepted:ID card,passport and driving
      license</p>
      <p>-Cryptocurrency wallet with funds to certify(Metamask,MEW,Trezor,etc)and enought gas to allow token 
      approval signature.</p>
      </div>
      </div>
  
      <div class="card">
      <div class="card-body">
      <h5 class="card-title">Get Started</h5>
      <p class="card-text">When you're ready.get your certificate in less then 2 minutes by following the next steps.</p>
       {/* <button  type="button" data-bs-toggle="modal" class="btn btn-primary" data-bs-target="#staticBackdrop">Get certificate</button> */}
       {
        isAuthenticated ?
        (<button type="button" class="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
        ):(
        <button  type="button"  class="btn btn-primary" onClick={() => loginWithRedirect({returnTo:`${window.location.origin}/phone`} )}>Get certificate</button>
    )

       }  

      </div>
      </div>
      </div>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
 
 
 
 
 
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-center fs-4" id="staticBackdropLabel">Mobile Verification</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <h2>Mobile</h2>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input type="number" name="mobile" placeholder="Enter your number" reqired onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" class="btn btn-primary" > submit</button>
      </form>
      <h2>OTP</h2>  
      <form onSubmit={onSubmitOTP}>
      <input type="number" name="otp" placeholder="Enter your otp" reqired onChange={(e) => setOtp(e.target.value)}/>
      <button type="submit"  class="btn btn-primary" data-bs-dismiss="modal">submit </button>
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
export default Home;
