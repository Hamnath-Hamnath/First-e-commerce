const cart =[];

const handleCart = (state = cart, action) => {
    const product  = action.payload;
    switch(action.type){
        case 'ADDITEM' :
            // Check if product is already  is exist or not
            const exist = state.find((x)=>x.id === product.id);
            if(exist){
                // increase the qty
                return state.map((x)=>x.id === product.id ? {...x, qty: x.qty + 1} : x);
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            }
            break;
        case "DELITEM":
            const exist1= state.find((x)=> x.id === product.id);

            if(exist1.qty ===1){
                console.log(exist1)
                return state.filter((x) => x.id !== exist1.id);
            }else{
                console.log(exist1)
                return state.map((x)=> x.id === product.id ? {...x,qty:x.qty-1} : x);
            }
        break;
        default:
            return state;
            break;
    }
}

export default handleCart;