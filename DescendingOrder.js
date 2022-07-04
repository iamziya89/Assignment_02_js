function descending(a,b){
        while(a<=b){
            console.log(b)
            return descending(a,b-1)
        }
}
descending(30,40)