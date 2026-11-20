(()=>{
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const RK=`<img src="${IMG['rocket-blue']}" alt="" draggable="false">`, RKW=`<img src="${IMG['rocket-white']}" alt="" draggable="false">`;
const ARR='<svg viewBox="0 0 24 12"><use href="#arrow"/></svg>';
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ================= DATA ================= */
const OFFERS=[
 {slug:'large-format',t:'Large-Format Printing',img:'svc-large-format',d:'Reach more customers with effective advertising solutions with our high-quality Large-Format Printing.'},
 {slug:'marketing-materials',t:'Marketing Materials',img:'svc-marketing',d:'Make every point of purchase count with professionally printed Marketing Materials designed to stand out.'},
 {slug:'digital-printing',t:'Digital Printing',img:'svc-digital',d:'Get the printed materials you need, when you need them, with our fast and reliable Digital Printing.'},
 {slug:'corporate-giveaways',t:'Corporate Giveaways',img:'svc-giveaways',d:'Keep your brand memorable with Corporate Giveaways that put your name in the hands of your customers.'},
 {slug:'signage',t:'Signage',img:'svc-signage',d:'Make your brand easy to see and remember with professionally fabricated Signage built for your business.'},
 {slug:'creative-executions',t:'Creative Executions',img:'svc-creative',d:'Bring your brand ideas to life with Special and Creative Executions designed for events, exhibits, and activations.'}
];
const LF_CHIPS=['Billboards & Tarpaulin','Store Board-Up','Lamp Post Banner','Mural','Frosted Sticker','Clear Sticker','Reflectorized Sticker','Luminous Sticker','Canvas','Backlit Film','Panaflex','Fabric Banner'];
const LF_ROWS=[
 {t:'Billboards & Tarpaulin',img:'svc-large-format',d:"Maximize your brand's visibility with high-impact Billboards and Tarpaulin printing, produced in your preferred size and installed where your audience can see them. Tarpaulin is a durable, flexible PVC-coated material commonly used for outdoor and indoor printing. Available in 8oz, 10oz, 13oz, 15oz, 18oz, and 20oz, in white or black backing."},
 {t:'Store Board-Up',img:'svc-boardup',d:'Keep your storefront clean, professional, and on-brand during renovations, relocations, or temporary closures with custom Store Board-Ups. It can be customized with branding, promotional graphics, announcements, or directional information to keep the space presentable while communicating with customers. Cover up your storefront with tarpaulins or sticker on sintra boards.'},
 {t:'Lamp Post Banner',img:'svc-lamppost',d:'Get your brand noticed along busy streets with eye-catching Lamp Post Banners, a printed banner mounted on streetlights or lamp posts, to display a brand, event, promotion, or public message. Available in 15oz and 18oz tarpaulin.'},
 {t:'Mural',img:'svc-mural',d:'Turn blank walls into powerful brand touchpoints with custom Wall Murals that showcase your message, products, or visual identity in high-impact spaces. Fill up your wall space with high-quality and durable vinyl stickers that perfectly fit any size and dimension.'}
];
const WORKS=[
 {id:1,t:'Storefront Signage',img:'t-serenos',gal:['t-serenos','t-store','t-kinto','t-carrier','t-tdxp','t-fame']},
 {id:2,t:'Vehicle Wrap',img:'t-van',gal:['t-van','t-backdrop','t-billboard','t-rollup','t-lightbox','t-cards']},
 {id:3,t:'Event Activation',img:'t-sunglass',gal:['t-sunglass','t-booth','t-fame','t-wallart','t-market','t-bags']},
 {id:4,t:'Lightbox Display',img:'t-lightbox',gal:['t-lightbox','t-rollup','t-tdxp','t-serenos','t-store','t-menu']},
 {id:5,t:'Brand Booth',img:'t-booth',gal:['t-booth','t-market','t-sunglass','t-backdrop','t-bags','t-cards']},
 {id:6,t:'Retail Branding',img:'t-market',gal:['t-market','t-fame','t-store','t-wallart','t-menu','t-bizcard']}
];
const POSTS=[
 {slug:'what-is-large-format-printing',t:'What Is Large Format Printing and Do You Need It?',img:'svc-large-format',d:'Learn what large format printing is, explore billboards, signage, stickers, and display materials, and discover how to choose the right printing solutions for your business.',full:true},
 {slug:'marketing-collateral-examples',t:'Marketing Collateral Examples: What Materials Should Your Business Have?',img:'svc-marketing',d:'Every business needs a way to communicate with its customers.'},
 {slug:'print-vs-digital',t:'Print vs. Digital Marketing Collateral: What Should You Use?',img:'svc-digital',d:'When printed materials work best, when digital wins, and how to make both work together for your brand.'},
 {slug:'collateral-for-events',t:'Marketing Collateral Ideas for Networking Events and Trade Shows',img:'t-booth',d:'Ideas for printed pieces that help your booth get noticed and keep your brand top of mind after the event.'},
 {slug:'reliable-print-shop-ph',t:'How to Find a Reliable Print Shop in the Philippines',img:'svc-giveaways',d:'What to look for in a printing partner, from materials and turnaround to after-sales service.'}
];
const TEAM_A=[
 {n:'Vicci M. Tomas',r:'Chairman & Founder',img:'team-vicci',bio:'Before Launchpad, she was the President, COO, and Executive Director of Splash Corp. from 2015 to 2022. She led the team to significant growth, leading to a successful acquisition in 2019.'},
 {n:'Paolo M. Tomas',r:'Chief Executive Officer',img:'team-paolo',bio:'Before Launchpad, he was the President of Philgraphics Inc. for 12 years. He was also the former Sales and Marketing Manager-Industrial Accounts at San Miguel Purefoods Great Foods Solutions for 3 years, and former General Manager at Pro Skills Technical Training Center for 2 years.'},
 {n:'JR Tomas',r:'Chief Marketing Officer',img:'team-jr',list:['Former Senior Account Manager at Philgraphics Inc.','16 years of experience in building, establishing, maintaining, and retaining business relationships with clients.']},
 {n:'Narine Canales',r:'Chief Operations Officer',img:'team-narine',list:['Former Sales Operations Manager at Philgraphics Inc.','Former Sales/Marketing Officer and Account Manager in 5 other companies.','19 years of experience in the advertising and marketing industry.']}
];
const TEAM_B=[
 {n:'Reynaldo Ticzon',r:'Sales & Marketing Manager',img:'team-reynaldo'},
 {n:'Arturo Estacio III',r:'Creatives & Production Officer',ini:'AE',ov:['Former Senior Graphic Artist/Designer at Philgraphics Inc. for 2 years.','Professional Graphic Artist/Designer with more than 5 years of experience focusing on custom work for individual clients.']},
 {n:'Stacy Paulino',r:'Graphic Designer & Social Media Manager',img:'team-stacy'},
 {n:'Joshua Billones',r:'Sales Account Manager',img:'team-joshua'},
 {n:'Russell Castaloni',r:'Sales Account Manager',ini:'RC'}
];
const VALUES=[
 ['L','eadership','We value leadership by taking initiatives, making informed decisions, and inspiring others to achieve their full potential. We believe in leading by example and encouraging a culture of growth and development.'],
 ['A','daptability','We embrace change and prioritize adaptability in an ever-evolving industry. We remain effective, flexible, open-minded, and quick to respond to emerging trends and client needs, ensuring our strategies remain potent and up to date.'],
 ['U','nity','We foster a sense of unity within our team, emphasizing collaboration, respect, and effective communication. We believe that by working together, we can achieve greater results and provide a seamless experience for our clients.'],
 ['N','urturing',"We are committed to nurturing our employees' talents, skills, and professional growth. We provide opportunities for continuous learning, support individual development goals, and foster a positive work environment that encourages personal and collective success."],
 ['C','reativity','We celebrate creativity as the driving force behind innovative solutions. We encourage thinking outside the box, embracing diverse perspectives, and challenging the status quo to deliver unique and impactful advertising campaigns.'],
 ['H','onesty','We prioritize honesty and transparency in all our interactions, both internally and externally. We believe that trust is the foundation of successful partnerships and strive to maintain integrity and authenticity in our work.']
];
/* placeholder client marks (design uses logo placeholders) */
const MARKS=[
 ['<svg class="mk" viewBox="0 0 34 34"><ellipse cx="17" cy="17" rx="16" ry="11" fill="currentColor"/></svg>','logoipsum'],
 ['<svg class="mk" viewBox="0 0 34 34"><path d="M4 26 17 5l13 21z" fill="none" stroke="currentColor" stroke-width="4"/></svg>','LOGO IPSUM'],
 ['<svg class="mk" viewBox="0 0 34 34"><path d="M17 2 31 10v14L17 32 3 24V10z" fill="currentColor"/><path d="M17 9l8 5v7l-8 5-8-5v-7z" fill="#fff"/></svg>','Logoipsum'],
 ['<svg class="mk" viewBox="0 0 34 34"><rect x="3" y="3" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="5"/><rect x="11" y="11" width="12" height="12" fill="currentColor"/></svg>','LOGO'],
 ['<svg class="mk" viewBox="0 0 34 34"><circle cx="11" cy="17" r="9" fill="currentColor" opacity=".55"/><circle cx="23" cy="17" r="9" fill="currentColor"/></svg>','Logoipsum'],
 ['<svg class="mk" viewBox="0 0 34 34"><path d="M5 29V5l24 24V5" fill="none" stroke="currentColor" stroke-width="5"/></svg>','ipsum'],
 ['<svg class="mk" viewBox="0 0 34 34"><circle cx="17" cy="17" r="14" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="17" cy="17" r="5" fill="currentColor"/></svg>','logo°'],
 ['<svg class="mk" viewBox="0 0 34 34"><path d="M3 17h28M17 3v28M7 7l20 20M27 7 7 27" stroke="currentColor" stroke-width="3"/></svg>','LOGOIPSUM']
];
const markHTML=(m,cls='')=>`<span class="lg ${cls}">${m[0]}<span>${m[1]}</span></span>`;

/* ================= HELPERS ================= */
const img=(k,alt='')=>`<img src="${IMG[k]||''}" alt="${alt}" decoding="async">`;
let seed=1; const rnd=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646};
function cloudPath(w,h,s,minC,maxC){seed=s*9301+49297;const base=h*.62;let x=-30,y=base+(rnd()-.5)*h*.25,d=`M-30 ${h} L-30 ${y.toFixed(1)}`;
  while(x<w+30){const c=minC+rnd()*(maxC-minC);const y2=base+(rnd()-.5)*h*.3;const r=c*(.56+rnd()*.12);d+=` A${r.toFixed(1)} ${r.toFixed(1)} 0 0 1 ${(x+c).toFixed(1)} ${y2.toFixed(1)}`;x+=c}
  return d+` L${x.toFixed(1)} ${h} Z`}
function buildClouds(root){$$('.cloud-host',root).forEach(el=>{if(el.dataset.done)return;el.dataset.done=1;el.classList.add('cloud-edge');
  const big=el.dataset.big,s=+el.dataset.seed||3,col=el.dataset.color||'currentColor';const W=1600,H=big?160:120;
  const a=cloudPath(W,H,s,big?170:110,big?330:210),b=cloudPath(W,H,s+17,big?140:90,big?260:170);
  el.innerHTML=`<svg class="back" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><path d="${b}" fill="${col}"/></svg><svg class="front" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><path d="${a}" fill="${col}"/></svg>`;})}
function flowerPath(n=11,R=78,k=.58,cx=100,cy=100,j=0,s=1){seed=s*7+3;let d='';const pts=[];for(let i=0;i<n;i++){const a=i/n*Math.PI*2-Math.PI/2;const rr=R*(1+(rnd()-.5)*j);pts.push([cx+rr*Math.cos(a),cy+rr*Math.sin(a)])}
  pts.forEach((p,i)=>{const q=pts[(i+1)%n];const c=Math.hypot(q[0]-p[0],q[1]-p[1]);const r=c*k;if(!i)d+=`M${p[0].toFixed(1)} ${p[1].toFixed(1)}`;d+=` A${r.toFixed(1)} ${r.toFixed(1)} 0 0 1 ${q[0].toFixed(1)} ${q[1].toFixed(1)}`});return d+'Z'}
function buildFlowers(root){$$('.flower',root).forEach((el,i)=>{if(el.querySelector('svg.fs'))return;const n=+el.dataset.n||12,s=+el.dataset.s||i+1;
  el.insertAdjacentHTML('afterbegin',`<svg class="fs" viewBox="0 0 200 200" preserveAspectRatio="none"><path d="${flowerPath(n,82,.58,100,100,.05,s)}"/></svg>`)})}
function splitText(root){$$('.split',root).forEach(el=>{if(el.dataset.sp)return;el.dataset.sp=1;let i=0;
  const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const frag=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t)){frag.append(t);return}const w=document.createElement('span');w.className='w';const inn=document.createElement('span');inn.textContent=t;inn.style.setProperty('--i',i++);w.append(inn);frag.append(w)});c.replaceWith(frag)}else if(c.nodeType===1&&c.tagName!=='BR')walk(c)})};walk(el)})}
