import router from "./router/index"
import {getToken} from "@/utils/auth"
router.beforeEach((to,from,next)=>{
    const hasToken=getToken()
    if(hasToken){
        if(to.path==="/login"){
            next({path:"/index"})
        }else{
            next()
        }
    }else{
        if(to.path==="/login"){
            next()
        }else{
            next({path:"/login"})
        }
    }
})