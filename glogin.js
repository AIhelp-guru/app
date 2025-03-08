function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    // Decode the ID token to extract user information
    const base64Url = response.credential.split('.')[1]; // Get the payload part
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );

    const userInfo = JSON.parse(jsonPayload);
    //console.log("User Information: ", userInfo);

    // Access the user's email 
    const userEmail = userInfo.email;
    login(userEmail, userInfo.iss);
    //console.log("User Email: ", userEmail);
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
function loginc(email , token){
    		   $("#login_btn").css("background","#c0c0c0");
    		sessionStorage.setItem('user', email);
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('jobs', 1000);
            location.href = "bluebook.html";
    
    }
function login(email, token){
      $.get("https://us-east1-aihelp-382014.cloudfunctions.net/readwrite_jd?email=${email}&token=${token}",function(data){
           $("#login_btn").css("background","#c0c0c0");
    		sessionStorage.setItem('user', email);
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('jobs', jobs);
            location.href = "bluebook.html";
            
            })
    
    }
function logina(email ,token){
   
    $("#login_btn").css("background","#c0c0c0");
        $.get("https://script.google.com/macros/s/AKfycbzvyzwr3M2qMWqXJA0-fP48wOYOdUVlhabiFmwfj4NOzbDFAm2X2u64npHptu-Hyo3L3w/exec?email="+email+"&token="+token,function(data){
            sessionStorage.setItem('user', email);
            sessionStorage.setItem('token', token);
            jobs = parseInt(data.substr(data.indexOf(",")+1));
            console.log(data);
        if((data.indexOf("'1'") >=0)||(jobs > 10)){
            
            
            sessionStorage.setItem('jobs', jobs);
            location.href = "bluebook.html";
            
        }else if(data.indexOf("'2'") >=0){

            alert("A token was sent to your email, please use that to login");
            $("#login_btn").css("background","#4CAF50");
        }else{
            $("#illogin_btn").css("background","#4CAF50");
            $("#alertmsg").html("Your 7 days free period is over. <p> Hope you liked it !! <p> Let us know your feedback <p> <large>To continue to use, email to - <u>ai.help.guru@gmail.com</u></large>")
            }

        
    })
}



$(document).ready(function(){
    $("#login_btn").click(function(){
        
            email = $("#email").val();
        
   
            token = $("#token").val();
        
        login(email,token);
        location.href = "bluebook.html";
    })
})