let io;
function observe(root){if(!io)io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.14,rootMargin:'0px 0px -6% 0px'});
  $$('[data-r],.split,.line-draw,.hline,.outline-fill,.tq,.big',root).forEach(el=>{if(reduce)el.classList.add('in');else io.observe(el)})}
function stagger(sel,step=.08,base=0,root=document){$$(sel,root).forEach((el,i)=>el.style.setProperty('--d',(base+i*step).toFixed(2)+'s'))}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('show'),2600)}

/* ================= PAGES ================= */
const offerCards=()=>OFFERS.map((o,i)=>`<a class="ocard" href="#service-${o.slug}" data-r="up" style="--d:${(i*.08).toFixed(2)}s"><div class="im">${img(o.img,o.t)}</div><div class="bd"><span class="pill">Learn More</span><h3>${o.t}</h3><p>${o.d}</p></div></a>`).join('');
const postCard=(p,i)=>`<a class="post" href="#blog-${p.slug}" data-r="up" style="--d:${(i*.1).toFixed(2)}s"><div class="im">${img(p.img,p.t)}</div><div class="bd"><time>October 27, 2026</time><h3>${p.t}</h3><p>${p.d}</p></div></a>`;
const reelTiles=(ks)=>ks.map((k,i)=>`<div class="tile" style="--rt:${((i%3)-1)*1.5}deg">${img(k)}</div>`).join('');

