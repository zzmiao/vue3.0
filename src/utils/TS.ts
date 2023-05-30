class People {
    /**
     * public：公共访问修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
     * private：私有访问修饰符，只能在类内使用private修饰的属性或者行为。
     * protected：受保护的访问修饰符，可以本类和子类中使用protected修饰的属性和行为。
     * **/
    public _firstName: string;//公共属性
    public _lastName: string;//公共属性
    private _age: number;//私有属性
    protected _phone: number;//受保护的属性
    //公共属性与静态属性的区别
    //公共属性：每次实例化都会生成一个新的属性
    //静态属性：每次实例化都会共用一个属性
    static _site: string = "www.baidu.com";//静态属性
    _website: string = "www.baidu.com";//公共属性
    //什么是静态成员？
    //静态成员是指在类中通过static修饰的属性或者方法，静态成员只能通过类名.的方式调用。
    //静态成员可以被继承吗？
    //可以
    //静态成员可以被子类重写吗？
    //不可以
    //静态成员可以被实例化调用吗？
    //不可以
    //静态成员可以被实例化修改吗？
    //不可以
    //静态成员可以被实例化删除吗？
    //不可以
    //静态成员可以被实例化添加吗？
    //不可以
    //静态成员可以被实例化访问吗？
    //不可以
    //静态成员可以被实例化继承吗？
    //不可以
    //静态成员可以被实例化重写吗？
    //不可以
    //静态成员可以被实例化调用吗？
    //不可以

    //什么是实例成员？
    //实例成员是指在类中通过this.的方式定义的属性或者方法，实例成员只能通过实例化对象.的方式调用。
    //实例成员可以被继承吗？
    //可以
    //实例成员可以被子类重写吗？
    //可以
    //实例成员可以被实例化调用吗？
    //可以
    //实例成员可以被实例化修改吗？
    //可以
    //实例成员可以被实例化删除吗？
    //可以
    //实例成员可以被实例化添加吗？
    //可以
    //实例成员可以被实例化访问吗？
    //可以
    //实例成员可以被实例化继承吗？
    //可以
    //实例成员可以被实例化重写吗？
    //可以
    //实例成员可以被实例化调用吗？
    //可以

    //实例员工分为哪几种？
    //公共实例成员：公共实例成员是指在类中通过public修饰的属性或者方法，公共实例成员可以在本类、子类和实例化对象中使用。
    //私有实例成员：私有实例成员是指在类中通过private修饰的属性或者方法，私有实例成员只能在本类中使用。
    //私有实例成员：私有实例成员是指在类中通过private修饰的属性或者方法，私有实例成员只能在本类中使用。可以被实例化调用吗？
    //不可以
    //受保护的实例成员：受保护的实例成员是指在类中通过protected修饰的属性或者方法，受保护的实例成员只能在本类和子类中使用。
    //受保护的实例成员：受保护的实例成员是指在类中通过protected修饰的属性或者方法，受保护的实例成员只能在本类和子类中使用。可以被实例化调用吗？
    //不可以
    //静态实例成员：静态实例成员是指在类中通过static修饰的属性或者方法，静态实例成员只能通过类名.的方式调用。

    constructor(firstName: string, lastName: string, age: number, phone: number) {
        console.log("构造函数");
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._phone = phone;
        this.showAge();
        console.log("[static]", People._site);
        console.log("[public]", this._website);
    }
    /**
     * void:用于标识方法返回值的类型，表示该方法没有返回值。
     * **/
    init(): void {
        console.log("init");
        console.log("[public]", this._firstName);
        console.log("[public]", this._lastName);
        console.log("[private]", this._age);
        console.log("[protected]", this._phone);

        const price: number = 103;
        const num: number = 2.456;
        const total: number = price * num;
        console.log("[number]", total);



        interface person {
            name: string,
            age: number,
            phone?: number,
            family?: family[]
        }
        interface family {
            name: string,
            age: number,
            phone: number
        }
        let dataList: person[] = [];
        dataList.push({ name: "张三", age: 18, phone: 123456789 });
        dataList.push({ name: "张三", age: 18, phone: 123456789, family: [{ name: "张三", age: 18, phone: 123456789 }] });
        console.log("[interface]", dataList);
        dataList[0].age = 19;
        console.log("[interface]", dataList);

        dataList.forEach((item: person, index: number) => {
            console.log("[interface]", item, index);
        })
    }

    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }

    showFullName(): string {
        console.log("[姓名:]", this._firstName + "" + this._lastName);
        return this._firstName + "" + this._lastName;
    }
    private showAge(): number {
        console.log("[年龄:]", this._age);
        return this._age;
    }
    protected showPhone() {
        console.log("[手机号:]", this._phone);
    }

}
const site = new People("张", "三", 18, 123456789);
console.log(site.firstName);
site.firstName = "李";
console.log(site.firstName);
site.showFullName();
site.init();
console.log("[People]", People._site);

