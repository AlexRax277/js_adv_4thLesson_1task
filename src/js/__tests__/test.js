import foo from '../app';

test('basic test', () => {
  const data = { name: 'Маг', health: 90 };
  const result = foo(data);
  expect(result).toBe('healthy');
  const data2 = { name: 'Маг', health: 50 };
  const result2 = foo(data2);
  expect(result2).toBe('wounded');
  const data3 = { name: 'Маг', health: 10 };
  const result3 = foo(data3);
  expect(result3).toBe('critical');
});
