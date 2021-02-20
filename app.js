const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

const fromEuroToDollar = (euro) =>
{
    if(euro < 0)
    {
        return 0;
    }

    else if(typeof(euro) == "string")
    {
        euro = parseFloat(euro);
    }

    return euro*1.2;
}

const fromDollarToYen = (dolar) =>
{
    if(dolar < 0)
    {
        return 0;
    }

    else if(typeof(dolar) == "string")
    {
        dolar = parseFloat(dolar);
    }

    let yen = (127.9/1.2)*dolar;
    return yen;
}

const fromYenToPound = (yen) =>
{
    if(yen < 0)
    {
        return 0;
    }

    else if(typeof(yen) == "string")
    {
        yen = parseFloat(yen);
    }

    let pound = yen*(0.8/127.9);
    return pound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};