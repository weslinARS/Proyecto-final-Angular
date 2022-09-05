import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FormRegistroActComponent } from './form-registro-act/form-registro-act.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path : 'dashboard',
  component : DashBoardComponent
},{
  path : 'Registra',
  component : FormRegistroActComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
