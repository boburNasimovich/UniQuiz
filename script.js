/* =========================
   UniQuiz — Fanlar (MVP)
   Format: { q, o:[], a }
   ========================= */

// ---------- THEME ----------
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}
const btnBackFromAbout = document.getElementById("btnBackFromAbout");
if (btnBackFromAbout) {
  btnBackFromAbout.onclick = () => showSubjects();
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return setTheme(saved);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

if (themeToggle) {
  themeToggle.onclick = () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    themeToggle.classList.add("rotate");
    setTheme(current === "dark" ? "light" : "dark");
    setTimeout(() => themeToggle.classList.remove("rotate"), 350);
  };
}

// ---------- SCREENS ----------
const screens = {
  subjects: document.getElementById("screenSubjects"),
  quiz: document.getElementById("screenQuiz"),
  result: document.getElementById("screenResult"),
};
screens.about = document.getElementById("screenAbout");

function showScreen(name) {
  Object.values(screens).forEach(s => s && s.classList.remove("active"));
  screens[name] && screens[name].classList.add("active");
}
const btnAbout = document.getElementById("btnAbout");
if (btnAbout) btnAbout.onclick = () => showScreen("about");

// ---------- ELEMENTS ----------
const subjectGrid = document.getElementById("subjectGrid");
const subjectsTitle = document.getElementById("subjectsTitle");

const quizTitle = document.getElementById("quizTitle");
const quizMeta = document.getElementById("quizMeta");
const qIndexEl = document.getElementById("qIndex");
const barIn = document.getElementById("barIn");
const questionText = document.getElementById("questionText");
const answersEl = document.getElementById("answers");
const btnNext = document.getElementById("btnNext");

const scoreText = document.getElementById("scoreText");
const feedbackText = document.getElementById("feedbackText");
const weakTopics = document.getElementById("weakTopics");

// Buttons
const btnHome = document.getElementById("btnHome");
const btnQuit = document.getElementById("btnQuit");
const btnRetry = document.getElementById("btnRetry");
const btnSubjects = document.getElementById("btnSubjects");

if (btnHome) btnHome.onclick = () => showSubjects();
if (btnQuit) btnQuit.onclick = () => showSubjects();
if (btnSubjects) btnSubjects.onclick = () => showSubjects();

// ---------- DATA (4 subjects from windows) ----------
function getSubjects() {
  return [
    { id: "fizika", name: "Fizika", questions: window.fizikaQuestions || [] },
    { id: "ingliz", name: "Ingliz tili", questions: window.engQuestions || window.ingliztiliQuestions || [] },
    { id: "tarix", name: "Tarix", questions: window.tarixQuestions || [] },
    { id: "dastur", name: "Dasturlash", questions: window.cppQuestions || window.dasturlashQuestions || [] },
  ];
}

// ---------- QUIZ STATE ----------
let quiz = {
  title: "",
  questions: [],
  index: 0,
  chosen: null,
  correct: 0,
};

// ---------- SUBJECTS UI ----------
function tile(title, desc) {
  const el = document.createElement("div");
  el.className = "tile";
  el.innerHTML = `<h3>${title}</h3><p>${desc || ""}</p>`;
  return el;
}

function showSubjects() {
  if (!subjectsTitle) return;
  subjectsTitle.textContent = "Fanlar";

  if (!subjectGrid) {
    console.error("subjectGrid topilmadi. HTML’da id='subjectGrid' bormi?");
    return;
  }

  subjectGrid.innerHTML = "";

  const SUBJECTS = getSubjects();

  SUBJECTS.forEach(sub => {
    const count = Array.isArray(sub.questions) ? sub.questions.length : 0;
    const t = tile(sub.name, `${count} ta savol`);

    t.onclick = () => {
      if (!count) return alert("Bu fandan hozircha savol yo‘q!");
      startQuiz(sub.questions, sub.name);
    };

    subjectGrid.appendChild(t);
  });

  showScreen("subjects");
}

