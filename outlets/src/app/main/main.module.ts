import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { ContactComponent } from './contact/contact.component';
import { MeComponent } from './me/me.component';
import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './main.component';
import { SetComponent } from './set/set.component';
import { HttpService } from '../http/http.service';


@NgModule({
  declarations: [
    SummaryComponent,
    ContactComponent,
    MeComponent,
    ChatComponent,
    MainComponent,
    SetComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [HttpService]
})
export class MainModule { }
