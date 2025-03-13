import Cookies from 'js-cookie';

const signupFormHandler = async (event, formState) => {
    event.preventDefault();

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));

    const { email, first_name } = formState;

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
    const clientType = Cookies.get('client_type');
    console.log("this client type is" + clientType)
    const developmentUrl = 'http://localhost:3001';
    const backendUrl = process.env.REACT_APP_API_URL;

    console.log('Backend URL:', backendUrl)
    if (formState.first_name && formState.last_name) {
        try {
            const response = await fetch(`/${clientType}`, {
                method: 'POST',
                body: JSON.stringify({
                    username: formState.username,
                    first_name: formState.first_name,
                    last_name: formState.last_name,
                    address: formState.address,
                    email: formState.email,
                }),
                headers: { 'Content-Type': 'application/json' },
            }).catch(error => {
                console.error('Error during fetch:', error);
                throw error; // Re-throw the error to ensure it propagates
            });


            console.log('Response from server:', response); // Log the response

            if (response.ok) {
                document.location.replace('/Calendar');
            }

            alert(response.ok ? 'Signed Up' : 'Failed to sign up');
            console.log(response.ok ? 'signed up' : 'failed to sign up');
        } catch (error) {
            console.error('Error during fetch:', error.message);
            alert('An error occurred while signing up');
        }
    } else {
        alert('Please fill in all required fields');
    }
};

export default signupFormHandler;
