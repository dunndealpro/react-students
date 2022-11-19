export default function Score({scores}){
    return(
       <div>
          <h3>
          Scores    
          </h3>
          {scores.map(score =>(
              <div>Date: {score.date}<br></br>
              Score: {score.score}</div>
          ))}
       </div>
    )
}