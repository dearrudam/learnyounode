
var sum=0;

process.argv.forEach(function(item,index){
    if( /^[\d]{1,}$/.test(item) ){
        sum+=Number(item);
    }
});


console.log(sum);