function home(){
  const r1=['t-serenos','t-van','t-sunglass','t-lightbox','t-market','t-booth','t-fame','t-bizcard'];
  const r2=['t-rollup','t-store','t-backdrop','t-cards','t-wallart','t-menu','t-carrier','t-bags'];
  return `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1 class="h-lg split" data-r="fade">High-quality printing services, marketing materials, &amp; creative advertising</h1>
      <p data-r="up" style="--d:.55s">Explore premium marketing supplies like signage, stickers, roll-up banners, and vehicle wraps in Metro Manila.</p>
      <div class="hero-btns" data-r="up" style="--d:.7s"><a href="#services" class="btn btn-solid mag">Explore Our Services</a><a href="#contact" class="btn btn-line mag">Request a Quote</a></div>
    </div>
  </div>
  <div class="collage" id="collage"><div class="img" style="background-image:url(${IMG.hero})"></div><div class="covers">${'<i></i>'.repeat(70)}</div><div class="sheen"></div><div class="rocket"><span class="trail"></span>${RK}</div><div class="fade-b"></div></div>
</section>
<section class="logos"><div class="marq">${[...MARKS,...MARKS].map(m=>markHTML(m)).join('')}</div></section>
<section class="reel bg-blue">
  <div class="row"><div class="marq" style="--md:46s">${reelTiles([...r1,...r1])}</div></div>
  <div class="row"><div class="marq rev" style="--md:52s">${reelTiles([...r2,...r2])}</div></div>
  <p class="lead wrap split" data-r="fade">From concept to finish, we deliver high-quality printing services and branding materials tailored for your creative advertising needs. No project is too big or small. Whether you need 1 or 1,000 marketing materials, we deliver quick turnaround for your campaigns.</p>
</section>
<section class="sec offer">
  <div class="wrap">
    <h2 class="h-lg blue center split" data-r="fade">What we offer</h2>
    <div class="offer-grid">${offerCards()}</div>
  </div>
</section>
<section class="sec bg-blue needs">
  <div class="wrap">
    <h2 class="h-xl split" data-r="fade">For your<br>printing needs</h2>
    <div class="copy" data-r="up" style="--d:.2s">
      <p>At Launchpad, we understand the importance of creative advertising in today's competitive market. That's why we offer a wide array of branding solutions that enable businesses like yours to unlock their full branding potential. Our team of experts is committed to working with you to identify your unique needs and create a customized plan that aligns with your goals and budget.</p>
      <p>Launchpad specializes in high-quality printing services for businesses, organizations, and individuals. Whether you need large-format printing, digital printing, or marketing materials and marketing supplies, we are your partners in launching your brand beyond limits.</p>
      <p>With competitive prices, professional quality, fast turnaround times, and reliable after-sales services, we ensure that your printing projects not only meet but exceed your expectations.</p>
    </div>
    <div class="camp-wrap" id="campwrap"><div class="flyer">${RKW}</div>
      <h2 class="h-xl ttl split" data-r="fade">Featured<br>campaigns</h2>
      <div style="position:relative">
        <div class="flower camp sm float puffin" data-seq="3" data-n="9" data-s="4" style="width:150px;--fdur:6s;position:absolute;left:-30px;top:-130px"><div class="inner"><div class="ph">${img('t-wallart')}</div></div></div>
        <a href="#work-1" class="flower camp float puffin" data-seq="2" data-n="13" data-s="2" style="width:min(100%,420px);--fdur:8s"><div class="inner"><div class="ph">${img('t-serenos')}<span class="pill">Learn More</span></div><h4>Campaign<br>Title</h4><span>Client Name</span></div></a>
      </div>
      <a href="#work-3" class="flower camp sm float puffin" data-seq="1" data-n="12" data-s="6" style="width:min(100%,250px);--fdur:7s;--fdel:-2s;margin-bottom:40px"><div class="inner"><div class="ph">${img('t-sunglass')}<span class="pill">Learn More</span></div><h4>Campaign<br>Title</h4><span>Client Name</span></div></a>
      <a href="#work-2" class="flower camp sm float puffin" data-n="10" data-s="9" style="width:min(100%,150px);--fdur:5.5s;--fdel:-1s;align-self:center" data-seq="0"><div class="inner"><div class="ph">${img('t-van')}</div></div></a>
    </div>
  </div>
  <div style="height:60px"></div>
  <h2 class="h-md center split" data-r="fade" style="margin-bottom:150px">Hear what others have to say</h2>
  <div class="testi">
    <div class="cloud-host" data-seed="21" data-color="#fff"></div>
    <div class="cloud-host flip" data-seed="33" data-color="#fff"></div>
    <div class="wrap" style="position:relative">
      <div class="tgrid">${[0,1,2].map(i=>`<div class="tq" data-r="up" style="--d:${i*.12}s"><span class="q">”</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin a eros eu posuere.</p><div class="stars"><i></i><i></i><i></i><i></i><i></i></div><b>Name/Company</b><em>Designation/Nature</em></div>`).join('')}</div>
    </div>
    <div class="plane-lane"><div class="plane">${RK}</div></div>
  </div>
  <div style="height:40px"></div>
</section>
<section class="sec" style="padding-bottom:0">
  <div class="wrap">
    <h2 class="h-md blue center split" data-r="fade">Fresh information, provided for you</h2>
    <div class="posts">${POSTS.filter((p,i)=>i!==3).slice(0,4).map(postCard).join('')}</div>
  </div>
</section>`}

