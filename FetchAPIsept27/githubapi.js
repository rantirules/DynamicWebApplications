let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://api.github.com/users', true)

    //calling the onload to the function
    xhr.onload = function()
        {
            if (this.status === 200)
                {
                    //return to server as an object with JSON.parse
                    console.log(JSON.parse(this.responseText));
        }
                }
    xhr.send();
    fetch('https://api.github.com/users')
   .then(res => res.json())//response type
   .then(data => console.log(data));
   async function getData()
           {
               //await the response of the fetch call
              let response = await fetch('https://api.github.com/users');
               //proceed once the first promise is resolved.
              let data = await response.json()
               //proceed only when the second promise is resolved
               return data;
           }
   getData()
   .then(data => console.log(data));//log the data
