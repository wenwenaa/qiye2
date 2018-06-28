window.onload=function(){
	let zuolan=document.getElementsByClassName("zuolan")[0];
	let li=zuolan.getElementsByTagName("li")
	let aside=zuolan.getElementsByClassName("aside")
	let dao1=document.getElementsByClassName("dao1")[0]
	console.log(zuolan,li,aside,dao1)
	
   dao1.onmouseenter=function(){
   	zuolan.style.display="block"
   }
   dao1.onmouseleave=function(){
   	 	zuolan.style.display="none"
   }
   for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			// for(let j=0;j<li.length;j++){
			// 	aside[j].style.display="none"
			// }
			aside[i].style.display="block"
		}
		li[i].onmouseleave=function(){
			aside[i].style.display="none"
		}
	}
}
