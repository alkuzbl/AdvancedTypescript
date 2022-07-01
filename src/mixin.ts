type Constructor = new (...args: any[]) => {}
type GConstructor<T = {}> = new (...args: any[]) => T

class List {
    constructor(public items: string[]) {
    }
}
class Accordion {
    isOpened: boolean;
}
type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

// Обычный способ - наследование
class ExtendedListClass extends List{
    first(){
        return this.items[0]
    }
}

// Миксин
function ExtendedList<TBase extends ListType & AccordionType> (Base: TBase) {
    return class ExtendedList extends Base{
        first(){

            return this.items[0]
        }
    }
}
class AccordionClass {
    isOpened: boolean;
    constructor(public items: string[]) {
    }

}
const list = ExtendedList(AccordionClass)
const result = new list(['sss', 'fff'])

console.log('mixin', result.first())
