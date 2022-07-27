let a='a',i;
let fact=1;
function factorial()
{
    if(a>=0)
    {
    
        for(i=a;i>=1;i--)
        fact=i*fact;
    return fact;
    }
    else {
        return("Illegal input");
    }

}
let res=factorial();
console.log(res);