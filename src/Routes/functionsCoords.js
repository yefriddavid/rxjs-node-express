const { Observable } = require('rxjs')

const coords = [{}, {}]


const list = params => Observable.create( observer => {
	observer.next(coords)
    observer.complete()
})

const getById = uuid => Observable.create( observer => {
	observer.next({getById: true})
    observer.complete()
})

const create =  data => Observable.create( observer => {
    console.log(data)
	observer.next({create: true})
    observer.complete()
})

const update = (uuid, data) => Observable.create( observer => {
	observer.next({update: true})
    observer.complete()
})

const remove =  uuid => Observable.create( observer => {
	observer.next({remove: true})
    observer.complete()
})

module.exports = {
    list,
    remove,
    create,
    update,
    getById
}
