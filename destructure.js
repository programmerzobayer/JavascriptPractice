const person = {Id: 1, Name: "jubayer", Work: "student", Phone: "01772266546" , Nationality: "Bangladeshi" }
// old method  
// const Name = person.Name ;
// console.log(Name);


// destructure Method 
const {Name,Nationality, Work,Phone} = person ; 

console.log("Name : "+Name,Nationality, Work,Phone);


const friendList= ['Emma Waston' , 'Taylor Swift' ,'Robert Downey jr', "Tom holend"];
const [firstFriend, ...cancelFriend] = friendList ;
console.log(...cancelFriend);
