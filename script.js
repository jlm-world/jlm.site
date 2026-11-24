// Fills site from TEXT in text.js - you never edit this file for text!
function toggle(el) {
  const details = el.parentElement.querySelector('.details');
  const arrow = el.querySelector('.arrow');
  details.classList.toggle('open');
  arrow.textContent = details.classList.contains('open') ? '▾' : '▸';
}

// HERO
document.getElementById('site-name').textContent = TEXT.name;
document.getElementById('site-bio').textContent = TEXT.bio;
const gBtn = document.getElementById('github-btn');
gBtn.textContent = TEXT.githubBtn;
gBtn.href = TEXT.githubLink;
const rBtn = document.getElementById('resume-btn');
rBtn.textContent = TEXT.resumeBtn;
rBtn.href = TEXT.resumeLink;

// LABELS + CONNECT
document.getElementById('skills-label').textContent = TEXT.skillsLabel;
document.getElementById('exp-label').textContent = TEXT.expLabel;
document.getElementById('proj-label').textContent = TEXT.projLabel;
document.getElementById('contact-label').textContent = TEXT.contactLabel;
document.getElementById('connect-text').textContent = TEXT.connectText;
document.getElementById('connect-gif').src = TEXT.connectGif;

// SKILLS - auto-adds when you add a category/chip in text.js!
document.getElementById('skills-box').innerHTML = TEXT.skillCats.map(c => `
  <div class="cat">${c.cat}</div>
  ${c.chips.map(chip => `<span class="chip">${chip}</span>`).join('')}
`).join('');

// EXPERIENCE + PROJECTS - auto-adds when you add a { ... } in text.js!
function makeItem(item) {
  return `
  <div class="item">
    <div class="row" onclick="toggle(this)"><span class="emoji">${item.emoji}</span>
      <div>
        <div class="title">${item.title} ${item.role ? `<span>${item.role}</span>` : ''}</div>
        <div class="date">${item.date}</div>
      </div><span class="arrow">▸</span>
    </div>
    <ul class="details">${item.details.map(d => `<li>${d}</li>`).join('')}</ul>
  </div>`;
}
document.getElementById('exp-box').innerHTML = TEXT.experience.map(makeItem).join('');
document.getElementById('proj-box').innerHTML = TEXT.projects.map(makeItem).join('');

// SOCIALS - auto-adds when you add a { ... } in text.js!
document.getElementById('socials-box').innerHTML = TEXT.socials.map(s => `
  <a class="social" href="${s.link}" target="_blank">${s.emoji} ${s.text}</a>
`).join('');