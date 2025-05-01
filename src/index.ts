// Export your library's types
export interface Person {
  name: string;
  age: number;
}

// Export your library's functionality here
export const example = (person: Person) => {
  console.log(`Hello ${person.name}, you are ${person.age} years old!`);
}; 