function about(){
  const tmA=(m,i)=>`<div class="flower tm" data-n="13" data-s="${i+3}" data-r="${i%2?'right':'left'}"><div class="inner"><div class="ph">${img(m.img,m.n)}</div><h4>${m.n}</h4><div class="role">${m.r}</div>${m.bio?`<p class="bio">${m.bio}</p>`:`<ul class="bio">${m.list.map(l=>`<li>${l}</li>`).join('')}</ul>`}</div></div>`;
  const tmB=(m,i)=>`<div class="flower tm ${m.ov?'has-ov':''}" data-n="11" data-s="${i+11}" data-r="pop" style="--d:${(i*.08).toFixed(2)}s"><div class="inner"><div class="ph">${m.img?img(m.img,m.n):m.ini}</div><h4>${m.n.replace(' ','<br>')}</h4><div class="role">${m.r}</div></div>${m.ov?`<div class="ov"><ul>${m.ov.map(l=>`<li>${l}</li>`).join('')}</ul></div>`:''}</div>`;
  return `
<section class="about-hero">
  <div class="wrap">
    <h1 class="h-xl outline-fill" style="font-size:clamp(2.8rem,7vw,6rem)">Advertising<br>solutions for<br>your brand</h1>
    <div class="intro" data-r="up" style="--d:.3s"><p>Launchpad is a premier advertising company that launched in July 2022. Our team consists of seasoned experts in branding solutions, creative advertising, and high-quality printing, all dedicated to delivering exceptional client service and measurable results.</p><p>Discover how Launchpad effectively combines branding strategies with creative advertising and high-quality printing to drive successful marketing campaigns for brands of all sizes. Explore our proven process, examples, and client outcomes.</p></div>
    <div class="tri">
      <div data-r="up"><h3 class="h-md blue">Who<br>we are</h3><p>Launchpad is a dynamic advertising and printing company that specializes in providing innovative branding solutions and effective print materials for creative advertising and marketing campaigns for businesses of all sizes. Our team of experts has years of experience in developing and executing successful campaigns that drive results.</p></div>
      <div class="vl line-draw" style="--d:.2s"></div>
      <div data-r="up" style="--d:.15s"><h3 class="h-md blue">What<br>we do</h3><p>We provide a diverse array of branding solutions, including large-format printing and creative advertising executions, along with marketing collateral. By collaborating closely with our clients, we gain insight into their goals and craft custom printed collateral that effectively support their marketing campaigns and deliver measurable results.</p></div>
      <div class="vl line-draw" style="--d:.35s"></div>
      <div data-r="up" style="--d:.3s"><h3 class="h-md blue">Our<br>approach</h3><p>At Launchpad, we believe in taking a collaborative approach to every project. We work closely with our clients to ensure that we understand their unique needs and develop custom branding solutions that meet their goals. Our team is dedicated to delivering exceptional results through innovative creative advertising and effective marketing campaigns, all while providing outstanding customer service every step of the way. No project or client is too big or small.</p></div>
    </div>
    <div class="vm">
      <div data-r="left"><h2 class="h-md blue">Our vision</h2><p>We aspire to be part of every successful &amp; inspiring marketing campaign that elevates the image of our clients in the market.</p></div>
      <div class="r" data-r="right"><h2 class="h-md blue">Our mission</h2><p style="margin-left:auto">To provide the highest quality and effective service, where creativity, reliability, resourcefulness, and integrity are the hallmarks of every aspect of our work.</p></div>
    </div>
  </div>
</section>
<section class="sec bg-blue">
  <div class="wrap">
    <h2 class="h-md center split" data-r="fade">Our values</h2>
    <div class="values">${VALUES.map((v,i)=>`<div class="val" data-r="left" style="--d:${(i*.08).toFixed(2)}s"><div class="k"><b>${v[0]}</b>${v[1]}</div><p>${v[2]}</p></div><div class="hline" style="--d:${(i*.08+.2).toFixed(2)}s"></div>`).join('')}</div>
  </div>
</section>
<section class="sec bg-blue team" style="border-top:1px solid rgba(255,255,255,.25)">
  <div class="wrap">
    <div class="team-grid-a">
      <h2 class="h-xl split" data-r="fade" style="align-self:center">Team<br>Launchpad</h2>
      ${tmA(TEAM_A[0],1)}${tmA(TEAM_A[1],0)}${tmA(TEAM_A[2],1)}${tmA(TEAM_A[3],0)}
      <p data-r="right" style="align-self:center;text-align:right;font-size:1.05rem;max-width:420px;margin-left:auto">Our team consists of experienced professionals in various aspects of the business who provide you with exceptional client service, unique branding solutions, high-quality artistry, &amp; creative advertising executions.</p>
    </div>
    <div class="team-grid-b">${TEAM_B.map(tmB).join('')}</div>
  </div>
</section>`}

function services(){return `
<section class="page-blue" style="padding-bottom:110px">
  <div class="wrap">
    <h1 class="h-lg center split" data-r="fade" style="font-size:clamp(1.8rem,3.4vw,2.9rem);line-height:1.15">Creative advertising &amp;<br>printing solutions for your<br>brand’s success</h1>
    <div class="svc-grid">${OFFERS.map((o,i)=>`<a class="scard tilt" href="#service-${o.slug}" data-r="up" style="--d:${(i*.09).toFixed(2)}s"><div class="im">${img(o.img,o.t)}</div><div class="bd"><h3>${o.t.replace(' ','<br>')}</h3><span class="arr">${ARR}</span></div></a>`).join('')}</div>
  </div>
</section>`}

function serviceDetail(slug){const o=OFFERS.find(x=>x.slug===slug)||OFFERS[0];const lf=o.slug==='large-format';
  const intro=lf?`<p>Reach more customers with effective advertising solutions with our high-quality Large-Format Printing. From billboards, posters, wall graphics, vehicle wraps, and other promotional materials, we deliver sharp, vibrant prints in various sizes and materials, ideal for businesses, events, retail spaces, and outdoor advertising.</p><p>In need of strategic marketing placements? We help you find the best locations for your brand, from billboards to new opportunities—no stone left unturned.</p>`:`<p>${o.d}</p>`;
  const rows=lf?LF_ROWS:[{t:o.t,img:o.img,d:o.d+' Tell us what you need and we will recommend the right materials, sizes, and finishes for your brand.'}];
  const others=OFFERS.filter(x=>x.slug!==o.slug);
  return `
<section style="padding-top:150px;padding-bottom:70px">
  <div class="wrap svc-intro">
    <div class="eyebrow" data-r="up">OUR SERVICES</div>
    <h1 class="h-xl blue split" data-r="fade" style="font-size:clamp(2.4rem,5vw,4rem)">${o.t.replace(' ','<br>')}</h1>
    <div data-r="up" style="--d:.3s">${intro}</div>
  </div>
  <div class="wrap chips">${(lf?LF_CHIPS:others.map(x=>x.t)).map((c,i)=>`<button class="chip" data-r="pop" style="--d:${(.3+i*.04).toFixed(2)}s" data-chip="${c}"${lf?'':` data-go="${others[i].slug}"`}>${c}</button>`).join('')}</div>
</section>
<section class="bg-blue" style="padding:20px 0 90px">
  <div class="wrap rows" style="margin-top:0">${rows.map((r,i)=>`<div class="srow" id="row-${i}" data-key="${r.t}"><h3 data-r="left">${r.t.replace(' & ',' &amp;<br>')}</h3><div class="im" data-r="zoom" style="--d:.1s">${img(r.img,r.t)}</div><p data-r="right" style="--d:.2s">${r.d}</p></div>`).join('')}</div>
</section>`}

function works(){return `
<section class="page-blue" style="padding-bottom:110px">
  <div class="wrap">
    <div class="works-head"><h1 class="h-lg split" data-r="fade" style="font-size:clamp(2rem,3.6vw,3rem)">Projects that<br>launched brands<br>beyond limits</h1><p data-r="up" style="--d:.3s">A look at the signage, displays, activations, and printed materials we’ve produced for brands across Metro Manila.</p></div>
    <div class="wgrid">${WORKS.map((w,i)=>`<a class="wcard" href="#work-${w.id}" data-r="up" style="--d:${(i*.09).toFixed(2)}s"><div class="im">${img(w.img,w.t)}<span class="pill">Learn More</span></div><h4>${w.t}</h4><span>Client Name</span></a>`).join('')}</div>
  </div>
</section>`}

function workDetail(id){const w=WORKS.find(x=>x.id==id)||WORKS[0];return `
<section class="case-hero">
  <div class="wrap">
    <div class="big" data-r="fade">${img(w.img,w.t)}</div>
    <h1 class="h-lg blue center split" data-r="fade" style="margin-top:34px">${w.t}</h1>
    <p class="center" data-r="up" style="--d:.2s;font-size:1.1rem">Client Name</p>
    <div class="case-meta">
      <p data-r="left">Campaign description goes here: the brief, what we produced, and the results for the client.</p>
      <div data-r="right"><h5>TYPE OF WORK</h5><p>${w.t}</p><h5>SERVICES</h5><p>Printing, fabrication &amp; installation</p><h5>YEAR</h5><p>2026</p></div>
    </div>
  </div>
  <div class="gal">${w.gal.map((g,i)=>`<div data-r="zoom" style="--d:${(i*.07).toFixed(2)}s">${img(g)}</div>`).join('')}</div>
  <div class="center" style="margin:60px 0 0"><a href="#works" class="btn btn-solid mag">Back to Campaigns</a></div>
</section>`}

