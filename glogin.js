 // Initialize the canvas
 const canvas = document.getElementById('exampleCanvas');
 const ctx = canvas.getContext('2d');

 ctx.fillStyle = "#f0f0f0";
 ctx.fillRect(0, 0, canvas.width, canvas.height);

 ctx.fillStyle = "#000";
 ctx.font = "20px Arial";
 ctx.fillText("Draw something after login!", 50, 150);

 // Function to handle successful login
 function onSignIn(googleUser) {
   const profile = googleUser.getBasicProfile();
   const name = profile.getName();
   const email = profile.getEmail();
    
   // Display user info on the canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle = "#f0f0f0";
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   
   ctx.fillStyle = "#000";
   ctx.font = "20px Arial";
   ctx.fillText(`Welcome, ${name}!`, 50, 120);
   ctx.fillText(`Email: ${email}`, 50, 160);

   // Replace login area with a logout button
   const loginArea = document.getElementById('login-area');
   loginArea.innerHTML = '<button onclick="signOut()">Sign Out</button>';
 }

 // Function to handle logout
 function signOut() {
   const auth2 = gapi.auth2.getAuthInstance();
   auth2.signOut().then(() => {
     alert('You have been signed out.');
     
     // Clear canvas and reset login area
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.fillStyle = "#f0f0f0";
     ctx.fillRect(0, 0, canvas.width, canvas.height);
     ctx.fillStyle = "#000";
     ctx.font = "20px Arial";
     ctx.fillText("Draw something after login!", 50, 150);

     const loginArea = document.getElementById('login-area');
     loginArea.innerHTML = '<div class="g-signin2" data-onsuccess="onSignIn"></div>';
     gapi.signin2.render('login-area');
   });
 }