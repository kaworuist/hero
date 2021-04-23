import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AuthGuard } from '../auth/auth.guard';

const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      // {
      //   path: '',
      //   children: [
      //     { path: 'crises', component: ManageCrisesComponent },
      //     { path: 'heroes', component: ManageHeroesComponent },
      //     { path: '', component: DashBoardComponent }
      //   ]
      // }
      { path: 'crises', component: ManageCrisesComponent },
      { path: 'heroes', component: ManageHeroesComponent },
      { path: '', component: DashBoardComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