// ---------- QUIZ FLOW ----------
function startQuiz(questions, title) {
  quiz.title = title;
const LIMIT = 25;

quiz.questions = shuffle(
  questions.map(normalizeQuestion).filter(Boolean)
).slice(0, LIMIT);

quiz.index = 0;
quiz.chosen = null;
quiz.correct = 0;
quiz.answered = 0;   // NEW


  quiz.index = 0;
  quiz.chosen = null;
  quiz.correct = 0;

  if (quizTitle) quizTitle.textContent = title;
  showScreen("quiz");
  renderQuestion();
}
function shuffle(arr){
  const a = [...arr];
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderQuestion() {
  const total = quiz.questions.length;
  const i = quiz.index;
  const q = quiz.questions[i];

  if (!q) return showResult();

  // meta/progress
  if (quizMeta) quizMeta.textContent = `${total} savol • ~${Math.max(3, Math.round(total * 0.6))} daqiqa`;
  if (qIndexEl) qIndexEl.textContent = `${i + 1}/${total}`;
  if (barIn) barIn.style.width = `${Math.round(((i + 1) / total) * 100)}%`;

  if (questionText) questionText.textContent = q.q;

  // answers
  if (!answersEl) return;
  answersEl.innerHTML = "";
  quiz.chosen = null;
  if (btnNext) btnNext.disabled = true;

  // IMPORTANT: sende variantlar `o` ichida
  (q.o || []).forEach((opt, idx) => {
    const b = document.createElement("button");
    b.className = "answer";
    b.type = "button";
    b.textContent = opt;

    b.onclick = () => {
      [...answersEl.children].forEach(el => el.classList.remove("selected"));
      b.classList.add("selected");
      quiz.chosen = idx;
      if (btnNext) btnNext.disabled = false;
    };

    answersEl.appendChild(b);
  });
}

function lockAnswers(correctIndex) {
  [...answersEl.children].forEach((el, idx) => {
    el.disabled = true;
    if (idx === correctIndex) el.classList.add("correct");
  });
}

function submitAndNext() {
  const q = quiz.questions[quiz.index];
  const correctIndex = q.a;

  lockAnswers(correctIndex);

  if (quiz.chosen === correctIndex) {
    quiz.correct++;
  } else {
    if (answersEl.children[quiz.chosen]) answersEl.children[quiz.chosen].classList.add("wrong");
  }
quiz.answered++;

  if (btnNext) btnNext.disabled = true;

  setTimeout(() => {
    quiz.index++;
    if (quiz.index >= quiz.questions.length) showResult();
    else renderQuestion();
  }, 450);
}

if (btnNext) btnNext.onclick = () => submitAndNext();

// ---------- RESULT ----------
function showResult() {
  const total = quiz.questions.length;
  const answered = quiz.answered ?? quiz.index; // backup
  const correct = quiz.correct;
  const wrong = answered - correct;

  scoreText.textContent = `Ishlangan: ${answered}/${total}`;
  feedbackText.textContent = `✅ To‘g‘ri: ${correct}   ❌ Xato: ${wrong}`;

  weakTopics.textContent = ""; // hozircha

  showScreen("result");
}
const btnFinish = document.getElementById("btnFinish");
if (btnFinish) btnFinish.onclick = () => showResult();


// retry
if (btnRetry) btnRetry.onclick = () => startQuiz(quiz.questions, quiz.title);

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  showSubjects();
});
function normalizeQuestion(item){
  // Fizika / standart: {q, o, a}
  if (item && item.q && Array.isArray(item.o) && typeof item.a === "number") {
    return { q: item.q, o: item.o, a: item.a };
  }

  // Tarix: {q, a:[...], c:number}
  if (item && item.q && Array.isArray(item.a) && typeof item.c === "number") {
    return { q: item.q, o: item.a, a: item.c };
  }

  // C++: {q, correct:string, wrong:[...]}  => options 4ta bo‘lsin
  if (item && item.q && typeof item.correct === "string" && Array.isArray(item.wrong)) {
    const opts = [item.correct, ...item.wrong].slice(0, 4); // 4 taga kesamiz
    const correctIndex = 0;

    // Aralashtiramiz, to‘g‘ri indexni topamiz
    const shuffled = opts
      .map(v => ({ v, r: Math.random() }))
      .sort((x,y) => x.r - y.r)
      .map(x => x.v);

    return { q: item.q, o: shuffled, a: shuffled.indexOf(item.correct) };
  }

  // Noma'lum format
  console.warn("Noma'lum savol formati:", item);
  return null;
}
document.addEventListener("DOMContentLoaded", () => {
  // ========= SETTINGS =========
  const ADMIN_KEY = "bobur-admin"; // xohlasang o'zgartir
  const STORAGE_KEY = "uniquiz_feedback";

  // Telegram (2 xil yo'l):
  // 1) OSON (lekin token oshkor bo'ladi): DIRECT = true qilib token/chatId yozasan
  // 2) TAVSIYA (xavfsiz): DIRECT = false va proxy endpoint /api/feedback ishlatasan
  const TELEGRAM = {
    enabled: true,
    DIRECT: true,
    botToken: "8501739187:AAESeEOvuYjMFUoddW06V3Kb-9jDk4I7u-0",
    chatId: "6411305064",
    proxyUrl: "/api/feedback" // DIRECT=false bo'lsa ishlaydi
  };

  // ========= ELEMENTS =========
  const btnSend = document.getElementById("btnSendFeedback");
  const inputName = document.getElementById("feedbackName");
  const inputText = document.getElementById("feedbackInput");
  const msg = document.getElementById("feedbackMsg");
  const countEl = document.getElementById("feedbackCount");
  const lastEl = document.getElementById("feedbackLast");
  const btnClear = document.getElementById("btnClearFeedback");

  const starsWrap = document.getElementById("ratingStars");
  const ratingLabel = document.getElementById("ratingLabel");
  let rating = 0;

  function loadAll(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  }
  function saveAll(arr){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }

  function formatTime(iso){
    try{
      const d = new Date(iso);
      return d.toLocaleString();
    } catch { return iso; }
  }

  function updateStats(){
    const all = loadAll();
    if (countEl) countEl.textContent = `💬 Jami fikrlar: ${all.length}`;

    if (lastEl){
      if(all.length === 0) lastEl.textContent = `🕒 Oxirgi fikr: —`;
      else lastEl.textContent = `🕒 Oxirgi fikr: ${formatTime(all[all.length - 1].time)}`;
    }
  }

  function setRating(v){
    rating = v;
    if (ratingLabel) ratingLabel.textContent = `${rating}/5`;
    if (!starsWrap) return;
    [...starsWrap.querySelectorAll(".star")].forEach(btn=>{
      const bv = Number(btn.dataset.v);
      btn.classList.toggle("active", bv <= rating);
    });
  }

  if (starsWrap){
    starsWrap.addEventListener("click", (e) => {
      const b = e.target.closest(".star");
      if(!b) return;
      setRating(Number(b.dataset.v));
    });
  }
  setRating(0);
  updateStats();

  async function sendToTelegram(payload){
    if(!TELEGRAM.enabled) return { ok:false, skipped:true };

    const text =
`🧪 UniQuiz Feedback
⭐ Rating: ${payload.rating}/5
👤 Name: ${payload.name || "-"}
🕒 Time: ${payload.time}
💬 Message: ${payload.text}`;

    try{
      if(TELEGRAM.DIRECT){
        // ⚠️ Token client-side’da ko‘rinadi (beta uchun ok, prod uchun yo‘q)
        const url = `https://api.telegram.org/bot${TELEGRAM.botToken}/sendMessage`;
        const res = await fetch(url, {
          method:"POST",
          headers:{ "Content-Type":"application/json" },
          body: JSON.stringify({ chat_id: TELEGRAM.chatId, text })
        });
        return { ok: res.ok };
      } else {
        // ✅ Tavsiya: o‘zingning server/worker endpoint’iga yuborish
        const res = await fetch(TELEGRAM.proxyUrl, {
          method:"POST",
          headers:{ "Content-Type":"application/json" },
          body: JSON.stringify({ text })
        });
        return { ok: res.ok };
      }
    } catch (e){
      return { ok:false, error: String(e) };
    }
  }

  if (btnSend){
    btnSend.addEventListener("click", async () => {
      const text = (inputText?.value || "").trim();
      const name = (inputName?.value || "").trim();

      if(!text){
        if(msg) msg.textContent = "Sayt haqida fikringizni kiriting !";
        return;
      }

      const payload = {
        name,
        text,
        rating,
        time: new Date().toISOString()
      };

      const all = loadAll();
      all.push(payload);
      saveAll(all);

      if(inputText) inputText.value = "";
      if(msg) msg.textContent = "Rahmat! Fikringiz yuborildi 🙌";
      updateStats();

      // Telegramga yuborish (ixtiyoriy)
      const tg = await sendToTelegram(payload);
      if(TELEGRAM.enabled){
        if(tg.ok) {
          if(msg) msg.textContent = "Rahmat! Fikr saqlandi va Telegramga yuborildi ✅";
        } else {
          if(msg) msg.textContent = "Fikr saqlandi ✅ (Telegramga yuborilmadi)";
          console.warn("Telegram error:", tg);
        }
      }

      // rating reset
      setRating(0);
      if(inputName) inputName.value = "";
    });
  }

  if (btnClear){
    btnClear.addEventListener("click", () => {
      const key = prompt("Admin kalitni kiriting:");
      if(key !== ADMIN_KEY){
        alert("Noto‘g‘ri admin kalit ❌");
        return;
      }
      if(!confirm("Hamma fikrlarni o‘chirasizmi?")) return;
      localStorage.removeItem(STORAGE_KEY);
      if(msg) msg.textContent = "Fikrlar tozalandi ✅";
      updateStats();
    });
  }
});


