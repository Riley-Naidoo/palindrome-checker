
    document.getElementById('check-btn').addEventListener('click', checkText);

    function checkText() {
        const textInput = document.getElementById('text-input').value;
        const resultElement = document.getElementById('result');

        if (textInput.trim() === '') {
            alert("Please input a value");
            resultElement.textContent = '';
            resultElement.className = 'mt-4';
            return;
        }

        // Normalize the input: remove non-alphanumeric characters and convert to lowercase
        const normalizedText = textInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const reversedText = normalizedText.split('').reverse().join('');

        if (normalizedText === reversedText) {
            resultElement.textContent = `${textInput} is a palindrome`;
            resultElement.className = 'mt-4 palindrome fade-in';
        } else {
            resultElement.textContent = `${textInput} is not a palindrome`;
            resultElement.className = 'mt-4 not-palindrome fade-in';
        }

        // Ensure the fade-in class is applied
        resultElement.classList.add('fade-in');
    }
