// // Question 1 settimeout

// setTimeout(()=>{
//     let a=document.getElementById("colorBox")
// a.style.width="500px";
// a.style.height="500px";
// a.style.backgroundColor="blue"
// let b=document.createElement("button")
// a.textContent="color changes after 5 seconds on button click"
// a.style.fontSize="50px"
// b.style.width="auto"
// b.style.height="30px"
// b.textContent="change color"
// b.onclick=colorchange;
// function colorchange(){
//         setTimeout(()=>{
//             a.style.backgroundColor="red"
//         },5000)
    
// }
// document.body.append(a,b)
// },5000)

// // Question 2 settimeout


// let c=document.createElement("button")
// c.textContent="Show Welcome Message"
// c.onclick=welcome
// document.body.append(c)
// function welcome(){
//     c.onclick=cleartime;
//     function cleartime(){
//         clearTimeout(d)
//     }
//     d=setTimeout(()=>{
//         alert("this is welcome message")
//     },2000)
// }

// // setInterval Question 1
// i=10
// a=setInterval(() => {
//         console.log(i);
//         i--;
//         if(i<0){
//             clearInterval(a);
//             console.log("time is up")
//         }
// },1000)

// setInterval Question 2:

// setInterval(()=>{
//         let time = new Date();
//         let updatedtime=time.toLocaleTimeString();
//        let updatetime=document.getElementById('clock')
//        updatetime.textContent=`${updatedtime}`
// })