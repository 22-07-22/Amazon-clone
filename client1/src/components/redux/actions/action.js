// export is default
// created a ftn and made an asynchronus call
//installed redux thunk
export const getProducts = ()=> async(dispatch)=>{
    try{
        const data = await fetch("/getproducts",{
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            }
        });
        //here res is getting our data
        const res = await data.json();
        console.log(res);
        // payload will have our data
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
    }catch(error){
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}