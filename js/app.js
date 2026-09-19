function $(id){return document.getElementById(id)}
function login(e){e.preventDefault();const u=$('username').value,p=$('password').value;if(u==='admin'&&p==='password123_')location.href='admin.html';else if(u==='user'&&p==='password123')location.href='user.html';else alert('Kredensial demo tidak sesuai.')}
function logout(){location.href='login.html'}
if($('loginForm'))$('loginForm').addEventListener('submit',login)
function filterRows(input,tableId){const q=input.value.toLowerCase();document.querySelectorAll('#'+tableId+' tbody tr').forEach(r=>r.style.display=r.innerText.toLowerCase().includes(q)?'':'none')}
function detectPlatform(){const url=$('targetUrl').value.trim();if(!url)return alert('Masukkan URL target.');let p='Platform tidak dikenali',icon='?',host=url.toLowerCase();if(host.includes('instagram.com')){p='Instagram';icon='IG'}else if(host.includes('facebook.com')||host.includes('fb.com')){p='Facebook';icon='FB'}else if(host.includes('tiktok.com')){p='TikTok';icon='TT'}else if(host.includes('twitter.com')||host.includes('x.com')){p='X';icon='X'}else if(host.includes('youtube.com')||host.includes('youtu.be')){p='YouTube';icon='YT'}$('platformName').textContent=p;$('platformIcon').textContent=icon;$('targetPreview').textContent=url;$('platformResult').classList.remove('hidden');$('summaryPlatform').textContent=p}
function calculatePrice(){const n=Number($('package').value),price=n*1000;const f='Rp'+price.toLocaleString('id-ID');$('price').textContent=f;$('summaryPackage').textContent=n.toLocaleString('id-ID');$('summaryPrice').textContent=f}
function previewEvidence(e){const box=$('evidencePreview');box.innerHTML='';[...e.target.files].forEach(file=>{const div=document.createElement('div');div.className='evidence-thumb';const img=document.createElement('img');img.src=URL.createObjectURL(file);img.style='width:100%;height:70px;object-fit:cover;border-radius:6px';div.append(img);const s=document.createElement('small');s.textContent=file.name;div.append(s);box.append(div)})}
function submitReport(){alert('Demo: report berhasil dibuat. Pada implementasi backend, tahap berikutnya adalah payment order dan verifikasi.')}
function searchReport(){const q=$('reportCodeSearch').value.trim();const box=$('searchResult');box.classList.remove('hidden');box.innerHTML=q?'<b>'+q+'</b><br>Status: Dalam Review · Platform: Instagram':'Masukkan kode report.'}
function showDetail(code){alert('Demo detail '+code)}
function openCase(code){$('caseTitle').textContent=code;$('caseModal').classList.remove('hidden')}
function closeCase(){$('caseModal').classList.add('hidden')}
document.querySelectorAll('.sidebar nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelectorAll('.page-section').forEach(s=>s.classList.add('hidden'));const id=a.getAttribute('href').slice(1);const sec=$(id);if(sec)sec.classList.remove('hidden');const title= a.textContent;const h=document.querySelector('.topbar h1');if(h)h.textContent=title}))
if(location.hash){const id=location.hash.slice(1),sec=$(id);if(sec){document.querySelectorAll('.page-section').forEach(s=>s.classList.add('hidden'));sec.classList.remove('hidden')}}
calculatePrice()
