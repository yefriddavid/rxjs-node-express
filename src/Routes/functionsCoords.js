const { Observable } = require('rxjs')

const coords = [{}, {}]


const list = params => Observable.create( observer => {
	observer.next(coords)
    observer.complete()
})

const getById = uuid => Observable.create( observer => {
    //observer.next(null)
    observer.next({data: 3})
    observer.complete()
})

const create = data => Observable.create( observer => {
	observer.next(data)
    observer.complete()
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
