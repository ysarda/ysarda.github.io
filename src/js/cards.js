/*
 * Card background match.
 *
 * Cards are opaque so they sit in front of the particles, but they should look
 * untinted. The page background is a top-to-bottom gradient, so each card gets
 * a --t custom property (its vertical position as a fraction of the page) and
 * fills itself with the gradient colour at that point (see card-surface).
 */
document.addEventListener("DOMContentLoaded", function () {
  var cards = Array.prototype.slice.call(
    document.querySelectorAll(".user-projects, .container")
  );
  if (!cards.length) { return; }

  function apply() {
    var height = Math.max(1, document.body.getBoundingClientRect().height);
    cards.forEach(function (card) {
      var r = card.getBoundingClientRect();
      var mid = r.top + window.scrollY + r.height / 2;
      var t = Math.max(0, Math.min(1, mid / height));
      card.style.setProperty("--t", t.toFixed(3));
    });
  }

  var timer;
  function schedule() {
    window.clearTimeout(timer);
    timer = window.setTimeout(apply, 100);
  }

  window.addEventListener("resize", schedule);
  window.addEventListener("load", apply);
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(apply); }
  if (window.ResizeObserver) { new ResizeObserver(schedule).observe(document.body); }
  apply();
});
