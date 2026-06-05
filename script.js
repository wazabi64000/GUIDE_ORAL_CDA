/* =============================================
   RNCP37873 — CDA — Préparation Examen Final
   JavaScript — Interactivité & Contenu
   Source (contenu officiel résumé) : France Compétences RNCP37873 (#anchor8)
   ============================================= */

(function () {
  'use strict';

  // ─── Data: Dossier Projet / Conception ───
  const dossierData = [
    {
      icon: '🧭',
      title: 'Résumé du projet (pitch)',
      content: `<strong>But :</strong> permettre au jury de comprendre votre application en 30 secondes.<br><br><strong>À inclure :</strong> nom, cible, problème métier, solution, 3 fonctionnalités clés, contraintes (sécurité, RGPD, accessibilité), environnement (dev/prod).<br><br><strong>Preuves :</strong> capture d'écran accueil + schéma très simple (client → API → BDD).`
    },
    {
      icon: '🧾',
      title: 'Cahier des charges & besoins',
      content: `<strong>Contenu :</strong> besoins fonctionnels + non-fonctionnels (sécurité, perf, RGAA, RGPD, logs, disponibilité).<br><br><strong>Méthode :</strong> user stories + critères d'acceptation + MoSCoW (Must/Should/Could/Won't).<br><br><strong>Preuves :</strong> backlog (export) + un exemple de story “prête” avec critères.`
    },
    {
      icon: '🧪',
      title: 'Démarche qualité & procédures',
      content: `<strong>Contenu :</strong> conventions de code, lint/format, Git flow, code review, gestion d'erreurs, logs, traçabilité.<br><br><strong>Preuves :</strong> README, scripts (lint/test), exemple de PR (ou commits) avec message clair.`
    },
    {
      icon: '🎨',
      title: 'UX / UI & maquettes (RGAA)',
      content: `<strong>Contenu :</strong> wireframes → maquettes finales, parcours utilisateur principal, design system (couleurs/typos), responsive.<br><br><strong>Accessibilité :</strong> contrastes, navigation clavier, labels, focus states.<br><br><strong>Preuves :</strong> liens Figma + check RGAA simple + captures mobile/desktop.`
    },
    {
      icon: '🏗️',
      title: 'Architecture en couches',
      content: `<strong>Objectif :</strong> séparation UI / API / métier / données.<br><br><strong>À montrer :</strong> couches (Controller → Service → Repository/DAO), règles de dépendance, DTO, validation, mapping, erreurs.<br><br><strong>Preuves :</strong> diagramme + un exemple de route “complète” de bout en bout.`
    },
    {
      icon: '🧱',
      title: 'Modèle de données relationnel',
      content: `<strong>Contenu :</strong> MCD/MLD, tables, PK/FK, cardinalités, contraintes (UNIQUE, NOT NULL), index, migrations.<br><br><strong>Preuves :</strong> schéma BDD + script de création/migration + 2 requêtes SQL commentées.`
    },
    {
      icon: '🔁',
      title: 'Accès données SQL & NoSQL',
      content: `<strong>Contenu :</strong> requêtes paramétrées, transactions, pagination, filtrage, tri, gestion de concurrence.<br><br><strong>NoSQL :</strong> cas d'usage (cache, document store) si applicable.<br><br><strong>Preuves :</strong> 1 endpoint SQL + 1 exemple d'optimisation (index, explain).`
    },
    {
      icon: '🧩',
      title: 'Interfaces utilisateur (Front)',
      content: `<strong>Contenu :</strong> composants, routing, formulaires, validation, gestion d'état, UX (loading/empty/error states).<br><br><strong>Preuves :</strong> captures + extrait de composant + gestion d'erreurs (toast).`
    },
    {
      icon: '⚙️',
      title: 'Composants métier (Back)',
      content: `<strong>Contenu :</strong> règles métier, cas limites, services, validations serveur, erreurs, idempotence.<br><br><strong>Preuves :</strong> exemple de service métier + tests associés.`
    },
    {
      icon: '🔒',
      title: 'Sécurité (ANSSI) + confidentialité',
      content: `<strong>À couvrir :</strong> auth (JWT/session), autorisation (RBAC), hashage (bcrypt/argon2), rate limiting, CORS, XSS/CSRF, injection SQL, gestion secrets, HTTPS.<br><br><strong>Preuves :</strong> middleware auth + exemple de contrôle d'accès + OWASP Top 10 map rapide.`
    },
    {
      icon: '🧾',
      title: 'RGPD & mentions légales',
      content: `<strong>Contenu :</strong> données collectées, finalité, base légale, durée de conservation, droits (accès/suppression), cookies, politique de confidentialité.<br><br><strong>Preuves :</strong> pages légales + check liste RGPD “minimum viable”.`
    },
    {
      icon: '🧪',
      title: 'Plan de tests (BC03)',
      content: `<strong>Contenu :</strong> tests unitaires, intégration, e2e, tests sécurité (basique), tests accessibilité (basique).<br><br><strong>Preuves :</strong> plan de tests + 3 tests réels + screenshot CI vert.`
    },
    {
      icon: '🚀',
      title: 'Déploiement & DevOps (BC03)',
      content: `<strong>Contenu :</strong> build, variables d'environnement, secrets, pipeline CI/CD, monitoring (logs/health), rollback.<br><br><strong>Preuves :</strong> procédure de déploiement + diagramme + URL prod + endpoint /health.`
    },
    {
      icon: '📚',
      title: 'Documentation & exploitation',
      content: `<strong>Contenu :</strong> README, API doc (OpenAPI), guide install, guide run, guide contribution, jeux de données, scripts.<br><br><strong>Preuves :</strong> un “getting started” reproductible en 5 minutes.`
    },
    {
      icon: '🧠',
      title: 'Veille & résolution de problème',
      content: `<strong>Contenu :</strong> comment vous cherchez (docs, RFC, issues), comment vous tracez (notes), comment vous apprenez.<br><br><strong>Preuves :</strong> 2 liens de veille + 1 incident résolu (post-mortem court).`
    }
  ];

  // ─── Data: Presentation Slides (12) ───
  const slidesData = [
    { title: 'Présentation & objectif', desc: 'Qui êtes-vous et quel est l’objectif de votre application ? 1 minute. Accroche + valeur métier.' },
    { title: 'Contexte & cible', desc: 'Pour qui ? Dans quel contexte ? Contraintes (sécurité/RGPD/RGAA) + périmètre.' },
    { title: 'Problématique', desc: 'Quel problème résout-on ? Pourquoi c’est important ? Indicateur de réussite.' },
    { title: 'Besoins & user stories', desc: 'Top fonctionnalités + critères d’acceptation. Distinguez Must/Should/Could.' },
    { title: 'UX / maquettes', desc: 'Parcours principal, maquettes, responsive, accessibilité (exemples concrets).' },
    { title: 'Architecture en couches', desc: 'Schéma. Présentez Controller/Service/Repository, validation, DTO, erreurs.' },
    { title: 'Modèle de données', desc: 'MCD/MLD simplifié. Tables clés, relations, contraintes, index.' },
    { title: 'Sécurité', desc: 'AuthN/AuthZ, stockage mots de passe, attaques web (XSS/CSRF/SQLi) + mesures.' },
    { title: 'Implémentation (front/back)', desc: '1 flux complet (UI → API → BDD). Montrez un exemple de règle métier.' },
    { title: 'Tests & qualité', desc: 'Plan de tests, exemples, CI, logs, gestion d’erreurs. Montrez des preuves.' },
    { title: 'Déploiement & DevOps', desc: 'Pipeline, env vars, secrets, monitoring, /health, rollback. URL prod.' },
    { title: 'Bilan & perspectives', desc: 'Difficultés, apprentissages, améliorations. Terminez sur une note pro.' }
  ];

  // ─── Data: Technical Accordion ───
  const techData = [
    {
      icon: '🏗️',
      category: 'Architecture',
      questions: [
        {
          q: 'Qu’est-ce qu’une architecture en couches ?',
          a: 'Une architecture en couches sépare les responsabilités : présentation (UI/Controllers), logique métier (Services/Use cases), accès aux données (Repositories/DAO), et infrastructure (DB, providers). Objectifs : maintenabilité, testabilité, sécurité (contrôles centralisés), évolution. La règle importante : les couches haut niveau ne dépendent pas directement des détails techniques (DB, framework) sans abstraction.'
        },
        {
          q: 'SOLID : vous en appliquez quoi concrètement ?',
          a: 'Exemples simples : SRP (un service = une responsabilité), OCP (ajout de stratégie sans casser), DIP (service dépend d’une interface repository), ISP (interfaces petites), LSP (substitution). Le jury attend des exemples tirés de votre projet : une interface, un service, et un test.'
        },
        {
          q: 'Comment gérez-vous la validation des données ?',
          a: 'Validation côté client pour UX (champs requis, formats) + validation côté serveur obligatoire (schéma/DTO). Retour d’erreurs structurées (400) avec messages exploitables. Utiliser des validateurs (ex: Zod/Joi) et ne jamais faire confiance au client.'
        }
      ]
    },
    {
      icon: '🗄️',
      category: 'Données (SQL/NoSQL)',
      questions: [
        {
          q: 'Transaction : quand et pourquoi ?',
          a: 'Une transaction garantit ACID : toutes les opérations réussissent ou aucune. Exemples : création commande + lignes commande, réservation de stock, écriture multi-tables. On rollback en cas d’échec. Le jury peut demander comment vous l’implémentez (BEGIN/COMMIT/ROLLBACK, ORM).'
        },
        {
          q: 'Requêtes paramétrées : en quoi ça protège ?',
          a: 'La paramétrisation sépare code SQL et valeurs utilisateur. Le SGBD traite les paramètres comme des données, ce qui empêche l’injection SQL. On évite absolument la concaténation de strings pour construire des requêtes.'
        },
        {
          q: 'SQL vs NoSQL : quand choisir ?',
          a: 'SQL : données relationnelles, intégrité, transactions, reporting. NoSQL : documents/clé-valeur, flexibilité schéma, performance sur certains accès, cache. Le jury attend surtout une justification : pourquoi vous avez choisi l’un (ou les deux) pour votre cas.'
        }
      ]
    },
    {
      icon: '🔒',
      category: 'Sécurité (OWASP / ANSSI)',
      questions: [
        {
          q: 'Authentification vs autorisation ?',
          a: 'Authentification = prouver l’identité (login, token). Autorisation = vérifier les droits (RBAC/ABAC) sur une ressource. Exemple : user authentifié mais interdit d’accéder à /admin. Les deux doivent être explicitement gérés.'
        },
        {
          q: 'Hashage des mots de passe : quoi et comment ?',
          a: 'Toujours bcrypt/argon2 avec salt + cost factor. Stocker uniquement le hash. À la connexion : compare(hash). Jamais de mot de passe en clair. En complément : politique de mot de passe, limitation tentatives, MFA si possible.'
        },
        {
          q: 'CORS / XSS / CSRF : vous expliquez comment ?',
          a: 'CORS : règles d’accès cross-origin (origins autorisées). XSS : injection JS, prévenir par échappement/sanitisation + CSP. CSRF : requête forgée via cookies, prévenir par SameSite + tokens CSRF. Toujours donner un exemple concret lié à votre app.'
        }
      ]
    },
    {
      icon: '🧪',
      category: 'Tests & Qualité',
      questions: [
        {
          q: 'Différence tests unitaires / intégration / E2E ?',
          a: 'Unitaire : une fonction/classe isolée (rapide). Intégration : plusieurs modules ensemble (ex: API + DB). E2E : parcours complet utilisateur (lent). Un bon équilibre : beaucoup d’unitaires, quelques intégrations critiques, quelques E2E sur parcours principal.'
        },
        {
          q: 'Plan de test : qu’est-ce que vous mettez dedans ?',
          a: 'Cas nominaux, cas limites, erreurs attendues, jeux de données, critères d’acceptation, priorités. On lie tests et user stories. Le jury aime voir un tableau clair (ID, scénario, données, résultat attendu, statut).'
        }
      ]
    },
    {
      icon: '🚀',
      category: 'Déploiement & DevOps',
      questions: [
        {
          q: 'Qu’est-ce qu’une démarche DevOps “minimale” ?',
          a: 'Automatiser build/test/deploy, gérer environnements (dev/staging/prod), logs + monitoring, variables d’environnement, secrets, rollback. Même simple, il faut une procédure reproductible.'
        },
        {
          q: 'Variables d’environnement et secrets : bonnes pratiques ?',
          a: 'Jamais en dur dans le code. Utiliser .env (non commité), secrets manager (selon plateforme), rotation possible. Séparer par environnement. Dans GitHub Actions : secrets chiffrés. Dans Docker : variables injectées.'
        }
      ]
    }
  ];

  // ─── Data: Questionnaire Pro (cards) ───
  const quizData = [
    {
      title: 'Stratégie (30 minutes)',
      example: '1) Skim (2 min) : titres, sections, mots-clés.\n2) Read (10 min) : repérer les définitions.\n3) Answer (15 min) : phrases courtes.\n4) Review (3 min) : orthographe + cohérence.',
      tips: 'Cherchez les mots de liaison (therefore, however), les définitions (is defined as), les listes (bullet points). Répondez court et direct.',
      errors: 'Traduire mot à mot, écrire trop long, bloquer sur un mot inconnu au lieu de déduire le sens.'
    },
    {
      title: 'Lexique utile (tech)',
      example: 'deployment = déploiement\nrollback = retour arrière\nmiddleware = intergiciel\nthroughput = débit\navailability = disponibilité\nvulnerability = vulnérabilité\nauthentication/authorization = authentification/autorisation',
      tips: 'Apprenez 30 mots “cœur” + 10 verbes (to configure, to prevent, to ensure, to handle…).',
      errors: 'Inventer des termes, confondre authentication et authorization.'
    },
    {
      title: 'Réponses courtes en anglais (modèle)',
      example: 'Q: What is a JWT?\nA: A JWT is a signed token used to authenticate users in a stateless way.\n\nQ: Why use environment variables?\nA: To keep secrets and config out of the codebase.',
      tips: 'Structure : 1 phrase définition + 1 phrase “why/impact”. Pas de paragraphe.',
      errors: 'Faire 6 phrases, oublier le sujet/verbe, écrire du français dans la réponse.'
    },
    {
      title: 'Questions fermées (FR) : méthode',
      example: 'Lisez la question, repérez les mots absolus (toujours/jamais). Éliminez 2 réponses, puis comparez les 2 restantes.',
      tips: 'Souvent, une réponse “nuancée” est la bonne. Vérifiez que l’option répond exactement à la question.',
      errors: 'Répondre “au feeling” sans relire, confondre un concept proche (hash vs encrypt).'
    }
  ];

  // ─── Data: Entretien final (cards) ───
  const finalData = [
    {
      title: 'Présentez-vous (version CDA)',
      example: '« Je suis [Prénom], en formation CDA (niveau 6). Je me spécialise dans la conception d’applications sécurisées, de l’UX jusqu’au déploiement. Mon projet montre ma capacité à structurer une architecture en couches, sécuriser les échanges et livrer une application en production. »',
      tips: '2 minutes max. Faites le lien direct avec le référentiel CDA (sécurité, couches, tests, DevOps).',
      errors: 'Réciter votre CV, parler trop longtemps, ne pas citer un exemple concret.'
    },
    {
      title: 'Votre rôle et vos choix',
      example: '« J’ai pris en charge [front/back/archi]. J’ai choisi [tech] car [critère]. J’ai priorisé [features] selon [MoSCoW]. »',
      tips: 'Toujours : choix → justification → impact. Si équipe, expliquez clairement votre contribution.',
      errors: 'Dire “on a fait” sans préciser votre part, justifier uniquement par “c’est connu”.'
    },
    {
      title: 'Gestion de projet (agile/itératif)',
      example: '« On a travaillé en sprints d’une semaine. À chaque sprint : objectif, démo, rétro. Backlog + issues + PR review. »',
      tips: 'Montrez de la méthode, même simple. Expliquez comment vous gérez risques, priorités, changements.',
      errors: 'Aucune organisation, pas de suivi, pas de communication.'
    },
    {
      title: 'Veille & progression',
      example: '« Je fais une veille hebdo (RFC, blogs, docs). Je fais des mini POCs pour valider une techno avant de l’intégrer. »',
      tips: 'Citez 2 sources précises + 1 exemple récent appris et appliqué.',
      errors: 'Rester vague (“je regarde internet”), ne pas pouvoir citer un apprentissage.'
    }
  ];

  // ─── Data: Checklist ───
  const checklistData = [
    'Dossier projet imprimable (PDF) prêt',
    'Dossier de conception (architecture + BDD + sécurité) prêt',
    'Diaporama prêt et chronométré (40 min max)',
    'Démo stable : scénario principal + données prêtes',
    'Architecture en couches expliquée avec schéma',
    'Sécurité : auth + roles + protections OWASP présentées',
    'RGPD : mentions légales + politique de confidentialité',
    'Plan de tests + au moins 3 tests réels exécutés',
    'CI (ou procédure) qui passe (build/test)',
    'Déploiement documenté + URL prod + /health',
    'Préparation questionnaire pro (anglais) : lexique + entraînement',
    'Réponses d’entretien final prêtes (rôle, projet pro, veille)'
  ];

  const STORAGE_KEY = 'rncp37873_cda_checklist';

  // ─── Render: Dossier cards ───
  function renderDossierCards() {
    const container = document.getElementById('dossierCards');
    if (!container) return;

    container.innerHTML = dossierData.map((item, i) => `
      <div class="expand-card" data-index="${i}">
        <div class="expand-card-header">
          <h3><span class="expand-card-icon">${item.icon}</span> ${item.title}</h3>
          <span class="expand-card-chevron">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </div>
        <div class="expand-card-body">
          <div class="expand-card-content">${item.content}</div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.expand-card').forEach(card => {
      card.querySelector('.expand-card-header').addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        container.querySelectorAll('.expand-card.open').forEach(c => c.classList.remove('open'));
        if (!isOpen) card.classList.add('open');
      });
    });
  }

  // ─── Render: Slides ───
  function renderSlides() {
    const container = document.getElementById('slidesTrack');
    if (!container) return;

    container.innerHTML = slidesData.map((slide, i) => `
      <div class="slide-card" data-slide="${i}">
        <div class="slide-number">${String(i + 1).padStart(2, '0')}</div>
        <h3>${slide.title}</h3>
        <p>${slide.desc}</p>
      </div>
    `).join('');

    initSlidesCarousel();
  }

  function initSlidesCarousel() {
    const track = document.getElementById('slidesTrack');
    const prevBtn = document.getElementById('slidesPrev');
    const nextBtn = document.getElementById('slidesNext');
    const counter = document.getElementById('slidesCounter');
    const dotsContainer = document.getElementById('slidesDots');
    if (!track || !prevBtn || !nextBtn || !counter || !dotsContainer) return;

    const cards = track.querySelectorAll('.slide-card');
    const total = cards.length;
    let currentIndex = 0;

    dotsContainer.innerHTML = slidesData.map((_, i) =>
      `<button class="slides-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Aller à la slide ${i + 1}"></button>`
    ).join('');

    const dots = dotsContainer.querySelectorAll('.slides-dot');

    function getCardWidth() {
      const card = cards[0];
      if (!card) return 0;
      const gap = parseFloat(getComputedStyle(track).gap) || 20;
      return card.offsetWidth + gap;
    }

    function updateUI() {
      counter.textContent = `${currentIndex + 1} / ${total}`;
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === total - 1;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
    }

    function goToSlide(index) {
      currentIndex = Math.max(0, Math.min(index, total - 1));
      track.scrollTo({ left: currentIndex * getCardWidth(), behavior: 'smooth' });
      updateUI();
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    dots.forEach(dot => dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index, 10))));

    track.addEventListener('scroll', () => {
      const cardWidth = getCardWidth();
      if (!cardWidth) return;
      const index = Math.round(track.scrollLeft / cardWidth);
      if (index !== currentIndex) {
        currentIndex = index;
        updateUI();
      }
    }, { passive: true });

    updateUI();
  }

  // ─── Render: Technical accordion ───
  function renderTechAccordion() {
    const container = document.getElementById('techAccordion');
    if (!container) return;

    container.innerHTML = techData.map((group, gi) => `
      <div class="accordion-group" data-group="${gi}">
        <div class="accordion-group-header">
          <h3><span class="accordion-group-icon">${group.icon}</span> ${group.category}</h3>
          <span class="accordion-chevron">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </div>
        <div class="accordion-group-body">
          <div class="accordion-items">
            ${group.questions.map((item) => `
              <div class="accordion-item">
                <div class="accordion-item-header">
                  <span>${item.q}</span>
                  <span class="accordion-item-chevron">▼</span>
                </div>
                <div class="accordion-item-body">
                  <div class="accordion-item-content">${item.a}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.accordion-group-header').forEach(header => {
      header.addEventListener('click', () => header.parentElement.classList.toggle('open'));
    });

    container.querySelectorAll('.accordion-item-header').forEach(header => {
      header.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = header.parentElement;
        const group = item.closest('.accordion-group');
        const wasOpen = item.classList.contains('open');
        group.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  // ─── Render: Pro cards (quiz/final) ───
  function renderProCards(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.map((item, i) => `
      <div class="pro-card" data-index="${i}">
        <div class="pro-card-header">
          <h3>${item.title}</h3>
          <span class="pro-card-chevron">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </div>
        <div class="pro-card-body">
          <div class="pro-card-content">
            <div class="pro-block example">
              <h4>💬 Exemple</h4>
              <p>${String(item.example).replaceAll('\n', '<br>')}</p>
            </div>
            <div class="pro-block tips">
              <h4>💡 Conseils</h4>
              <p>${item.tips}</p>
            </div>
            <div class="pro-block errors">
              <h4>⚠️ À éviter</h4>
              <p>${item.errors}</p>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.pro-card').forEach(card => {
      card.querySelector('.pro-card-header').addEventListener('click', () => card.classList.toggle('open'));
    });
  }

  // ─── Checklist ───
  function getSavedChecklist() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  }

  function saveChecklist(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function updateProgress() {
    const items = document.querySelectorAll('.checklist-item');
    const checked = document.querySelectorAll('.checklist-item.checked');
    const percent = items.length ? Math.round((checked.length / items.length) * 100) : 0;

    const fill = document.getElementById('progressFill');
    const label = document.getElementById('progressPercent');
    if (fill) fill.style.width = percent + '%';
    if (label) label.textContent = percent + '%';
  }

  function renderChecklist() {
    const container = document.getElementById('checklist');
    if (!container) return;

    const saved = getSavedChecklist();

    container.innerHTML = checklistData.map((label, i) => {
      const checked = saved[i] ? 'checked' : '';
      return `
        <li class="checklist-item ${checked}" data-index="${i}">
          <span class="checklist-box">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
          </span>
          <span class="checklist-label">${label}</span>
        </li>
      `;
    }).join('');

    container.querySelectorAll('.checklist-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('checked');
        const state = getSavedChecklist();
        state[item.dataset.index] = item.classList.contains('checked');
        saveChecklist(state);
        updateProgress();
      });
    });

    updateProgress();
  }

  // ─── Navigation ───
  function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          closeSidebar();
        }
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              link.classList.toggle('active', link.dataset.section === id);
            });
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(section => {
      if (section.id) observer.observe(section);
    });
  }

  // ─── Sidebar Mobile ───
  function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggle = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('sidebarOverlay');

    toggle?.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('visible');
    });

    overlay?.addEventListener('click', closeSidebar);
  }

  function closeSidebar() {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('sidebarOverlay')?.classList.remove('visible');
  }

  // ─── Scroll Reveal ───
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(el => observer.observe(el));
  }

  // ─── Back to Top ───
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 600);
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ─── Reset Checklist ───
  function initResetChecklist() {
    document.getElementById('resetChecklist')?.addEventListener('click', () => {
      if (confirm('Réinitialiser toute la checklist ?')) {
        localStorage.removeItem(STORAGE_KEY);
        renderChecklist();
      }
    });
  }

  // ─── Init ───
  document.addEventListener('DOMContentLoaded', () => {
    renderDossierCards();
    renderSlides();
    renderTechAccordion();
    renderProCards('quizCards', quizData);
    renderProCards('finalCards', finalData);
    renderChecklist();
    initNavigation();
    initSidebar();
    initScrollReveal();
    initBackToTop();
    initResetChecklist();
  });
})();

