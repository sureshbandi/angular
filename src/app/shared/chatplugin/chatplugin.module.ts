import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatPluginComponent } from './chatplugin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [ RouterModule, CommonModule, NgbModule ],
    declarations: [ ChatPluginComponent ],
    exports: [ ChatPluginComponent ]
})

export class ChatPluginModule {}
