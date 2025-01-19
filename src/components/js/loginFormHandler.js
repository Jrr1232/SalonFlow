import Cookies from 'js-cookie';


const loginFormHandler = async (formState) => {
    try {

        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));

        const { email, username } = formState;

        Cookies.set('email', email, { expires: expirationDate });

        const response = await fetch('http://localhost:3001/login-hair', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                username: username,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Hair Customer Logged In');
            document.location.replace('/calendar');

        } else {

            const secondResponse = await fetch('http://localhost:3001/login-wigs', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    username: username,
                }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (secondResponse.ok) {
                alert('Wigs Customer Logged In')
                document.location.replace('/services');

            }
        }

    } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while logging in');
    }




};


export default loginFormHandler;