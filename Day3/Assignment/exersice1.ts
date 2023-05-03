class University{
    name:string;
    dept:string;

    constructor(name,dept){
        this.name = name;
        this.dept = dept;
    }

    graduation(year:number){
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

let miu:University = new University("MSD","MSD");
miu.graduation(2021)