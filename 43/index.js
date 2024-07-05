// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a
// copy of the array of magicians’ names. Because the original array will be unchanged, return the new
// array and store it in a separate array. Call show_magicians() with each array to show that you have one
// array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
    ;
}
;
let magician = ["ZIA", "Danyal", "Ameen"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
    ;
}
;
make_great(magician);
show_magicians(magician);
function make_great2(magicians) {
    const great_magician = [];
    for (let i = 0; i < great_magician.length; i++) {
        great_magician.push(magicians[i] + ' the great.');
    }
    return great_magician;
}
;
const magician3 = ["ZIA", "Danyal", "Ameen"];
const great_magician2 = make_great2(magician3);
show_magicians(magician3);
show_magicians(great_magician2);
export {};
