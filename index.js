
const sellPrice = document.getElementById('SellPrice');

const productName =document.getElementById('ProductName');

const userList =document.getElementById('userList');

const sum =document.getElementById('sum');

const Add =document.getElementById('Add');

const form =document.getElementById('form');

var sumProduct =0;
// const axiosInstance = axios.create('')

form.addEventListener('submit' , onSubmit);

// window.addEventListener('DOMContentLoaded',()=>{
//     axiosInstance.get('/addData')
//     .then((res)=>{

//         for(let i =0;i<res.data.length;i++){
//         showOnScreen(res.data[i]);
//         // console.log(res.data[i]._id);
//         }
        
//     })
//     .catch(err=>console.log(err));
// });
function onSubmit(e){

    e.preventDefault();

    if(sellPrice.value==='' || productName.value ===''){

    }

    else{

    let myobj ={
        pName:productName.value,
        price:sellPrice.value
    }
    
    // axiosInstance.post('/addData', myobj)
    // .then((response) => {
    //     showOnScreen(response.data);
    //     // console.log(response.data)
    // })
    // .catch((err) => console.log(err));
    // }
    showOnScreen(myobj);
    localStorage.setItem(myobj.pName,JSON.stringify(myobj));

    sellPrice.value='';
    productName.value ='';

    sumProduct-=sellPrice.value;
    
    sum.innerHTML=sumProduct;
}

}
function showOnScreen(myobj){

    const li =document.createElement('li');

    const del = document.createElement('button');


 
//  Delete button
    del.innerHTML ='Delete Products';
    del.style.margin='0px 6px';
    del.style.padding='0px 6px';

    

    li.appendChild(document.createTextNode(`${productName.value} : ${sellPrice.value}`));
    
    li.appendChild(del);

    userList.style.listStyle='none';
    userList.appendChild(li);


    del.onclick=()=>{
    // axiosInstance.delete(`/addData/${myobj._id}`)
    localStorage.removeItem(myobj.pName);
        userList.removeChild(li);

        sumProduct-=myobj.price;
        sum.innerHTML=sumProduct;
        }
    
    }

