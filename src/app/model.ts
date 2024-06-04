export class Model{
    user:any;
    title:any;
    items:any;

    constructor(){
        this.user = "Sefa Can Pehlivan";
        this.title = "To do App";
        this.items = [
                        new TodoItem("Breakfast",true),
                        new TodoItem("Pay bills",false),
                        new TodoItem("GYM",false),
                        new TodoItem("Cinema",false),
                     ];
    }
}

export class TodoItem{
    description;
    action;

    constructor(description: any ,action: any){
        this.description = description;
        this.action = action;
    }
}