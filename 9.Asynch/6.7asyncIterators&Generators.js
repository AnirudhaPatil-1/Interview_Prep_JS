let obj = {
    a: 10,
    b: 20,
    [Symbol.asyncIterator](){
        return{
            async next(){
                await new Promise(resolve=> setTimeout(resolve, 1000));
                if(obj.a<obj.b){
                    return {value:obj.a++, done: false};
                }else{
                    return {done:true};
                }
            }
        }
    }
};

(async () => {
    for await(let i of obj){
        console.log(i)
    }
})();