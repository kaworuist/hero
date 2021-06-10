import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main.component';
import { MeComponent } from './me/me.component';
import { SetComponent } from './set/set.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'chat', component: ChatComponent, outlet: 'page' },
      { path: 'set', component: SetComponent, outlet: 'page' },
      { path: 'contact', component: ContactComponent },
      { path: 'me', component: MeComponent },
      { path: '', component: SummaryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
