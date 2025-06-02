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

// Export all types define in `types.ts` for TypeScript users
export * from "./types";
// If you want to be selective about what to export, you can do so like this:
// export { Person } from "./types";
