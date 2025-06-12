const objectRef = {
    name: 'Jhoncel Cadiena',
    age: 30, 
    address: {
        street: 'Jayme Street',
        city: 'Cebu City'
    }
}

var getProp = Object.getOwnPropertyNames(objectRef);
console.log(getProp); 
// ['name', 'age', 'address']

var freezeObj = Object.freeze(objectRef);
console.log(freezeObj); 
// { name: 'Jhoncel Cadiena', age: 30, address: { street: 'Jayme Street', city: 'Cebu City' } }


// Prototypes
// Prototypes are objects that can be used to add properties and methods to other objects.
figure = {
getType: function() {
    return this.type ? this.type : "unknown";
}
};

let circle = {
type: "circle",
center: {x:0, y:0},
radius: 100
};
// Using Object.setPrototypeOf to set the prototype of circle to figure
// This allows circle to inherit the getType method from figure
// Note: Using Object.setPrototypeOf is generally not recommended for performance reasons,
// but it is used here for demonstration purposes.
Object.setPrototypeOf(circle, figure); // Set the prototype of circle to figure 
// -- alternative to using __proto__ (ex. circle.__proto__ = figure)
console.log(circle.getType());  
// Output: circle
