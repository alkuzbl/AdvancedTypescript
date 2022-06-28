// создание классов и Перегрузка конструктора класса
// class User {
//     name: string;
//
//     constructor();
//     constructor(name: string);
//     constructor(age: number);
//     constructor(name: string, age: number);
//     constructor(ageOrName?: string | number, age?: number) {
//         if (typeof ageOrName === 'string') {
//             this.name = ageOrName;
//         } else if(typeof ageOrName === 'number'){
//             this.age = ageOrName
//         }
//         if (typeof age === 'number') {
//             this.age = age;
//         }
//     }
// }
//
//
// const user = new User('Sasha')
// const user2 = new User('Sasha', 33)
// const user3 = new User(33)
// const user4 = new User()
//
// console.log(user)
// console.log(user2)
// console.log(user3)
// console.log(user4)

// Определение в конструкторе класса
// enum PaymentStatus {
//     Holded,
//     Processed,
//     Reversed
// }
// class Payment {
//     id: number;
//     status: PaymentStatus = PaymentStatus.Holded;
//     createdAt: Date = new Date();
//     updatedAt: Date;
//
//     constructor(id: number) {
//         this.id = id;
//         // this.createdAt = new Date();
//         // this.status = PaymentStatus.Holded;
//     }
//
//     getPaymentLifeTime(): number {
//         return new Date().getTime() - this.createdAt.getTime()
//     }
//
//     unHoldPayment(): void {
//         if (this.status === PaymentStatus.Processed) {
//             throw new Error('Возврат не возможен')
//         }
//         this.status = PaymentStatus.Reversed;
//         this.updatedAt = new Date;
//     }
// }

// Перегрузка методов
// class User {
//     skills: string[];
//
//
//     addSkill(skills: string[]): void;
//     addSkill(skill: string): void;
//     addSkill(skillOrSkills: string | string[]): void {
//         if(typeof skillOrSkills === 'string'){
//             this.skills.push(skillOrSkills)
//         } else {
//             this.skills.concat(skillOrSkills)
//         }
//     }
// }

// также возможна перегрузка функций
// function run(distance: string): string;
// function run(distance: number): number;
// function run(distance: string | number): string | number {
//     if(typeof distance === 'string'){
//         return '123'
//     } else {
//         return 123
//     }
// }

// get и set
// class User {
//     _login: string;
//     password: string;
//
//     set Login(login: string | number){
//         this._login = `user-${login}`
//     }
//     get Login(){
//         return this._login
//     }
//     // set and get только синхронные методы
//     // если к примеру нужно работать с password, лучше использовать обычный метод
// }
