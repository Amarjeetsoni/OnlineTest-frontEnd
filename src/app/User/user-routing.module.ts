import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AttemptTestComponent } from './attempt-test/attempt-test.component';
import { RegisterTestComponent } from './register-test/register-test.component';
import { ResultAnalysisComponent } from './result-analysis/result-analysis.component';
import { ResultListComponent } from './result-list/result-list.component';




const routes: Routes = [
  {path:'',component:UserDashboardComponent,children:[
    /*
      Write the same routing required here inside.
      For Example: 
      { path :'addCustomer' , component: AddCustomerComponent }
     
     */
    { path : '' , component: StatisticsComponent },
    { path: 'attempt', component: AttemptTestComponent},
    { path: 'register', component: RegisterTestComponent},
    { path: 'resultAnalysis', component: ResultAnalysisComponent},
    { path: 'resultList', component: ResultListComponent}
    
    
    
    ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }