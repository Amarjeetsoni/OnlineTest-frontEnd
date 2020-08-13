import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
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

@NgModule({
    declarations: [AdminDashboardComponent, StatisticsComponent, AddTestComponent, DeleteTestComponent, UpdateTestComponent, AddQuestionComponent, DeleteQuestionComponent, UpdateQuestionComponent, ViewFeedbackComponent, TopPerformerComponent, DeclareResultComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    
      ]
      , providers:[
        
      ]
    })
export class AdminModule { }