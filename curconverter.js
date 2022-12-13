function onClick(){
    const cur=parseFloat(document.getElementById("textCurrency").value);
    const conv=document.getElementById("convert").value;
    let res=0.0;
    switch(conv){
        case "dollor":
            res=cur*0.012;
            break;
        case "austral":
            res=cur*0.01764;
            break;
        
        case "euro" :
            res=cur*0.01140;
            break;
        case "franc" :
            res=cur*7.55;
            break;
        case "bitcoin" :
            res=cur*0.000000721;

    }
    document.getElementById("curesult").innerText=res;
}
