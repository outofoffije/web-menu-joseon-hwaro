const copy = {
 en:{lang:'en',language:'English',categories:['Signature','K-BBQ','Pork','Main menu','Sushi & sashimi','Sides'],concept:'INDEPENDENT WEBSITE CONCEPT · Not the official restaurant website',restaurant:'KOREAN RESTAURANT · JAKARTA',directions:'Get directions ↗',hero:'Good food.<br>Great company.',intro:'Choose your favorite dishes.<br>Please order through our staff.',explore:'Explore the menu',menu:'THE MENU',enjoy:'Enjoy your meal.',order:'Please ask our staff to take your order.',count:'dishes',photo:'Menu images may differ from the actual dishes.',snapshot:'Menu and prices are a snapshot of the linked Notion menu. Please confirm current details with the restaurant.',original:'Original menu ↗',footer:'Independent design concept. Not affiliated with or endorsed by the restaurant.',skip:'Skip to menu',nav:'Menu categories'},
 id:{lang:'id',language:'Bahasa Indonesia',categories:['Signature','K-BBQ','Daging babi','Menu utama','Sushi & sashimi','Menu pendamping'],concept:'KONSEP WEBSITE INDEPENDEN · Bukan website resmi restoran',restaurant:'RESTORAN KOREA · JAKARTA',directions:'Petunjuk arah ↗',hero:'Makanan lezat.<br>Kebersamaan hangat.',intro:'Pilih hidangan favorit Anda.<br>Silakan pesan melalui staf kami.',explore:'Lihat menu',menu:'DAFTAR MENU',enjoy:'Selamat makan.',order:'Silakan pesan melalui staf kami.',count:'hidangan',photo:'Foto menu dapat berbeda dari hidangan yang disajikan.',snapshot:'Menu dan harga merupakan salinan dari menu Notion yang ditautkan. Konfirmasikan informasi terbaru dengan restoran.',original:'Menu asli ↗',footer:'Konsep desain independen. Tidak berafiliasi dengan atau didukung oleh restoran.',skip:'Langsung ke menu',nav:'Kategori menu'},
 ko:{lang:'ko',language:'한국어',categories:['시그니처','구이류','돼지고기','메인 메뉴','일식류','사이드메뉴'],concept:'독립 웹사이트 디자인 시안 · 식당 공식 웹사이트가 아닙니다',restaurant:'한식당 · 자카르타',directions:'길찾기 ↗',hero:'맛있는 음식.<br>함께하는 즐거움.',intro:'좋아하는 메뉴를 골라보세요.<br>주문은 직원에게 부탁드립니다.',explore:'메뉴 보기',menu:'메뉴',enjoy:'맛있게 드세요.',order:'주문은 직원에게 부탁드립니다.',count:'개 메뉴',photo:'메뉴 사진은 실제와 다를 수 있습니다.',snapshot:'메뉴와 가격은 연결된 Notion 메뉴를 기준으로 작성되었습니다. 최신 정보는 식당에 확인해 주세요.',original:'기존 메뉴 ↗',footer:'독립적인 디자인 시안이며 식당과 제휴하거나 식당의 승인을 받은 사이트가 아닙니다.',skip:'메뉴로 건너뛰기',nav:'메뉴 카테고리'},
 zh:{lang:'zh-Hans',language:'简体中文',categories:['招牌菜','韩式烤肉','猪肉','主菜','寿司与刺身','配菜'],concept:'独立网站设计概念 · 非餐厅官方网站',restaurant:'韩国餐厅 · 雅加达',directions:'路线导航 ↗',hero:'美味佳肴。<br>欢聚时光。',intro:'挑选您喜爱的菜品。<br>请向店员点餐。',explore:'浏览菜单',menu:'菜单',enjoy:'用餐愉快。',order:'请向店员点餐。',count:'道菜',photo:'菜单图片可能与实际菜品有所不同。',snapshot:'菜单和价格摘自链接中的 Notion 菜单。最新信息请向餐厅确认。',original:'原始菜单 ↗',footer:'独立设计概念，与餐厅无关联，未经餐厅认可。',skip:'跳转到菜单',nav:'菜单分类'}
};
const gate=document.querySelector('#language-gate');
const change=document.querySelector('#change-language');
const rootSections=[...document.querySelectorAll('.menu-section')];
let current=null;
function applyLanguage(key){
 const t=copy[key]; if(!t)return;
 document.documentElement.lang=t.lang;
 document.title=`Joseon Hwaro · ${t.menu}`;
 document.querySelector('.concept').textContent=t.concept;
 document.querySelector('.brand small').textContent=t.restaurant;
 document.querySelector('.directions').textContent=t.directions;
 document.querySelector('.intro h1').innerHTML=t.hero+'<br><em>조선<span>火</span>로.</em>';
 document.querySelector('.intro-note').innerHTML=t.intro;
 document.querySelector('.menu-link').innerHTML=t.explore+' <span>↓</span>';
 document.querySelector('.menu-start .eyebrow').textContent=t.menu;
 document.querySelector('.menu-start h2').textContent=t.enjoy;
 document.querySelector('.menu-start p').textContent=t.order;
 document.querySelector('.intro .eyebrow').textContent='조선화로 · '+t.categories[1];
 document.querySelector('.categories').setAttribute('aria-label',t.nav);
 document.querySelectorAll('.categories a').forEach((a,i)=>a.textContent=t.categories[i]);
 rootSections.forEach((section,i)=>{
  section.querySelector('h2').textContent=t.categories[i];
  section.querySelector('.count').textContent=section.querySelectorAll('.dish').length+' '+t.count;
 });
 document.querySelectorAll('.dish').forEach(d=>{
  const code=d.querySelector('.code').textContent;
  const description=dishTranslations[code][key];
  d.querySelector('p').textContent=description;
  d.querySelector('p').lang=t.lang;
  d.querySelector('img').alt=description;
 });
 const caption=document.querySelector('figcaption');
 caption.querySelector('span:first-child').textContent=t.categories[0]+' · A-1';
 caption.querySelectorAll('span')[1].textContent=dishTranslations['A-1'][key];
 caption.querySelectorAll('span')[1].lang=t.lang;
 caption.querySelector('strong').lang='ko';
 document.querySelector('.intro figure img').alt=dishTranslations['A-1'][key];
 const notes=document.querySelectorAll('.notice p');
 notes[0].textContent=t.photo; notes[1].hidden=true;notes[2].textContent=t.snapshot;
 document.querySelector('footer a:last-child').textContent=t.original;
 document.querySelector('footer small').textContent=t.footer;
 document.querySelector('.skip').textContent=t.skip;
 change.textContent=t.language+' ▾'; change.setAttribute('aria-label',t.language+' — 한국어 / English / Bahasa Indonesia / 简体中文');
 current=key;
}
function openLanguages(){
 gate.hidden=false;document.documentElement.classList.add('language-pending');
 for(const el of [...document.body.children])if(el!==gate && !['SCRIPT','NOSCRIPT'].includes(el.tagName))el.inert=true;
 gate.setAttribute('role','dialog');gate.setAttribute('aria-modal','true');gate.setAttribute('aria-labelledby','language-heading');
 gate.querySelector(`[data-language="${current||'ko'}"]`).focus();
}
function chooseLanguage(key){
 applyLanguage(key);
 gate.hidden=true;document.documentElement.classList.remove('language-pending');
 for(const el of document.body.children)el.inert=false;
 change.focus();
 scheduleCategoryUpdate();
}
gate.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>chooseLanguage(button.dataset.language)));
gate.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&current){e.preventDefault();chooseLanguage(current);return;}
 if(e.key!=='Tab')return;
 const buttons=[...gate.querySelectorAll('button')]; const index=buttons.indexOf(document.activeElement);
 if(e.shiftKey&&index===0){e.preventDefault();buttons.at(-1).focus();}
 if(!e.shiftKey&&index===buttons.length-1){e.preventDefault();buttons[0].focus();}
});
change.addEventListener('click',openLanguages);
openLanguages();