/**
 * 子类继承父类
 * **/
class Woman extends People {
    constructor(firstName: string, lastName: string, age: number, phone: number) {
        super(firstName, lastName, age, phone);
        console.log("子类构造函数");
        console.log("[Woman]", Woman._site);
    }
    show() {
        console.log("子类", this._phone);
    }
}
const woman = new Woman("李", "四", 19, 123456789);

woman.show();
//子类可以使用父类的静态属性吗?
//可以
//子类可以使用父类的公共属性吗?
//可以
//子类可以使用父类的私有属性吗?
//不可以
//子类可以使用父类的受保护的属性吗?
//可以

console.log("[Woman]", Woman._site)
//循环数据时，使用forEach,for，find,还是map
//forEach:只能遍历数组，不能return，不能返回一个新的数组
//for:可以遍历数组，可以return，返回一个新的数组
//map:可以遍历数组，可以return，返回一个新的数组
//find:可以遍历数组，可以return，只返回第一个符合条件的数据

const dataList: any[] = [{
    name: "张三",
    age: 18,
    phone: 123456789
}, {
    name: "张四",
    age: 19,
    phone: 123456789
}, {
    name: "张五",
    age: 20,
    phone: 123456789
}, {
    name: "张六",
    age: 21,
    phone: 123456789
}, {
    name: "张七",
    age: 22,
    phone: 123456789
}, {
    name: "张八",
    age: 23,
    phone: 123456789
}]

dataList.map((item: any, index: number) => {
    item['id'] = index
    return item;
})
console.log("[map]", dataList);

dataList.find((item: any, index: number) => {
    item['code'] = index;
    return item
})
console.log("[find]", dataList);

dataList.forEach((item: any, index: number) => {
    item['code'] = index;
})
console.log("[forEach]", dataList);

const str: string = "MiaoZhenZhen";
console.log("[slice]", str.slice(2, 3));
console.log("[substr]", str.substr(2, 3));
console.log("[substring]", str.substring(2, 3));
const count = new Number(123);
console.log("[toString]", count);
console.log("[valueOf]", count.valueOf());
//slice:截取字符串，返回一个新的字符串，不会改变原来的字符串
//substr:截取字符串，返回一个新的字符串，不会改变原来的字符串
//substring:截取字符串，返回一个新的字符串，不会改变原来的字符串
//slice与substring的区别：slice可以接受负数，substring不可以接受负数
//slice与substr的区别：slice第二个参数是截取的长度，substr第二个参数是截取的结束位置

