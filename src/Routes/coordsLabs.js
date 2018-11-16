const { Observable, defer, Subject, of, forkJoin, from } = require('rxjs')
const { tap, map, mergeMap, flatMap, concat } = require('rxjs/operators')
const //CreateCoord = new Subject(),
	// ListCoords = new Subject(),
CommonFuncs = new Subject() //,
	//UpdateCoords = new Subject()
const { list } = require("./functionsCoords")

const david = Observable.create( observer => {
	observer.next("aca respondo")
	observer.complete()
})


const ajax = _ => {
	return new Promise( (promise, reject) => {
		promise({ajaxSoy:"yeah"})
	})
}

const listTest = _ => {
	return {funct: "rrrr"}
}

function* list(a, b){
	yield({funct: "yeaha"})
}

const test = defer( _ => ajax())

//const source = forkJoin(from(ajax()), from(ajax()))
//return forkJoin(of(args), func(), of(list()))
// .pipe(tap(([a,b,c]) => {  }))
//return forkJoin(of(args), promise(), of(func()), yi())

const baseFuncs = func => CommonFuncs
	.pipe(flatMap( args => 
		 forkJoin([of(args), func])
			.pipe(map(([args, payload]) => {
				const [ res, req ] = args
				//console.log(payload)
				//console.log("bu")
				return [res, req, payload]
			}))
	))


/*const dave = david.subscribe( res => {
	console.log(res)
})*/
//const ListCoords = baseFuncs(list)
const ListCoords = baseFuncs(david)

/* functions */
ListCoords.subscribe( args => {
	const [ res, req, payload ] = args
	res.json(payload)
})

/*CreateCoords.subscribe( args => {
	//const [ req, res ] = args
	//res.json({})
})

UpdateCoords.subscribe( args => {
	//const [ req, res ] = args
	//res.json({})
})*/

const res = { json: (res) => {
	console.log(res)
}}

const req = {}
ListCoords.next([ res, req ])

	// [{ res: { json: () => {} }, req: {}}])


