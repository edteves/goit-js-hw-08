!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,v=Math.min,y=function(){return d.Date.now()};function b(e,t,n){var o,i,u,a,f,c,l=0,d=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(O,t),d?S(e):a}function w(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=y();if(w(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?v(n,u-(e-l)):n}(e))}function h(e){return f=void 0,b&&o?S(e):(o=i=void 0,a)}function T(){var e=y(),n=w(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(O,t),S(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=p(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(p(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?a:h(y())},T}function g(t){var r=void 0===t?"undefined":e(n)(t);return!!t&&("object"==r||"function"==r)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=g(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var c=u.test(t);return c||a.test(t)?f(t.slice(2),c?2:8):i.test(t)?NaN:+t}var S=e((function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})}))((function(){var e=document.querySelector('[name="email"]').value,t=document.querySelector('[name="message"]').value,n={email:e,message:t};localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500);function j(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);return document.querySelector('[name="email"]').value=t.email,document.querySelector('[name="message"]').value=t.message,t}return{}}document.querySelector(".feedback-form").addEventListener("input",S),window.addEventListener("load",j),document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault();var t=j();localStorage.removeItem("feedback-form-state"),document.querySelector(".feedback-form").reset(),console.log("Form Data:",t)}))}();
//# sourceMappingURL=03-feedback.8267886a.js.map