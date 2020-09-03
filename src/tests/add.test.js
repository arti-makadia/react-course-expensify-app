const add = (a, b) => a + b;
const greetings = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should Greete with name', () => {
    const result = greetings('Arti');
    expect(result).toBe('Hello Arti!');
});

test('should Greete with no Name', () => {
    const result = greetings();
    expect(result).toBe('Hello Anonymous!');
});
