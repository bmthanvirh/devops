import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MmcLandingpageComponent } from './components/mmc-landingpage/mmc-landingpage.component';

const routes: Routes = [
  {path:'',component:MmcLandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
