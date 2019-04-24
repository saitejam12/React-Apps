const generateGreeting = name => `Hello ${name}!`;

test("expect a greeting", () => {
  const result = generateGreeting("Sai");
  expect(result).toBe(`Hello Sai!`);
});
