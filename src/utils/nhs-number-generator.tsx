function isValidNHSNumber(nhsNumber : string) {
    if (!/^\d{10}$/.test(nhsNumber)) {
        return false; // Checks if the input is a 10-digit number
    }

    const checkDigit = parseInt(nhsNumber.charAt(9), 10);
    const calculatedDigit = calculateCheckDigit(nhsNumber.substring(0, 9));

    return checkDigit === calculatedDigit;
}

function calculateCheckDigit(number : string) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number.charAt(i), 10) * (10 - i);
    }
    const remainder = sum % 11;
    return (11 - remainder) % 11;
}

function generateNHSNumber() : string {
    let baseNumber = '';
    for (let i = 10; i >= 2; i--) {
      const digit = Math.floor(Math.random() * 10);
      baseNumber += digit;
    }

    const checkDigit = calculateCheckDigit(baseNumber);
    return checkDigit === 10 ? generateNHSNumber() : baseNumber + checkDigit;
  }


export {isValidNHSNumber, calculateCheckDigit, generateNHSNumber}
