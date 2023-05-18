let obj = {
    start: 10,
    end: 15,
    async *[Symbol.asyncIterator](){
        for(let cnt = this.start; cnt<= this.end; cnt++){
            await new Promise(resolve=> setTimeout(resolve, 1000));
            yield cnt;
        }
    }
};

(async () => {
    for await (let i of obj){
        console.log(i);
    }
})();