let str="nitin"
function reverse(str){

	let bag="";

	for(i=str.length-1;i>=0;i--){
     bag+=str[i];
     }

    return bag
}

let ans=reverse(str)
if(str==ans){
console.log("palindrome")
}else{
console.log("not palindrome")
}