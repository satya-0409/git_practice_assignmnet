function (N,str){

	let bag="";

	for(i=N-2;i>=0;i--){
     bag+=str[i];
     }

    if(bag==str[i]){
   console.log("It is palindrome") 
   } else{
     conole.log("Not a palindrome")
    }
}