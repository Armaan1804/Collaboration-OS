'use strict';

/* ---- Sticky nav shadow ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

/* ---- Dropdown menus ---- */
document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
  const btn = item.querySelector('.nav-btn');
  if (!btn) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.nav-item.has-dropdown.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.nav-btn')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-item.has-dropdown.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.nav-btn')?.setAttribute('aria-expanded', 'false');
  });
});
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.nav-item.has-dropdown.open').forEach(el => {
    el.classList.remove('open');
  });
});

/* ---- Mobile nav ---- */
const mobileToggle = document.querySelector('.nav-mobile-toggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
}

/* ---- Dynamic "How We Do It" Product Mockup Cards ---- */
const hwiMockupData = [
  // 0: Employer of Record (EOR)
  {
    image: 'sakura.png',
    badge: 'EOR EMPLOYEE',
    name: 'Sakura Tanaka',
    status: 'EMPLOYEE OF RECORD',
    location: 'Tokyo, Japan &nbsp;•&nbsp; UTC +9:00',
    title: 'Active Actions',
    actionText: 'View details',
    tasks: [
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/></svg>',
        text: 'Local statutory health & pension enrolled',
        tagText: 'Compliant',
        tagClass: 'overdue',
        tagStyle: 'background:#dcfce7;color:#15803d;'
      },
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        text: 'Bilingual Japanese labor contract signed',
        tagText: 'Complete',
        tagClass: 'soon',
        tagStyle: ''
      }
    ]
  },
  // 1: Global Payroll
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    badge: 'PAYROLL ACTIVE',
    name: 'Marta Weber',
    status: 'PAYROLL RUN · GERMANY',
    location: 'Munich, Germany &nbsp;•&nbsp; EUR (€)',
    title: 'Cycle Breakdown',
    actionText: 'Run payroll',
    tasks: [
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
        text: 'Monthly gross pay: €6,450.00 (Tax withheld: €1,890.00)',
        tagText: 'Processed',
        tagClass: 'overdue',
        tagStyle: 'background:#dcfce7;color:#15803d;'
      },
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
        text: 'Direct SEPA deposit scheduled for 28th',
        tagText: 'In 2 days',
        tagClass: 'soon',
        tagStyle: ''
      }
    ]
  },
  // 2: Contractor of Record (COR)
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    badge: 'COR PROTECTED',
    name: 'Lucas Rossi',
    status: 'INDEMNIFIED CONTRACTOR',
    location: 'São Paulo, Brazil &nbsp;•&nbsp; BRL (R$)',
    title: 'Compliance & Audit',
    actionText: 'Verify risk',
    tasks: [
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        text: '100% Misclassification liability coverage active',
        tagText: 'Shielded',
        tagClass: 'overdue',
        tagStyle: 'background:#fff7ed;color:#ea580c;'
      },
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        text: 'Brazilian tax residency & W-8BEN-E verified',
        tagText: 'Valid',
        tagClass: 'soon',
        tagStyle: 'background:#f1f5f9;color:#334155;'
      }
    ]
  },
  // 3: Contractor Management
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    badge: 'CONTRACTOR',
    name: 'Amara Vance',
    status: 'FREELANCE DESIGNER',
    location: 'London, UK &nbsp;•&nbsp; GBP (£)',
    title: 'Invoices & Milestones',
    actionText: 'Approve all',
    tasks: [
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="12" x2="18" y2="12"/></svg>',
        text: 'Design Sprint Milestone 3 — £3,200.00 pending review',
        tagText: 'Pending',
        tagClass: 'overdue',
        tagStyle: 'background:#fef2f2;color:#b91c1c;'
      },
      {
        icon: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        text: 'Auto-invoice generated with automated IP assignment',
        tagText: 'Protected',
        tagClass: 'soon',
        tagStyle: ''
      }
    ]
  }
];

