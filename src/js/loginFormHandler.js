import Cookies from 'js-cookie';



const loginFormHandler = async (event, formState) => {
    try {
        event.preventDefault();

        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));

        const { email, first_name, username } = formState;

        Cookies.set('email', email, { expires: expirationDate });
        Cookies.set('first_name', first_name, { expires: expirationDate });

        const backendUrl = process.env.REACT_APP_API_URL;


        const response = await fetch(`${backendUrl}/hair`, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                username: username,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Logged In');
            document.location.replace('/');
        } else {
            alert('User not found.');
            console.log(response.status);
        }
    } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while logging in');
    }
};


export default loginFormHandler;
