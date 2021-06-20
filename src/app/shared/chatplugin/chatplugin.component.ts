import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'

@Component({
    //moduleId: module.id,
    selector: 'chatplugin-cmp',
    templateUrl: 'chatplugin.component.html',
    styleUrls: ['./chatplugin.component.css']
})

export class ChatPluginComponent implements OnInit{
  constructor(){
    this.azure_key = environment.azure_bot_key;
    this.state = true;
  }
   public azure_key : string;
   public state: boolean;

   public clickEvent(){
    this.state = !this.state;      
}
  
  ngOnInit(){}
}
