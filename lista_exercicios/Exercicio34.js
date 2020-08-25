function compara(String1, String2) {
    if (String1 > String2) {
        aux = String2
        String2 = String1
        String1 = aux
    }
    a = String1.toString().toUpperCase()
    b = String2.toString().toUpperCase()
    comp = false
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a.charAt(i) == b.charAt(j)) {
                comp = true
                break
            } else {
                if(j == b.length-1 && a.charAt(i) != b.charAt(b.length - 1)){
                    return false
                }
            }
        }
    }
    return comp
}

console.log(compara('AABC', 'BaCA'))
console.log(compara('AABCab', 'BaCA'))
console.log(compara('AABC1', 'BaCA'))
console.log(compara('AABC111', 'BaCA1'))
console.log(compara('AABCs', 'BSaCA'))
