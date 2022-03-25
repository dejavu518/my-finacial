import service from "./service"
export function get(url,params){
    const config={
        method:"get",
        url:url
    }
    if(params){config.params=params}
    return service(config)
}

export function post(url,params){
    const config={
        method:"post",
        url:url
    }
    if(params){config.data=params}
    return service(config)
}