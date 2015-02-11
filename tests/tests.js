var assert = chai.assert;

suite('Temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Fahrenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Fahrenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('100f = 37.8 Celsius', function() {
        original.value = "100f";
        calculate();
        assert.deepEqual(converted.innerHTML, "37.8 Celsius");
    });
    test('5cc = error', function() {
        original.value = "5cc";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
