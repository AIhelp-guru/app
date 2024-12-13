function handleCredentialResponse(response) {
    // Send the ID token to your backend server 
    // to verify and exchange it for your own tokens.
    console.log("Encoded JWT ID token: " + response.credential); 
}


window.onload = function () {
    google.accounts.id.initialize({
        client_id: "126395209549-6d7guupr040sgjcbhkh2ideu20sud2nm.apps.googleusercontent.com", 
        callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
        document.getElementById("google-login"),
        { theme: "outline", size: "large" } // Customize button appearance
    );

    google.accounts.id.prompt(); // Automatically prompt the user to log in
};