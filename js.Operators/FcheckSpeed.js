// function checkSpeed(speed) {
//     let speedLimit = 70;
//     let pointKm = 5;
//     if (speed < speedLimit + pointKm) {
//         console.log("No spoint")
//     } else if {
//         const points  = (Math.floor((speed - speedLimit)/ kmPerPoint));
//   return (points <= 12) ? 'points' points : 'Liscense Suspended' ;
  
//     }
// }

function checkSpeed(speed)
{
  const speedLimit = 
  const kmPerPoint = 
  
  if(speed < speedLimit + kmPerPoint)
  {
  return 'ok';
  }
  const points  = (Math.floor((speed - speedLimit)/ kmPerPoint));
  return (points <= 12) ? 'points':  points  'Liscense Suspended' ;
  
  
}
console.log(checkSpeed(75));