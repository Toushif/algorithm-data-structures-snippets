// Naive algorithm for Pattern Searching
// Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search(char pat[], char txt[]) that
// prints all occurrences of pat[] in txt[]. You may assume that n > m.
// Examples:

// Input:  txt[] = "THIS IS A TEST TEXT"
//         pat[] = "TEST"
// Output: Pattern found at index 10

// Input:  txt[] =  "AABAACAADAABAABA"
//         pat[] =  "AABA"
// Output: Pattern found at index 0
//         Pattern found at index 9
//         Pattern found at index 12

// My solution
function search(pat, text) {
    let k = 0;
    for (let i = 0; i < text.length; i += k) {
        for (j = 0; j < pat.length; j++) {
            if (text[i + j] !== pat[j]) {
                k = j || 1;
                break;
            }
            if (j === pat.length - 1) {
                k = 1;
                console.log("Pattern found at index", i);
            }
        }
    }
}

// Another solution -
function search(txt, pat) {
    let M = pat.length;
    let N = txt.length;

    /* A loop to slide pat one by one */
    for (let i = 0; i <= N - M; i++) {
        let j;

        /* For current index i, check for pattern
            match */
        for (j = 0; j < M; j++) if (txt[i + j] != pat[j]) break;

        // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
        if (j == M) console.log("Pattern found at index ", i);
    }
}

let txt = "AABAACAADAABAAABAA";
let pat = "AABA";
search(txt, pat);

// Pattern found at index 0 
// Pattern found at index 9 
// Pattern found at index 13 
