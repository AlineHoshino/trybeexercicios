const numNaturalFn = (num) =>{
if(typeof num !=="number"){
  return 'o parametro deve ser um número'
}
if(num >0){
  return 'positivo'
} else if(num<0) {
  return "negativo"
}else{
  return "neutro"
}
};


module.exports=numNaturalFn