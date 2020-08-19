import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import { TestFilterPipe } from './Pipe/test-filter.pipe';
import { LoaderService } from './Services/loader.services';

import { FilterAttemptedPipe } from './Pipe/filter-attempted.pipe';
import { SearchPipe1 } from './Pipe/search.pipe1';
import { SearchPipe } from './Pipe/search.pipe';

@NgModule({
    declarations: [AdminDashboardComponent, StatisticsComponent, AddTestComponent, DeleteTestComponent, UpdateTestComponent, AddQuestionComponent, DeleteQuestionComponent, UpdateQuestionComponent, ViewFeedbackComponent, TopPerformerComponent, DeclareResultComponent, TestFilterPipe, SearchPipe1,SearchPipe, FilterAttemptedPipe],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    
      ]
      , providers:[
        DatePipe,
        LoaderService
      ]
    })
export class AdminModule { }