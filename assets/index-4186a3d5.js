(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();(()=>{const t=document.querySelector("#backdrop"),n={modalOrder:document.querySelector("#modal-order"),openOrderBtn:document.querySelector("#order-open"),closeOrderBtn:document.querySelector("#order-close")},r={modalSend:document.querySelector("#modal-send"),openSendBtn:document.querySelector("#send-open"),closeSendBtn:document.querySelector("#send-close")};n.openOrderBtn.addEventListener("click",e),n.closeOrderBtn.addEventListener("click",e),r.openSendBtn.addEventListener("click",o),r.closeSendBtn.addEventListener("click",o);function d(){document.body.classList.toggle("modal-open"),t.classList.toggle("is-hidden")}function e(){d(),n.modalOrder.classList.toggle("is-hidden")}function o(){d(),r.modalSend.classList.toggle("is-hidden")}})();(()=>{const t={menuField:document.querySelector("#menu"),showMenuBtn:document.querySelector("#menu-show"),hideMenuBtn:document.querySelector("#menu-hide")};t.showMenuBtn.addEventListener("click",n),t.showMenuBtn.addEventListener("click",n);function n(){t.menuField.classList.toggle("show-menu")}})();
