function trailingZeros(n) {
  //your JS code here. If required.
	let factorial = fact(n);
	alert(factorial) 
	let num=0;
	while(factorial%10===0){
		num+=1;
		factorial=factorial/10;
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
