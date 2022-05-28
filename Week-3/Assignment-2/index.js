const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (city, country) {
    return (
      this.firstName + " " + this.lastName + " from " + city + ", " + country
    );
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};
//Using bind
let fullName = person.fullName.bind(member);
console.log(fullName( "Delhi", "India")); //Hege Nilsen from Delhi, India

//Using apply
console.log(person.fullName.apply(member, ["Oslo", "Norway"])); //Hege Nilsen from Oslo, Norway

//Using call
console.log(person.fullName.call(member, "Oslo", "Norway")); //Hege Nilsen from Oslo, Norway
