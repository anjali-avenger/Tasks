// function prime()
// {
//     var n=5,i,flag=true;
//     if(n <= 0 || isFinite(n)== false){
//             return "invalid input";
//         }else if(n === 1){
//             return true;
//         }else {
    
//     for(i=2;i<=n-1;i++)
//     {
//      if(n%i==0)
//       flag=false;
//       break;
//     }
// }
//     if(flag==true)
//       console.log(n+ " is prime");
//     else
//      console.log(n+ "is not prime");

// }
// prime();




// 4


// function sum(a,b){
//     if(isFinite(a)==true && isFinite(b)==true){
//     return a+b;
//     }
// }
//     let result = sum(3,4);
// console.log(result);

// //  5


// function multiply(a,b){
//     if(isFinite(a)==true && isFinite(b)==true){
//     return a*b;
// }
// }
// let result =multiply(4,5);
// console.log(result );


// // 6


// let array = [1,2,3,4,5,6];
// function findLargest(){
//     let max = array[0];
//     for(let i = 1 ; i<array.length;i++){
//         if(max<array[i] && isFinite(array[i])==true){
//             max = array[i];
//         }
//     }
//     return max;
// }
//     let result =  findLargest();
// console.log(result);


// // 7


// let array = [12, 34, 2, 6, 76,8];
// function findSmallest(){
//     let min = array[0];
//     for(let i = 1 ; i<array.length;i++){
//         if(min>array[i]){
//             min = array[i];
//         }
//     }
//     return min;
// }
//     let result = findSmallest();
// console.log(result);


// // 8


// let array = [23, 6, 4, 8, 65,9];
// function findNum(key){
//     if(isFinite(key)==true){
//     for(let i = 0 ; i<array.length;i++){
//         if(key === array[i]){
//             return true;
//         }
//     }
// }
//     return false;
// }
// let result = findNum(8);
// console.log(result);


// // 9


// let array = ['hey', 't','i', 's','p'];
// function revArray(){
//     let start= 0 , end=array.length-1;
//     while(start<end){
//         let temp = array[start];
//         array[start++]=array[end];
//         array[end--]=temp;
//     }
// }
// revArray();
// console.log(array);

// // 10


// let len = 0;
// function findLen(){
//     str = "hello World";
//     while(str[len]!= undefined){
//         len++;
//     }
//     return len;
// }
//     let result= findLen();
// console.log(result);


// // 11


// let array = [2, 5, 6,8,2,3,5];
// function findLength(){
//     let len = 0;
//     while(array[len]!=undefined){
//         len++;
//     }
//     return len;
// }
// let result = findLength();
// console.log(result);


// // 12


// function findArea(height , base){
//     if(height>0&&base>0){
//     let area = (1/2)*height*base;
//     return area;
// }else{
//     console.log('invalid input');
// }
// }
//     let result = findArea(2,4);
// console.log(result);


// // 13


// let number = +prompt("enter the number ", '');
// let number = 10;
// let j = 2;
// function isPrime(num){
//     if(num<=1||isFinite(num)==false){
//         console.log('invalid input');
//         return ;
//     }
//   let flag=0;
//   for(let i =2; i<=num/2;i++){
//     if(num%i==0){
//       flag=1;
//       break;
//     }
//   }
//   if(flag==0){
//     // console.log(num);
//     process.stdout.write(num + ",");
//   }
// }
// while(j<=number){
//   isPrime(j++);
// }


// // 14


// let number = 36;
// let result = number ** (0.5);

// console.log(result);


//  15


// let array = [];
// function sortArray(){
//     if(array[0]==undefined){
//         console.log('empty string');
//         return;
//     }
//     for(let i = 0 ; i<array.length;i++){
//         let minIndex=i;
//         for(let j = i+1 ; j<array.length;j++){
//             if(array[j]<array[minIndex]){
//                 minIndex=j;
//             }
//         }
//         let temp = array[i];
//         array[i]=array[minIndex];
//         array[minIndex]=temp;
//     }
// }
// sortArray();
// console.log(array);






