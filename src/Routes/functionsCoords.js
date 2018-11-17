const { Observable, from, of } = require('rxjs')
const { flatMap } = require('rxjs/operators')
const { createLocation } = require("./coonectionDb")


const coords = [{}, {}]


const list = params => Observable.create( observer => {
    //console.log(observer)
    observer.next(coords)
    observer.complete()
})

const getById = uuid => Observable.create( observer => {
    //observer.next(null)
    observer.next({data: 3})
    observer.complete()
})


const create = data => Observable.create( observer => {
    //of(createLocation("DDD123", {fuuu:true})).subscribe( res => {
    //console.log(res)
        //console.log("buuuuuuuuuuuuuuuuuuuu")
        //console.log(data)
        observer.next(data)
        observer.complete()
    //})
        /*from(createLocation("DDD123", {fuuu:true})).subscribe( res => {
        console.log(res)
    })*/
    //console.log(test)
}).pipe(flatMap( res => {
    //console.log(data)
    //return of(createLocation("DDD123", {fuuu:true}))
    return of(createLocation("DDD1234", data))
}

))
//const create = createB.pipe(flatMap( res => of(createLocation("DDD123", {fuuu:true})) ))

const createa = data => Observable.create( observer => {
    of(createLocation("DDD123", {fuuu:true})).subscribe( res => {
        //console.log(res)
        //console.log("buuuuuuuuuuuuuuuuuuuu")
        //console.log(data)
        observer.next(data)
        observer.complete()
    })
        /*from(createLocation("DDD123", {fuuu:true})).subscribe( res => {
        console.log(res)
    })*/
    //console.log(test)
})

const update = (uuid, data) => Observable.create( observer => {
	observer.next({uuid, data})
    observer.complete()
})

const remove = uuid => Observable.create( observer => {
	observer.next({data: 2})
    observer.complete()
})

module.exports = {
    list,
    remove,
    create,
    update,
    getById
}
