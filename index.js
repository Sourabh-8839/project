
const sellPrice = document.getElementById('SellPrice');

const productName = document.getElementById('ProductName');

const userList = document.getElementById('userList');

const sum = document.getElementById('sum');

const Add = document.getElementsByClassName('Add');

const form = document.getElementById('form');

const msg = document.querySelector('#message');
var sumProduct = 0;

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

form.addEventListener('submit', onSubmit);

try {
    window.addEventListener('DOMContentLoaded', async () => {

        const res = await axiosInstance.get('/getProducts');

        for (let i = 0; i < res.data.length; i++) {
            showOnScreen(res.data[i]);
            sumProduct += JSON.parse(res.data[i].price);
        }

        sum.innerHTML = sumProduct;


    });
} catch (error) {
    console.log(error);
}

async function onSubmit(e) {

    try {
        e.preventDefault();

        if (sellPrice.value === '' || productName.value === '') {

            msg.classList.add('error')
            msg.innerHTML = 'Please fill the form ';

            setTimeout(() => msg.remove(), 2000);

        }

        else {
            let myobj = {
                productName: productName.value,
                price: sellPrice.value

            }
            const product = await axiosInstance.post('/AddProducts', myobj)

            // This is for show in my screen
          
            showOnScreen(myobj);

           
            // total amount 
            sumProduct += JSON.parse(myobj.price);
            sum.innerHTML = sumProduct;

            // empty my input field
            sellPrice.value = '';
            productName.value = '';

        }
    }
    catch (error) {

        console.log(error);
    }



}


function showOnScreen(myobj) {
    console.log(myobj);

    const li = document.createElement('li');

    const del = document.createElement('button');

    //  Delete button
    del.innerHTML = 'Delete Products';
    del.classList.add('Add');
    // del.style.margin='0px 6px';
    // del.style.padding='0px 6px';



    li.appendChild(document.createTextNode(`${myobj.productName} : ${myobj.price}`));

    li.appendChild(del);

    userList.style.listStyle = 'none';
    userList.appendChild(li);



    del.onclick = async () => {

        
        await axiosInstance.post(`/deleteProducts/${myobj.id}`)

        // localStorage.removeItem(myobj.pName);
        userList.removeChild(li);

        sumProduct -= myobj.price;
        sum.innerHTML = sumProduct;
    }




}