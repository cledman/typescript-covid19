import React from 'react';

const path='https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
    method: 'get',
    mode:'cors',

}

interface Country{
    country:String;
}

interface Headers {
    headers:Array<{
        method:string,
        mode:string,
        cache:string
    }>
}

function getCountry(country:Country) {
    return fetch(`${path}/${country}`)
        .then((response) => response.json())
}

export default {
    getCountry
}
