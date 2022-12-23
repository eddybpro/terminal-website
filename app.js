const text = document.querySelector('.generated-text')
const generatBtn = document.querySelector('.generator')
const copyBtn = document.querySelector('.copy-text')

generatBtn.addEventListener('click',getText)

async function getText(){
    if (text.textContent != '') {
        text.textContent ='';
        copyBtn.textContent = 'copy'
    }
    const res = await fetch('https://type.fit/api/quotes')
    const data = await res.json();
    const para = data[Math.floor(Math.random()*data.length)].text;
    let index = 0;

    const interval = setInterval(()=>{
        text.textContent = para.slice(0, index)
        index++;
        if (index == para.length) {
            clearInterval(interval)
        }
    },100)        
    
    copyBtn.addEventListener('click',()=>{
        navigator.clipboard.writeText(text.textContent)
        copyBtn.textContent = 'copied'
    })
    
}





















