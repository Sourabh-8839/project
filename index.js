
const sellPrice = document.getElementById('SellPrice');

const productName =document.getElementById('ProductName');

const userList =document.getElementById('userList');

const sum =document.getElementById('sum');

const Add =document.getElementById('Add');

const form =document.getElementById('form');

var sumProduct =0;

const axiosInstance = axios.create({
    baseURL:'https://crudcrud.com/api/b963ec4091404d5a92db1bf2647366e5'})

form.addEventListener('submit' , onSubmit);

window.addEventListener('DOMContentLoaded',()=>{
    axiosInstance.get('/addData')
    .then((res)=>{

        for(let i =0;i<res.data.length;i++){
        showOnScreen(res.data[i]);
        sumProduct+= JSON.parse(res.data[i].price);
        }

        sum.innerHTML=sumProduct;
        
    })
    .catch(err=>console.log(err));
});
function onSubmit(e){

    e.preventDefault();

    if(sellPrice.value==='' || productName.value ===''){

    }

    else{

    let myobj ={
        pName:productName.value,
        price:sellPrice.value
    
    }
    
    axiosInstance.post('/addData',myobj)
    .then((response) => {
        showOnScreen(response.data);
        // console.log(response.data)
        sumProduct+=JSON.parse(myobj.price);

        sum.innerHTML=sumProduct;
   
    })
    .catch((err) => console.log(err));
    
    // showOnScreen(myobj);
    // localStorage.setItem(myobj.pName,JSON.stringify(myobj));

    sellPrice.value='';
    productName.value ='';

   

    console.log(sumProduct);
}

}

function showOnScreen(myobj){

    const li =document.createElement('li');

    const del = document.createElement('button');


 
//  Delete button
    del.innerHTML ='Delete Products';
    del.style.margin='0px 6px';
    del.style.padding='0px 6px';

    

    li.appendChild(document.createTextNode(`${myobj.pName} : ${myobj.price}`));
    
    li.appendChild(del);

    userList.style.listStyle='none';
    userList.appendChild(li);


    del.onclick=()=>{
    axiosInstance.delete(`/addData/${myobj._id}`)
    // localStorage.removeItem(myobj.pName);
        userList.removeChild(li);

        sumProduct-=myobj.price;
        sum.innerHTML=sumProduct;
        }
    
    }

