export const getUserByEmail = async (email) => {
    try {
        const response = await fetch(`https://9k7ig9gw8c.execute-api.us-east-1.amazonaws.com/default/users/${email}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error while fetching the grocery items by email', error);
        return null;
    }
}

export const addUser = async (item) => {
    try {
        const putOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        }

        const response = await fetch(`https://9k7ig9gw8c.execute-api.us-east-1.amazonaws.com/default/users`, putOptions);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error while adding the grocery item');
        return null;
    }
}