const { Subject, Observable } = require("rxjs")


const source2 = Observable.create( observer => {

    console.log
})


const source = new Subject()



source.subscribe( args => {
    const { a, b } = args
    console.log(a)
    console.log(b)
})


source2.next({a:1, b:2})



/*const radio = C => {
return C / (2 * Math.PI)
}



const runner = (a, ...arguments) => {
//const runner = (a, b) => {

    console.log(arguments)
    console.log(a)
    //console.log(b)
    // console.log(func(15))
}



//runner(function(C) { return radio(C) })


runner.apply(this, ["hello", "world"])
*/


