// Export your library's types
export interface Person {
  name: string;
  age: number;
}

// Export your library's functionality here
export const example = (person: Person) => {
  // Runtime validation for JavaScript users
  if (!person || typeof person.name !== 'string' || typeof person.age !== 'number') {
    throw new Error('Invalid person object. Must have string name and number age properties.');
  }
  
  console.log(`Hello ${person.name}, you are ${person.age} years old!`);
}; 