function clients(){const pos=[0,1,7,2,6,4,3,5,1,0,2,6];return `
<section class="page-blue" style="padding-bottom:130px;overflow:hidden">
  <div class="wrap">
    <h1 class="h-lg center split" data-r="fade" style="font-size:clamp(1.9rem,3.6vw,3rem)">Featured collaborators</h1>
    <div class="cl-cloud">${pos.slice(0,10).map((k,i)=>(i===3||i===7?'<i class="brk"></i>':'')+`<div class="cl float" style="--fdur:${5+(i%4)}s;--fdel:-${i*.7}s;--frot:0deg" data-r="pop"><div style="--d:${(i*.06).toFixed(2)}s">${markHTML(MARKS[k])}</div><div class="bub flower" data-n="12" data-s="${i+2}"><div class="inner">${markHTML(MARKS[k])}<span>Short description of the company. Short description of the company.</span></div></div></div>`).join('')}</div>
  </div>
  <div class="cl-rows">
    <div class="marq" style="--md:40s">${[...MARKS,...MARKS].map(m=>markHTML(m)).join('')}</div>
    <div class="marq rev" style="--md:46s">${[...MARKS.slice(3),...MARKS,...MARKS.slice(0,3)].map(m=>markHTML(m)).join('')}</div>
    <div class="marq" style="--md:38s">${[...MARKS.slice(5),...MARKS,...MARKS.slice(0,5)].map(m=>markHTML(m)).join('')}</div>
  </div>
</section>`}

function blogs(){const f=POSTS[0];return `
<section class="blog-hero"><h1 class="h-lg split" data-r="fade" style="font-size:clamp(2rem,4vw,3.2rem)">Be in the know</h1></section>
<section class="sec" style="padding-bottom:0">
  <div class="wrap">
    <a class="feat" href="#blog-${f.slug}"><div class="im" data-r="left">${img(f.img,f.t)}</div><div data-r="right"><span class="tag">FEATURED</span><time>27.10.2026</time><h2>${f.t}</h2><p>${f.d}</p><span class="rm">READ MORE ${ARR}</span></div></a>
    <div class="bgrid">${POSTS.slice(1).map((p,i)=>`<a class="bcard" href="#blog-${p.slug}" data-r="up" style="--d:${(i*.1).toFixed(2)}s"><div class="im">${img(p.img,p.t)}</div><time>27.10.2026</time><h3>${p.t}</h3><p>${p.d}</p><span class="rm">READ MORE ${ARR}</span></a>`).join('')}</div>
  </div>
</section>`}

const FAQ=[
 ['What Is Large Format Printing?','Large-format printing is the production of oversized graphics using specialized equipment. It is commonly used for billboards, banners, signage, wall murals, sticker wraps, event backdrops, and retail displays.'],
 ['What Size Is Considered Large Format Printing?','There is no single universal size. In practical terms, it covers products that are too wide, too tall, or otherwise unsuitable for conventional office printers, from medium-sized posters to oversized wall graphics and billboards.'],
 ['What Materials Are Used for Large Format Printing?','Common materials include flexible options like tarpaulin and vinyl stickers, and rigid substrates such as Sintra board or acrylic. Backlit film and fabric are also available for particular display requirements.'],
 ['What Is the Difference Between Large Format Printing and Digital Printing?','Standard commercial printing produces items such as flyers, calling cards, brochures, and business documents, while large-format printing focuses on graphics that need to be seen from a distance or cover a substantial area.'],
 ['How Much Does Large Format Printing Cost in the Philippines?','It depends on the size, material, quantity, finishing, and installation your project needs. Send us your requirements and we’ll prepare a quotation.'],
 ['How Long Does Large Format Printing Take?','Turnaround depends on the project’s size, materials, and any fabrication or installation. Tell us your target date and we’ll plan around it.'],
 ['Is Large Format Printing Suitable for Outdoor Use?','Yes. Materials like tarpaulin are durable and commonly used outdoors. We’ll recommend the right material based on where and how your print will be displayed.'],
 ['What Is the Best Material for Outdoor Advertising?','It depends on the location, viewing distance, and how long the display needs to last. Our team can recommend the best option for your placement.'],
 ['Can Large Format Prints Be Customized to Different Sizes and Shapes?','Yes. Large-format prints are produced to the dimensions of your project, from window graphics a few feet across to large billboard surfaces.'],
 ['Where Can I Find Large Format Printing Services in the Philippines?','Launchpad Advertising provides large-format printing in Metro Manila, from artwork preparation to printing, finishing, and installation. Contact us to get started.']
];
function article(slug){const p=POSTS.find(x=>x.slug===slug)||POSTS[0];
  const body=p.full?`
<div class="meta" data-r="up"><span>October 27, 2026</span><span>15 Min. Read</span></div>
<div data-r="up"><p>When it comes to promoting a business, visibility matters, whether you operate a retail store, manage a restaurant, organize events, or handle marketing for a large company, getting your message in front of the right audience is an important part of building brand awareness.</p>
<p>While digital marketing helps businesses reach people online, printed advertising materials continue to play an important role in the physical world. Think of the billboards you see along highways, the promotional banners outside shopping malls, the stickers on store windows, and the large displays you encounter at product launches. These materials help businesses communicate their messages in places where their target customers live, work, shop, and travel.</p>
<p>Many of these applications fall under large-format printing, a printing solution designed to produce graphics larger than typical printed materials. For businesses seeking commercial printing services in the Philippines, understanding the available options can make marketing decisions easier. From large outdoor advertisements to customized marketing collateral for retail stores and corporate events, the right printed materials can support a range of promotional goals.</p>
<p>But what exactly is large format printing? What products fall under this category, and how do you know if your business needs it? In this guide, we will explain what large-format printing is, explore its applications, and discuss how to choose the right printing materials for your business. We will also look at what to consider before placing an order and how working with a professional printing provider can help you achieve the results you need.</p></div>
<div class="toc" data-r="zoom"><h4>Table of Contents:</h4><ol><li><a href="#s1" data-anchor>What Is Large Format Printing?</a></li><li><a href="#s2" data-anchor>What Size Is Considered Large Format Printing?</a></li><li><a href="#s3" data-anchor>How Does Large Format Printing Work?</a></li><li><a href="#s4" data-anchor>Frequently Asked Questions</a></li></ol></div>
<h2 id="s1" data-r="left">What Is Large Format Printing?</h2>
<p data-r="up">Large-format printing refers to the production of oversized prints, images, and promotional materials using specialized equipment. These prints are designed to be displayed across larger surfaces, making them suitable for advertising, branding, signage, retail displays, events, and other commercial applications.</p>
<p data-r="up">Unlike standard commercial printing, which commonly produces items such as flyers, calling cards, brochures, and business documents, large format printing focuses on graphics that need to be seen from a distance or cover a substantial area.</p>
<p data-r="up">For example, a company might use large-format printing to produce a billboard along a busy highway, a mural in its office, or a printed banner for a product launch.</p>
<p data-r="up">The materials and equipment used depend on the intended application. Some projects require flexible materials, such as tarpaulin and vinyl stickers, while others use rigid substrates, such as Sintra board or acrylic. Specialized materials, including backlit film and fabric, are also available for particular display requirements.</p>
<h2 id="s2" data-r="left">What Size Is Considered Large Format Printing?</h2>
<p data-r="up">There is no single universal size that defines large format printing. The classification generally depends on the capabilities of the printing equipment and the dimensions of the finished material.</p>
<p data-r="up">In practical terms, large-format printing includes many products that are too wide, too tall, or otherwise unsuitable for conventional office printers. These can range from medium-sized promotional posters and retail displays to oversized wall graphics and billboards.</p>
<p data-r="up">The final dimensions depend on the project. A store may need a window graphic measuring a few feet across, while a highway advertising campaign may require a much larger printed surface.</p>
<p data-r="up">What matters most is the intended application, the available display space, and the viewing distance.</p>
<h2 id="s3" data-r="left">How Does Large Format Printing Work?</h2>
<p data-r="up">The process usually begins with preparing the artwork. This includes checking the dimensions, image resolution, colors, and layout to ensure the design is suitable for printing at the required size.</p>
<p data-r="up">Next, the appropriate printing material is selected based on where and how the finished product will be used. The design is then printed using suitable equipment and inks.</p>
<p data-r="up">Depending on the project, additional steps may be necessary, such as trimming, laminating, mounting, assembling a frame, or fabricating a supporting structure. Some products also require professional installation at the customer's premises or designated location.</p>
<p data-r="up">For example, printing a tarpaulin banner may involve printing and finishing the material, while producing an outdoor lighted sign may require printing, fabrication, electrical components, and installation.</p>
<p data-r="up">This is why choosing a printing provider that understands the entire production process can be helpful, especially for projects with specific dimensions or installation requirements.</p>
<h2 id="s4" data-r="left">Frequently Asked Questions</h2>
<div class="faq">${FAQ.map((f,i)=>`<details${i?'':' open'} data-r="up" style="--d:${(i*.04).toFixed(2)}s"><summary><i>${ARR.replace('viewBox="0 0 24 12"','viewBox="0 0 24 12" width="18"')}</i>${f[0]}</summary><div class="a">${f[1]}</div></details>`).join('')}</div>`
  :`<div class="meta" data-r="up"><span>October 27, 2026</span><span>Coming soon</span></div><p data-r="up">${p.d}</p><div class="soon" data-r="zoom"><h3 class="blue" style="margin-bottom:8px">Full article coming soon</h3><p style="margin:0 0 16px">In the meantime, our team is happy to answer your questions directly.</p><a href="#contact" class="btn btn-solid mag">Talk to us</a></div>`;
  return `
<section class="art-hero"><div class="wrap"><h1 class="split" data-r="fade">${p.t}</h1><p data-r="up" style="--d:.3s">${p.d}</p></div></section>
<article class="wrap art">${body}</article>`}

