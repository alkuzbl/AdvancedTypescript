function toString<T>(data: T): string | undefined {
    if (typeof data === 'undefined') {
        return undefined
    }
    return JSON.stringify(data)
}

console.log(toString(3))
console.log(toString(true))
console.log(toString(['d', 'f']))
console.log(toString({a: 1}))

const data = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Petya'},
    {id: 3, name: 'Masha'},
    {id: 4, name: 'Dasha'},
    {id: 5, name: 'Pasha'},
    {id: 6, name: 'Gesha'},
]
const data2 = [
    {name: 'Sasha'},
    {name: 'Petya'},
    {name: 'Masha'},
    {name: 'Dasha'},
    {name: 'Pasha'},
    {name: 'Gesha'},
]

class IId {
    id: number;
}

// function sortById<T extends IId>(data: Array<T>, type: 'asc' | 'desc'): Array<T> {
//     if (type === 'asc') {
//         return data.sort((a, b) => a.id > b.id ? 1 : -1)
//     }
//
//     return data.sort((a, b) => a.id < b.id ? 1 : -1)
// }
function sortById<T extends IId>(data: Array<T>, type: 'asc' | 'desc' = 'asc'): Array<T> {
    return data.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id;
        }
    })


}

console.log(sortById(data, "desc"))

//console.log(sortById(data2, "asc"))

class Resp<D, E> {
    data?: D;
    error?: E;

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data;

        }
        if (error) {
            this.error = error;

        }
    }
}

const resp = new Resp('data', 500)
const resp2 = new Resp<string, number>('data', 500)

class HTTPResp<F> extends Resp<string, number>{
    code: F;

    setCode(code: F){
        this.code = code;
        return this.code;
    }
}

const res3 = new HTTPResp();
