function Item(name, price) {
    /**
     * The name of the item
     * @type {string} 
     */
    this.name = name;

    /**
     * The price of the item
     * @type {number} price 
     */
    this.price = price;
}

function Cart() {
    /**
     * The items in the cart
     * @type {Item[]}
     */
    this.items = [];

    /**
     * Add an item to the cart
     * @param {Item} item
     */
    this.addItem = function(item) {
        // Code...
    };

    /**
     * Remove an item from the cart
     * @param {number} itemIndex The index of the item within the `items` array
     */
    this.removeItem = function(itemIndex) {
        // Code...
    };

    /**
     * Returns total price of items in cart
     * @return {number}
     */
    this.getTotal = function() {
        // Code...
    };
}



///////////////////////////////////
//             TESTS             //
// *Do not modify this section!* //
///////////////////////////////////

(function runTests() {
    const testSuites = {
        adding_items() {
            test('Items can be added to cart', (pass, fail) => {
                let cart = new Cart;
                let item = new Item('Tomatoes', 15);
                cart.addItem(item);

                if (cart.items.includes(item))
                    pass();
                else
                    fail('Cart does not contain item', item);
            }); 

            // test('Multiple items can be added to cart', (pass, fail) => {
            //    
            // })
        },
        removing_items() {

        },
    };

    let testsRan = 0;
    let passedTests = 0;

    /**
     * Run a particular test case
     * @param {string} description Description of the test being run
     * @param {function} callback Receives a success and failure function
     */
    function test(description, callback) {
        testsRan++;
        console.log(description);

        let passTest = () => {
            console.log('    %cTest passed ✅', 'color: green');
            passedTests++;
            return true;
        };

        let failTest = (...reason) => {
            console.log('    %cTest failed ❌', 'color: red');
            console.log('    %cReason:', ...reason);
            return false;
        };

        let testPassed;
        try {
            callback(passTest, failTest);
            testPassed = true;
        } catch (e) {
            testPassed = false;
        }

        console.log('\n')
 
        return testPassed;
    }

    console.log('=============== Running Tests =============== ')

    for (let testSuite in testSuites) {
        testSuites[testSuite]();
    }

    console.log(`Passed ${passedTests} out of ${testsRan} tests\n`)
    if (passedTests == testsRan) {
        console.log('Congratulations, All tests passed ✅');
    } else {
        console.log('Failed some tests ❌.\nFix your code and try again.');
    }
})();

