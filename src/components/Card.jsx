import '../App.css'

function Card({item,setCart,addToCart,setTotal}){

    const handleAddToCart= ()=>{

        let tempCart =[];
         tempCart = [...addToCart];

        let checkData= tempCart.filter((cardItem)=>cardItem.name === item.name)

         if(!checkData.length){
            console.log("i worked");
            tempCart.push({
                ...item,
                quantity:1
            })
            console.log(tempCart);
            setCart(tempCart)
            setTotal((prev)=> prev+item.price)
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
                    <button type="button" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}


export default Card