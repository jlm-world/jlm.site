// ============================================
// TEXT.JS - ONLY FILE YOU EVER EDIT FOR WORDS!
// TO EDIT: change words inside " "
// TO ADD: copy one { ... } block, paste below it, change words
// TO DELETE: delete one { ... } block
// NEVER touch index.html / style.css / script.js for text!
// ============================================

const TEXT = {
  // ---------- HERO ----------
  name: "John Lawrence Missal",
  bio: "Cloud & DevOps Enthusiast who loves clean systems, solving problems, and learning every day.",
  githubBtn: "Github Profile",
  resumeBtn: "Resume",
  githubLink: "https://github.com/jlm-world",
  resumeLink: "../meow/resume.pdf",

  // ---------- SECTION LABELS ----------
  skillsLabel: "Skills",
  expLabel: "Experience",
  projLabel: "Projects",
  contactLabel: "Contact & Socials",
  connectText: "Let's Connect !",
  connectGif: "https://media.tenor.com/PWbM1G5ybiQAAAAM/hello-kitty.gif",

  // ---------- SKILLS ----------
  // TO ADD NEW CATEGORY: copy one { cat:..., chips: [...] }, paste below, change words
  // TO ADD NEW CHIP: add "Your Skill", inside chips: [...]
  skillCats: [
    { cat: "Programming", chips: ["Python (Boto3)", "Bash"] },
    { cat: "Backend / Frameworks", chips: ["Flask", "PostgreSQL"] },
    { cat: "Frontend", chips: ["HTML", "CSS", "JavaScript"] },
    { cat: "DevOps", chips: ["AWS (EC2, S3, IAM, VPC)", "Docker Compose", "Kubernetes (Minikube)", "GitHub Actions", "CI/CD", "Nginx", "UFW"] },
    { cat: "Monitoring & Tools", chips: ["Prometheus", "Grafana", "Node Exporter", "Uptime Kuma", "Git", "Linux (Ubuntu)", "Cron", "Systemd"] }
    // EXAMPLE - TO ADD NEW CATEGORY, PASTE THIS LINE BELOW:
    // { cat: "New Category", chips: ["New Skill 1", "New Skill 2"] },
  ],

  // ---------- EXPERIENCE ----------
  // TO ADD NEW EXPERIENCE: copy one { ... } block, paste below, change words
  // TO ADD NEW BULLET: add "Your point", inside details: [...]
  experience: [
    { emoji: "✨", title: "Observability", date: "Nov 2023 - Jan 2025", details: ["Built backend APIs and services."] },
    { emoji: "🐾", title: "CI/CD", date: "Feb 2023 - May 2023", details: ["Built Python tools and automations."] },
    { emoji: "🎨", title: "inventoryapi", date: "Apr 2020 - Dec 2022", details: ["Worked on web applications and features."] },
    { emoji: "🌱", title: "SysAdminBox", date: "Aug 2018 - Jan 2019", details: ["Internship - learned software development."] }
    // EXAMPLE - TO ADD NEW EXPERIENCE, PASTE THIS LINE BELOW:
    // { emoji: "🚀", title: "My New Job", date: "2026", details: ["What I did", "What I built"] },
  ],

  // ---------- PROJECTS ----------
  // TO ADD NEW PROJECT: same as experience - copy { ... }, paste, change words
  projects: [
    { emoji: "", title: "", role: "— My Role", date: "2025", details: ["What it does", "What I built"] }
    // EXAMPLE:
    // { emoji: "🐱", title: "My New Project", role: "— My Role", date: "2026", details: ["What it does", "What I built"] },
  ],

  // ---------- SOCIALS / CONTACTS ----------
  // TO ADD NEW SOCIAL: copy one { ... } line, paste below, change emoji + text + link
  socials: [
    { emoji: "🔗", text: "linkedin", link: "https://www.linkedin.com/in/john-lawrence-missal-3b5a8b20a/" },
    { emoji: "✉", text: "email me", link: "mailto:johnlawrencemissal@gmail.com" },
    { emoji: "💬", text: "text me", link: "https://wa.me/917542066419" },
    { emoji: "📸", text: "instagram", link: "https://www.instagram.com/john.lawrence.missal/" },
    { emoji: "💭", text: "my blogs", link: "https://jlm.mataroa.blog/" }
    // EXAMPLE - TO ADD NEW SOCIAL, PASTE THIS LINE BELOW:
    // { emoji: "🐦", text: "twitter", link: "https://x.com/yourname" },
  ]
};