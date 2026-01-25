import Cookies from 'js-cookie';

const signupFormHandler = async (event, formState) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));
    const { email, first_name } = formState; // ✅ THIS FIXES THE ERROR


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
    const backendUrl = process.env.NODE_ENV === 'production'
        ? 'https://johannysunisex-cdc945aa3db4.herokuapp.com'
        : 'http://localhost:3001';

    if (formState.first_name && formState.last_name) {
        try {
            const response = await fetch(`${backendUrl}/${clientType}`, {
                method: 'POST',
                body: JSON.stringify({
                    username: formState.username,
                    first_name: formState.first_name,
                    last_name: formState.last_name,
                    address: formState.address,
                    email: formState.email,
                }),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json(); // ✅ Return this to the React component
            return data;
        } catch (error) {
            return { error: true, message: 'An error occurred during signup.' };
        }
    } else {
        return { error: true, message: 'Please fill in all required fields.' };
    }
};

export default signupFormHandler;
