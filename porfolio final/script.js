(function(){
  var root=document.documentElement, code=document.getElementById('code');
  var s={hue:255,rad:18,wt:900};
  function render(){
    root.style.setProperty('--hue',s.hue);
    root.style.setProperty('--radius',s.rad+'px');
    root.style.setProperty('--wt',s.wt);
    code.innerHTML=':root {\n  <b>--hue</b>: '+s.hue+';\n  <b>--radius</b>: '+s.rad+'px;\n  <b>--font-weight</b>: '+s.wt+';\n}';
  }
  document.getElementById('hue').addEventListener('input',function(e){s.hue=+e.target.value;render()});
  document.getElementById('rad').addEventListener('input',function(e){s.rad=+e.target.value;render()});
  var btns=document.querySelectorAll('.seg button');
  btns.forEach(function(b){b.addEventListener('click',function(){
    s.wt=+b.dataset.w;
    btns.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    render();
  })});
  document.getElementById('theme').addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')==='dark' ||
      (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
    var next=dark?'light':'dark';
    root.setAttribute('data-theme',next);
    document.getElementById('theme').setAttribute('aria-pressed',next==='dark');
    try{localStorage.setItem('theme',next)}catch(e){}
  });
  try{
    var savedTheme=localStorage.getItem('theme');
    if(savedTheme==='dark'||savedTheme==='light'){
      root.setAttribute('data-theme',savedTheme);
      document.getElementById('theme').setAttribute('aria-pressed',savedTheme==='dark');
    }
  }catch(e){}
  var T={
'Loom: Clothing Store':['Loom: магазин одежды','Loom: kiyim do‘koni'],
'A fashion store with color and size pickers, wishlist, filters and a slide-out cart.':['Магазин одежды с выбором цвета и размера, избранным, фильтрами и выдвижной корзиной.','Rang va o‘lcham tanlash, sevimlilar, filtrlar va chiquvchi savatli kiyim do‘koni.'],
'Loom Cart & Checkout':['Loom: корзина и оформление','Loom: savat va buyurtma'],
'A cart with free-shipping progress, promo code and a checkout with form validation.':['Корзина с прогрессом бесплатной доставки, промокодом и оформлением заказа с проверкой формы.','Bepul yetkazib berish ko‘rsatkichi, promokod va forma tekshiruvli savat hamda buyurtma.'],
'Ember Roasters: Coffee Beans':['Ember Roasters: зёрна кофе','Ember Roasters: kofe donalari'],
'A coffee shop with roast levels, grind and weight options and a live cart.':['Кофейный магазин со степенью обжарки, помолом, весом и живой корзиной.','Qovurish darajasi, maydalash, vazn tanlovi va jonli savatli kofe do‘koni.'],
'Projects':['Проекты','Loyihalar'],'Services':['Услуги','Xizmatlar'],'Pricing':['Цены','Narxlar'],'Skills':['Навыки','Ko‘nikmalar'],'Contact':['Контакты','Aloqa'],'Theme':['Тема','Mavzu'],
'I build websites and online stores with HTML, CSS and JavaScript. I like pages that don’t look like a template and load fast.':['Я делаю сайты и интернет-магазины на HTML, CSS и JavaScript. Мне нравятся страницы, которые не похожи на шаблон и быстро загружаются.','Men HTML, CSS va JavaScript yordamida saytlar va internet-do‘konlar yarataman. Shablonga o‘xshamaydigan va tez ochiladigan sahifalarni yaxshi ko‘raman.'],
'17 years old · 3 years of experience':['17 лет · 3 года опыта','17 yosh · 3 yillik tajriba'],
'Available for freelance projects':['Открыт для фриланс-проектов','Frilans loyihalarga ochiqman'],
'Make this site your own':['Настрой этот сайт под себя','Bu saytni o‘zingizga moslang'],
'Move the sliders: color, corner radius and heading weight change instantly. It all runs on CSS variables and a few lines of JavaScript.':['Двигайте ползунки: цвет, скругление углов и толщина заголовка меняются сразу. Всё работает на CSS-переменных и нескольких строках JavaScript.','Slayderlarni suring: rang, burchak yumaloqligi va sarlavha qalinligi darhol o‘zgaradi. Bularning barchasi CSS o‘zgaruvchilari va bir necha qator JavaScript bilan ishlaydi.'],
'Color':['Цвет','Rang'],'Roundness':['Скругление','Yumaloqlik'],'Light':['Тонкий','Yupqa'],'Medium':['Средний','O‘rtacha'],'Bold':['Жирный','Qalin'],
'Stride: Sneaker Store':['Stride: магазин кроссовок','Stride: krossovkalar do‘koni'],
'A complete online store: product catalog, category filters and a clean responsive layout.':['Полноценный интернет-магазин: каталог товаров, фильтры по категориям и аккуратная адаптивная вёрстка.','To‘liq internet-do‘kon: mahsulotlar katalogi, kategoriya filtrlari va toza moslashuvchan dizayn.'],
'Shopping Cart':['Корзина покупок','Xaridlar savati'],
'A slide-out cart with quantity controls, live totals and a checkout flow that remembers your items.':['Выдвижная корзина с изменением количества, живой суммой и оформлением заказа, которая помнит ваши товары.','Miqdorni o‘zgartirish, jonli umumiy summa va tanlangan mahsulotlarni eslab qoladigan, surilib chiqadigan savat.'],
'Nomad Coffee: Pickup Ordering':['Nomad Coffee: заказ на самовывоз','Nomad Coffee: olib ketish uchun buyurtma'],
'A café website where customers browse the menu, build an order and choose a pickup time.':['Сайт кафе: клиенты смотрят меню, собирают заказ и выбирают время самовывоза.','Kafe sayti: mijozlar menyuni ko‘radi, buyurtma tuzadi va olib ketish vaqtini tanlaydi.'],
'How I can help your business':['Чем я могу помочь вашему бизнесу','Biznesingizga qanday yordam bera olaman'],
'Online stores':['Интернет-магазины','Internet-do‘konlar'],
'Product catalog, search and filters, shopping cart and an easy checkout that works on phones.':['Каталог товаров, поиск и фильтры, корзина и простое оформление заказа, которое работает на телефонах.','Mahsulotlar katalogi, qidiruv va filtrlar, savat hamda telefonlarda ishlaydigan oson buyurtma berish.'],
'Business websites':['Сайты для бизнеса','Biznes saytlari'],
'Fast, clear sites for cafés, shops and local services, so customers find you and contact you.':['Быстрые и понятные сайты для кафе, магазинов и местных услуг, чтобы клиенты находили вас и связывались с вами.','Kafe, do‘kon va mahalliy xizmatlar uchun tez va tushunarli saytlar: mijozlar sizni topib, bog‘lanishi uchun.'],
'Landing pages':['Лендинги','Lending sahifalar'],
'One focused page that explains your offer and gets visitors to call, order or write.':['Одна сфокусированная страница, которая объясняет ваше предложение и побуждает позвонить, заказать или написать.','Taklifingizni tushuntiradigan va tashrifchini qo‘ng‘iroq qilish, buyurtma berish yoki yozishga undaydigan bitta sahifa.'],
'Why work with me':['Почему со мной','Nega men bilan'],
'Mobile first':['Сначала мобильные','Avval mobil'],
'Most customers browse on their phone, so every site is built for small screens first.':['Большинство клиентов заходят с телефона, поэтому каждый сайт я делаю сначала для маленьких экранов.','Ko‘pchilik mijozlar telefondan kiradi, shuning uchun har bir saytni avval kichik ekranlar uchun yarataman.'],
'Fast to load':['Быстрая загрузка','Tez yuklanadi'],
'Lightweight code with no heavy templates, so pages open quickly.':['Лёгкий код без тяжёлых шаблонов, поэтому страницы открываются быстро.','Og‘ir shablonlarsiz yengil kod, shuning uchun sahifalar tez ochiladi.'],
'Clear communication':['Понятная коммуникация','Aniq muloqot'],
'You always know what is done and what comes next. Write to me and I reply.':['Вы всегда знаете, что уже сделано и что дальше. Напишите мне, и я отвечу.','Nima bajarilgani va keyin nima bo‘lishini doim bilasiz. Menga yozing, javob beraman.'],
'How we work':['Как мы работаем','Qanday ishlaymiz'],
'Brief':['Бриф','Topshiriq'],'You tell me about your business and goals.':['Вы рассказываете о своём бизнесе и целях.','Siz biznesingiz va maqsadlaringiz haqida aytasiz.'],
'Design':['Дизайн','Dizayn'],'I show you the look of the site before building.':['Я показываю внешний вид сайта до разработки.','Yaratishdan oldin saytning ko‘rinishini ko‘rsataman.'],
'Build':['Разработка','Ishlab chiqish'],'I code the site and you review it.':['Я пишу код сайта, а вы проверяете.','Saytni kodlayman, siz esa tekshirasiz.'],
'Launch':['Запуск','Ishga tushirish'],'The site goes live and I fix anything that needs it.':['Сайт запускается, и я исправляю всё, что нужно.','Sayt ishga tushadi, kerakli narsalarni tuzataman.'],
'Website':['Сайт','Sayt'],'Custom design, no templates':['Индивидуальный дизайн, без шаблонов','Shablonsiz, individual dizayn'],'Works on phones and computers':['Работает на телефонах и компьютерах','Telefon va kompyuterlarda ishlaydi'],'HTML, CSS and JavaScript':['HTML, CSS и JavaScript','HTML, CSS va JavaScript'],'Order a website':['Заказать сайт','Sayt buyurtma qilish'],
'Fixes and edits':['Исправления и правки','Tuzatish va o‘zgartirishlar'],'Fix bugs on your existing site':['Исправление ошибок на вашем сайте','Mavjud saytingizdagi xatolarni tuzatish'],'Change text, colors or layout':['Изменение текста, цветов или вёрстки','Matn, rang yoki maketni o‘zgartirish'],'Per fix':['За одну правку','Har bir tuzatish uchun'],'Request a fix':['Заказать правку','Tuzatish so‘rash'],
'Large projects':['Большие проекты','Katta loyihalar'],'Online stores with a cart':['Интернет-магазины с корзиной','Savatli internet-do‘konlar'],'Multi-page business sites':['Многостраничные сайты для бизнеса','Ko‘p sahifali biznes saytlari'],'Custom features':['Индивидуальные функции','Maxsus funksiyalar'],'Get a quote':['Узнать цену','Narx so‘rash'],
'The final price of a large project depends on its size. Message me for an exact quote.':['Итоговая цена большого проекта зависит от его размера. Напишите мне, чтобы узнать точную стоимость.','Katta loyihaning yakuniy narxi uning hajmiga bog‘liq. Aniq narx uchun menga yozing.'],
'What I do':['Что я умею','Nimalar qila olaman'],'Clean, semantic page structure.':['Чистая и понятная структура страниц.','Toza va tushunarli sahifa tuzilmasi.'],'Responsive layouts, flexbox, grid and animations.':['Адаптивные макеты, flexbox, grid и анимации.','Moslashuvchan maketlar, flexbox, grid va animatsiyalar.'],'Interactive features: carts, filters, forms and DOM work.':['Интерактив: корзины, фильтры, формы и работа с DOM.','Interaktiv funksiyalar: savatlar, filtrlar, formalar va DOM bilan ishlash.'],
'Have a project? Let’s talk':['Есть проект? Давайте поговорим','Loyihangiz bormi? Gaplashamiz'],'Your name':['Ваше имя','Ismingiz'],'Your email':['Ваша почта','Pochtangiz'],'Tell me about your project':['Расскажите о вашем проекте','Loyihangiz haqida aytib bering'],'Send message':['Отправить сообщение','Xabar yuborish'],'Hire me':['Нанять меня','Meni yollang']
  };
  var tn=[],wk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),nd;
  while((nd=wk.nextNode())){
    var pt=nd.parentNode.nodeName,k=nd.nodeValue.trim();
    if(pt!=='SCRIPT'&&pt!=='STYLE'&&pt!=='PRE'&&T[k])tn.push({n:nd,o:nd.nodeValue,k:k});
  }
  var lb=document.querySelectorAll('.langs [data-l]');
  function setLang(l){
    var i=l==='ru'?0:1;
    tn.forEach(function(x){x.n.nodeValue=l==='en'?x.o:x.o.replace(x.k,function(){return T[x.k][i]})});
    root.lang=l;
    lb.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l)});
    try{localStorage.setItem('lang',l)}catch(e){}
  }
  lb.forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.l)})});
  try{var sv=localStorage.getItem('lang');if(sv&&sv!=='en')setLang(sv)}catch(e){}
  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();
    var n=document.getElementById('fn').value,m=document.getElementById('fe').value,t=document.getElementById('fm').value;
    location.href='mailto:ssadriddinov98@gmail.com?subject='+encodeURIComponent('Project inquiry from '+n)+'&body='+encodeURIComponent(t+'\n\nReply to: '+m);
  });
  /* mobile menu */
  var mh=document.querySelector('header.top'),mb=document.querySelector('.burger');
  if(mb){
    var setMenu=function(o){mh.classList.toggle('open',o);mb.setAttribute('aria-expanded',o)};
    mb.addEventListener('click',function(){setMenu(!mh.classList.contains('open'))});
    mh.querySelector('nav').addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
    document.addEventListener('click',function(e){if(!mh.contains(e.target))setMenu(false)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
  }
  /* intro screen */
  var intro=document.querySelector('.intro');
  if(intro&&root.classList.contains('intro-on')){
    var px=intro.querySelector('.px'),px2=intro.querySelector('.px2'),ipct={set textContent(v){px.textContent=v;px2.textContent=v}},ibar=intro.querySelector('.intro-bar b'),wt=intro.querySelector('.wv'),t0=null,fin=false,D=1800,rt=intro.querySelector('.role-txt'),words=['IT designer','HTML','CSS','JavaScript'],cur=-1,tm=null;
    var typeWord=function(w){
      clearInterval(tm);var n=0;rt.textContent='';
      tm=setInterval(function(){n++;rt.textContent=w.slice(0,n);if(n>=w.length)clearInterval(tm)},28);
    };
    var iend=function(){
      if(fin)return;fin=true;clearInterval(tm);
      ipct.textContent='100%';wt.style.transform='none';px2.style.transform='none';
      intro.classList.add('done');root.classList.remove('intro-on');
      setTimeout(function(){intro.remove()},1000);
    };
    var shatter=function(){
      var W=innerWidth,H=innerHeight;
      intro.querySelectorAll('.intro-name i').forEach(function(el){
        var c=el.textContent,r=el.getBoundingClientRect(),cx=r.left+r.width/2-W/2;
        el.innerHTML='<span class="sh a">'+c+'</span><span class="sh b">'+c+'</span>';
        el.querySelectorAll('.sh').forEach(function(s,k){
          s.style.setProperty('--dx',(cx*1.3+(Math.random()-.5)*220+(k?60:-60))+'px');
          s.style.setProperty('--dy',(H*.25+Math.random()*H*.45)+'px');
          s.style.setProperty('--r',((Math.random()-.5)*620)+'deg');
          s.style.animationDelay=(Math.random()*90)+'ms';
          s.classList.add('fly');
        });
      });
      for(var n=0;n<18;n++){
        var sp=document.createElement('b'),a=n/18*6.283,d=120+Math.random()*180;
        sp.className='spark';sp.style.setProperty('--sx',Math.cos(a)*d+'px');sp.style.setProperty('--sy',Math.sin(a)*d+'px');
        intro.appendChild(sp);
      }
    };
    var bite=function(){
      if(fin)return;
      intro.classList.add('lions');
      setTimeout(function(){if(fin)return;intro.classList.add('chomp');shatter()},760);
      setTimeout(function(){if(fin)return;intro.classList.add('out')},1650);
      setTimeout(iend,2050);
    };
    var istep=function(t){
      if(fin)return;
      if(t0===null)t0=t;
      var p=Math.min((t-t0)/D,1);
      ipct.textContent=Math.round(p*100)+'%';var ty=(1-p)*64;wt.style.transform='translateY('+ty+'px)';px2.style.transform='translateY('+(-ty)+'px)';
      
      var wi=Math.min(words.length-1,Math.floor(p*words.length));
      if(wi!==cur){cur=wi;typeWord(words[wi])}
      if(p<1)requestAnimationFrame(istep);else setTimeout(bite,150);
    };
    requestAnimationFrame(istep);
    intro.addEventListener('click',iend);
    setTimeout(iend,6000);
  }
  /* motion: reveal, progress, active nav */
  var sel='.proj,.svc>div,.why>div,.steps>div,.plan,.skills>div,h2.t,.sub,.form,.contact .big,.links,.note';
  var rv=document.querySelectorAll(sel),cnt=new Map();
  rv.forEach(function(el){
    el.classList.add('rv');
    var p=el.parentNode,i=cnt.get(p)||0;cnt.set(p,i+1);
    el.style.setProperty('--d',Math.min(i,5)*.08+'s');
  });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
    })},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    rv.forEach(function(el){io.observe(el)});
    var links={};
    document.querySelectorAll('header.top nav a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
    var so=new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting)for(var k in links)links[k].classList.toggle('active',k===e.target.id);
    })},{rootMargin:'-40% 0px -55% 0px'});
    document.querySelectorAll('main section').forEach(function(s){so.observe(s)});
  }else{rv.forEach(function(el){el.classList.add('in')})}
  var bar=document.querySelector('.progress'),hd=document.querySelector('header.top');
  function onScroll(){
    var h=root,m=h.scrollHeight-h.clientHeight;
    bar.style.transform='scaleX('+(m>0?h.scrollTop/m:0)+')';
    hd.classList.toggle('scrolled',h.scrollTop>8);
  }
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  /* in-page projects */
  var pv=null;
  function openP(n,push,o){
    if(pv)return;
    pv=document.createElement('div');pv.className='pv';
    var f=document.createElement('iframe');f.title=n;f.src=n+'.html'+(o==='cart'?'?cart':'');pv.appendChild(f);
    document.body.appendChild(pv);root.style.overflow='hidden';
    requestAnimationFrame(function(){requestAnimationFrame(function(){if(pv)pv.classList.add('on')})});
    if(push!==false)history.pushState({pv:n},'');
  }
  function backP(){
    if(!pv)return;closeP();
    if(history.state&&history.state.pv){try{history.back()}catch(e){}}
  }
  function closeP(){
    if(!pv)return;var e=pv;pv=null;e.classList.remove('on');
    setTimeout(function(){e.remove();root.style.overflow=''},760);
  }
  window.closeProject=backP;
  document.querySelectorAll('.proj[data-p]').forEach(function(a){
    a.addEventListener('click',function(e){e.preventDefault();openP(a.dataset.p,true,a.dataset.o)});
  });
  addEventListener('message',function(e){
    if(e.data==='back')backP()
  });
  addEventListener('popstate',function(){if(!(history.state&&history.state.pv))closeP()});
  render();
})();

document.querySelectorAll('.proj').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')})})