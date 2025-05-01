import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { example, Person } from '@/index';

describe('Person', () => {
  // Test the type constraints
  describe('type constraints', () => {
    it('should require both name and age properties', () => {
      // TypeScript compilation would fail for these cases
      const testCases = [
        { name: 'John Doe' }, // missing age
        { age: 30 }, // missing name
        {} // missing both
      ];

      testCases.forEach(invalidPerson => {
        // @ts-expect-error - Intentionally testing invalid types
        expect(() => example(invalidPerson)).toThrow('Invalid person object');
      });
    });

    it('should enforce property types', () => {
      const testCases: Array<unknown> = [
        { name: 123, age: 30 }, // invalid name type
        { name: 'John', age: '30' }, // invalid age type
      ];

      testCases.forEach(invalidPerson => {
        expect(() => example(invalidPerson as Person)).toThrow('Invalid person object');
      });
    });
  });

  describe('example function', () => {
    let consoleSpy: any;

    beforeEach(() => {
      consoleSpy = vi.spyOn(console, 'log');
    });

    afterEach(() => {
      consoleSpy.mockRestore();
    });

    it('should format the greeting message correctly', () => {
      const testCases: Person[] = [
        { name: 'John Doe', age: 30 },
        { name: 'Jane Smith', age: 25 },
        { name: 'Bob Wilson', age: 45 }
      ];

      testCases.forEach(person => {
        example(person);
        expect(consoleSpy).toHaveBeenCalledWith(
          `Hello ${person.name}, you are ${person.age} years old!`
        );
        consoleSpy.mockClear();
      });
    });

    it('should handle special characters in names', () => {
      const person: Person = {
        name: 'María-José',
        age: 28
      };

      example(person);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Hello María-José, you are 28 years old!'
      );
    });
  });
}); 