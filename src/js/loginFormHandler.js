import Cookies from 'js-cookie';

const loginFormHandler = async (event, formState) => {
    try {
        event.preventDefault();

        // Validate form state
        const { email, first_name, username } = formState;
        if (!email || !username) {
            alert('Please fill in all required fields.');
            return;
        }

        // Set cookies with security attributes
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 10 * 60 * 1000); // 10 minutes

        Cookies.set('email', email, {
            expires: expirationDate,
            secure: true,
            sameSite: 'strict',
        });
        Cookies.set('first_name', first_name, {
            expires: expirationDate,
            secure: true,
            sameSite: 'strict',
        });

        // Define backend URL (if needed)
        const backendUrl = process.env.NODE_ENV === 'production'
            ? 'https://johannysunisex-cdc945aa3db4.herokuapp.com'
            : 'http://localhost:3001';

        // Try logging in via the /hair endpoint
        let response = await fetch(`${backendUrl}/hair`, {
            method: 'POST',
            body: JSON.stringify({ email, username }),
            headers: { 'Content-Type': 'application/json' },
        });

        // If /hair fails, try the /wigs endpoint
        if (!response.ok) {
            response = await fetch(`/wigs`, {
                method: 'POST',
                body: JSON.stringify({ email, username }),
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Handle the final response
        if (response.ok) {
            alert('Logged in successfully!');
            
        } else {
            const errorData = await response.json();
            alert(`Login failed: ${errorData.message || 'Invalid credentials'}`);
        }
    } catch (error) {
        alert('An error occurred while logging in. Please try again.');
    }
};

export default loginFormHandler;