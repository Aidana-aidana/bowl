const answers = [
    "Да",
    "Нет",
    "Возможно",
    "Тебе нужно подождать",
    "Не делай этого",
    "Не плюй в колодец",
    "Все в твоих руках",
    "Рискни",
    "Не рискуй",
    "у тебя все получится"
];

let isShaking = false;
let shakeTimeout;

function startShake() {
    const magicBall = document.getElementById('magicBall');
    const answerDiv = document.getElementById('answer');

    // Начинаем тряску
    magicBall.classList.add('shake');
    isShaking = true;

    // Убираем старый ответ
    answerDiv.textContent = '';

    // Если пользователь быстро отпустил кнопку, трясем шар 1.5 секунды
    clearTimeout(shakeTimeout);
    shakeTimeout = setTimeout(stopShake, 1500);
}

function stopShake() {
    const magicBall = document.getElementById('magicBall');
    const answerDiv = document.getElementById('answer');

    if (isShaking) {
        // Останавливаем тряску
        magicBall.classList.remove('shake');
        isShaking = false;

        // Показываем ответ
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];
        answerDiv.textContent = answer;
    }
}

function startCarSound() {
    const carSound = document.getElementById('carSound');
    carSound.play();
}

function stopCarSound() {
    const carSound = document.getElementById('carSound');
    carSound.pause();
    carSound.currentTime = 0;
}

document.getElementById('magicBall').addEventListener('mousedown', startShake);
document.getElementById('magicBall').addEventListener('mouseup', stopShake);

document.getElementById('magicBall').addEventListener('touchstart', startShake);
document.getElementById('magicBall').addEventListener('touchend', stopShake);

const carImage = document.querySelector('.car-image');
carImage.addEventListener('mousedown', startCarSound);
carImage.addEventListener('mouseup', stopCarSound);
carImage.addEventListener('mouseleave', stopCarSound);

carImage.addEventListener('touchstart', startCarSound);
carImage.addEventListener('touchend', stopCarSound);