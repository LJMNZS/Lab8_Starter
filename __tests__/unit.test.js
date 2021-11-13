// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Four tests for each function, 2 pass, 2 fail

// test('adds 1 + 2 to equal 3', () => {
//   expect(1+2).toBe(3);
// });

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1,2)).toBe(3);
// })

test('isPhoneNumber test 1: should be true', () => {
  const p = "619-666-9567";
  expect(functions.isPhoneNumber(p)).toBe(true);
})

test('isPhoneNumber test 2: should be true', () => {
  const p = "(858) 777-9000";
  expect(functions.isPhoneNumber(p)).toBe(true);
})

test('isPhoneNumber test 3: should be false', () => {
  const p = "notANumber";
  expect(functions.isPhoneNumber(p)).toBe(false);
})

test('isPhoneNumber test 4: should be false', () => {
  const p = "619-666--9282";
  expect(functions.isPhoneNumber(p)).toBe(false);
})

test('isEmail test 1: should be true', () => {
  const e = 'lmenezes@ucsd.edu';
  expect(functions.isEmail(e)).toBe(true);
})

test('isEmail test 2: should be true', () => {
  const e = 'johndoe@gmail.com';
  expect(functions.isEmail(e)).toBe(true);
})

test('isEmail test 3: should be false', () => {
  const e = 'johndoe@gmail.c';
  expect(functions.isEmail(e)).toBe(false);
})

test('isEmail test 4: should be false', () => {
  const e = '619-555-9292';
  expect(functions.isEmail(e)).toBe(false);
})

test('isStrongPassword test 1: should be true', () => {
  const p = "StrongPassword";
  expect(functions.isStrongPassword(p)).toBe(true);
})

test('isStrongPassword test 2: should be true', () => {
  const p = "so000str0ng";
  expect(functions.isStrongPassword(p)).toBe(true);
})

test('isStrongPassword test 3: should be false', () => {
  const p = "1nvalidstart";
  expect(functions.isStrongPassword(p)).toBe(false);
})

test('isStrongPassword test 4: should be false', () => {
  const p = "tooooooooooooLoooooooooong";
  expect(functions.isStrongPassword(p)).toBe(false);
})

test('isDate test 1: should be true', () => {
  const d = "25/5/2000";
  expect(functions.isDate(d)).toBe(true);
})

test('isDate test 2: should be true', () => {
  const d = "11/31/2000";
  expect(functions.isDate(d)).toBe(true);
})

test('isDate test 3: should be false', () => {
  const d = "112/31/2000";
  expect(functions.isDate(d)).toBe(false);
})

test('isDate test 4: should be false', () => {
  const d = "1//2000";
  expect(functions.isDate(d)).toBe(false);
})

test('isHexColor test 1: should be true', () => {
  const c = "AAA";
  expect(functions.isHexColor(c)).toBe(true);
})

test('isHexColor test 2: should be true', () => {
  const c = "747474";
  expect(functions.isHexColor(c)).toBe(true);
})

test('isHexColor test 3: should be false', () => {
  const c = "7474747";
  expect(functions.isHexColor(c)).toBe(false);
})

test('isHexColor test 4: should be false', () => {
  const c = "74";
  expect(functions.isHexColor(c)).toBe(false);
})