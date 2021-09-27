function fetchDriverData() {
    //Obj of data to send in future like a dummyDb
    const data = { 
        Email_Id: document.getElementById("semail").value
    };

    //POST request with body equal on data in JSON format
    fetch('https://ad2hyolp7b.execute-api.us-east-1.amazonaws.com/v1/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
        console.log('Success:', data);
    })
    //Then with the error genereted...
    .catch((error) => {
        console.error('Error:', error);
    });
}