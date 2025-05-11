import { Person } from "./types";

// Export your library's functionality here
export const example = (person: Person) => {
  // Runtime validation for JavaScript users
  if (
    !person ||
    typeof person.name !== "string" ||
    typeof person.age !== "number"
  ) {
    throw new Error(
      "Invalid person object. Must have string name and number age properties.",
    );
  }

  console.log(`Hello ${person.name}, you are ${person.age} years old!`);
};

// Export the types so they can be accessed by other packages
export { Person };