function updateHwiMockup(index) {
  const card = document.getElementById('hwi-dynamic-card');
  if (!card) return;
  const data = hwiMockupData[index];
  if (!data) return;

  // Fade out
  card.classList.add('card-fade-out');

  setTimeout(() => {
    const taskRowsHtml = data.tasks.map(t => `
      <div class="fc-task-row">
        <span class="fc-task-ico">${t.icon}</span>
        <span class="fc-task-text">${t.text}</span>
        <span class="fc-task-tag ${t.tagClass}" style="${t.tagStyle || ''}">${t.tagText}</span>
        <svg class="fc-row-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="fc-header-strip">
        <img src="${data.image}" alt="${data.name}" class="fc-hero-img" />
        <div class="fc-header-info">
          <span class="fc-badge-pill">${data.badge}</span>
          <span class="fc-dots">···</span>
        </div>
        <div class="fc-name-block">
          <h3 class="fc-name">${data.name}</h3>
          <span class="fc-status-label">${data.status}</span>
          <p class="fc-location">${data.location}</p>
        </div>
      </div>
      <div class="fc-tasks-panel">
        <div class="fc-tasks-header">
          <span class="fc-tasks-title">${data.title}</span>
          <div class="fc-tasks-actions">
            <span class="fc-show-all">${data.actionText}</span>
            <button class="fc-add">+</button>
          </div>
        </div>
        ${taskRowsHtml}
      </div>
    `;

    card.classList.remove('card-fade-out');
    card.classList.add('card-fade-in');
    setTimeout(() => {
      card.classList.remove('card-fade-in');
    }, 400);
  }, 200);
}

/* ---- Accordion ---- */
document.querySelectorAll('.acc-item').forEach(item => {
  const btn = item.querySelector('.acc-header');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    const idx = parseInt(item.getAttribute('data-index') || '0', 10);
    // close all
    document.querySelectorAll('.acc-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.acc-header')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      updateHwiMockup(idx);
    }
  });
});

