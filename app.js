const qoshish = (son1, son2) => {
    return son1 + son2;
}

const funksiya = () => {
    const qiymat1 = document.getElementById('son1');
    const qiymat2 = document.getElementById('son2');
    const kiritish1 = Number(qiymat1.value);
    const kiritish2 = Number(qiymat2.value);

    if (qiymat1.value==='' || qiymat2.value==='') {
        alert(`Iltimos ikkala formaga ham son kiriting`);
        return;
    }

    let natija = document.getElementById('h1');
    natija.textContent = qoshish(kiritish1, kiritish2);
}


const btn = document.getElementById('btn');
btn.addEventListener('click', funksiya);