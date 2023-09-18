const arr = [1, 2, 3, 4];

const doubled = arr.map((num) => num * 2);

// function double(num) {
//     return num * 2;
// }

console.log(doubled);

// destructuring assignment //...rest operator

const [first, second] = arr;
// const first = arr[0];
// const second = arr[1]

console.log(first, second)

const person = {
    name: 'Corner',
    website: 'Frontend Expert'
};

const {name, ...rest} = person;

console.log(name, rest)

//...spred operator
function add(x, y) {
    console.log(x + y);
}
add(...arr)