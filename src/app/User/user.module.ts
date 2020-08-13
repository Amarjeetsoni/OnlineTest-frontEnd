import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AttemptTestComponent } from './attempt-test/attempt-test.component';
import { RegisterTestComponent } from './register-test/register-test.component';
import { ResultAnalysisComponent } from './result-analysis/result-analysis.component';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
    declarations: [UserDashboardComponent, StatisticsComponent, AttemptTestComponent, RegisterTestComponent, ResultAnalysisComponent, ResultListComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    
      ]
      , providers:[
        
      ]
    })
export class UserModule { }