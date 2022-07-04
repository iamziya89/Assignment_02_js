function even_no(a,b){
    while(a<=b){
        if(a%2==0){
            console.log(a)
        }
        return even_no(a+1,b)
    }
}
even_no(20,40)