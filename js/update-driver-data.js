function updateDriverProfile() {
    fetch('https://ad2hyolp7b.execute-api.us-east-1.amazonaws.com/v1/data', {
	method: 'PUT',
	body: JSON.stringify({
		title: 'New Pirate Captain',
		body: 'Arrrrrr-ent you excited?',
		userId: 3
	}),
	headers: {
		'Content-type': 'application/json'
	}
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}