function contact(){const opts=['Social Media (Facebook, Instagram, LinkedIn)','Email Marketing','Google','Referral','Events','Article/Blog Posts','AI','Others'];return `
<section class="contact-hero"><div class="wrap"><h1 class="h-lg split" data-r="fade" style="font-size:clamp(1.9rem,3.8vw,3.1rem);line-height:1.12">Let’s launch your brand<br>beyond limits</h1></div><div class="cloud-host flip" data-seed="41" data-color="#5596e6" data-big="1" style="color:var(--blue)"></div></section>
<section class="wrap cgrid">
  <div id="formbox" data-r="left">
    <form id="cform" novalidate>
      <div class="two"><div class="fld"><input id="f-name" placeholder=" " required><label for="f-name">Name</label></div><div class="fld"><input id="f-email" type="email" placeholder=" " required><label for="f-email">Email</label></div></div>
      <div class="two"><div class="fld"><input id="f-co" placeholder=" "><label for="f-co">Company</label></div><div class="fld"><input id="f-ph" type="tel" placeholder=" "><label for="f-ph">Phone</label></div></div>
      <div class="fld"><input id="f-subj" placeholder=" "><label for="f-subj">Subject</label></div>
      <div class="fld selw"><div class="sel" tabindex="0" role="button" aria-haspopup="listbox"><span id="selv">How did you hear about us?</span><svg viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></div><div class="opts" role="listbox">${opts.map(o=>`<div role="option">${o}</div>`).join('')}</div></div>
      <div class="fld"><textarea id="f-msg" placeholder=" "></textarea><label for="f-msg">Message</label></div>
      <label class="attach"><svg viewBox="0 0 24 24"><path d="M21 11.5 12.5 20a5.5 5.5 0 0 1-7.8-7.8l8.5-8.5a3.7 3.7 0 0 1 5.2 5.2l-8.5 8.5a1.8 1.8 0 0 1-2.6-2.6L15 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span id="fl">Attach Files</span><input type="file" multiple hidden id="f-file"></label>
      <div class="submit-row"><button class="btn btn-solid mag" type="submit">Submit</button></div>
    </form>
  </div>
  <div class="vl line-draw" style="--d:.3s"></div>
  <div class="cinfo" data-r="right" style="--d:.15s">
    <h4>Address</h4><p>Unit 3006 One Corporate Centre, Julia Vargas Avenue, Ortigas Center, San Antonio, Pasig City, Metro Manila, Philippines</p>
    <h4>Launchpad Advertising</h4><p>Riverside Village, 153 5th, Pasig, Metro Manila, Philippines</p>
    <h4>Email</h4><p><a href="mailto:inquiry@launchpadph.com">inquiry@launchpadph.com</a></p>
    <h4>Phone</h4><p><a href="tel:+639171926516">+63 917 192 6516</a></p>
    <h4>Hours</h4><p>Monday to Saturday<br>9:00 AM to 5:00 PM<br>Closed during Major Philippine Holidays</p>
  </div>
</section>
<div class="contact-foot"><div class="cloud-host" data-seed="52" data-big="1" style="color:var(--blue)"></div></div>`}

