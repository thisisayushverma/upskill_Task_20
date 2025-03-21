import '../App.css'
import useCartContext from '../context/cartContext';

function Card({item}){
    const {cartData,setCartData,setTotal} = useCartContext();
    const handlecartData= ()=>{

        let tempCart =[];
         tempCart = [...cartData];

        let checkData= tempCart.filter((cardItem)=>cardItem.name === item.name)

         if(!checkData.length){
            console.log("i worked");
            tempCart.push({
                ...item,
                quantity:1
            })
            console.log(tempCart);
            setCartData(tempCart)
            setTotal((prev)=> Math.round((prev+item.price)*100)/100)
         }
         console.log("button clicked");
    }

    return(
        <>
            <div className='card'>
                <img src={item.image_url}>
                </img>
                <div>
                    <h1>{item.name}</h1>
                    <p>${item.price}</p>
                    <button type="button" onClick={handlecartData}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}


export default Card