import React,{useState,useEffect} from 'react';
import htm from 'htm';
const html=htm.bind(React.createElement);
const WA='201111007891';

const Logo=({s=34})=>html`<svg width=${s} height=${s*1.1} viewBox="0 0 100 110" aria-hidden="true">
<defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00c8ff"/><stop offset="1" stop-color="#0a6cff"/></linearGradient></defs>
<rect x="10" y="4" width="7" height="7" fill="#00c8ff"/><rect x="21" y="12" width="9" height="9" fill="#00b4ff"/><rect x="6" y="26" width="9" height="9" fill="#00a8ff"/><rect x="34" y="1" width="8" height="8" fill="#00d0ff"/>
<polygon points="30,24 78,24 98,45 74,70 52,70 52,108 30,96" fill="url(#lg)"/>
<polygon points="52,52 66,44 74,70 52,70" fill="#0b3bc9"/></svg>`;

const services=[
 ['💻','تصميم وتطوير مواقع الويب','مواقع سريعة وآمنة وتتفتح كويس على الموبايل، من صفحة تعريفية للشركة لحد متجر إلكتروني كامل.'],
 ['⚙️','برمجيات وأنظمة مخصصة','أنظمة مبنية على شغلك بالظبط: صلاحيات، تقارير، وتحكم كامل في بياناتك من مكان واحد.'],
 ['🎨','تصميم الواجهات UI/UX','واجهات واضحة وشكلها فخم، بتخلي العميل يوصل للي عايزه من غير ما يسأل.']
];
const sols=[
 {t:'عيادات ومراكز طبية',i:'🏥',h:'نظام إدارة العيادات',d:'نظم ملفات المرضى والحجوزات وجدول الأطباء في مكان واحد.',l:['ملف طبي لكل مريض','حجز المواعيد وتذكير بالحجز','روشتات وسجل زيارات','تقارير الإيرادات اليومية'],m:[60,85,45,95,70]},
 {t:'المحلات والمتاجر',i:'🛒',h:'نقطة بيع وفواتير (POS)',d:'سجّل المبيعات واطبع الفواتير وتابع المخزون لحظة بلحظة.',l:['شاشة كاشير سريعة','فواتير جاهزة للطباعة','تنبيه عند نقص المنتج','حسابات العملاء والديون'],m:[40,65,90,55,80]},
 {t:'المخازن والمخزون',i:'📦',h:'إدارة المخزون',d:'اعرف كل منتج وكميته وحركته، وتجنّب الفاقد والعجز.',l:['أرصدة المنتجات بالمخازن','إذن إضافة وصرف','جرد دوري','تتبع حركة كل صنف'],m:[75,50,85,60,92]},
 {t:'الشركات والفرق',i:'🏢',h:'إدارة العمليات اليومية',d:'العملاء والموظفون والمهام والبيانات في لوحة تحكم موحدة.',l:['إدارة العملاء CRM','حضور وصلاحيات الموظفين','مهام ومتابعة','لوحة تحكم لحظية'],m:[55,70,60,88,78]},
 {t:'التقارير والمالية',i:'📊',h:'متابعة الإيرادات والمصروفات',d:'تقارير واضحة تساعدك تتخذ قرار وانت فاهم أداء مشروعك.',l:['إيرادات ومصروفات','تقارير مبيعات','رسوم بيانية','تصدير Excel وPDF'],m:[35,55,75,65,98]},
 {t:'المواعيد والخدمات',i:'📅',h:'نظام الحجز والمواعيد',d:'نظم المواعيد وبيانات العملاء وتابع الخدمات المقدمة لكل واحد.',l:['حجز أونلاين','تذكير تلقائي','سجل خدمات العميل','جدول الفريق'],m:[50,80,65,90,72]}
];
const steps=[['فهم فكرتك','نسمعك ونحدد المطلوب والأولويات والميزانية.'],['تصميم الواجهة','نرسم شكل المشروع وتوافق عليه قبل أي كود.'],['البرمجة','نبني المشروع بـ React وتقنيات حديثة وتشوف تقدم الشغل.'],['الاختبار والتسليم','نجرّب كل حاجة ونسلمك مشروع جاهز وشغال.'],['الدعم والتطوير','نفضل معاك بعد التسليم ونضيف اللي تحتاجه.']];
const faq=[['أنا معنديش خبرة تقنية، هقدر أشتغل معاكم؟','طبعًا. احكيلنا فكرتك بكلامك العادي ونحن نترجمها لمتطلبات وتصميم، ونشرحلك كل خطوة ببساطة.'],['المشروع هياخد وقت قد إيه؟','بيختلف حسب الحجم. الموقع التعريفي بياخد أيام، والأنظمة المخصصة بتاخد أسابيع. بنحدد جدول واضح بعد ما نفهم المطلوب.'],['هل ممكن أطلب نظام مش موجود في الأمثلة؟','أكيد. الأمثلة مجرد نماذج، وبنطوّر حلول مخصصة تناسب طبيعة نشاطك واحتياجاتك.'],['هل فيه دعم بعد التسليم؟','أيوه، بنتابع معاك بعد التسليم ونصلح ونطوّر ونضيف مميزات جديدة وقت ما تحتاج.'],['بكام التكلفة؟','التكلفة حسب المتطلبات. ابعتلنا فكرتك ونرد عليك بعرض سعر واضح.']];
const stack=['React','JavaScript','TypeScript','Node.js','Python','Next.js','Tailwind','PostgreSQL','MongoDB','Figma','REST API','Docker'];

