// // function add(arguments) {
// //     if (typeof arguments === 'number') {
// //         var sumOfNumbers = 0;
// //         for (let i = 0; i < arguments.length; i++) {
// //             sumOfNumbers += arguments[i];
// //         }
// //         return sumOfNumbers;
// //     } else {
// //         return 'Not a number';
// //     }
// // };

// // console.log(add(2,5,5));


// // function add(arguments) {
// //     let sumOfNumbers = 0;
// //     for (let i = 0; i < arguments.length; i++) {
// //         if (typeof arguments === 'number') {
// //             for (let j = i; j < arguments.length; j++) {
// //                     sumOfNumbers += arguments[j];
// //             }
// //             return sumOfNumbers;
// //         } else {
// //             return 'Not a number';
// //         }
// //     }
// // };
// //     console.log(add(2,5,5));


function add(numberFirst, numberSecond) {
    if (typeof numberFirst === 'number' && typeof numberSecond === 'number') {
        return numberFirst + numberSecond;
    } else {
        throw new Error();
    }
};
 console.log(add(5,'s'));