// Follow the section below the sticky category bar without moving the page.
const categoryBar = document.querySelector('.categories');
const categoryLinks = [...categoryBar.querySelectorAll('a')];
let activeSection = null;
let scrollFrame = null;
function updateActiveCategory() {
 scrollFrame = null;
 const threshold = Math.max(categoryBar.getBoundingClientRect().bottom, categoryBar.offsetHeight) + Math.min(160, window.innerHeight * 0.2);
 let selected = rootSections[0];
 for (const section of rootSections) {
  if (section.getBoundingClientRect().top <= threshold) selected = section;
  else break;
 }
 if (selected.id === activeSection) return;
 activeSection = selected.id;
 categoryLinks.forEach(link => {
  const active = link.getAttribute('href') === '#' + activeSection;
  link.classList.toggle('is-active', active);
  if (active) link.setAttribute('aria-current', 'location');
  else link.removeAttribute('aria-current');
  if (active) {
   const linkRect = link.getBoundingClientRect();
   const barRect = categoryBar.getBoundingClientRect();
   if (linkRect.left < barRect.left + 16 || linkRect.right > barRect.right - 16) {
    categoryBar.scrollTo({left: link.offsetLeft - (categoryBar.clientWidth - link.offsetWidth) / 2, behavior: 'auto'});
   }
  }
 });
}
function scheduleCategoryUpdate() {
 if (scrollFrame === null) scrollFrame = requestAnimationFrame(updateActiveCategory);
}
window.addEventListener('scroll', scheduleCategoryUpdate, {passive: true});
window.addEventListener('resize', scheduleCategoryUpdate);
window.addEventListener('load', scheduleCategoryUpdate);
if ('ResizeObserver' in window) new ResizeObserver(scheduleCategoryUpdate).observe(document.querySelector('main'));
window.addEventListener('pageshow', scheduleCategoryUpdate);
window.addEventListener('hashchange', scheduleCategoryUpdate);
updateActiveCategory();