/* ================= ROUTER ================= */
const ROUTES=[
 [/^(home)?$/,()=>home(),{dark:0,key:''}],
 [/^about$/,()=>about(),{dark:0,key:'about',light:1}],
 [/^services$/,()=>services(),{dark:1,key:'services',light:1}],
 [/^service-([\w-]+)$/,m=>serviceDetail(m[1]),{dark:0,key:'services',light:1}],
 [/^works$/,()=>works(),{dark:1,key:'works',light:1}],
 [/^work-(\d+)$/,m=>workDetail(m[1]),{dark:0,key:'works'}],
 [/^clients$/,()=>clients(),{dark:1,key:'clients',light:1}],
 [/^blogs$/,()=>blogs(),{dark:1,key:'blogs'}],
 [/^blog-([\w-]+)$/,m=>article(m[1]),{dark:1,key:'blogs'}],
 [/^contact$/,()=>contact(),{dark:1,key:'contact',noCta:1}]
];
const app=$('#app');let first=true,busy=false,cleanup=[];
function resolve(){const path=location.hash.replace(/^#/,'');for(const [re,fn,meta] of ROUTES){const m=path.match(re);if(m)return {html:fn(m),meta}}return {html:home(),meta:ROUTES[0][2]}}
function mount(){const {html,meta}=resolve();cleanup.forEach(f=>f());cleanup=[];
  app.innerHTML=html;document.body.classList.toggle('dark-top',!!meta.dark);document.body.classList.toggle('cta-light',!!meta.light);
  $('#cta').style.display=meta.noCta?'none':'';$('#foot').classList.toggle('nocta',!!meta.noCta);
  $$('[data-nav]').forEach(a=>a.classList.toggle('on',a.dataset.nav===meta.key));
  window.scrollTo(0,0);init(app);onScroll();
  const t={'':'Home',about:'About',services:'Services',works:'Our Works',clients:'Clients',blogs:'Blogs',contact:'Contact'}[meta.key];document.title=`${t} | Launchpad Advertising`}
function go(){if(first){first=false;mount();return}
  if(busy||reduce){mount();return}busy=true;const c=$('#curtain');c.className='';void c.offsetWidth;c.classList.add('in');
  setTimeout(()=>{mount();c.classList.remove('in');c.classList.add('out');setTimeout(()=>{c.className='';busy=false},780)},620)}
addEventListener('hashchange',()=>{document.body.classList.remove('menu-open','lock');go()});


/* ================= ROCKET FLIGHTS ================= */
function smoke(host,x,y,size,color,dur){const p=document.createElement('i');p.className='smoke';Object.assign(p.style,{left:x+'px',top:y+'px',width:size+'px',height:size+'px',background:color,animationDuration:dur+'ms'});host.append(p);setTimeout(()=>p.remove(),dur+80)}
function campPath(wrap){const fl=$('.flyer',wrap);const items=$$('[data-seq]',wrap).sort((a,b)=>a.dataset.seq-b.dataset.seq);const wr=wrap.getBoundingClientRect();
  const c=el=>{const r=el.getBoundingClientRect();return [r.left-wr.left+r.width/2,r.top-wr.top+r.height/2]};
  const pts=[[wr.width+160,wr.height+120],...items.map(c)];const L=pts[pts.length-1];pts.push([L[0]+40,L[1]-200]);
  let d=`M${pts[0].map(v=>v.toFixed(1))}`;for(let i=0;i<pts.length-1;i++){const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
    const c1=[p1[0]+(p2[0]-p0[0])/6,p1[1]+(p2[1]-p0[1])/6],c2=[p2[0]-(p3[0]-p1[0])/6,p2[1]-(p3[1]-p1[1])/6];d+=` C${c1.map(v=>v.toFixed(1))} ${c2.map(v=>v.toFixed(1))} ${p2.map(v=>v.toFixed(1))}`}
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.style.cssText='position:absolute;width:0;height:0;overflow:hidden';const sp=document.createElementNS('http://www.w3.org/2000/svg','path');sp.setAttribute('d',d);svg.append(sp);document.body.append(svg);
  const total=sp.getTotalLength(),N=300,sm=[];for(let k=0;k<=N;k++){const q=sp.getPointAtLength(total*k/N);sm.push([q.x,q.y])}svg.remove();
  let prev=0;const frac=pts.slice(1,-1).map(p=>{let best=prev,bd=1e12;for(let k=prev;k<=N;k++){const dd=(sm[k][0]-p[0])**2+(sm[k][1]-p[1])**2;if(dd<bd){bd=dd;best=k}}prev=best;return best/N});
  fl.style.offsetPath=`path('${d}')`;return {fl,items,frac}}
function campFlight(wrap){if(wrap.dataset.flown)return;wrap.dataset.flown=1;const {fl,items,frac}=campPath(wrap);
  if(reduce){items.forEach(i=>i.classList.add('popped'));fl.style.offsetDistance='100%';fl.classList.add('rest');return}
  const dur=innerWidth<700?2200:2900,t0=performance.now();let shown=0,lastP=0;const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;fl.classList.add('flying');
  const step=now=>{if(!wrap.isConnected)return;const t=Math.min(1,(now-t0)/dur),p=ease(t);fl.style.offsetDistance=(p*100).toFixed(2)+'%';
    const wr=wrap.getBoundingClientRect(),r=fl.getBoundingClientRect(),cx=r.left-wr.left+r.width/2,cy=r.top-wr.top+r.height/2;
    if(now-lastP>34&&t<.97){lastP=now;smoke(wrap,cx+(Math.random()-.5)*18,cy+(Math.random()-.5)*18,26+Math.random()*38,'rgba(255,255,255,.92)',1500+Math.random()*900)}
    while(shown<items.length&&p>=frac[shown]-.015){const it=items[shown++];it.classList.add('popped');const b=it.getBoundingClientRect();
      for(let k=0;k<7;k++){const a=Math.random()*6.28,rr=b.width*.45;smoke(wrap,b.left-wr.left+b.width/2+Math.cos(a)*rr,b.top-wr.top+b.height/2+Math.sin(a)*rr,20+Math.random()*30,'rgba(255,255,255,.9)',900+Math.random()*500)}}
    if(t<1)requestAnimationFrame(step);else fl.classList.add('rest')};requestAnimationFrame(step)}
function planeFlight(testi){if(testi.dataset.flown)return;testi.dataset.flown=1;const pl=$('.plane',testi),lane=$('.plane-lane',testi);if(!pl||getComputedStyle(lane).display==='none')return;
  if(reduce||!pl.animate){pl.classList.add('rest');return}
  const lw=lane.getBoundingClientRect().width;const a=pl.animate([{transform:`translateX(${-lw-200}px)`,opacity:1},{transform:'translateX(0)',opacity:1}],{duration:2300,easing:'cubic-bezier(.2,.7,.25,1)',fill:'forwards'});
  let lastP=0;const step=now=>{const lr=lane.getBoundingClientRect(),r=pl.getBoundingClientRect();if(now-lastP>30&&a.playState==='running'){lastP=now;smoke(lane,r.left-lr.left+4,r.top-lr.top+r.height/2+(Math.random()-.5)*16,16+Math.random()*24,'rgba(85,150,230,.28)',1300+Math.random()*600)}
    if(a.playState==='running')requestAnimationFrame(step)};requestAnimationFrame(step);a.finished.then(()=>pl.classList.add('rest'))}
let flyIO;function watchFlights(root){flyIO??=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;flyIO.unobserve(e.target);e.target.id==='campwrap'?campFlight(e.target):planeFlight(e.target)}),{threshold:.3});
  const cw=$('#campwrap',root),te=$('.testi',root);if(cw)flyIO.observe(cw);if(te)flyIO.observe(te)}
addEventListener('resize',()=>{const cw=$('#campwrap');if(cw&&cw.dataset.flown){campPath(cw)}});

