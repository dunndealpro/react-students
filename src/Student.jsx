import Score from "./Score";

export default function Student({students}){
    return( 
<div>
    {students.map(student => (        
         <div>
             <h2>{student.name}</h2>             
             <p>Bio:  {student.bio}</p>             
         <Score scores={student.scores}/>    
         </div>         
    ))}    
</div>
    )
}