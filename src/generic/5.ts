/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

// Examples
const stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

const numberBooleanPair: KeyValuePair<number, boolean> = {
  key: 1,
  value: true,
};

export {};