function Typing(){
 const code=[['cm','// Pixelcode Egypt'],['k','const ','f','project = {'],['f','  idea: ','s','"فكرتك"','f',','],['f','  stack: ','s','"React"','f',','],['f','  design: ','s','"UI/UX"','f',','],['f','  status: ','s','"Live ✨"'],['f','};'],['k','deploy','f','(project);']];
 const flat=code.map(r=>r.reduce((a,v,i)=>i%2?a:[...a,[v,r[i+1]]],[])); const total=flat.flat().reduce((a,[,t])=>a+t.length,0)+flat.length;
 const [n,setN]=useState(0);
 useEffect(()=>{const id=setInterval(()=>setN(x=>x>total+40?0:x+1),70);return()=>clearInterval(id)},[]);
 let left=n;const out=[];
 flat.forEach((row,ri)=>{const parts=[];row.forEach(([c,t],pi)=>{if(left<=0)return;const sl=t.slice(0,left);left-=t.length;parts.push(html`<span key=${pi} className=${c}>${sl}</span>`)});if(parts.length){left-=1;out.push(html`<div key=${ri}>${parts}</div>`)}});
 return html`<div className="win"><div className="wb"><i style=${{background:'#ff5f57'}}/><i style=${{background:'#febc2e'}}/><i style=${{background:'#28c840'}}/></div><pre>${out}<span className="cur"/></pre></div>`;
}

