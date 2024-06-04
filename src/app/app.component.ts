import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  model = new Model();
  isDisplay = false;

  GetName(){
    return this.model.user;
  }

  GetTitle(){
    return this.model.title;
  }

  GetItems()
  {
    if(this.isDisplay){return this.model.items}
    return this.model.items.filter((item: { action: any; }) => !item.action);
  }

  AddItem(value:any){
    if(value ==null || value == '')return;
    this.model.items.push(new TodoItem(value,false));
  }
  
}
