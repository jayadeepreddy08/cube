
export const customers = [];

const titles = ['Mr.', 'Ms.', 'Dr.', 'Prof.'];
const names = ['John', 'Jane', 'Sam', 'Sally', 'Bob', 'Alice', 'Tom', 'Jerry', 'Harry', 'Ron', 'Hermione', 'Draco', 'Neville', 'Luna', 'Ginny', 'Fred', 'George', 'Percy', 'Bill', 'Charlie'];
const streets = ['Main St', 'High St', 'Church St', 'Green St', 'Park St', 'Hill St', 'Oak St', 'Pine St', 'Maple St', 'Cedar St'];

for (let i = 1; i <= 50; i++) {
  customers.push({
    id: i,
    name: names[Math.floor(Math.random() * names.length)],
    title: titles[Math.floor(Math.random() * titles.length)],
    address: `${Math.floor(Math.random() * 1000) + 1} ${streets[Math.floor(Math.random() * streets.length)]}`,
  });
}