function Nav(){
 const [s,setS]=useState(false),[o,setO]=useState(false);
 useEffect(()=>{const f=()=>setS(scrollY>30);f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
 const L=[['services','خدماتنا'],['solutions','حلولنا'],['process','طريقة الشغل'],['faq','أسئلة شائعة'],['contact','تواصل معانا']];
 return html`<nav className=${s?'s':''}><div className="wrap nv">
  <a href="#top" className="brand"><${Logo}/> Pixel<b>code</b></a>
  <div className=${'links'+(o?' o':'')} onClick=${()=>setO(false)}>${L.map(([i,t])=>html`<a key=${i} href=${'#'+i}>${t}</a>`)}</div>
  <a className="btn p" href="#contact" style=${{padding:'10px 22px'}}>ابدأ مشروعك</a>
  <button className="burger" aria-label="القائمة" onClick=${()=>setO(!o)}>${o?'✕':'☰'}</button></div></nav>`;
}

function Hero(){
 const px=[[20,90,16,0],[75,10,10,1],[8,40,12,2],[88,60,14,1.5]];
 return html`<header className="hero" id="top"><div className="wrap hg"><div>
  <div className="tag"><i/> Pixelcode Egypt </div>
  <h1>نحوّل فكرتك لـ<span className="grad"> حل رقمي</span> يشتغل بجد</h1>
  <p>مواقع ويب، أنظمة مخصصة، وواجهات احترافية. احكيلنا فكرتك، وخلّينا نبنيها بالكود.</p>
  <div className="cta"><a className="btn p" href="#contact">احكيلنا عن فكرتك </a><a className="btn g" href="#solutions">شوف الحلول</a></div></div>
  <div className="vis"><div className="logo3d"><${Logo} s=${190}/></div>
   ${px.map(([l,t,z,d],i)=>html`<span key=${i} className="pix" style=${{left:l+'%',top:t+'%',width:z,height:z,animationDelay:d+'s'}}/>`)}
   <${Typing}/></div></div></header>`;
}

function Spot({children,className='card'}){
 const mv=e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--x',e.clientX-r.left+'px');e.currentTarget.style.setProperty('--y',e.clientY-r.top+'px')};
 return html`<div className=${className} onMouseMove=${mv}>${children}</div>`;
}

function Services(){return html`<section id="services"><div className="wrap">
 <h2>خدمات <span className="grad">احترافية</span> من الفكرة للإطلاق</h2><p className="sub">كل اللي مشروعك محتاجه رقميًا، من فريق واحد بيفهم الكود والتصميم.</p>
 <div className="grid g3 big">${services.map(([i,t,d])=>html`<${Spot} key=${t}><div className="ic">${i}</div><h3>${t}</h3><p>${d}</p><//>`)}</div></div></section>`}

function Solutions(){
 const [a,setA]=useState(0);const x=sols[a];
 return html`<section id="solutions" style=${{background:'var(--bg2)'}}><div className="wrap">
  <h2>إيه الحلول الرقمية اللي <span className="grad">نقدمها</span> لمشروعك؟</h2><p className="sub">دي مجرد أمثلة. نقدر نطوّر حلول برمجية مخصصة تناسب طبيعة نشاطك.</p>
  <div className="tabs" role="tablist">${sols.map((s,i)=>html`<button key=${s.t} role="tab" aria-selected=${i===a} className=${'tab'+(i===a?' a':'')} onClick=${()=>setA(i)}>${s.i} ${s.t}</button>`)}</div>
  <div className="pn" key=${a}><div><h3>${x.h}</h3><p>${x.d}</p><ul>${x.l.map(l=>html`<li key=${l}>${l}</li>`)}</ul><a className="btn p" style=${{marginTop:24}} href=${'https://wa.me/'+WA+'?text='+encodeURIComponent('عايز أعرف أكتر عن: '+x.h)}>اطلب النظام ده</a></div>
   <div className="mock"><div className="chips"><b>Dashboard</b><b>Reports</b><b>Users</b></div><div className="bar" style=${{width:'70%'}}/><div className="bar" style=${{width:'45%',opacity:.6}}/>
    <div className="row">${x.m.map((h,i)=>html`<i key=${i} style=${{height:h+'%',animationDelay:i*.1+'s'}}/>`)}</div><div className="bar" style=${{width:'88%',opacity:.4}}/></div></div></div></section>`;
}

function Process(){return html`<section id="process"><div className="wrap"><h2>إزاي بنشتغل <span className="grad">معاك</span></h2><p className="sub">خطوات واضحة من أول فكرة لحد ما مشروعك يشتغل.</p>
 <div className="steps">${steps.map(([t,d],i)=>html`<div className="st" key=${t}><div className="n">${i+1}</div><h3>${t}</h3><p>${d}</p></div>`)}</div></div></section>`}

function Why(){
 const w=[['⚡','أداء سريع','React وتقنيات حديثة'],['📱','متجاوب','شغال على كل الأجهزة'],['🔒','آمن','حماية للبيانات والصلاحيات'],['🤝','دعم مستمر','معاك بعد التسليم']];
 return html`<section style=${{background:'var(--bg2)'}}><div className="wrap why"><div><h2>ليه <span className="grad">Pixelcode</span>؟</h2><p className="sub" style=${{marginBottom:24}}>مش بنسلمك كود وبس. بنبني معاك حل بيخدم شغلك فعلًا، وبشكل يفرّق بين مشروعك وغيره.</p><a className="btn p" href="#contact">كلمنا دلوقتي</a></div>
 <div className="stats">${w.map(([i,t,d])=>html`<div className="stat" key=${t}><b>${i}</b><strong>${t}</strong><br/><span>${d}</span></div>`)}</div></div></section>`}

function Stack(){const l=[...stack,...stack];return html`<div className="mq" aria-label="التقنيات"><div className="mt">${l.map((s,i)=>html`<span key=${i}>${s}</span>`)}</div></div>`}

function Faq(){return html`<section id="faq"><div className="wrap" style=${{maxWidth:820}}><h2>أسئلة <span className="grad">شائعة</span></h2><p className="sub">إجابات سريعة قبل ما تبدأ.</p>${faq.map(([q,a])=>html`<details key=${q}><summary>${q}</summary><p>${a}</p></details>`)}</div></section>`}

const NUMS=[['201111007891','01111007891'],['201500009948','01500009948']];
function Contact(){
 const [f,setF]=useState({n:'',p:'',t:'موقع ويب',m:'',w:NUMS[0][0]}),[ok,setOk]=useState(false);
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const send=()=>{if(!f.n.trim()||!f.m.trim()){setOk('err');return}
  const txt=`مرحبًا Pixelcode Egypt 👋
الاسم: ${f.n}
الهاتف: ${f.p}
نوع المشروع: ${f.t}
الفكرة: ${f.m}`;
  window.open('https://wa.me/'+f.w+'?text='+encodeURIComponent(txt),'_blank');setOk(true)};
 return html`<section id="contact" style=${{background:'var(--bg2)'}}><div className="wrap"><h2>ابعتلنا رسالة <span className="grad">واحكيلنا فكرتك</span></h2><p className="sub">خلّينا نبدأ نحولها لواقع. بنرد عليك في أقرب وقت.</p>
 <div className="ct"><div className="info">
  <a href=${'https://wa.me/'+WA}><div className="ic">💬</div><div><small>واتساب</small><span className="ltr">01111007891</span> · <span className="ltr">01500009948</span></div></a>
  <a href="mailto:pixelcodeegypt@gmail.com"><div className="ic">✉️</div><div><small>الإيميل</small><span className="ltr">pixelcodeegypt@gmail.com</span></div></a>
  <a href="#contact"><div className="ic">📍</div><div><small>الموقع</small>6 أكتوبر، القاهرة، مصر</div></a></div>
 <form onSubmit=${e=>e.preventDefault()}>
  <label>الاسم<input value=${f.n} onChange=${set('n')} placeholder="اسمك"/></label>
  <label>رقم الهاتف<input dir="ltr" value=${f.p} onChange=${set('p')} placeholder="01xxxxxxxxx"/></label>
  <label>نوع المشروع<select value=${f.t} onChange=${set('t')}>${['موقع ويب','نظام إدارة عيادة','نظام مبيعات POS','إدارة مخزون','نظام مخصص','تصميم واجهات UI/UX'].map(o=>html`<option key=${o}>${o}</option>`)}</select></label>
  <label>احكيلنا عن فكرتك<textarea rows="4" value=${f.m} onChange=${set('m')} placeholder="اكتب فكرتك هنا..."/></label>
  <div role="radiogroup" aria-label="رقم الواتساب"><span style=${{fontWeight:700,fontSize:15}}>ابعت على أنهي رقم واتساب؟</span><div className="tabs" style=${{margin:'8px 0 0'}}>${NUMS.map(([v,l])=>html`<button key=${v} type="button" role="radio" aria-checked=${f.w===v} className=${'tab'+(f.w===v?' a':'')} onClick=${()=>setF({...f,w:v})}>💬 <span dir="ltr">${l}</span></button>`)}</div></div>
  <button className="btn p" type="button" onClick=${send}>ابعت على واتساب</button>
  ${ok===true&&html`<div className="ok">اتفتحت المحادثة على واتساب، ابعت الرسالة من هناك.</div>`}
  ${ok==='err'&&html`<div style=${{color:'#ff8a8a'}}>اكتب اسمك وفكرتك الأول.</div>`}</form></div></div></section>`}

function Band(){return html`<section style=${{padding:'70px 0'}}><div className="wrap"><div className="band"><h2>Your Ideas. Our Code. <span className="grad">Your Success.</span></h2><p className="sub" style=${{margin:'0 auto 24px'}}>عندك فكرة مشروع؟ خلّيها واقع مع Pixelcode Egypt.</p><a className="btn p" href="#contact">ابدأ دلوقتي</a></div></div></section>`}

function App(){return html`<${React.Fragment}><${Nav}/><${Hero}/><${Stack}/><${Services}/><${Solutions}/><${Process}/><${Why}/><${Faq}/><${Band}/><${Contact}/>
 <footer><div className="wrap"><div className="brand"><${Logo} s=${28}/> Pixel<b>code</b> Egypt</div><div>Build Your Ideas . With Code</div><div style=${{marginTop:8,fontSize:14}}>© 2026 Pixelcode Egypt. جميع الحقوق محفوظة.</div></div></footer>
 <a className="wa" href=${'https://wa.me/'+WA} aria-label="واتساب" target="_blank" rel="noopener">💬</a><//>`}

export default App;
