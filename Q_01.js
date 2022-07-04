function range(a,b){
    console.log(a);
    if(a<b){
        return range(a+1,b)
    }
}
range(30,40)