const temp = [{
    name: "张三1",

}, {
    name: "张三2",
}]
console.log("[temp]", temp);
temp.push({
    name: "张三3",

})
console.log("[temp]", temp);
//为什么两次console。log（temp）值一样
//因为temp是一个引用类型，指向的是同一个内存地址，所以改变temp的值，会改变内存地址的值，所以两次打印的值一样
//如何解决两次值一样的问题？
//使用深拷贝，浅拷贝
//深拷贝：拷贝的是值，不是内存地址
//浅拷贝：拷贝的是内存地址，不是值
//如何实现深拷贝？
//JSON.parse(JSON.stringify(temp))
//如何实现浅拷贝？
//Object.assign({},temp)
const tempStr = JSON.parse(JSON.stringify(temp));
console.log("[JSON.parse(JSON.stringify(temp))]", tempStr);
tempStr.push({
    name: "张三4",
})
console.log("[JSON.parse(JSON.stringify(temp))]", tempStr);
//使用JSON.parse(JSON.stringify(temp))实现深拷贝，但是有一个问题，如果temp中有函数，会怎么样？
//函数会被忽略掉
//使用Object.assign({},temp)实现浅拷贝，但是有一个问题，如果temp中有函数，会怎么样？
//函数会被忽略掉
//使用JSON.parse(JSON.stringify(temp))处理过的数据，需要重新赋值新变量吗？
//需要
//为什么不能继续使用temp变量
//因为temp变量已经被重新赋值了
//如果继续使用temp变量，会怎么样？
//会报错，因为temp变量已经被重新赋值了
//在js中，每创建一个变量，都会在内存中开辟一个空间，存储这个变量的值，
//如果这个变量的值是一个引用类型，那么这个变量存储的是一个内存地址，这个内存地址指向的是引用类型的值，
//如果这个变量的值是一个基本类型，那么这个变量存储的是一个基本类型的值，
//什么是基本类型？什么是引用类型？
//基本类型：string,number,boolean,null,undefined,symbol
//引用类型：object,array,function
//如何判断一个变量是基本类型还是引用类型？
//typeof

const tempArr: any[] = ["miao", "zhen", "zhen", 1, 3, 5, 6, 8];
console.log("[tempArr]", tempArr.join(","));
console.log("[tempArr]", tempArr.toString());//join(",")与toString()的区别？

//元组和数组的区别？
//元组：可以存储不同类型的数据
//数组：只能存储相同类型的数据
//元组和数组的相同点？
//都可以存储多个数据
//如何定义元组？
const tempTuple: [string, number, boolean] = ["miao", 1, true]
tempTuple.push("zhen")
console.log("[tempTuple]", tempTuple);
//如何定义数组？
//const tempArr:any[] = ["miao",1,true]
//如何获取元组中的数据？
//tempTuple[0]
//如何获取数组中的数据？
//tempArr[0]
//如何修改元组中的数据？
//tempTuple[0] = "zhen"
//如何修改数组中的数据？
//tempArr[0] = "zhen"


const tempMap = new Map();
tempMap.set("name", "miao");
tempMap.set("age", 18);
console.log("[tempMap]", tempMap);

console.log("[Map-1]", Map)
console.log("[Map-tempMap-2]", tempMap)
//Map有原型吗？
//有
//Map的原型是什么？
//Map.prototype
//Map的原型是谁？
//Map.prototype.constructor



///<reference path="./test.ts" />
console.log(Object.prototype)
const obj: { name: string, age: number, school: string } = {
    name: "miao",
    age: 18,
    school: '北京大学'
};
const obj1: MiaoName.student = {
    name: "miao",
    age: 18,
    school: '北京大学'
};
console.log("[obj]", obj);

//如何引入其他文件的内容？
console.log("[MiaoName.temp]",)
const p: MiaoName.person[] = [{
    name: "miao",
    age: 18
}]
const p1: MiaoName.student[] = [{
    name: "miao",
    age: 18,
    school: '北京大学'
}]
console.log("[MiaoName.temp]", p)
console.log("[MiaoName.temp]", p1)


function test(): MiaoName.person[] {
    return [{
        name: "miao",
        age: 18
    }]
}

console.log("[MiaoName.temp]", test.prototype.constructor())

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    say() {
        console.log("[say]", "hello")
    }
}
