function addBook(){
    let book =document.getElementById("txtBook").value;
    let books=[];
   const ol=document.getElementById("olBook")
    books.push(book)
    

    for(const item of books){
        const value = "<li>" + item + "</li>"
        ol.innerHTML+=value;
    }
}