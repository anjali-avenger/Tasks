let a=0,b=1;
let n='8';
function fibonacci()
{
    if(n<=0 || isFinite(n) == false){
    console.log ("Invalid Input");
    
    }
    else if(n===1)
    {
     console.log(a);
     
    }
    else if(n===2)
    {
        process.stdout.write(a+','+b+ ',');
        
    } 
    else if(n>2 && isFinite(n)==true){
        process.stdout.write(a+','+b+ ',');
        for(let i=3;i<=n;i++)
        {
        process.stdout.write(a+b + ',');
        b=a+b;
        a=b-a;
        
    }
  }
}
fibonacci();
// fibonacci series add last 2 consecutive numbers to get the new element.