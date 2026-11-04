const b=document.querySelector('.burger'),m=document.querySelector('.menu');
b&&b.addEventListener('click',()=>m.classList.toggle('open'));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const f=document.getElementById('enq');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
 const t=['Business enquiry for Vincere Global','','Name: '+d.name,'Company: '+d.company,'Phone: '+d.phone,'Category: '+d.cat,'Requirement: '+d.msg].join('\n');
 window.open('https://wa.me/919315784505?text='+encodeURIComponent(t),'_blank','noopener');});

/* brands marquee: slow loop, speeds up on hover (vanilla port of the React InfiniteSlider) */
(()=>{const t=document.querySelector('.marquee-track');if(!t||matchMedia('(prefers-reduced-motion:reduce)').matches||!t.animate)return;
 const a=t.animate([{transform:'translateX(-50%)'},{transform:'translateX(0)'}],{duration:80000,iterations:Infinity,easing:'linear'});
 const mq=t.parentElement;let r=1,raf;
 const ease=to=>{cancelAnimationFrame(raf);const s=()=>{r+=(to-r)*.08;if(Math.abs(to-r)<.01)r=to;a.updatePlaybackRate(r);if(r!==to)raf=requestAnimationFrame(s)};s()};
 mq.addEventListener('mouseenter',()=>ease(80/25));mq.addEventListener('mouseleave',()=>ease(1));})();

/* flow buttons: wrap each .btn in the sliding-arrow structure */
document.querySelectorAll('.btn').forEach(b=>{const t=b.textContent.replace(/\u2192/g,'').trim();
 const ar='<svg class="a %s" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
 b.innerHTML=ar.replace('%s','a1')+'<span class="t">'+t+'</span><span class="c"></span>'+ar.replace('%s','a2');});
