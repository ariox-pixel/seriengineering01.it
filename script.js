const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const form=document.getElementById('contactForm');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const subject=encodeURIComponent('Richiesta informazioni - SERI Engineering');
  const body=encodeURIComponent(
`Nome: ${d.get('nome')}
Telefono: ${d.get('telefono')}
Email: ${d.get('email')}
Servizio: ${d.get('servizio')}

Messaggio:
${d.get('messaggio')}`);
  window.location.href=`mailto:ari.p98@hotmail.com?subject=${subject}&body=${body}`;
});