/* ---- Smooth scroll ---- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    document.body.classList.remove('nav-open');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});



/* ---- Home page FAQ accordion ---- */
document.querySelectorAll('.hfaq-item').forEach(item => {
  const btn = item.querySelector('.hfaq-q');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    // close all siblings
    item.closest('.home-faq-list')?.querySelectorAll('.hfaq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.hfaq-q')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ---- Stat Cards Scroll Entrance & 0 to 100 Counter Animation ---- */
function initStatCounterAnimation() {
  const statCards = document.querySelectorAll('.gp-stat-card');
  const statValues = document.querySelectorAll('.gp-stat-value');

  if (!statCards.length && !statValues.length) return;

  // Prepare initial 0 state for numbers before scroll
  statValues.forEach(el => {
    const origText = el.textContent.trim();
    el.setAttribute('data-orig', origText);
    const match = origText.match(/^([^\d]*)([\d\.]+)([^\d]*)$/);
    if (match) {
      const prefix = match[1];
      const isFloat = match[2].includes('.');
      const suffix = match[3];
      el.textContent = `${prefix}${isFloat ? '0.0' : '0'}${suffix}`;
    }
  });

  const animateNumber = (el) => {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    const origText = el.getAttribute('data-orig') || el.textContent.trim();
    const match = origText.match(/^([^\d]*)([\d\.]+)([^\d]*)$/);
    if (!match) return;

    const prefix = match[1];
    const targetNum = parseFloat(match[2]);
    const suffix = match[3];
    const isFloat = match[2].includes('.');

    const duration = 1800;
    const startTime = performance.now();

    const updateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      const formattedNum = isFloat ? currentNum.toFixed(1) : Math.floor(currentNum);
      el.textContent = `${prefix}${formattedNum}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = origText;
      }
    };

    requestAnimationFrame(updateCount);
  };

  const onIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        observer.unobserve(card);

        // Stagger entrance animation
        card.classList.add('animate-in');

        // Trigger number counter
        const valEl = card.querySelector('.gp-stat-value');
        if (valEl) {
          animateNumber(valEl);
        }
      }
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    statCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 120}ms`;
      observer.observe(card);
    });
  } else {
    statCards.forEach(card => {
      card.classList.add('animate-in');
      const valEl = card.querySelector('.gp-stat-value');
      if (valEl) animateNumber(valEl);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStatCounterAnimation);
} else {
  initStatCounterAnimation();
}

/* ---- Role Tabs Switcher ---- */
const roleData = {
  cto: {
    withoutTitle: 'Without CrossTech Collaboration OS',
    withoutPoints: [
      'Disjointed Jira boards & desynced sprint metrics',
      'Brittle glue-code integrations failing continuously',
      'Zero direct connection between Slack threads and tickets'
    ],
    withTitle: 'With CrossTech Collaboration OS',
    withDesc: 'Unified Fractional LexoRank Kanban directly connected to WebSocket team streams. Zero glue-code overhead, pure SVG Bézier velocity charts, and instant sprint clarity.',
    image: 'images/CIO.png',
    personName: 'Chief Technology Officer',
    tasks: [
      { label: 'Sprint Velocity', detail: '180 pts · Pure SVG dial' },
      { label: 'LexoRank Reorder', detail: '0ms latency real-time sync' },
      { label: 'Active Pod Sprints', detail: '4 teams deploying smoothly' }
    ]
  },
  cpo: {
    withoutTitle: 'Without CrossTech Collaboration OS',
    withoutPoints: [
      'Notion roadmaps disconnected from Jira execution',
      'PRDs lost in noisy Slack channels and DMs',
      '28 daily context switches between specs and boards'
    ],
    withTitle: 'With CrossTech Collaboration OS',
    withDesc: 'Departmental strategic streams linked directly to cross-functional Kanban boards. Real-time WIP limit guardrails and single-click roadmap updates.',
    image: 'images/CIRO.png',
    personName: 'Chief Product Officer',
    tasks: [
      { label: 'Quarterly Milestone', detail: 'Q4 Enterprise Release' },
      { label: 'WIP Limit Flow', detail: 'Optimal throughput (3/5)' },
      { label: 'Department Stream', detail: 'Design & Eng alignment' }
    ]
  },
  cio: {
    withoutTitle: 'Without CrossTech Collaboration OS',
    withoutPoints: [
      'Role changes create invisible permission leaks',
      '$48–$70/user/mo bled across 4 separate invoices',
      'Fragmented audit logs scattered across point solutions'
    ],
    withTitle: 'With CrossTech Collaboration OS',
    withDesc: '5-tier scoped RBAC with automatic cascading inheritance. Cryptographically sealed immutable audit vault, native SAML 2.0 SSO, and SOC-2 Type II readiness.',
    image: 'images/CIO.png',
    personName: 'Chief Information & Security Officer',
    tasks: [
      { label: '5-Tier Scoped RBAC', detail: 'Org → Dept → Team → Member' },
      { label: 'Audit Trail Vault', detail: 'Cryptographically sealed logs' },
      { label: 'SAML 2.0 & SSO', detail: 'Okta & Azure AD verified' }
    ]
  },
  managers: {
    withoutTitle: 'Without CrossTech Collaboration OS',
    withoutPoints: [
      'Constant manual status chasing in Slack DMs',
      'WIP limits routinely violated causing bottlenecks',
      'Duplicated tickets across cross-functional pods'
    ],
    withTitle: 'With CrossTech Collaboration OS',
    withDesc: 'Live pod channels scoped to sprint boards. Automated blocker escalation, strict WIP limit enforcement, and instantaneous asynchronous summaries.',
    image: 'images/Manager.png',
    personName: 'Engineering & Pod Manager',
    tasks: [
      { label: 'Sprint Guardrails', detail: 'WIP limit enforced (4/5)' },
      { label: 'Blocker Escalation', detail: 'Resolved in pod stream' },
      { label: 'Pod Standup', detail: 'Async summary generated' }
    ]
  },
  engineers: {
    withoutTitle: 'Without CrossTech Collaboration OS',
    withoutPoints: [
      'Switching browser tabs 28 times per day',
      'Technical discussions buried in lost Slack threads',
      'Slow, bloated legacy issue trackers that lag on drag'
    ],
    withTitle: 'With CrossTech Collaboration OS',
    withDesc: 'Lightning-fast drag-and-drop Kanban with fractional LexoRank ordering. Markdown discussion threads linked natively to tickets and zero context switching.',
    image: 'images/Employee.png',
    personName: 'Senior Software Engineer',
    tasks: [
      { label: 'Task Discussion', detail: 'Markdown thread linked' },
      { label: 'LexoRank Drag', detail: 'Moved to In Review' },
      { label: 'Focus Time', detail: '4.5 hrs uninterrupted flow' }
    ]
  }
};

function switchRoleTab(roleKey) {
  const panel = document.getElementById('roleDetailsPanel');
  const tabs = document.querySelectorAll('.role-tab');
  if (!panel || !roleData[roleKey]) return;

  tabs.forEach(tab => {
    const active = tab.getAttribute('data-role') === roleKey;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  const data = roleData[roleKey];
  panel.style.opacity = '0';
  panel.style.transform = 'translateY(6px)';

  setTimeout(() => {
    panel.innerHTML = `
      <div class="role-grid-container">
        <div class="role-left-col">
          <div class="role-without-card">
            <h3>${data.withoutTitle}</h3>
            <ul class="role-without-list">
              ${data.withoutPoints.map(pt => `<li><span class="role-green-dot"></span> ${pt}</li>`).join('')}
            </ul>
          </div>
          <div class="role-with-card">
            <h3>${data.withTitle}</h3>
            <p>${data.withDesc}</p>
          </div>
        </div>
        <div class="role-visual-card">
          <div class="role-bg-mockup">
            <div class="role-mockup-header">
              <strong>My Tasks</strong>
            </div>
            ${data.tasks.map(t => `
              <div class="role-mockup-item">
                <strong>${t.label}</strong>
                <span>${t.detail}</span>
              </div>
            `).join('')}
          </div>
          <img src="${data.image}" alt="${data.personName}" class="role-person-img" />
        </div>
      </div>
    `;
    panel.style.opacity = '1';
    panel.style.transform = 'translateY(0)';
  }, 160);
}

