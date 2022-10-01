fetch('	https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const p = document.querySelector('#number')
        p.innerText = `ADVICE #${data.slip.id}`
        const h2 = document.querySelector('#frase')
        h2.innerText = `"${data.slip.advice}"`
    })