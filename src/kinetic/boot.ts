import { hourTheme } from './hours.ts';

export const boot = `(function(r,t){function f(){requestAnimationFrame(function(){requestAnimationFrame(function(){r.dataset.fonts=''})})}document.fonts.load('1em Recursive').then(f,f);setTimeout(f,3e3);r.dataset.auto=(${hourTheme.toString()})(new Date().getHours());try{t=localStorage.getItem('theme')}catch(e){}t=/^(dawn|midday|dusk|night)$/.test(t)?t:'auto';r.dataset.choice=t;r.dataset.theme=t=='auto'?r.dataset.auto:t})(document.documentElement)`;
