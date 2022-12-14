const books=[];

function addElement(item){
    books.push(item)
}
const getAll=()=>books;//lambda way of creting function

const deleteElement=(index)=>books.splice(index,1);