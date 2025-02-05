function checkPassword() {
    var password = document.getElementById('password').value;

    // تحقق من كلمة المرور
    if (password === "الكنز في الكتاب") {
        // إذا كانت كلمة المرور صحيحة، يتم إعادة التوجيه إلى صفحة success.html
        window.location.href = "success.html";
    } else {
        alert("كلمة المرور غير صحيحة. حاول مرة أخرى.");
    }
}