/* ================= INIT / INTERACTIONS ================= */
function init(root){buildClouds(root);buildFlowers(root);splitText(root);observe(root);watchFlights(root);
  // hero collage
  const col=$('#collage',root);if(col){const cells=$$('.covers i',col);cells.forEach(c=>{c.style.transitionDelay=(.35+Math.random()*1.3).toFixed(2)+'s'});
    requestAnimationFrame(()=>setTimeout(()=>col.classList.add('go'),booting?1500:150));
    const mm=e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;$('.img',col).style.transform=`translate(${x*-14}px,${y*-8}px)`;$('.rocket',col).style.translate=`${x*22}px ${y*14}px`};
    addEventListener('mousemove',mm);cleanup.push(()=>removeEventListener('mousemove',mm))}
  // chips
  $$('.chip',root).forEach(ch=>ch.addEventListener('click',()=>{
    if(ch.dataset.go){location.hash='#service-'+ch.dataset.go;return}
    $$('.chip',root).forEach(c=>c.classList.toggle('on',c===ch));
    const row=$$('.srow',root).find(r=>r.dataset.key===ch.dataset.chip);
    if(row){scrollToEl(row,-110);row.classList.remove('flash');void row.offsetWidth;row.classList.add('flash')}
    else{toast(`Ask us about ${ch.dataset.chip} — taking you to the inquiry form…`);setTimeout(()=>{location.hash='#contact';pendingSubject='Inquiry: '+ch.dataset.chip},900)}}));
  // anchors in article
  $$('[data-anchor]',root).forEach(a=>a.addEventListener('click',e=>{e.preventDefault();scrollToEl($(a.getAttribute('href')),-100)}));
  // tilt
  $$('.tilt',root).forEach(el=>{el.addEventListener('mousemove',e=>{const b=el.getBoundingClientRect();const x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;el.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-8px)`});el.addEventListener('mouseleave',()=>{el.style.transform=''})});
  magnet(root);
  // contact form
  const f=$('#cform',root);if(f){
    if(pendingSubject){$('#f-subj').value=pendingSubject;pendingSubject=''}
    const sw=$('.selw',f);$('.sel',sw).addEventListener('click',()=>sw.classList.toggle('open'));
    $('.sel',sw).addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();sw.classList.toggle('open')}});
    $$('.opts div',sw).forEach(o=>o.addEventListener('click',()=>{$('#selv').textContent=o.textContent;sw.classList.remove('open')}));
    const off=e=>{if(!sw.contains(e.target))sw.classList.remove('open')};document.addEventListener('click',off);cleanup.push(()=>document.removeEventListener('click',off));
    $('#f-file').addEventListener('change',e=>{const n=e.target.files.length;$('#fl').textContent=n?`${n} file${n>1?'s':''} attached`:'Attach Files'});
    f.addEventListener('submit',e=>{e.preventDefault();const name=$('#f-name'),em=$('#f-email');let ok=true;
      [name,em].forEach(i=>{const bad=!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value));i.parentElement.animate(bad?[{transform:'translateX(0)'},{transform:'translateX(-8px)'},{transform:'translateX(8px)'},{transform:'translateX(0)'}]:[],{duration:320});i.style.boxShadow=bad?'0 0 0 2px #e5484d':'';if(bad)ok=false});
      if(!ok){toast('Please add your name and a valid email.');return}
      const btn=$('button[type=submit]',f);btn.textContent='Preparing…';
      setTimeout(()=>{const v=id=>($('#'+id)||{}).value||'';const how=$('#selv').textContent;
        const body=`Name: ${v('f-name')}\nEmail: ${v('f-email')}\nCompany: ${v('f-co')}\nPhone: ${v('f-ph')}\nHow did you hear about us: ${how.startsWith('How did')?'-':how}\n\n${v('f-msg')}`;
        const subj=v('f-subj')||'Website inquiry';
        scrollToEl($('#formbox'),-140);
        $('#formbox').innerHTML=`<div class="sent"><div class="rk">${RK}</div><h3 class="h-md blue">Ready for launch!</h3><p style="margin:10px 0 20px">Thanks, ${v('f-name').trim().split(' ')[0]}. Your inquiry is ready — send it to <b>inquiry@launchpadph.com</b> and our team will get back to you within business hours.</p><div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap"><a class="btn btn-solid" href="mailto:inquiry@launchpadph.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}">Open email app</a><button class="btn btn-line" id="cpy">Copy message</button></div></div>`;
        $('#cpy').addEventListener('click',()=>{navigator.clipboard&&navigator.clipboard.writeText(`To: inquiry@launchpadph.com\nSubject: ${subj}\n\n${body}`).then(()=>toast('Message copied — paste it into an email to inquiry@launchpadph.com'),()=>toast('Copy not available here — email inquiry@launchpadph.com'))});
      },900)})}
}
let pendingSubject='',booting=true;
function scrollToEl(el,off=0){if(!el)return;const y=el.getBoundingClientRect().top+scrollY+off;smooth(y)}
function smooth(to){const from=scrollY,dist=to-from,dur=Math.min(1200,300+Math.abs(dist)*.4);let t0;const step=t=>{t0??=t;const p=Math.min(1,(t-t0)/dur);const e=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;scrollTo(0,from+dist*e);if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}
function magnet(root){if(matchMedia('(hover:none)').matches)return;$$('.mag',root).forEach(b=>{if(b.dataset.mg)return;b.dataset.mg=1;
  b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.25}px ${(e.clientY-r.top-r.height/2)*.35}px`});
  b.addEventListener('mouseleave',()=>{b.style.translate=''})})}

/* scroll effects */
let lastY=0;const hdr=$('#hdr'),prog=$('#progress'),top=$('#toTop'),ring=$('#toTop .ring circle');
function onScroll(){const y=scrollY,max=document.documentElement.scrollHeight-innerHeight,p=max>0?y/max:0;
  hdr.classList.toggle('scrolled',y>30);hdr.classList.toggle('hide',y>lastY&&y>400&&!document.body.classList.contains('menu-open'));lastY=y;
  prog.style.transform=`scaleX(${p})`;top.classList.toggle('show',y>600);ring.style.strokeDashoffset=151-151*p;
  $$('[data-par]').forEach(el=>{const r=el.getBoundingClientRect();const c=r.top+r.height/2-innerHeight/2;el.style.translate=`0 ${(c*+el.dataset.par).toFixed(1)}px`})}
addEventListener('scroll',()=>requestAnimationFrame(onScroll),{passive:true});
top.addEventListener('click',()=>smooth(0));
$('.burger').addEventListener('click',()=>{document.body.classList.toggle('menu-open');document.body.classList.toggle('lock')});
document.addEventListener('click',e=>{const s=e.target.closest('[data-soon]');if(s){e.preventDefault();toast(`${s.dataset.soon} — coming soon!`)}});
$('.cta .btn').addEventListener('mouseenter',()=>{const r=$('.cta .rk-fly');r.classList.remove('go');void r.offsetWidth;r.classList.add('go')});

/* ================= BOOT ================= */
buildClouds(document);splitText(document);observe(document);magnet(document);
const loader=$('#loader');
function boot(){go();setTimeout(()=>booting=false,50);setTimeout(()=>{loader.classList.add('launch');
  for(let i=0;i<9;i++){const p=document.createElement('span');p.className='puff';const s=30+Math.random()*50;Object.assign(p.style,{width:s+'px',height:s+'px',left:`calc(50% + ${(Math.random()-.5)*160}px)`,top:`calc(50% + ${40+Math.random()*40}px)`,animationDelay:(Math.random()*.25)+'s'});loader.append(p)}
  setTimeout(()=>{loader.classList.add('out');setTimeout(()=>loader.remove(),1100)},520)},reduce?0:1150)}
loader.insertAdjacentHTML('beforeend','<div class="cl cloud-host flip" data-seed="3" data-big="1" style="color:var(--blue)"></div>');buildClouds(loader);
if(document.readyState==='complete')boot();else addEventListener('load',boot);
})();
