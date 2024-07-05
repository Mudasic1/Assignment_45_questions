// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guests : string[] = ["Muzamil","Mudasir","Mubashir"];
let unable : string = "Mudasir";
console.log(`${unable} can't make it dinner.`);
let newGuest : string = "Adil";
guests[guests.indexOf(unable)] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me at dinner.`)
})
