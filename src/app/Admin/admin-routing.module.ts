import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AddTestComponent } from './add-test/add-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { TopPerformerComponent } from './top-performer/top-performer.component';
import { DeclareResultComponent } from './declare-result/declare-result.component';




const routes: Routes = [
  {path:'',component:AdminDashboardComponent,children:[
  /*
    Write the same routing required here inside.
    For Example: 
    { path :'addCustomer' , component: AddCustomerComponent }
   
   */
  { path :'' , component: StatisticsComponent },
  { path: 'addTest', component: AddTestComponent},
  { path: 'deleteTest', component: DeleteTestComponent},
  { path: 'updateTest', component: UpdateTestComponent},
  { path: 'addQuestion', component: AddQuestionComponent},
  { path: 'deleteQuestion', component: DeleteQuestionComponent},
  { path: 'updateQuestion', component: UpdateQuestionComponent},
  { path: 'feedback', component: ViewFeedbackComponent},
  { path: 'topPerformer', component: TopPerformerComponent},
  { path: 'declareResult', component: DeclareResultComponent},
  {path :'**', component: StatisticsComponent}
  
  
  ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }