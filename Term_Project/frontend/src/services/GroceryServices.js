export const getGroceryByEmail = async (email) => {
    try {
        const response = await fetch(`https://9k7ig9gw8c.execute-api.us-east-1.amazonaws.com/default/grocery/${email}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error while fetching the grocery items by email', error);
        return null;
    }
}

export const addGroceryItem = async (item) => {
    try {
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        }

        const response = await fetch(`https://9k7ig9gw8c.execute-api.us-east-1.amazonaws.com/default/grocery`, postOptions);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error while adding the grocery item');
        return null;
    }
}

export const editGroceryItem = async (item) => {
    try {
        const putOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        }

        const response = await fetch(`https://9k7ig9gw8c.execute-api.us-east-1.amazonaws.com/default/grocery`, putOptions);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error while editing the grocery item');
        return null;
    }
}

export const deleteGroceryItem = async (item) => {
    try {
        const deleteOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(`https://9k7ig9gw8c.execute-api.us-east-1.amazonaws.com/default/grocery/${item.grocery_id}?email=${item.email}`, deleteOptions);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching songs');
        return null;
    }
}