var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var searchInput = document.getElementById("searchInput");
var mainbtn = document.getElementById("mainbtn");

var productContainer ;
if(localStorage.getItem("myProducts") != null)
{
    productContainer = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts(productContainer);
}else
{
    productContainer = [];
}


// function addProduct(){
//     if(validateProductName()==true){
//        var product = {
//         name : productNameInput.value,
//         price : productPriceInput.value ,
//         category : productCategoryInput.value ,
//         desc : productDescInput.value
//     }
//     productContainer.push(product);
//     localStorage.setItem("myProducts" , JSON.stringify(productContainer));
//     clearForm();
//     displayProducts(productContainer);
//     }
//    else{
//        alert("product name invaild");
//        }       }

function addProduct(){
    if(mainbtn.innerHTML == "add product"){
       var product = {
        name : productNameInput.value,
        price : productPriceInput.value ,
        category : productCategoryInput.value ,
        desc : productDescInput.value
    }
    productContainer.push(product);
    localStorage.setItem("myProducts" , JSON.stringify(productContainer));
    clearForm();
    displayProducts(productContainer);
    }
   else{
       //update funcyion
       } 
    }
        


function displayProducts(productsList){
    var cartonaa = ``;
    for(var i = 0 ; i < productsList.length ; i++)
    {
        cartonaa+=` <tr>
        <td>${i}</td>
        <td>${productsList[i].name}</td>
        <td>${productsList[i].price}</td>
        <td>${productsList[i].category}</td>
        <td>${productsList[i].desc}</td>
        <td><button onClick="setForm(${i})"  class="btn btn-outline-warning">update</button></td>
        <td><button onClick="deletProduct(${i})" class="btn btn-outline-danger">delet</button></td>
    </tr>`
    }
    document.getElementById("tableRow").innerHTML = cartonaa ;
}


function clearForm(){
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
    
}


function deletProduct(productIndex){
    productContainer.splice(productIndex , 1);
    localStorage.setItem("myProducts" , JSON.stringify(productContainer));
    displayProducts(productContainer);
}



function searchProducts(term){
    var cartonaa = ``;
    for(var i = 0 ; i < productContainer.length ; i++)
    {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true)
        {
        cartonaa +=` <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].desc}</td>
        <td><button onClick="setForm(${i})" class="btn btn-outline-warning">update</button></td>
        <td><button onClick="deletProduct(${i})" class="btn btn-outline-danger">delet</button></td>
    </tr>`
        }
    }
    document.getElementById("tableRow").innerHTML = cartonaa ;
    
}

function setForm(productIndex){
    productNameInput.value = productContainer[productIndex].name;
    productPriceInput.value = productContainer[productIndex].price;
    productCategoryInput.value = productContainer[productIndex].category;
    productDescInput.value = productContainer[productIndex].desc;
    mainbtn.innerHTML = "update Product";

}


function validateProductName(){
    var regex = /^[A-Z][a-z]{3,8}$/;
    if(regex.test(productNameInput.value)==true){
        return true
    }else{
        return false;
    }
}
