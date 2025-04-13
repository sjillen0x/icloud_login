function validateAppleId(input) {
    const value = input.value.trim();
    
    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Phone number validation regex (supports various formats)
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    
    if (emailRegex.test(value) || phoneRegex.test(value)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        return true;
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        return false;
    }
}

function showPasswordInput() {
    const appleIdInput = document.getElementById('apple-id');
    if (validateAppleId(appleIdInput)) {
        // Remove any existing error message
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        document.getElementById('password-group').style.display = 'block';
        document.querySelector('.login-button').style.display = 'block';
    } else {
        // Show error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = '有効なメールアドレスまたは電話番号を入力してください。';
        
        // Remove any existing error message
        const existingError = document.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error message
        appleIdInput.parentNode.appendChild(errorMessage);
    }
}

function login() {
    const appleIdInput = document.getElementById('apple-id');
    const passwordInput = document.getElementById('password');
    
    if (validateAppleId(appleIdInput) && passwordInput.value.length >= 8) {
        // Proceed with login
        alert('ログイン成功！');
    } else {
        // Show error message
        alert('入力内容を確認してください。');
    }
}