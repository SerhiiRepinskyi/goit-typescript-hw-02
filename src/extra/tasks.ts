// Partial<T>

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити. Створіть тип для такої форми на основі існуючого типу User.

// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// type UserUpdateForm = Partial<User>;

// const update: UserUpdateForm = {
//   email: "newemail@example.com",
// };

// Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

// interface Config {
//   host: string;
//   port: number;
//   protocol: string;
// }

// function setupConfig(partial: Partial<Config>): Config {
//   return {
//     host: partial.host || "localhost",
//     port: partial.port || 80,
//     protocol: partial.protocol || "http",
//   };
// }

// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж, але ви хочете гарантувати, що функція не змінює вхідний масив.

// function doSomethingWithArray(input: ReadonlyArray<number>): number[] {
//   // Деякі операції над масивом, але без його зміни
//   return Array.from(input);
// }

// const nums = [1, 2, 3];
// doSomethingWithArray(nums);

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

// interface Config {
//   apiUrl: string;
//   timeout: number;
// }

// const config: Readonly<Config> = {
//   apiUrl: "https://api.example.com",
//   timeout: 5000,
// };

// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.

// interface User {
//   name: string;
//   age: number;
//   email: string;
// }

// function getUserContact(user: User): Pick<User, "name" | "email"> {
//   return {
//     name: user.name,
//     email: user.email,
//   };
// }

// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

// interface ApiResponse {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: Date;
// }

// function displayPost(
//   post: ApiResponse
// ): Pick<ApiResponse, "title" | "content"> {
//   return {
//     title: post.title,
//     content: post.content,
//   };
// }

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.

// const usersAge: Record<string, number> = {
//   Alice: 25,
//   Bob: 30,
//   Charlie: 35,
// };

// Задача 2: Мапа з іменами місяців до кількості днів у них.

// const daysInMonth: Record<string, number> = {
//   January: 31,
//   February: 28,
//   March: 31,
//   // ... і так далі
// };

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.

// interface User {
//   username: string;
//   password: string;
//   email: string;
// }

// type SafeUser = Omit<User, "password">;

// const userToSend: SafeUser = {
//   username: "Alice",
//   email: "alice@example.com",
// };

// Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

// interface ApiResponse {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: Date;
// }

// type Post = Omit<ApiResponse, "createdAt">;

// const displayedPost: Post = {
//   id: 1,
//   title: "Title",
//   content: "Content",
// };

// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

// interface MenuItem {
//   name: string;
//   price: number;
//   category: "starter" | "main" | "dessert";
// }

// function filterByCategory(menuItems: MenuItem[], category: "starter" | "main" | "dessert"): MenuItem[] {
//   return menuItems.filter(item => item.category === category);
// }

// // Example
// const menu: MenuItem[] = [
//   { name: "Soup", price: 5, category: "starter" },
//   { name: "Steak", price: 20, category: "main" },
//   { name: "Cake", price: 7, category: "dessert" },
//   { name: "Salad", price: 6, category: "starter" }
// ];

// const starters = filterByCategory(menu, "starter");
// console.log(starters); // [{ name: "Soup", price: 5, category: "starter" }, { name: "Salad", price: 6, category: "starter" }]

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

// interface User {
//   name: string;
//   email: string;
//   birthdate: Date;
// }

// function isAdult(user: User): boolean {
//   const currentDate = new Date();
//   const age = currentDate.getFullYear() - user.birthdate.getFullYear();
//   const monthDifference = currentDate.getMonth() - user.birthdate.getMonth();
//   const dayDifference = currentDate.getDate() - user.birthdate.getDate();

//   // Якщо місяць і день ще не настали в цьому році, зменшити вік на 1
//   if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
//     return age - 1 >= 18;
//   }

//   return age >= 18;
// }

// // Example
// const user: User = {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   birthdate: new Date("2005-07-08"),
// };

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.

// interface CarProperties {
//   brand: string;
//   year: number;
//   fuelType: "petrol" | "diesel" | "electric";
// }

// class Car implements CarProperties {
//   constructor(
//     public brand: string,
//     public year: number,
//     public fuelType: "petrol" | "diesel" | "electric"
//   ) {}

//   getDetails() {
//     console.log(
//       `This is a ${this.year} ${this.brand} that runs on ${this.fuelType}.`
//     );
//   }
// }

// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.

interface StudentData {
  name: string;
  studentID: number;
  major: string;
}

class Student implements StudentData {
  constructor(
    public name: string,
    public studentID: number,
    public major: string
  ) {}

  introduce() {
    console.log(
      `Hello, my name is ${this.name}. My student ID is ${this.studentID} and I study ${this.major}.`
    );
  }
}
