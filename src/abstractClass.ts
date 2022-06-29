// abstract class Controller {
//     abstract handle(req: any): void
//
//     setData(req: string) {
//         console.log('start')
//         this.handle(req)
//         console.log('end')
//     }
// }
// // new Controller - error
//
// class UserController extends Controller {
//     handle(req: any) {
//         console.log(req)
//     }
// }
//
// const a = new UserController();
// a.setData('fff')
// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
//     printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
//     выводящий сначала дату, а потом заданное сообщение

abstract class Logger {
    abstract log(message: string): void;

    printDate(date: Date): void {
        this.log(date.toDateString())
    }
}

class MyLogger extends Logger {
    log(message: string) {
        console.log(message)

    }

    logWithDate(date: Date, message: string) {
        this.printDate(date)
        this.log(message)
    }

}

new MyLogger().logWithDate(new Date(), 'my message')
