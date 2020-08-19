import { Observable } from 'rxjs';
import { QuestionBank, Category, updateQuestion } from './question-bank';

export interface QuestionServiceInterface 
{
    addQuestion(question:QuestionBank):Observable<any>;
    getAllQuestion():Observable<any>;
    deleteQuestion(questionId:Number):void;
    updateQuestion(questionId:Number,question:updateQuestion):void;
}