import { useEffect } from "react";
import { useState } from "react";
import "../categorys/Categories.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Categories = () => {
   const [categories,setCategories] = useState([])
   const [products,setProducts] = useState([])
   useEffect(() => {
    fetch('http://localhost:9000/categories')
    .then(res => res.json())
    .then(data =>setCategories(data))
   },[])
   const handlyCategory = e => {
    //    console.log(e.target.id)
    const categoryId = e.target.id;
    fetch(`http://localhost:9000/products/${categoryId}`)
    .then(res => res.json())
    .then(data => setProducts(data))
    }
    // console.log(products);
//    console.log(categories);
 
    const handlyCard = id => {
        const name = prompt("Ismingizni kiriting")
        const phone = prompt("Telefon raqamingizni kiriting")
        // console.log(id,name,phone);
        if(phone) {
            fetch('http://localhost:9000/order',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Accept' : 'application/json',
                    'Access-Control-Allow-Origin':'*'
                },
                body:JSON.stringify({
                    id,
                    name,
                    phone
                }),
                mode:'no-cors'
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err =>console.log(err    ))
        }
    }
    return(
        <div>

        <div>
            {
                categories && categories.map((e,i) =>(
                    <button className="btn btn-success mt-5 handcss" onClick={handlyCategory} id={e.id} key={i}>{e.type}</button>
                    ))
                }
        </div>
          <div className="row">
              {
                  products && products.map((e,i) => (

              <div className="col-4 mt-5" key={i}>
                  
              <div className="card">
                <img src={`https://picsum.photos/id/${e.id * 100}/200/300`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <p className="card-text">Some quick example text to build on the card <br/> <strong>Narxi</strong>  {e.price} so'm</p>
                    <a href="#" onClick={() =>handlyCard(e.id)} className="btn btn-primary">Buyurtma berish</a>
                </div>
                </div>
              </div>
                  ))
              }
          </div>
        
                </div>
    )
}
export default Categories;