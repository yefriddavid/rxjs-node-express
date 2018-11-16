const { Subject, of, forkJoin, from } = require('rxjs')
const { map, flatMap } = require('rxjs/operators')


//const baseFuncs = (func, ...arguments) => {
const baseFuncs = func => {

    const CommonFuncs = new Subject()

    //return CommonFuncs
    return CommonFuncs
    .pipe(flatMap( args =>
    //.pipe(flatMap( { res, req, params } =>
            //forkJoin([of(args), from(func(args[0].params, args[0].body))])
            //forkJoin([of(args), func])
        //forkJoin([of(args), from(func(args[0].params, args[0].body))])
        //
             forkJoin([of(args), from(func.apply(this, args.params || []))])
                .pipe(map(([args, payload]) => {
                    const { res, req } = args
                    return {res, req, payload }
                }))
	))

}


module.exports = {
	baseFuncs
}

