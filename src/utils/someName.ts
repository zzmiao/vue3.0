namespace MiaoName {
    export interface person {
        name: string;
        age: number;
    }

    export interface student extends person {
        school: string;
    }


    class Miao implements student {
        name: string;
        age: number;
        school: string;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age
        }
    }
}