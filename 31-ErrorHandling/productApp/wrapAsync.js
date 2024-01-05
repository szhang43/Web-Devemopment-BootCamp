/* --------- Async/Await Middleware ------- */
/* Suppose to wrap asynchronous route handlers, and any errors
occuring inside would be caught and passed into next() */

const wrapAsync = (fn) => {
    return function (req, res, next) {
        fn(req, res, next).catch(error => next(error))
    }
}

/* -------- Explanation ------ */
// wrapAsync
/* The wrap async function takes one argument. Which is 
expected to be a asynchronous function code. It then returns
another function, which will be used as an Express middleware */

//Returned function 
/* The return function takes 3 parameters, req, res, and next. 

   Then, within the returned function, it will call the fn that 
   was passed in. This allows any the original asynchronous steps 
   to be run. And since it is assumed to be a promise, we can then use 
   .catch() to catch any errors that occurs during the execution of fn. 
   If any error occurs, then passing the error to next, express 
   error-handling middleware */

module.exports = wrapAsync;
