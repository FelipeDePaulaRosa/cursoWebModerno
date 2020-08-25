function pA(n, a1, r) {
    an = a1 + (n - 1) * r
    return n * (a1 + an) / 2
}

function pG(n, a1, r) {
    return a1 * ((r**n)-1)/(r-1)
}

console.log(pA(10, 10, 15))
console.log('----------------');
console.log(pG(10, 5, 3))