let data;
function fetchData(){
    setTimeout(() => {
        data = {pCode: '1001', pName: 'Orange'};
    }, 2000);
}
function displayData(){
    console.log(data);
    console.log("program ends here");
}

console.log("program starts here");
fetchData();
displayData();

/*output 
program starts here
undefined
program ends here
*/ 