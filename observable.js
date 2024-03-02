/* const { Observable, filter } = require('rxjs')

const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve("dog"),
            resolve("cat"),
            resolve("bird")
    }, 1000)
});

promise.then(result => { console.log('promise result:', result) })

const observable = new Observable(observer => {
    setTimeout(() => {
        observer.next("dog"),
        observer.next("cat"),
        observer.next("bird")
    }, 1000);
})

observable.subscribe(result => { console.log("Result: ", result) })

const subscription = observable.pipe(filter(result => result === "bird"))
                                .subscribe(result => {
                                    console.log('observable result: ', result)
                                }) */