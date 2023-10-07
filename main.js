let storeInarray = [
    [[1,2,3],[4,5,6],[7,8,9]],
    [[10,11,12],[13,14,15],[16,17,18]],
    [[19,20,21],[22,23,24],[25,26,27],[28,29,30]] // this last arry can't use in for loop what should i do to catch this in for loop is there any olternative way? 
];

for (let O = 0; O<3; O++){
    for(let A = 0; A<3;A++){
        for(let V =0;V<3;V++){
            console.log(storeInarray[O][A][V]);
        }
    }
}