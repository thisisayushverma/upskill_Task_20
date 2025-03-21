import { createContext ,useContext} from "react";


const CartContext = createContext({
        cartData: [],
        setCartData: () => {},
        total: 0,
        setTotal: () => {},
    });




export const CartProvider = CartContext.Provider

export default function useCartContext(){
    return useContext(CartContext);
}


// ({children}) => {
//     const [cartData, setCartData] = useState([]);
//     const [total, setTotal] = useState(0);

//     return (
//         <CartContext.Provider value={{cartData, setCartData, total, setTotal}}>{children}</CartContext.Provider>
//     )
// }

