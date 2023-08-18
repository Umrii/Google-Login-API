
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myButton').addEventListener('click', function() {
        


        // Google API client ID
    const clientId = '648218353459-g9ugge87p8sfjm03uhcvr5789eoglj3r.apps.googleusercontent.com';

    // Redirect URI where Google will send the user after login
    const redirectUri = 'http://127.0.0.1:8080/blank.html'; // Update with your actual URL

    // OAuth 2.0 endpoint
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=648218353459-g9ugge87p8sfjm03uhcvr5789eoglj3r.apps.googleusercontent.com&redirect_uri=http://127.0.0.1:8080/blank.html&response_type=code&scope=openid%20profile`;

    // Open a new window for Google login
    

    const popup = window.open(authUrl, '_blank', 'width=600,height=600');
    const loginTab = window.open(authUrl, '_blank');

    // Check if the login tab is closed
    const checkLoginTab = setInterval(() => {
        if (loginTab.closed) {
            clearInterval(checkLoginTab);

            // Once the login tab is closed, redirect to the landing page in the main tab
            window.location.href = 'http://localhost:8080/blank.html'; // Update with your landing page URL
        }
    }, 1000);


    });
});



