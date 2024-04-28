function handleResponseFromAPI(promise){
    return promise.then(() => { status: 200})
    .catch(() => Error())
    .finally(() => "Got a response from the API")
}
