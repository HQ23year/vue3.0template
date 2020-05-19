const tryCatch = promise => promise.then(res => [null, res]).catch(error => [error]);
export default tryCatch


