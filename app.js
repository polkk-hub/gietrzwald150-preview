const S=[
["2027-05-01","Gietrzwałd","Sanktuarium Matki Bożej Gietrzwałdzkiej","Sanctuary of Our Lady of Gietrzwałd",53.745,20.235,"church","Miejsce objawień z 1877 r. (27 czerwca – 16 września), zatwierdzonych przez biskupa warmińskiego w 1977 r. Koncert inauguracyjny.","Site of the 1877 apparitions (27 June – 16 Sept), approved by the Bishop of Warmia in 1977. Opening concert."],
["2027-05-15","Częstochowa","Jasna Góra","Jasna Góra Monastery",50.812,19.097,"church","Paulińskie sanktuarium z ikoną Czarnej Madonny, duchowa stolica Polski.","Pauline shrine of the Black Madonna, Poland's spiritual capital."],
["2027-05-22","Kraków","Katedra na Wawelu","Wawel Cathedral",50.054,19.935,"church","Miejsce koronacji królów Polski, z dzwonem Zygmunta.","Coronation church of Polish kings, home of the Sigismund Bell."],
["2027-05-29","Warszawa","Filharmonia Narodowa","Warsaw Philharmonic",52.232,21.009,"hall","Siedziba orkiestry od 1901 r., gospodarz Konkursu Chopinowskiego.","Home of the orchestra since 1901, host of the Chopin Competition."],
["2027-06-12","Wiedeń","Musikverein","Musikverein",48.200,16.372,"hall","Złota Sala (1870) — jedna z najlepiej brzmiących sal świata.","The Golden Hall (1870) — one of the best-sounding halls in the world."],
["2027-06-13","Wiedeń","Katedra św. Szczepana","St. Stephen's Cathedral",48.208,16.373,"church","Gotycka katedra, symbol Wiednia.","Gothic cathedral, Vienna's landmark."],
["2027-06-26","Hamburg","Elbphilharmonie","Elbphilharmonie",53.541,9.984,"hall","Sala otwarta w 2017 r., akustyka winnicowa projektu Yasuhisy Toyoty.","Opened in 2017, vineyard acoustics by Yasuhisa Toyota."],
["2027-07-10","Londyn","Royal Albert Hall","Royal Albert Hall",51.501,-0.177,"hall","Otwarta w 1871 r., dom festiwalu BBC Proms.","Opened 1871, home of the BBC Proms."],
["2027-07-11","Londyn","Katedra Westminsterska","Westminster Cathedral",51.496,-0.139,"church","Największy kościół katolicki w Anglii i Walii, w stylu neobizantyjskim.","Largest Catholic church in England and Wales, neo-Byzantine."],
["2027-07-24","Paryż","Philharmonie de Paris","Philharmonie de Paris",48.892,2.394,"hall","Sala Pierre Boulez projektu Jeana Nouvela (2015).","Pierre Boulez hall designed by Jean Nouvel (2015)."],
["2027-07-25","Paryż","Notre-Dame de Paris","Notre-Dame de Paris",48.853,2.350,"church","Gotycka katedra, ponownie otwarta w grudniu 2024 r. po pożarze.","Gothic cathedral, reopened in December 2024 after the fire."],
["2027-08-07","Lourdes","Sanktuarium w Lourdes","Sanctuary of Lourdes",43.098,-0.058,"church","Miejsce objawień z 1858 r. — duchowa siostra Gietrzwałdu.","Site of the 1858 apparitions — Gietrzwałd's spiritual sister."],
["2027-08-15","Fatima","Sanktuarium w Fatimie","Sanctuary of Fátima",39.632,-8.672,"church","Objawienia z 1917 r.; koncert w uroczystość Wniebowzięcia.","1917 apparitions; concert on the Assumption."],
["2027-09-04","Rzym / Watykan","Bazylika św. Piotra","St. Peter's Basilica",41.902,12.453,"church","Serce Kościoła katolickiego, arcydzieło Michała Anioła i Berniniego.","Heart of the Catholic Church, masterpiece of Michelangelo and Bernini."],
["2027-09-25","Nowy Jork","Carnegie Hall","Carnegie Hall",40.765,-73.980,"hall","Legendarna sala otwarta w 1891 r. z udziałem Czajkowskiego.","Legendary hall opened in 1891 with Tchaikovsky conducting."],
["2027-09-26","Nowy Jork","Katedra św. Patryka","St. Patrick's Cathedral",40.758,-73.976,"church","Neogotycka katedra przy Piątej Alei (1879).","Neo-Gothic cathedral on Fifth Avenue (1879)."],
["2027-10-16","Tokio","Suntory Hall","Suntory Hall",35.668,139.741,"hall","Pierwsza w Tokio sala winnicowa (1986).","Tokyo's first vineyard-style hall (1986)."],
["2027-10-30","Sydney","Sydney Opera House","Sydney Opera House",-33.857,151.215,"hall","Arcydzieło Jørna Utzona, obiekt UNESCO.","Jørn Utzon's masterpiece, UNESCO World Heritage."],
["2027-09-08","Gietrzwałd","Sanktuarium — finał","Sanctuary — finale",53.745,20.235,"church","Koncert finałowy w Gietrzwałdzie.","Final concert in Gietrzwałd."]];
// finale should be last chronologically: put after Sydney
S[S.length-1][0]="2027-11-21";S[S.length-1][7]="Koncert finałowy w uroczystość Chrystusa Króla — powrót do miejsca objawień.";S[S.length-1][8]="Finale on the Solemnity of Christ the King — return to the apparition site.";
let L=localStorage.getItem('lang')||'pl';
const ico={church:'<path d="M28 4v10M23 9h10M16 52V26l12-10 12 10v26M8 52h40M24 52V40a4 4 0 0 1 8 0v12"/>',hall:'<path d="M6 52h44M10 52V24h36v28M8 24l20-14 20 14M16 30v16M24 30v16M32 30v16M40 30v16"/>'};
function fmt(d){return new Date(d).toLocaleDateString(L=='pl'?'pl-PL':'en-GB',{day:'numeric',month:'long',year:'numeric'})}
let m;
function render(){
document.documentElement.lang=L;document.getElementById('lang').textContent=L=='pl'?'EN':'PL';
document.querySelectorAll('[data-pl]').forEach(e=>e.textContent=e.dataset[L]);
const prop=L=='pl'?'propozycja':'proposal';
document.getElementById('stops').innerHTML=S.map((s,i)=>`<li tabindex="0" data-i="${i}"><span class="d">${fmt(s[0])}</span><span><strong>${s[1]}</strong> — ${L=='pl'?s[2]:s[3]}<small>${L=='pl'?s[7]:s[8]}</small></span><span class="tag">${prop}</span></li>`).join('');
const seen=new Set();document.getElementById('cards').innerHTML=S.filter(s=>{const k=s[2];if(seen.has(k)||s[2].includes('finał'))return false;seen.add(k);return true}).map(s=>`<article class="card"><svg viewBox="0 0 56 56" aria-hidden="true">${ico[s[6]]}</svg><div class="c">${s[1]} · ${s[6]=='hall'?(L=='pl'?'sala koncertowa':'concert hall'):(L=='pl'?'świątynia':'church')}</div><h3>${L=='pl'?s[2]:s[3]}</h3><p>${L=='pl'?s[7]:s[8]}</p></article>`).join('');
document.getElementById('c').innerHTML=[...new Set(S.map(s=>s[1]))].map(c=>`<option>${c}</option>`).join('');
document.querySelectorAll('#stops li').forEach(li=>{const go=()=>{const s=S[li.dataset.i];m&&m.flyTo([s[4],s[5]],6);document.getElementById('map').scrollIntoView({behavior:'smooth'})};li.onclick=go;li.onkeydown=e=>{if(e.key=='Enter')go()}});
}
document.getElementById('lang').onclick=()=>{L=L=='pl'?'en':'pl';localStorage.setItem('lang',L);render();drawMarkers()};
let layer;function drawMarkers(){if(!window.L)return;if(layer)layer.remove();layer=window.L.layerGroup().addTo(m);
S.forEach(s=>window.L.circleMarker([s[4],s[5]],{radius:7,color:'#e8d08a',fillColor:'#c9a44c',fillOpacity:.9,weight:1}).bindPopup(`<b>${s[1]}</b><br>${L=='pl'?s[2]:s[3]}<br>${fmt(s[0])} (${L=='pl'?'propozycja':'proposal'})`).addTo(layer));
window.L.polyline(S.map(s=>[s[4],s[5]]),{color:'#c9a44c',weight:1.5,dashArray:'4 6',opacity:.8}).addTo(layer);}
render();
if(window.L){m=window.L.map('map',{scrollWheelZoom:false,worldCopyJump:true}).setView([35,20],2);
window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{attribution:'&copy; OpenStreetMap contributors &copy; CARTO',maxZoom:18}).addTo(m);drawMarkers();}
// rays
const g=document.querySelector('.rays g');for(let a=0;a<360;a+=6){const r=a*Math.PI/180;const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1',400);l.setAttribute('y1',260);l.setAttribute('x2',400+700*Math.cos(r));l.setAttribute('y2',260+700*Math.sin(r));g.appendChild(l)}
document.getElementById('f').onsubmit=e=>{e.preventDefault();const em=document.getElementById('e'),z=document.getElementById('z'),er=document.getElementById('err');
if(!em.checkValidity()||!em.value){er.textContent=L=='pl'?'Podaj poprawny adres e-mail.':'Please enter a valid email.';em.focus();return}
if(!z.checked){er.textContent=L=='pl'?'Zaznacz zgodę.':'Please tick the consent box.';z.focus();return}
e.target.style.display='none';const t=document.getElementById('thanks');t.style.display='block';t.focus()};
