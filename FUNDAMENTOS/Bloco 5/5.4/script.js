window.onload=function(){
  let select= document.querySelector('#cor')
  select.addEventListener("change", function(){
    let selectd=select.selectedOptions[0];
    document.body.style.backgroundColor=selectd.value;
    localStorage.setItem('5-4 background-color', selectd.value)
 })
   let select2= document.querySelector('#fontcolor')
   select2.addEventListener("change", function(){
     let selectd2=select2.selectedOptions[0];
     let paragrafo= document.querySelector('p');
     paragrafo.style.color=selectd2.value
   })
   let inputfontSize= document.querySelector('input[name="font-size"]');
   inputfontSize.addEventListener("change", function(){
     let paragrafo=document.querySelector('p');
     paragrafo.style.fontSize=`${inputfontSize.value}px`
     localStorage.setItem('5-4 font-size', `${inputfontSize.value}px`)

   })
   let savedbackground=localStorage.getItem('5-4 background-color')
   document.body.style.backgroundColor=savedbackground;
}

