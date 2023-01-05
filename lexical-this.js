//Lexical this
//if you want have access to this inside a callback or function in another function const that = this or .bind(this)

const person = {
  firstName: "Jamila",
  cars: ["Tesla", "Ferrari"],
  toString: function () {
    console.log(`Name: ${this.firstName}`);
    const that = this;
    this.cars.forEach((car) => {
      console.log(`Name: ${that.firstName} drives ${car}`);
    });
  },
  deleteME: true,
};

person.toString();
