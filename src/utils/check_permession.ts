import store from "../store"

const checkPermession = (name:string) => {
    const auth = store.getState().about_me
    
    if(Array.isArray(auth.about_me.permission) && auth.about_me.permission.length > 0){
        return auth.about_me.permission.some((perm: { action: string }) => perm.action === name);
    }
}

export default checkPermession