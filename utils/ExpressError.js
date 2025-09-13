// class ExpressError extends Error{
//     constructor(statuesCode, message){
//         super();
//         this.statuesCode = statuesCode;
//         this.message = message;
//     }
// }

// module.exports = ExpressError;


//After Using Chatgpt
class ExpressError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ExpressError;