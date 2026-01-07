import add from 'calc/add';

describe('add function', () => {
  test('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 20)).toBe(30);
    expect(add(1, 1)).toBe(2);
  });

  test('should add positive and negative numbers', () => {
    expect(add(5, -3)).toBe(2);
    expect(add(-5, 3)).toBe(-2);
    expect(add(10, -15)).toBe(-5);
  });

  test('should add two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-10, -20)).toBe(-30);
  });

  test('should add zero correctly', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
    expect(add(0, -5)).toBe(-5);
    expect(add(-5, 0)).toBe(-5);
  });

  test('should add decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(add(-1.5, 2.5)).toBe(1);
  });

  test('should handle large numbers', () => {
    expect(add(1000000, 2000000)).toBe(3000000);
    expect(add(-1000000, 2000000)).toBe(1000000);
  });
});
