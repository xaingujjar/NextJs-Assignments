export type inputTypes ={
    f_name: string,
    l_name: string,
    username: string,
    email: string,
    phone: number,
    city: string,
    country: string
}
export type onChangeInput = {
    target:{
        value:string,
        name:string
    }
}