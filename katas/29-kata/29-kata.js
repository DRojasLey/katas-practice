function domainName(url){

    if (url.startsWith('http')){
        url = url.split('://')
        url = url[1]
        console.log(url)
    }
    url = url.split('.',2)
    console.log(url)
    if (url[1].length <= 3){
        return url[0]
    } else {
        if(url[1].includes('/')){
        return url[0]
        } else {
            return url[1]
        }
    }
}