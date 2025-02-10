import React, { useEffect } from "react";

function Google() {
  useEffect(() => {
    // Ensure gapi is loaded
    if (window.gapi) {
      window.gapi.signin2.render("google-signin-button", {
        scope: "profile email",
        width: 240,
        height: 50,
        longtitle: true,
        theme: "dark",
        onsuccess: onSignIn,
      });
    }
  }, []);

  function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  function signOut() {
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        console.log("User signed out.");
      });
    } else {
      console.error("gapi not loaded.");
    }
  }

  return (
    <div>

      <button id="google-signin-button"><img src="/icons8-google-48.png" id="google-img"></img>Sign in with Google</button>
    </div>
  );
}

export default Google;
