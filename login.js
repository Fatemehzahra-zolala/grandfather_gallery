const container = document.getElementById('container');
// گرفتن عنصر کانتینر اصلی

const signUpButton = document.getElementById('signUp');
// گرفتن دکمه Sign Up در overlay

const signInButton = document.getElementById('signIn');
// گرفتن دکمه Sign In در overlay

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});
// اضافه کردن کلاس right-panel-active به کانتینر برای نمایش فرم ثبت‌نام

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});