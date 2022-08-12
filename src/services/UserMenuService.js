const axios = require('axios')

export async function getAllUser() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('🥶 getAllUser: ', response);
        return response.data
    }
    catch (error) {
        console.log('🥶 error: ', error);
        return null
    }
}

export async function getSearchResult(value) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users?name_like='+value)
        console.log('🥶 getSearchResult.data: ', response.data);
        return response.data
    }
    catch (error) {
        console.log('🥶 error: ', error);
        return null
    }
}

export async function getSortResult(col_name, order) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users',{ params: { _sort: col_name, _order: order } })
        console.log('🥶 getSortResult.data: ', response.data);
        return response.data
    }
    catch (error) {
        console.log('🥶 error: ', error);
        return null
    }
}

export async function addUser(name, username) {
    try {
        console.log('🥶 addUser: ');
        await axios.post('https://jsonplaceholder.typicode.com/users',{name : name, username: username})
        getAllUser()
    }
    catch (error) {
        console.log('🥶 error: ', error);
    }
}
