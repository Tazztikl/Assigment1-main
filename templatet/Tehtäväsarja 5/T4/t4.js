'use strict';

async function fetchData (url, options) {
    try {
        const response = await fetch(url, options);
        if(!response.ok){
            console.log('ei ok');
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.log('error');
        throw new Error('viesti')
    }
}


(async function(){try {
    const user = {
       name: 'John Doe',
       job: 'Developer'
    };
    const url = 'https://reqres.in/api/users';
    const options = {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'
       },
       body: JSON.stringify(user)
    }
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
 })();


