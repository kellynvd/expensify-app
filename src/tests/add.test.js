const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should generate greeting from name', () => {
  const result = generateGreeting('Kellyn');
  expect(result).toBe('Hello Kellyn!');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});