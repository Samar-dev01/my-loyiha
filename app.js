const qoshish = (son1, son2) => {
    return son1 + son2;
}

const kopaytirish = (son1, son2) => {
    return son1 * son2;
}

const ayirish = (son1, son2) => {
    return son1 - son2;
}

const bolish = (son1, son2) => {
    return son1/son2;
}

const funksiya1 = () => {
    const qiymat1 = document.getElementById('son1');
    const qiymat2 = document.getElementById('son2');
    const kiritish1 = Number(qiymat1.value);
    const kiritish2 = Number(qiymat2.value);

    if (qiymat1.value==='' || qiymat2.value==='') {
        alert(`Iltimos ikkala formaga ham son kiriting`);
        return;
    }

    let natija1 = document.getElementById('h1');
    natija1.textContent = qoshish(kiritish1, kiritish2);
}

const funksiya2 = () => {
    const qiymat1 = document.getElementById('son1');
    const qiymat2 = document.getElementById('son2');
    const kiritish1 = Number(qiymat1.value);
    const kiritish2 = Number(qiymat2.value);

    if (qiymat1.value ==='' || qiymat2.value === '') {
        alert('Iltimos ikkala formaga ham son kiriting');
    }

    const natija2 = document.getElementById('h1');
    natija2.textContent = kopaytirish(kiritish1, kiritish2);
}

const funksiya3 = () => {
    const qiymat1 = document.getElementById('son1');
    const qiymat2 = document.getElementById('son2');
    const kiritish1 = Number(qiymat1.value);
    const kiritish2 = Number(qiymat2.value);

    if (qiymat1.value ==='' || qiymat2.value === '') {
        alert('Iltimos ikkala formaga ham son kiriting');
    }

    const natija3 = document.getElementById('h1');
    natija3.textContent = ayirish(kiritish1, kiritish2);
}

const funksiya4 = () => {
    const qiymat1 = document.getElementById('son1');
    const qiymat2 = document.getElementById('son2');
    const kiritish1 = Number(qiymat1.value);
    const kiritish2 = Number(qiymat2.value);

    if (qiymat1.value ==='' || qiymat2.value === '') {
        alert('Iltimos ikkala formaga ham son kiriting');
    }
    
    const natija4 = document.getElementById('h1');
    natija4.textContent = ayirish(kiritish1, kiritish2);
}

const btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', funksiya1);

const btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', funksiya2);

const btn3 = document.getElementById('btn-3');
btn3.addEventListener('click', funksiya3);

const btn4 = document.getElementById('btn-4');
btn4.addEventListener('click', funksiya4);