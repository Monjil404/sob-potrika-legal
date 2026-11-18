(function(){var d=document.documentElement,k='sp-lang';function set(l){d.setAttribute('lang',l);document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l)});try{localStorage.setItem(k,l)}catch(e){}}
var q=new URLSearchParams(location.search).get('lang'),s=null;try{s=localStorage.getItem(k)}catch(e){}
set(q==='en'||q==='bn'?q:(s||((navigator.language||'').indexOf('bn')===0?'bn':'bn')));
document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.l)})});})();
