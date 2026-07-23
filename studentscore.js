function studentScore(score)
{

    switch(true)
    {
        case(score>=90):
            grade =" A";
            break
            case(score>=80):
            grade ="B";
            break
            case(score>=70):
            grade ="C";
            break
            default:
            grade = "D";
        
    }
    return grade;
}
     studentMark =87
    
console.log("score:" ,studentMark)
console.log("grade:" ,studentScore (studentMark))
