import Cookies from 'js-cookie';

const HairsignupFormHandler = async (event, formState) => {
    try {


        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));

        console.log(formState)
        const { first_name, last_name, username, email, address } = formState;
        Cookies.set('email', email, { expires: expirationDate });


        const response = await fetch('http://localhost:3001/signup-hair', {
            method: 'POST',
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                address: address,
                email: email,
                username: username,
                client_type: 'hair',
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Hair Customer Signed Up');
            document.location.replace('/calendar');

        } else {
            const errorData = await response.json();
            console.error('Error from server:', errorData);
            alert('Sign-up failed. Please try again.');
        }
    } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while signing up');
    }
};


export default HairsignupFormHandler;