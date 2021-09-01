function submitData(userName, userEmail) {
    const url = "http://localhost:3000/users"
    // return fetch(url, postingObject)
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
            // debugger
            // console.log(Object.values(obj)[0])
            document.body.innerHTML = Object.values(obj)[0]
        })
        .catch(function (error) {
            document.body.innerHTML = error.message;
        })

    // const postingObject = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify({
    //         name: userName,
    //         email: userEmail
    //     })
    // }
}