//import React from 'react';

const path='https://coronavirus-19-api.herokuapp.com/countries';

interface Country{
    country:String;
}


function getCountry(country:Country) {
    return fetch(`${path}/${country}`)
        .then((response) => response.json())
}

// eslint-disable-next-line 
export default {
    getCountry
}
