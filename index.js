function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    return function namedFunction(){
        console.log('hey')
    }
}

function returnsAnAnonymousFunction(){
    return ()=>{console.log('hello')}
}