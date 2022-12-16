const adviceId = document.getElementById('value');
const adviceText = document.getElementById('advice');
const btn = document.getElementById('btn');

const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then((data) => {
        displayAdvice(data.slip.id, data.slip.advice)
        console.log(data.slip)
    })
}

const displayAdvice = (id, advice) => {
    adviceId.innerHTML = `advice #${id}`;
    adviceText.textContent = `"${advice}"`;
}

getAdvice();
btn.addEventListener('click', getAdvice);