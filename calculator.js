append=(val)=>{
    document.getElementById("no").value+=val;
}
appendoperator=(op)=>{
    document.getElementById("no").value+=op;
}
clearInput = () => {
    document.getElementById("no").value = "";
};
calculate=()=>{
    let input=document.getElementById("no").value;
   document.getElementById("no").value=eval(input)
}
eachclear=()=>{
    let clear=document.getElementById("no").value;
    document.getElementById("no").value=clear.slice(0,-1);
}