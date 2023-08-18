const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));

// Handle callback after Google login
app.get('/callback', async (req, res) => {
    const code = req.query.code;
    const clientId = '648218353459-g9ugge87p8sfjm03uhcvr5789eoglj3r.apps.googleusercontent.com';
    const clientSecret = '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';
    const redirectUri = 'http://127.0.0.1:8080/blank.html'; // Update with your actual URL

    try {
        // Exchange authorization code for access token
        const tokenResponse = await axios.post('https://accounts.google.com/o/oauth2/token', null, {
            params: {
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code',
            },
        });

        const accessToken = tokenResponse.data.access_token;

        // Fetch user's basic profile information
        const profileResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const userProfile = profileResponse.data;
        
        // Here, you can do something with the user's profile data
        
        res.send('Logged in successfully!');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

