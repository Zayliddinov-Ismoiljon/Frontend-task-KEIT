import store from "../store"

const checkPermession = (name:string) => {
    const auth = store.getState().user.user
    
    if(Array.isArray(auth.permissions) && auth.permissions.length > 0){
        return auth.permissions.some((perm:any) => perm.name === name);
    }
}

export default checkPermession