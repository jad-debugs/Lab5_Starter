// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// phone
test("valid phone number with dashes", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("valid phone number with parentheses", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("invalid phone number too short", () => {
  expect(isPhoneNumber("123-456")).toBe(false);
});

test("invalid phone number with letters", () => {
  expect(isPhoneNumber("123-abc-7890")).toBe(false);
});

// email
test("valid email basic", () => {
  expect(isEmail("test@example.com")).toBe(true);
});

test("valid email simple domain", () => {
  expect(isEmail("student@ucsd.edu")).toBe(true);
});

test("invalid email missing at symbol", () => {
  expect(isEmail("testexample.com")).toBe(false);
});

test("invalid email missing domain", () => {
  expect(isEmail("test@")).toBe(false);
});

// password

test("valid strong password", () => {
  expect(isStrongPassword("Password1")).toBe(true);
});

test("valid strong password with different number", () => {
  expect(isStrongPassword("HelloWorld2")).toBe(true);
});

test("invalid password starts with number", () => {
  expect(isStrongPassword("1password")).toBe(false);
});

test("invalid password has special character", () => {
  expect(isStrongPassword("Password!")).toBe(false);
});

// date
test("valid date with slashes", () => {
  expect(isDate("12/25/2024")).toBe(true);
});

test("valid date single digits", () => {
  expect(isDate("1/5/2024")).toBe(true);
});

test("invalid date wrong separator", () => {
  expect(isDate("12-25-2024")).toBe(false);
});

test("invalid date not a date", () => {
  expect(isDate("hello")).toBe(false);
});

// color
test("valid hex color lowercase", () => {
  expect(isHexColor("#ffffff")).toBe(true);
});

test("valid hex color uppercase", () => {
  expect(isHexColor("#ABCDEF")).toBe(true);
});

test("invalid hex color too short", () => {
  expect(isHexColor("ff")).toBe(false);
});

test("invalid hex color has non-hex letter", () => {
  expect(isHexColor("#gggggg")).toBe(false);
});