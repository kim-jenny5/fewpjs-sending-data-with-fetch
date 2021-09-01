function submitData(userName, userEmail) {
    const url = "http://localhost:3000/users"
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }).then(resp => resp.json())
        .then(function (obj) {
            document.body.innerHTML = Object.values(obj)[0]
        })
        .catch(function (error) {
            document.body.innerHTML = error.message;
        })
}