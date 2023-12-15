function trailingZeros(n) {
  //your JS code here. If required.
	let factorial = fact(n);
	
	let num=0;
	while(factorial%5===0){
		num+=1;
		factorial=factorial/5;
	}
	return num;
	
}
function fact(n){
	if(n===0 || n===1){
		return 1;
	}
	else{
return n*fact(n-1);}  
}

const input = prompt("Enter a number"); 
alert(trailingZeros(input));
