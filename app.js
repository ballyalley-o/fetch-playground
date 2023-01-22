


// async function myFunc() {
//     const promise = new Promise((resolve, reject) => {
//          setTimeout(() => {
//            resolve('Hello');
//          }, 2000);
//     })
//     const res = await promise;
//     return res;

//     // if(!error) {
//     //      const res = await promise;
//     //      return res;
//     // } else {
//     //     await Promise.reject(new Error('Something went wrong'))
//     // }
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


async function getUsers() {
  const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
  const data = await res.json();

   return data;
}

getUsers()
    .then(  //push data to dom
        quote => {
            console.log(quote)
            const output = document.getElementById('output');
            output.innerHTML =  `
                    <h1>${quote[0].quote}</h1>
                    <i><p>${quote[0].author}</p></i>
                `

        }
  )