const paras = document.querySelectorAll('p');
paras.forEach(para => {
    if(para.textContent.includes('success')){
        para.classList.add('success');
    }
    if(para.innerHTML.includes('error')){
        para.classList.add('error');
    }
});