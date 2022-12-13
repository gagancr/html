function onClick(){
    const cur=parseFloat(document.getElementById("textCurrency").value);
    const conv=document.getElementById("conver").value;
    let res=0.0;
    switch(conv){
        case "dollor &#36;":
            res=cur*2;
            break;
    }
    document.getElementById("curesult").innerText=res;
}