


export class QuestionBank 
{
    questionId: Number;
	questionTitle : String;
	option : String[];
	questionAnswer : Number;
	questionMarks : Number ;
	category_id:Number ;
	
	constructor(){
		
	}
}


export class Category{
	categoryId:Number;
	categoryName:String;
}

export class updateQuestion 
{
    questionId: Number;
	questionTitle : String;
	optionA: String;
	optionB: String;
	optionC: String;
	optionD: String;
	questionAnswer : Number;
	questionMarks : Number ;
	category_id:Number ;
	
	constructor(){
		
	}
}