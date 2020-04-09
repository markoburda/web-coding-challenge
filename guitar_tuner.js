// 1 (E)	329.63 Hz	E4
// 2 (B)	246.94 Hz	B3
// 3 (G)	196.00 Hz	G3
// 4 (D)	146.83 Hz	D3
// 5 (A)	110.00 Hz	A2
// 6 (E)	82.41 Hz	E2

// - The guitar strings are played 1st to 6th, High E to Low E.
// - If the guitar string matches, return `"OK"` for that guitar string.
// - If it's too low, return `">•"` for 1 or 2 percent off (the arrow means, tune up).
// - Return `">>•"` if it's way off. For more than 3 percent.
// - If it's too high, return `"•<"` for 1 or 2 percent, and `"•<<"` for more, (tune down).
// - Check the rounded percentages.
// - If `0` is given, the guitar string isn't played, return `" - "`.

// tune([0, 246.94, 0, 0, 0, 80]) ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]
//tune([329.63, 246.94, 195, 146, 111, 82.41]) ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]
// tune([329.63, 246.94, 196, 146.83, 110, 82.41]) ➞ ["OK", "OK", "OK", "OK", "OK", "OK"]

function tune(arr) {
    function cmp(str, perfStr){
        if(str === perfStr){return "OK"}
        else if(str === 0){return "-"}
        else{
            const diff = Math.round(100 * Math.abs(str - perfStr)/perfStr)/100;
            if(str > perfStr){
                return 0.03 > diff ? "•<" : "•<<";
            }
            else{
                return 0.03 > diff ? ">•" : ">>•";
            }
        }
    }
    const perfArr = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    res = [];

    for(var i = 0; i < arr.length; i++){
        res[i] = cmp(arr[i], perfArr[i]);
    }
    return res;
}

console.log(tune([0, 246.94, 0, 0, 0, 80]));
console.log(tune([329.63, 246.94, 195, 146, 111, 82.41]));
console.log(tune([329.63, 246.94, 196, 146.83, 110, 82.41]));