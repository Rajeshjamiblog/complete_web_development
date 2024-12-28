function fetchData() {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            let success = true;

            if(success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching Data");
            }

        },3000);
    } )
}

//consuming the promise
//let response = fetchData()
//console.log(response); // Promise { <pending> }


//Ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise




// Promise Chaining
fetchData()
    .then((data) => { console.log(data) })
    .catch((error) => { console.error(error) });


// multi then
fetchData()
    .then((data) => { 
        console.log(data); 
        return `success` 
    })
    .then((value) => { console.log(value) })
    .catch((error) => { console.error(error) });    