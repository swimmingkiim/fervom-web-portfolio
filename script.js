document.getElementById('year').textContent=new Date().getFullYear();
const cards=document.querySelectorAll('.project-card');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
cards.forEach(card=>observer.observe(card));
