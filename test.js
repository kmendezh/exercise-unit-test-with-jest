// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test("adds 14 + 9 to equal 23", () => {
    //inside the test we call our sum function with 2 numbers
    
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// Tests for Euro to Dollars
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
});

test("Test the minimum value for an euro", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(Number.MIN_VALUE);

    
    const expected = Number.MIN_VALUE * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
});

test("Test a very big amount of money (1.4980776123852631e+308)", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(Number.MAX_VALUE/1.2);

    
    const expected = Number.MAX_VALUE; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
});

test("Robustness test: negative amount of money for euro", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(-7);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 0; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
});

test("Robustness test: Test the input as a string ('500')", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar("500");

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 500*1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
});

// Tests for Dollar to Yen

test("One Dollar should be 106.583 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(1);

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 127.9/1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yen);
});

test("Test minimum amount of dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(Number.MIN_VALUE);

    const expected = (127.9/1.2)*Number.MIN_VALUE; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yen);
});

test("Test a very big amount of money (1.68e+306) for dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // use the function like its supposed to be used
    const yen = fromDollarToYen(1.68e+306);

    const expected = (1.68e+306/1.2)*127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yen);
});

test("Robustness test: negative amount of money for dollar", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(-7);

    const expected = 0; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yen);
});

test("Robustness test: Test the input as a string ('500') for dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // use the function like its suppoed to be used
    const yen = fromDollarToYen("500");

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (500*127.9)/1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yen);
});


// Tests for Yen to pound
test("One Yen should be 0,00625 pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // use the function like its suppoed to be used
    const pound = fromYenToPound(1);

    const expected = 0.8/127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);
});

test("Test minimum amount of yen", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // use the function like its suppoed to be used
    const pound = fromYenToPound(Number.MIN_VALUE);

    const expected = (0.8/127.9)*Number.MIN_VALUE; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);
});

test("Test a very big amount of yen (1.79e+308) ", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // use the function like its supposed to be used
    const pound = fromYenToPound(Number.MAX_VALUE);

    const expected = (Number.MAX_VALUE/127.9)*0.8; 
    
    // this is the comparison for the unit test
    expect(expected).toBeCloseTo(expected, 10);
});

test("Robustness test: negative amount of money for yen", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // use the function like its suppoed to be used
    const pound = fromYenToPound(-7);

    const expected = 0; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);
});

test("Robustness test: Test the input as a string ('300') for yen", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // use the function like its suppoed to be used
    const pound = fromYenToPound("300");

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = (300*0.8)/127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pound);
});