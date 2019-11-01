function convert(currency){

    if(typeof currency === 'number'){
        return `$${(currency*0.033).toFixed(2)}`;
    }else return 'Not Change!!!';
    
}

module.exports = convert;