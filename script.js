// إعدادات التواصل: عدّليها هنا فقط
const PHONE = "212617598717";           // رقم واتساب بدون + أو مسافات
const INSTAGRAM = "titritcake";

const D = [
 {
  "n": "كيكة برشلونة",
  "c": "أعياد ميلاد",
  "s": "images/cake-01.jpg"
 },
 {
  "n": "التاج الوردي",
  "c": "أعياد ميلاد",
  "s": "images/cake-02.jpg"
 },
 {
  "n": "باتمان",
  "c": "أعياد ميلاد",
  "s": "images/cake-03.jpg"
 },
 {
  "n": "سبايدرمان",
  "c": "أعياد ميلاد",
  "s": "images/cake-04.jpg"
 },
 {
  "n": "التاج الذهبي",
  "c": "أعياد ميلاد",
  "s": "images/cake-05.jpg"
 },
 {
  "n": "طبقتان بالأخضر",
  "c": "مناسبات",
  "s": "images/cake-06.jpg"
 },
 {
  "n": "كيكتا العمرة",
  "c": "العمرة",
  "s": "images/cake-07.jpg"
 },
 {
  "n": "نزهة على الشاطئ",
  "c": "مناسبات",
  "s": "images/cake-08.jpg"
 },
 {
  "n": "عمرة مقبولة",
  "c": "العمرة",
  "s": "images/cake-09.jpg"
 },
 {
  "n": "قلب لماما",
  "c": "أعياد ميلاد",
  "s": "images/cake-10.jpg"
 }
];

const cats = ["الكل"].concat(D.map(x => x.c).filter((v, i, a) => a.indexOf(v) === i));
const fl = document.getElementById("filters");
const g = document.getElementById("grid");
const sel = document.getElementById("t");

function show(c) {
  g.innerHTML = D.filter(x => c === "الكل" || x.c === c).map(x =>
    '<article class="card"><img loading="lazy" src="' + x.s + '" alt="' + x.n + '"><h3>' + x.n + '</h3><p>' + x.c + '</p></article>'
  ).join("");
  [].forEach.call(fl.children, b => b.setAttribute("aria-pressed", b.textContent === c));
}
cats.forEach(c => {
  const b = document.createElement("button");
  b.type = "button"; b.textContent = c; b.onclick = () => show(c);
  fl.appendChild(b);
});
D.forEach(x => { const o = document.createElement("option"); o.textContent = x.n; sel.appendChild(o); });
show("الكل");

function orderText() {
  return "مرحباً titrit cake، أريد تصميم: " + sel.value +
    "\nتاريخ المناسبة: " + (document.getElementById("d").value || "غير محدد") +
    "\n" + document.getElementById("n").value;
}
document.getElementById("f").onsubmit = e => {
  e.preventDefault();
  window.open("https://wa.me/" + PHONE + "?text=" + encodeURIComponent(orderText()), "_blank", "noopener");
};
document.getElementById("ig").onclick = () => {
  try { navigator.clipboard.writeText(orderText()); } catch (x) {}
  window.open("https://ig.me/m/" + INSTAGRAM, "_blank", "noopener");
};
