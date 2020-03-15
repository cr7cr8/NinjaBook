const mongoose = require("mongoose")


const { connDB } = {

    DB: "mongodb+srv://boss:ABCabc123@cluster0-iiqnu.azure.mongodb.net/NinjaBook?poolSize=10&retryWrites=true&w=majority",
    connParam: { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,/*poolSize:10*/ },

    get connDB() { return mongoose.createConnection(this.DB, this.connParam) },

}



function wrapAndMerge(...args) {

    return args.map(function (fn) {
        return {
            [fn.name]: function (req, res, next) {
                try {
                    const obj = fn(req, res, next);
                    return (Promise.resolve(obj) === obj)
                        ? obj.catch(ex => res.send(`<h1>Async error from function <br> ${fn.name}<br> ${ex}</h1>`))
                        : obj
                }
                catch (ex) { res.send(`<h1>something wrong when calling function  <br> ${fn.name}<br></h1> ${ex.stack}`) }
            }
        }
    }).reduce(
        function (accumulator, currentValue) {
            return { ...accumulator, ...currentValue }
        })
}

module.exports = {
    connDB,

    wrapAndMerge,
}