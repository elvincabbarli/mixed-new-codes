// console.log('hey there')
// const twoFer = (name: string = 'You') : string => {
//     return `One for ${name} , one for you`
// }
// console.log(twoFer())
// console.log(twoFer('Elvin'))
// const isLeap = (year: number) : boolean => {
//     if(year % 366 === 0){
//         return true
//     }
//     else{
//         return false;
//     }
// }
// type MovieType = {
//   readonly title: string;
//   originalTitle?: string;
//   directorName: string;
//   releseaYear: number;
//   boxoffice: {
//     budget: number;
//     gorssUs: number;
//     grossWorldWide: number;
//   };
// };
// const Dune: MovieType = {
//   title: "sdfsdf",
//   originalTitle: "dsdf",
//   directorName: "asdsdk",
//   releseaYear: 5,
//   boxoffice: {
//     budget: 2343,
//     gorssUs: 43345,
//     grossWorldWide: 324,
//   },
// };
// const getProfit = (movie: MovieType) => {
//     console.log(movie.boxoffice.grossWorldWide - movie.boxoffice.budget)
// }
// getProfit(Dune)
// Multidimensial Arrays
// const boardGame: string[][] = [
//   ["4", "5", "6"],
//   ["3", "34", "34"],
// ];
// const ages: number[] = [];
// const gameBoard: string[][] = [[]];
// type productType = {
//   name: string;
//   price: number;
// };
// const product1 = {
//   name: "pr11",
//   price: 12,
// };
// const product2 = {
//   name: "pr12",
//   price: 15,
// };
// const products: productType[] = [product1, product2];
// const getTotal = (products: productType[]) => {
//   let total: number = 0;
//   for (let product of products) {
//     total += product.price;
//   }
//   console.log(total);
// };
// getTotal(products);
// type Point = {
//   x: number;
//   y: number;
// };
// type Loc = {
//   long: number;
//   lat: number;
// };
// let cordinates: Point | Loc = { x: 31, y: 52 };
// cordinates = { long: 45.34324, lat: 545.455 };
// const calculateTax = (price: number | string, tax: number) => {
//   if (typeof price === "string") {
//     price = price.replace("$", "");
//     return Number(price) * tax;
//   } else {
//     return price * tax;
//   }
// };
// console.log(calculateTax("45$", 12));
// const newArray: (string | number)[] = [34, "wwdfgd"];
// const newArrayDifferent: string[] | number[] = ["wwdfgd"];
// let highScore: number | boolean;
// let stuf: (string | number)[];
// let stuffNew: string[] | number[];
// type skillLevel = "Starter" | "Beginner" | "Pro" | "Senior";
// type SkiSchoolStudent = {
//   name: string;
//   age: number;
//   sport: "ski" | "snowboard";
//   level: skillLevel;
// };
// type RGBColor = {
//   r: number;
//   g: number;
//   b: number;
// };
// type HSLColor = {
//   h: number;
//   s: number;
//   l: number;
// };
// let colors: RGBColor[] | HSLColor[] = [];
// let helloFunc = (name: string | string[]) => {
//   if (typeof name === "string") {
//     return `Hello ${name}`;
//   } else {
//     let greetings = name.map((item) => `Hello ${item}`);
//     return greetings.join("\n");
//   }
// };
// console.log(helloFunc("Hesen"));
// console.log(helloFunc(["Hesen", "Husen", "Akif"]));
// TUPLES
// const newArray: [number, number, number] = [255, 58, 45];
// const newArrayString: [number, string, number] = [255, "dsdfsdf", 45];
// ENUMS
// enum ConfirmStatus {
//   PENDING,
//   SHIPPED,
//   DELIVERED,
//   RETURNED,
// }
// let myStatus = ConfirmStatus.DELIVERED;
// function isDelivered(status: ConfirmStatus) {
//   return status === ConfirmStatus.DELIVERED;
// }
// GENERICS
// function identity<T>(name: T): T {
//   return name;
// }
// identity<string>("Hesen");
// console.log("🚀 ~ identity<string>('Hesen'):", identity<string>("Hesen"));
// function getRandomElements<T>(list: T[]): T {
//   let randIndex = Math.floor(Math.random() * list.length);
//   return list[randIndex];
// }
// console.log(getRandomElements<number>([34, 53, 435, 45, 46345, 435]));
// function merge<T, U>(obj1: T, obj2: U) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }
// const mergedData = merge({ name: "Hesen" }, { age: 25 });
// console.log("🚀 ~ mergedData:", mergedData);
// GENERIC TYPE CONSTRAINS
// function mergeConstrains<T extends object, U extends object>(obj1: T, obj2: U) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }
// const mergedDataConstrains = mergeConstrains({ name: "Hesen" }, { age: 25 });
// console.log("🚀 ~ mergedData:", mergedDataConstrains);
// CONSTRAINS FROM INTERFACE
// interface Lengthy {
//   length: number;
// }
// function calcLength<T extends Lengthy>(thing: T): number {
//   return thing.length * 2;
// }
// calcLength("fdgfdg");
// calcLength(4)  // - THIS IS WRONG CAUSE IT IS WAITING FOR STRING;
// DEFAULT GENERIC TYPE
// function makeEmptyArray<T = number>(): T[] {
//   return [];
// }
// const string = makeEmptyArray();
// const bools = makeEmptyArray<boolean>();
// TYPE NARROVING
// function triple(v: string | number) {
//   if (typeof v === "string") {
//     return v.repeat(3);
//   } else {
//     return v * 3;
//   }
// }
// console.log(triple("Salam"));
// TYPE NARROWING WITH IN OPERATOR
// interface Media {
//   name: string;
//   duration: number;
// }
// interface TvShows {
//   name: string;
//   numOfEpisodes: number;
//   EpisodeDuration: number;
// }
// const calcTime = (time: Media | TvShows) => {
//   if ("numOfEpisodes" in time) {
//     return time.numOfEpisodes * time.EpisodeDuration;
//   } else {
//     return time.duration;
//   }
// };
// const time = {
//   name: "dfdsf",
//   numOfEpisodes: 5,
//   EpisodeDuration: 12,
// };
// calcTime(time);
// console.log("🚀 ~ calcTime(time);:", calcTime(time));
// TYPE NARROWING WITH INSTANCEOF
// const printFullDate = (date: string | Date) => {
//   if (date instanceof Date) {
//     return date.toUTCString();
//   } else {
//     let newDate = new Date(date).toUTCString();
//     return newDate;
//   }
// };
// console.log(printFullDate('1'))
// TYPE NARROWING WITH IS
// interface Cat {
//   name: string;
//   numLives: number;
// }
// interface Dog {
//   name: string;
//   sound: string;
// }
// function isCat(animal: Cat | Dog): animal is Cat {
//   return (animal as Cat).numLives !== undefined;
// }
// function getSound(animal: Cat | Dog) {
//   if (isCat(animal)) {
//     return animal.numLives;
//   } else {
//     return animal.sound;
//   }
// }
// TYPE DISCRIMINATION
// interface Rooster {
//     name: string;
//     weight: number;
//     age: number;
//     kind: "rooster";
//   }
//   interface Cow {
//     name: string;
//     weight: number;
//     age: number;
//     kind: "cow";
//   }
//   interface Pig {
//     name: string;
//     weight: number;
//     age: number;
//     kind: "pig";
//   }
//   interface Sheep {
//     name: string;
//     weight: number;
//     age: number;
//     kind: "sheep";
//   }
//   type FarmAnimal = Pig | Rooster | Cow | Sheep;
//   function getFarmAnimalSound(animal: FarmAnimal) {
//     switch (animal.kind) {
//       case "pig":
//         return "Oink!";
//       case "cow":
//         return "Moooo!";
//       case "rooster":
//         return "Cockadoodledoo!";
//       case "sheep":
//         return "Baaa!";
//       default:
//         // We should never make it here, if we handled all cases correctly
//         //   const shouldNeverGetHere: never = animal;
//         //   return shouldNeverGetHere
//         const _exhaustiveCheck: never = animal;
//         return _exhaustiveCheck;
//     }
//   }
//   const stevie: Rooster = {
//     name: "Stevie Chicks",
//     weight: 2,
//     age: 1.5,
//     kind: "rooster",
//   };
//   console.log(getFarmAnimalSound(stevie));
