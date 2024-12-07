<script>
    function convertTemperature() {
        let tempValue = parseFloat(document.getElementById('tempValue').value);
        let fromUnit = document.getElementById('fromUnit').value;
        let toUnit = document.getElementById('toUnit').value;
        let result = '';

        if (isNaN(tempValue)) {
            result = 'Please enter a valid temperature value.';
        } else {
            if (fromUnit === toUnit) {
                result = `The temperature is the same: ${tempValue} ${toUnit}.`;
            } else {
                // Conversion formulas
                if (fromUnit === 'C') {
                    if (toUnit === 'F') {
                        result = `${tempValue}°C is equal to ${(tempValue * 9/5) + 32}°F.`;
                    } else if (toUnit === 'K') {
                        result = `${tempValue}°C is equal to ${tempValue + 273.15} K.`;
                    }
                } else if (fromUnit === 'F') {
                    if (toUnit === 'C') {
                        result = `${tempValue}°F is equal to ${(tempValue - 32) * 5/9}°C.`;
                    } else if (toUnit === 'K') {
                        result = `${tempValue}°F is equal to ${(tempValue - 32) * 5/9 + 273.15} K.`;
                    }
                } else if (fromUnit === 'K') {
                    if (toUnit === 'C') {
                        result = `${tempValue} K is equal to ${tempValue - 273.15}°C.`;
                    } else if (toUnit === 'F') {
                        result = `${tempValue} K is equal to ${(tempValue - 273.15) * 9/5 + 32}°F.`;
                    }
                }
            }
        }

        // Display the result
        document.getElementById('result').innerHTML = result;
    }
</script>
