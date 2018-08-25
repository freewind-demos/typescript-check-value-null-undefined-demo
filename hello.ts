const a = undefined
const b = null

function check(value: any, name: string) {
    if (value == null) {
        console.log(name + ' == null')
    }
    if (value === null) {
        console.log(name + ' is null (' + name + ' === null)')
    }
    if (typeof(value) === 'undefined') {
        console.log(name + ' is undefined (typeof(' + name + ') === \'undefined\')')
    }
}

check(a, 'a')
check(b, 'b')
