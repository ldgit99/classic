/* 강의 노트 공통 스크립트 — 외부 의존 없음 */
(function () {
  "use strict";

  /* --- 템플릿 복사 버튼 ------------------------------------------------- */
  document.querySelectorAll(".copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var box = btn.closest(".tpl");
      var pre = box && box.querySelector("pre");
      if (!pre) return;
      var text = pre.innerText;

      var done = function (label) {
        var old = btn.textContent;
        btn.textContent = label;
        btn.dataset.done = "1";
        setTimeout(function () {
          btn.textContent = old;
          delete btn.dataset.done;
        }, 1800);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(
          function () { done("복사됨"); },
          function () { selectFallback(pre); done("직접 복사"); }
        );
      } else {
        selectFallback(pre);
        done("직접 복사");
      }
    });
  });

  function selectFallback(pre) {
    var range = document.createRange();
    range.selectNodeContents(pre);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  /* --- 좌측 사슬 : 현재 읽는 질문 표시 ---------------------------------- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".chain a[href^='#']"));
  if (!links.length || !("IntersectionObserver" in window)) return;

  var byId = {};
  var sections = [];
  links.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    var el = document.getElementById(id);
    if (el) { byId[id] = a; sections.push(el); }
  });

  var visible = new Set();

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) visible.add(e.target.id);
      else visible.delete(e.target.id);
    });

    var current = null;
    for (var i = 0; i < sections.length; i++) {
      if (visible.has(sections[i].id)) { current = sections[i].id; break; }
    }
    if (!current) return;

    links.forEach(function (a) { a.classList.remove("is-active"); });
    if (byId[current]) byId[current].classList.add("is-active");
  }, { rootMargin: "-88px 0px -55% 0px", threshold: 0 });

  sections.forEach(function (s) { io.observe(s); });
})();
