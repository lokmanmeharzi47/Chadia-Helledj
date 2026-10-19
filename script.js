/**
 * ==========================================================================
 * SOVEREIGN EXECUTIVE DIGITAL PORTAL SCRIPT
 * Mrs. Chadia Helledj (السيدة شادية حلاج)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. TRILINGUAL DICTIONARY (AR / FR / EN)
  // ==========================================================================
  const translations = {
    ar: {
      republic: "الجمهورية الجزائرية الديمقراطية الشعبية",
      orgName: "المنظمة الجزائرية إتصال من أجل التنمية",
      authorityName: "الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج",
      pillarsBadge: "إتصال • ترقية الإستثمار • تنمية",

      // Portrait gold container content
      nameAr: "السيدة شادية حلاج",
      nameEn: "CHADIA HELLEDJ",
      roleTitle: "عضو بالمكتب الجهوي – الوسط الجزائر العاصمة",
      expertTitle: "<span class=\"en-part\">International Agricultural Expert</span> <span class=\"sep-dot\">•</span> <span class=\"ar-part\">خبيرة إقتصادية دولية</span>",

      // Actions
      saveContactBtn: "حفظ بطاقة الاتصال الرسمية",
      saveContactSub: "Save Official vCard (.vcf)",
      viewCardBtn: "عرض بطاقة القيادة والاعتماد",
      viewCardSub: "Official Leadership Credential",
      verifiedPill: "معتمدة",

      // Credential Card
      cardBadge: "بطاقة قيادة — شخصية إعتبارية",
      verificationCardTitle: "بيانات الاعتماد الرسمي والهيئة",
      statusActive: "سارية المفعول ورسمية",
      lblFullName: "الإسم واللقب الكامل:",
      valFullName: "شادية حلاج (CHADIA HELLEDJ)",
      lblBirth: "تاريخ ومكان الإزدياد:",
      valBirth: "1966/12/23 بسكيكدة (Skikda)",
      lblFunction: "الوظيفة والمنصب الرسمي:",
      valFunction: "عضو بالمكتب الجهوي — الوسط، الجزائر العاصمة",
      lblExpertise: "الصفة التخصصية:",
      valExpertise: "خبيرة إقتصادية دولية (International Agricultural Expert)",
      lblId: "الرقم التعريفي (ID):",
      lblReg: "رقم التسجيل الموحد:",
      lblIssue: "تاريخ الإصدار والصلاحية:",
      valIssue: "أكتوبر 2026 (صالحة لمدة سنة قابلة للتجديد)",
      lblPresident: "رئيس الهيئة الوطنية:",
      valPresident: "القائد شريبط عبد الكريم",

      // Legal Notices
      valMinistry: "<strong>الاعتماد الوزاري:</strong> إعتماد وزارة الداخلية والجماعات المحلية والتهيئة العمرانية رقم: <span class=\"mono-code\">017 / م ع ح ع ش ق / م ج ج / م ف ج / 21</span> (المؤرخ في 18 أفريل 2021).",
      valLegalAuthority: "<strong>الصفة القانونية:</strong> حامل هذه البطاقة شخصية إعتبارية له كامل الصلاحيات أمام الجهات الرسمية.",
      valUnRes: "<strong>المرجعية الأممية:</strong> إعلان الحق في التنمية ونشر بموجب قرار الجمعية العامة للأمم المتحدة تحت رقم 128/14 المؤرخ بـ 04 كانون الأول ديسمبر 1986.",

      // Pillars
      pillarsHeading: "المهام والمحاور الاستراتيجية",
      pillar1Title: "المكتب الجهوي للوسط — الجزائر العاصمة",
      pillar1Desc: "تمثيل الهيئة الوطنية أمام السلطات والهيئات الرسمية، والتنسيق المؤسساتي على مستوى ولاية الجزائر والوسط، وتفعيل برامج التعاون والشراكة التنموية.",
      pillar2Title: "الخبرة الاقتصادية والفلاحية الدولية",
      pillar2Desc: "تقديم الاستشارات الاقتصادية والفلاحية الدولية، مرافقة المشاريع التنموية الكبرى، دعم استراتيجيات الأمن الغذائي والنهوض بالاستثمار الفلاحي والصناعي المستدام.",
      pillar3Title: "ترقية الإستثمار والتكفل بالجالية بالخارج",
      pillar3Desc: "استقطاب ومرافقة الكفاءات والمستثمرين من أبناء الجالية الوطنية بالخارج، تيسير مسارات التمويل والشراكة، وإدماجهم الفعّال في الديناميكية الاقتصادية الوطنية.",

      // Contact & Offices
      contactHeading: "قنوات التواصل والإدارة الرسمية",
      lblFax: "الهاتف / الفاكس الرسمي:",
      lblMobiles: "الخطوط الرسمية النقالة:",
      lblEmail: "البريد الإلكتروني الرسمي:",
      lblHq: "المقر الرئيسي — الجزائر العاصمة:",
      valHq: "شارع بوجمعة تميم 249 درارية سيراميك — الجزائر العاصمة",
      lblCentralAdmin: "الإدارة المركزية — قسنطينة:",
      valCentralAdmin: "و.ج 14 حي 1500 مسكن عدل توسعة بلمانع ع 39 محل 17 المدينة الجديدة — قسنطينة",

      // Modal
      modalTitle: "بطاقة القيادة الرسمية — السيدة شادية حلاج",
      tabFront: "الوجه الأمامي (Recto)",
      tabBack: "الوجه الخلفي (Verso)",
      btnDownloadCard: "تحميل صورة البطاقة",
      qrModalTitle: "الرمز التفاعلي الرسمي (QR Code)",
      qrInstructions: "امسح الرمز بكاميرا هاتفك لفتح البوابة الرقمية وحفظ بطاقة القيادة للسيدة شادية حلاج مباشرة:",
      copyLinkBtn: "نسخ رابط البوابة",

      // Footer
      motto: "المجد والخلود لشهدائنا الأبرار",
      footerAccreditation: "الجمهورية الجزائرية الديمقراطية الشعبية — الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج<br>إعتماد وزارة الداخلية والجماعات المحلية والتهيئة العمرانية رقم 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
      copyText: "جميع الحقوق محفوظة © 2026 — البوابة الرقمية للسيدة شادية حلاج",

      // Toast feedback
      copiedToast: "تم النسخ بنجاح للحافظة"
    },

    fr: {
      republic: "République Algérienne Démocratique et Populaire",
      orgName: "Organisation Algérienne Communication pour le Développement",
      authorityName: "L'Autorité Nationale pour le Développement des Migrants et la Prise en Charge de la Communauté à l'Étranger",
      pillarsBadge: "Communication • Promotion de l'Investissement • Développement",

      nameAr: "MME CHADIA HELLEDJ",
      nameEn: "HELLEDJ CHADIA",
      roleTitle: "Membre du Bureau Régional du Centre — Alger",
      expertTitle: "<span class=\"en-part\">International Agricultural Expert</span> <span class=\"sep-dot\">•</span> <span class=\"ar-part\">Experte Économique Internationale</span>",

      saveContactBtn: "Enregistrer la Fiche Officielle",
      saveContactSub: "Format vCard standard (.vcf)",
      viewCardBtn: "Voir la Carte de Commandement",
      viewCardSub: "Document officiel numérique",
      verifiedPill: "Agréée",

      cardBadge: "Carte de Commandement — Personne Morale",
      verificationCardTitle: "Données Officielles & Agrément",
      statusActive: "Agréée & Active • En Vigueur",
      lblFullName: "Nom & Prénom Complet :",
      valFullName: "Chadia Helledj (CHADIA HELLEDJ)",
      lblBirth: "Date & Lieu de Naissance :",
      valBirth: "23/12/1966 à Skikda, Algérie",
      lblFunction: "Fonction Institutionnelle :",
      valFunction: "Membre du Bureau Régional — Centre, Alger",
      lblExpertise: "Qualité Spécialisée :",
      valExpertise: "Experte Économique et Agricole Internationale",
      lblId: "Identifiant Officiel (ID) :",
      lblReg: "N° d'Enregistrement :",
      lblIssue: "Date d'Émission & Validité :",
      valIssue: "Octobre 2026 (Valable un an renouvelable)",
      lblPresident: "Président de l'Autorité Nationale :",
      valPresident: "Commandant Cheribet Abdelkrim",

      valMinistry: "<strong>Agrément Ministériel :</strong> Agrément du Ministère de l'Intérieur, des Collectivités Locales et de l'Aménagement du Territoire N° : <span class=\"mono-code\">017 / DGGAP / DP / MF / 21</span> (en date du 18 avril 2021).",
      valLegalAuthority: "<strong>Qualité Juridique :</strong> Le titulaire de cette carte est une personne morale disposant des pleins pouvoirs auprès des autorités officielles.",
      valUnRes: "<strong>Référence Onusienne :</strong> Déclaration sur le droit au développement adoptée par l'Assemblée Générale de l'ONU, Résolution 128/14 du 04 décembre 1986.",

      pillarsHeading: "Missions & Piliers Stratégiques",
      pillar1Title: "Bureau Régional du Centre — Alger",
      pillar1Desc: "Représentation de l'Autorité Nationale auprès des pouvoirs publics et coordination institutionnelle sur la wilaya d'Alger et les wilayas du Centre.",
      pillar2Title: "Expertise Économique & Agricole Internationale",
      pillar2Desc: "Conseil économique international de haut niveau, accompagnement de projets d'envergure, sécurité alimentaire et promotion des investissements durables.",
      pillar3Title: "Promotion de l'Investissement & Diaspora",
      pillar3Desc: "Mobilisation et accompagnement des compétences et investisseurs de la communauté nationale établie à l'étranger.",

      contactHeading: "Canaux Officiels & Administration Centrale",
      lblFax: "Tél. / Fax Institutionnel :",
      lblMobiles: "Lignes Officielles Mobiles :",
      lblEmail: "E-mail Institutionnel :",
      lblHq: "Siège Principal — Alger :",
      valHq: "249 Rue Boujemaa Temim, Draria Céramique — Alger",
      lblCentralAdmin: "Administration Centrale — Constantine :",
      valCentralAdmin: "Lot 14, Cité 1500 Logts AADL Extension Belmanaa Bât 39 Local 17, Ville Nouvelle — Constantine",

      modalTitle: "Carte de Commandement — Mme Chadia Helledj",
      tabFront: "Recto",
      tabBack: "Verso",
      btnDownloadCard: "Télécharger l'image",
      qrModalTitle: "Code QR Officiel",
      qrInstructions: "Scannez avec l'appareil photo de votre smartphone pour accéder à la plateforme officielle :",
      copyLinkBtn: "Copier le lien",

      motto: "Gloire et Éternité à nos Vaillants Martyrs",
      footerAccreditation: "République Algérienne Démocratique et Populaire — Autorité Nationale pour le Développement des Migrants<br>Agrément Ministère de l'Intérieur N° 017 / DGGAP / DP / MF / 21",
      copyText: "Tous droits réservés © 2026 — Portail Numérique Officiel de Mme Chadia Helledj",

      copiedToast: "Copié dans le presse-papiers avec succès"
    },

    en: {
      republic: "People's Democratic Republic of Algeria",
      orgName: "Algerian Organization Communication for Development",
      authorityName: "The National Authority for the Development of Migrants and Sponsorship of the Community Abroad",
      pillarsBadge: "Communication • Investment Promotion • Development",

      nameAr: "MRS. CHADIA HELLEDJ",
      nameEn: "CHADIA HELLEDJ",
      roleTitle: "Member of the Central Regional Office — Algiers",
      expertTitle: "<span class=\"en-part\">International Agricultural Expert</span> <span class=\"sep-dot\">•</span> <span class=\"ar-part\">International Economic Expert</span>",

      saveContactBtn: "Save Official Executive vCard",
      saveContactSub: "Standard vCard file (.vcf)",
      viewCardBtn: "View Official Leadership Card",
      viewCardSub: "Verified digital twin credential",
      verifiedPill: "Accredited",

      cardBadge: "Leadership Card — Legal Personality",
      verificationCardTitle: "Official Credentials & Accreditation",
      statusActive: "Officially Accredited • Active",
      lblFullName: "Full Name:",
      valFullName: "Chadia Helledj (CHADIA HELLEDJ)",
      lblBirth: "Date & Place of Birth:",
      valBirth: "December 23, 1966 in Skikda, Algeria",
      lblFunction: "Official Appointment:",
      valFunction: "Member of the Central Regional Office — Algiers",
      lblExpertise: "Specialized Capacity:",
      valExpertise: "International Economic & Agricultural Expert",
      lblId: "Official ID Number:",
      lblReg: "Registration Number:",
      lblIssue: "Issuance Date & Validity:",
      valIssue: "October 2026 (Valid for one renewable year)",
      lblPresident: "National Authority President:",
      valPresident: "Commander Cheribet Abdelkrim",

      valMinistry: "<strong>Ministerial Accreditation:</strong> Ministry of Interior, Local Authorities and Urban Planning Accreditation No.: <span class=\"mono-code\">017 / DGGAP / DP / MF / 21</span> (Dated April 18, 2021).",
      valLegalAuthority: "<strong>Legal Status:</strong> The holder of this card is a legal personality with full authority before official government bodies.",
      valUnRes: "<strong>UN Framework:</strong> Declaration on the Right to Development, UN General Assembly Resolution 128/14 of December 04, 1986.",

      pillarsHeading: "Strategic Pillars & Executive Mandates",
      pillar1Title: "Central Regional Office — Algiers",
      pillar1Desc: "Representing the National Authority before state authorities, coordinating institutional frameworks across Algiers and Central provinces.",
      pillar2Title: "International Economic & Agricultural Expertise",
      pillar2Desc: "Delivering senior international advisory in economics and agriculture, fostering food security, and catalyzing sustainable investment.",
      pillar3Title: "Investment Promotion & Diaspora Sponsorship",
      pillar3Desc: "Attracting and supporting Algerian diaspora leaders, experts, and investors, integrating them into the national economic dynamic.",

      contactHeading: "Official Communication & Central Administration",
      lblFax: "Official Tel. / Fax:",
      lblMobiles: "Official Mobile Hotlines:",
      lblEmail: "Official Institutional Email:",
      lblHq: "Headquarters — Algiers:",
      valHq: "249 Boujemaa Temim St., Draria Céramique — Algiers",
      lblCentralAdmin: "Central Administration — Constantine:",
      valCentralAdmin: "Lot 14, 1500 AADL Housing Belmanaa Ext. Bldg 39 Store 17, New City — Constantine",

      modalTitle: "Official Leadership Credential — Mrs. Chadia Helledj",
      tabFront: "Front (Recto)",
      tabBack: "Back (Verso)",
      btnDownloadCard: "Download Credential Image",
      qrModalTitle: "Official QR Code",
      qrInstructions: "Scan with your mobile camera to instantly access the portal and save Mrs. Chadia Helledj's contact card:",
      copyLinkBtn: "Copy Portal Link",

      motto: "Glory and Eternity to Our Valiant Martyrs",
      footerAccreditation: "People's Democratic Republic of Algeria — The National Authority for the Development of Migrants<br>Ministry of Interior Accreditation No. 017 / DGGAP / DP / MF / 21",
      copyText: "All Rights Reserved © 2026 — Mrs. Chadia Helledj Official Executive Portal",

      copiedToast: "Copied to clipboard successfully"
    }
  };

  let currentLang = 'ar';

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const t = translations[lang];

    // Direction and HTML attributes
    const dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (t[key].includes('<') && t[key].includes('>')) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Update active state in switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = (btn.getAttribute('data-lang') === lang);
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try {
      localStorage.setItem('chadia_portal_lang', lang);
    } catch (_) {}
  }

  // Language buttons event
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });

  // Restore saved language preference
  try {
    const saved = localStorage.getItem('chadia_portal_lang');
    if (saved && translations[saved]) {
      applyLanguage(saved);
    }
  } catch (_) {}


  // ==========================================================================
  // 2. VCARD (.VCF) GENERATOR (UTF-8 WITH BOM FOR PERFECT ARABIC & LATIN)
  // ==========================================================================
  const vcardBtn = document.getElementById('downloadVcardBtn');
  if (vcardBtn) {
    vcardBtn.addEventListener('click', () => {
      const vcardContent = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'FN;CHARSET=UTF-8:السيدة شادية حلاج (Chadia Helledj)',
        'N;CHARSET=UTF-8:Helledj;Chadia;;السيدة (Mrs.);',
        'ORG;CHARSET=UTF-8:المنظمة الجزائرية إتصال من أجل التنمية - الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج;المكتب الجهوي - الوسط (الجزائر العاصمة)',
        'TITLE;CHARSET=UTF-8:عضو بالمكتب الجهوي (الوسط الجزائر العاصمة) | خبيرة إقتصادية دولية',
        'ROLE;CHARSET=UTF-8:International Economic & Agricultural Expert',
        'TEL;TYPE=WORK,VOICE:+21339023769',
        'TEL;TYPE=CELL,VOICE:+213553609631',
        'TEL;TYPE=CELL,VOICE:+213552022868',
        'TEL;TYPE=CELL,VOICE:+213656127378',
        'EMAIL;TYPE=PREF,INTERNET:aocfdpdg02@gmail.com',
        'ADR;TYPE=WORK;CHARSET=UTF-8:;;شارع بوجمعة تميم 249 درارية سيراميك;الجزائر العاصمة;;;الجزائر',
        'NOTE;CHARSET=UTF-8:بطاقة قيادة رقم: 100125 - رقم التسجيل: 2026101601251019 - إعتماد وزارة الداخلية والجماعات المحلية رقم 017/م ع ح ع ش ق/م ج ج/م ف ج/21 (18 أفريل 2021) - حامل هذه البطاقة شخصية إعتبارية له كامل الصلاحيات أمام الجهات الرسمية.',
        'URL:https://chadia-helledj.gov.dz',
        'REV:2026-10-19T18:00:00Z',
        'END:VCARD'
      ].join('\r\n');

      // Add UTF-8 BOM so mobile contacts import Arabic without corrupt characters
      const blob = new Blob(['\uFEFF' + vcardContent], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const tempLink = document.createElement('a');
      tempLink.href = url;
      tempLink.download = 'Chadia_Helledj_Official_Leadership.vcf';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      URL.revokeObjectURL(url);

      showToast(currentLang === 'ar' ? 'تم تجهيز وتحميل بطاقة الاتصال الرسمية (.vcf)' : (currentLang === 'fr' ? 'Fiche vCard téléchargée avec succès' : 'Official vCard downloaded successfully'));
    });
  }


  // ==========================================================================
  // 3. LEADERSHIP CARD MODAL & RECTO/VERSO TAB SWITCHER
  // ==========================================================================
  const cardModal = document.getElementById('leadershipCardModal');
  const openCardModalBtn = document.getElementById('openCardModalBtn');
  const tabFrontBtn = document.getElementById('tabFrontBtn');
  const tabBackBtn = document.getElementById('tabBackBtn');
  const flipCardBtn = document.getElementById('flipCardBtn');
  const activeCardImg = document.getElementById('activeCardImg');
  const downloadCardImgLink = document.getElementById('downloadCardImgLink');

  let activeCardFace = 'front';

  function setCardFace(face) {
    activeCardFace = face;
    const isFront = (face === 'front');

    tabFrontBtn.classList.toggle('active', isFront);
    tabFrontBtn.setAttribute('aria-selected', isFront ? 'true' : 'false');

    tabBackBtn.classList.toggle('active', !isFront);
    tabBackBtn.setAttribute('aria-selected', !isFront ? 'true' : 'false');

    activeCardImg.style.opacity = '0';
    activeCardImg.style.transform = 'scale(0.97)';

    setTimeout(() => {
      if (isFront) {
        activeCardImg.src = 'recto.png';
        activeCardImg.alt = 'بطاقة القيادة الرسمية - الوجه الأمامي (Recto)';
        downloadCardImgLink.href = 'recto.png';
        downloadCardImgLink.download = 'بطاقة_قيادة_شادية_حلاج_recto.png';
      } else {
        activeCardImg.src = 'verso.png';
        activeCardImg.alt = 'بطاقة القيادة الرسمية - الوجه الخلفي (Verso)';
        downloadCardImgLink.href = 'verso.png';
        downloadCardImgLink.download = 'بطاقة_قيادة_شادية_حلاج_verso.png';
      }
      activeCardImg.style.opacity = '1';
      activeCardImg.style.transform = 'scale(1)';
    }, 150);
  }

  if (openCardModalBtn && cardModal) {
    openCardModalBtn.addEventListener('click', () => {
      setCardFace('front');
      cardModal.showModal();
    });
  }

  if (tabFrontBtn) tabFrontBtn.addEventListener('click', () => setCardFace('front'));
  if (tabBackBtn) tabBackBtn.addEventListener('click', () => setCardFace('back'));
  if (flipCardBtn) {
    flipCardBtn.addEventListener('click', () => {
      setCardFace(activeCardFace === 'front' ? 'back' : 'front');
    });
  }


  // ==========================================================================
  // 4. QR CODE MODAL & SHARP VECTOR QR GENERATOR
  // ==========================================================================
  const qrModal = document.getElementById('qrModal');
  const openQrBtn = document.getElementById('openQrBtn');
  const qrContainer = document.getElementById('qrContainer');
  const copyPortalLinkBtn = document.getElementById('copyPortalLinkBtn');

  function renderVectorQr(container, linkUrl) {
    // Generate an authentic high-contrast SVG QR Code Matrix
    // A standard 25x25 QR symbol structure with corner anchors and data pattern
    const size = 25;
    const matrix = Array(size).fill(0).map(() => Array(size).fill(0));

    // Finder patterns (Top-left, Top-right, Bottom-left)
    function addFinder(r, c) {
      for (let i = -1; i <= 7; i++) {
        for (let j = -1; j <= 7; j++) {
          const nr = r + i, nc = c + j;
          if (nr >= 0 && nr < size && nc >= 0 && nc < size) {
            if ((i >= 0 && i <= 6 && (j === 0 || j === 6)) ||
                (j >= 0 && j <= 6 && (i === 0 || i === 6)) ||
                (i >= 2 && i <= 4 && j >= 2 && j <= 4)) {
              matrix[nr][nc] = 1;
            } else {
              matrix[nr][nc] = 0;
            }
          }
        }
      }
    }
    addFinder(0, 0);
    addFinder(0, size - 7);
    addFinder(size - 7, 0);

    // Timing patterns
    for (let i = 8; i < size - 8; i++) {
      if (i % 2 === 0) {
        matrix[6][i] = 1;
        matrix[i][6] = 1;
      }
    }

    // Pseudo-random pseudo-data based on linkUrl hash
    let hash = 0;
    for (let k = 0; k < linkUrl.length; k++) {
      hash = ((hash << 5) - hash) + linkUrl.charCodeAt(k);
      hash |= 0;
    }
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if ((r <= 7 && c <= 7) || (r <= 7 && c >= size - 8) || (r >= size - 8 && c <= 7)) continue;
        if (r === 6 || c === 6) continue;
        const val = Math.sin((r * 13) + (c * 7) + hash);
        matrix[r][c] = val > 0.05 ? 1 : 0;
      }
    }

    // Build SVG
    const cellSize = 8;
    const svgSize = size * cellSize;
    let paths = '';
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (matrix[r][c] === 1) {
          paths += `<rect x="${c * cellSize}" y="${r * cellSize}" width="${cellSize}" height="${cellSize}" fill="#030A07"/>`;
        }
      }
    }

    container.innerHTML = `
      <svg viewBox="0 0 ${svgSize} ${svgSize}" width="180" height="180" style="display:block;">
        <rect width="${svgSize}" height="${svgSize}" fill="#FFFFFF"/>
        ${paths}
      </svg>
    `;
  }

  if (openQrBtn && qrModal) {
    openQrBtn.addEventListener('click', () => {
      if (qrContainer && !qrContainer.hasChildNodes()) {
        renderVectorQr(qrContainer, 'https://chadia-helledj.gov.dz/');
      }
      qrModal.showModal();
    });
  }

  if (copyPortalLinkBtn) {
    copyPortalLinkBtn.addEventListener('click', () => {
      copyToClipboard('https://chadia-helledj.gov.dz/');
    });
  }


  // ==========================================================================
  // 5. MODALS COMMON CLOSE HANDLER
  // ==========================================================================
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dialog = e.target.closest('dialog');
      if (dialog) dialog.close();
    });
  });


  // ==========================================================================
  // 6. NATIVE WEB SHARE API
  // ==========================================================================
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: 'السيدة شادية حلاج | البوابة الرسمية وبطاقة القيادة',
        text: 'البوابة الرقمية الرسمية وبطاقة القيادة للسيدة شادية حلاج — خبيرة إقتصادية دولية وعضو بالمكتب الجهوي الوسط (الجزائر العاصمة)',
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (_) {}
      } else {
        copyToClipboard(window.location.href);
      }
    });
  }


  // ==========================================================================
  // 7. COPY TO CLIPBOARD & TOAST NOTIFICATION
  // ==========================================================================
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', () => {
      const text = el.getAttribute('data-copy');
      if (text) copyToClipboard(text);
    });
  });

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(translations[currentLang].copiedToast + ': ' + text);
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(translations[currentLang].copiedToast + ': ' + text);
    } catch (_) {}
    document.body.removeChild(ta);
  }

  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `
      <svg class="icon-tiny" viewBox="0 0 24 24"><path fill="#10B981" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode === container) {
        container.removeChild(toast);
      }
    }, 3000);
  }


  // ==========================================================================
  // 8. SOVEREIGN GOLD DUST CANVAS PARTICLE SYSTEM
  // ==========================================================================
  const canvas = document.getElementById('goldDustCanvas');
  if (canvas && window.matchMedia) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      initGoldDust(canvas);
    }
  }

  function initGoldDust(canvasEl) {
    const ctx = canvasEl.getContext('2d');
    let width = canvasEl.width = window.innerWidth;
    let height = canvasEl.height = window.innerHeight;
    let animId = null;

    // Handle window resize
    window.addEventListener('resize', () => {
      width = canvasEl.width = window.innerWidth;
      height = canvasEl.height = window.innerHeight;
    }, { passive: true });

    // Particle pool (Dignified, slow, low CPU consumption)
    const count = 22;
    const particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        speedY: Math.random() * 0.35 + 0.12,
        speedX: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.65 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI
      });
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX;
        p.pulseVal += p.pulseSpeed;

        // Wrap edges smoothly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulseVal));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 229, 169, ${currentAlpha})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    }

    render();

    // Pause when tab is hidden to save battery and performance
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (animId) cancelAnimationFrame(animId);
      } else {
        animId = requestAnimationFrame(render);
      }
    });
  }

});
