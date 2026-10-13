/*!
 * PlumbSquare — Core Carpentry Math, Fractional Tape-Measure Engine,
 * Multi-Language Switcher (8 Languages + Google Cloud Translate API v2 + Google Website Translator),
 * URL Permalink State, and Jobsite Blueprint PNG Exporter (assets/app.js)
 * 100% Client-Side, Zero External Dependencies.
 */
(function () {
  "use strict";

  function gcd(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) {
      var t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  /* Built-in Instant Workshop Dictionary (EN, ES, FR, DE, PT, HI, JA, AR) */
  var I18N_DICT = {
    es: {
      "Calculators": "Calculadoras",
      "Shop Guides": "Guías de Taller",
      "Lumber Chart": "Tabla de Madera",
      "About": "Acerca de",
      "Contact": "Contacto",
      "Home": "Inicio",
      "Calculate Stringer Blueprint": "Calcular Plano de Zanca",
      "Calculate Wall Layout": "Calcular Diseño de Pared",
      "Calculate Even Spacing": "Calcular Espaciado Igual",
      "Optimize Sheet Cut List": "Optimizar Cortes de Tablero",
      "Calculate Board Feet": "Calcular Pies Tablares",
      "Calculate Wall Framing": "Calcular Estructura de Muro",
      "Calculate Deck Materials": "Calcular Materiales de Terraza",
      "Calculate Fence Materials": "Calcular Materiales de Cerca",
      "Calculate Miter & Bevel Angles": "Calcular Ángulos de Inglete y Bisel",
      "Calculate Shelf Deflection": "Calcular Flecha de Estante",
      "📷 Download Blueprint PNG": "📷 Descargar Plano PNG",
      "🖨️ Print Jobsite Cut Sheet": "🖨️ Imprimir Hoja de Corte",
      "🔗 Copy Shareable Link": "🔗 Copiar Enlace del Proyecto",
      "Equal Riser Height": "Altura Igual de Contrahuella",
      "Bottom Cut Riser": "Contrahuella Inferior Cortada",
      "Total Horizontal Run": "Huella Horizontal Total",
      "Stringer Board Length": "Longitud de Tabla Zanca",
      "2x12 Throat Remaining": "Garganta Restante 2x12",
      "Step Diagonal Mark": "Marca Diagonal por Paso",
      "Inside Panel Opening": "Abertura Interior del Panel",
      "On-Center (OC) Step": "Paso Entre Centros (OC)",
      "Vertical Battens Needed": "Listones Verticales Necesarios",
      "Inside Panel Height": "Altura Interior del Panel",
      "Horizontal Rail Length": "Longitud de Riel Horizontal",
      "Total Trim Footage": "Total de Molduras (Pies)",
      "Clear Gap Between Items": "Espacio Libre Entre Piezas",
      "On-Center (OC) Spacing": "Espaciado Entre Centros (OC)",
      "Total Items / Spindles": "Total de Piezas / Balustres",
      "Total Equal Gaps": "Total de Espacios Iguales",
      "Sheets Required": "Tableros Requeridos",
      "Material Yield": "Rendimiento del Material",
      "Total Parts Cut": "Total de Piezas Cortadas",
      "Estimated Sheet Cost": "Costo Estimado de Tableros",
      "Net Board Feet": "Pies Tablares Netos",
      "Estimated Lumber Cost": "Costo Estimado de Madera",
      "Total Linear Footage": "Pies Lineales Totales",
      "Total Studs to Order": "Total de Montantes a Pedir",
      "Stud Cut Length": "Longitud de Corte del Montante",
      "12-Ft Plate Boards": "Soleras de 12 Pies",
      "4x8 Sheathing / Drywall": "Tableros 4x8 OSB / Drywall",
      "16-Ft Decking Boards": "Tablas de Terraza de 16 Pies",
      "Concrete Pier Footings": "Zapatas de Concreto",
      "Fasteners Needed": "Tornillos / Clips Necesarios",
      "Fence Posts Needed": "Postes de Cerca Necesarios",
      "Horizontal 2×4 Rails": "Rieles Horizontales 2×4",
      "Total Fence Pickets": "Total de Tablillas de Cerca",
      "Concrete (80-lb Bags)": "Concreto (Bolsas de 80 lb)",
      "Miter Saw Swivel Angle": "Ángulo de Giro de Inglete",
      "Blade Bevel Tilt Angle": "Ángulo de Inclinación de Bisel",
      "Nested Fence Miter": "Inglete Anidado en Guía",
      "Complementary Angle": "Ángulo Complementario",
      "Center Deflection (Sag)": "Deflexión Central (Flecha)",
      "Max Invisible Limit": "Límite Máximo Invisible",
      "Bare Shelf Sag (No Lip)": "Flecha Sin Borde Frontal",
      "Load Per Linear Foot": "Carga por Pie Lineal"
    },
    fr: {
      "Calculators": "Calculateurs",
      "Shop Guides": "Guides d'Atelier",
      "Lumber Chart": "Tableau du Bois",
      "About": "À Propos",
      "Contact": "Contact",
      "Home": "Accueil",
      "Calculate Stringer Blueprint": "Calculer le Limon d'Escalier",
      "Calculate Wall Layout": "Calculer le Calepinage Mural",
      "Calculate Even Spacing": "Calculer l'Espacement Égal",
      "Optimize Sheet Cut List": "Optimiser la Feuille de Débit",
      "Calculate Board Feet": "Calculer les Pieds-Planche",
      "Calculate Wall Framing": "Calculer l'Ossature Murale",
      "Calculate Deck Materials": "Calculer la Terrasse",
      "Calculate Fence Materials": "Calculer la Clôture",
      "Calculate Miter & Bevel Angles": "Calculer Onglet et Biseau",
      "Calculate Shelf Deflection": "Calculer la Flèche d'Étagère",
      "📷 Download Blueprint PNG": "📷 Télécharger le Plan PNG",
      "🖨️ Print Jobsite Cut Sheet": "🖨️ Imprimer la Fiche de Coupe",
      "🔗 Copy Shareable Link": "🔗 Copier le Lien du Projet",
      "Equal Riser Height": "Hauteur de Contremarche",
      "Bottom Cut Riser": "1re Contremarche Coupée",
      "Total Horizontal Run": "Reculement Horizontal Total",
      "Stringer Board Length": "Longueur du Limon 2x12",
      "2x12 Throat Remaining": "Gorge Restante 2x12",
      "Step Diagonal Mark": "Pas Diagonal sur Équerre",
      "Inside Panel Opening": "Ouverture Intérieure",
      "On-Center (OC) Step": "Entraxe (Centre à Centre)",
      "Vertical Battens Needed": "Battes Verticales Requises",
      "Clear Gap Between Items": "Espacement Libre (Vide)",
      "Sheets Required": "Panneaux Requis",
      "Material Yield": "Rendement Matière",
      "Net Board Feet": "Pieds-Planche Nets",
      "Total Studs to Order": "Total des Montants",
      "Miter Saw Swivel Angle": "Angle d'Onglet (Table)",
      "Blade Bevel Tilt Angle": "Angle de Biseau (Lame)",
      "Center Deflection (Sag)": "Flèche Centrale"
    },
    de: {
      "Calculators": "Rechner",
      "Shop Guides": "Werkstatt-Guides",
      "Lumber Chart": "Holz-Tabelle",
      "About": "Über uns",
      "Contact": "Kontakt",
      "Home": "Startseite",
      "Calculate Stringer Blueprint": "Treppenwange Berechnen",
      "Calculate Wall Layout": "Wandaufteilung Berechnen",
      "Calculate Even Spacing": "Gleiche Abstände Berechnen",
      "Optimize Sheet Cut List": "Plattenzuschnitt Optimieren",
      "Calculate Board Feet": "Holzvolumen Berechnen",
      "Calculate Wall Framing": "Ständerwand Berechnen",
      "Calculate Deck Materials": "Terrassenholz Berechnen",
      "Calculate Fence Materials": "Zaunmaterial Berechnen",
      "Calculate Miter & Bevel Angles": "Gehrung & Neigung Berechnen",
      "Calculate Shelf Deflection": "Regaldurchbiegung Berechnen",
      "📷 Download Blueprint PNG": "📷 Bauplan als PNG Laden",
      "🖨️ Print Jobsite Cut Sheet": "🖨️ Zuschnittliste Drucken",
      "🔗 Copy Shareable Link": "🔗 Projekt-Link Kopieren",
      "Equal Riser Height": "Steigungshöhe (Stufe)",
      "Bottom Cut Riser": "Unterer Antritt-Schnitt",
      "Total Horizontal Run": "Gesamte Lauflänge",
      "Stringer Board Length": "Wangenlänge (2x12)",
      "2x12 Throat Remaining": "Rest-Wangenstärke",
      "Clear Gap Between Items": "Lichter Abstand",
      "Sheets Required": "Benötigte Platten",
      "Material Yield": "Materialausbeute",
      "Miter Saw Swivel Angle": "Gehrungswinkel",
      "Blade Bevel Tilt Angle": "Neigungswinkel (Sägeblatt)",
      "Center Deflection (Sag)": "Mittige Durchbiegung"
    },
    pt: {
      "Calculators": "Calculadoras",
      "Shop Guides": "Guias de Oficina",
      "Lumber Chart": "Tabela de Madeiras",
      "About": "Sobre",
      "Contact": "Contato",
      "Home": "Início",
      "Calculate Stringer Blueprint": "Calcular Escada",
      "Calculate Wall Layout": "Calcular Painel ripado",
      "Calculate Even Spacing": "Calcular Espaçamento",
      "Optimize Sheet Cut List": "Otimizar Plano de Corte",
      "📷 Download Blueprint PNG": "📷 Baixar Planta PNG",
      "🖨️ Print Jobsite Cut Sheet": "🖨️ Imprimir Folha de Corte",
      "🔗 Copy Shareable Link": "🔗 Copiar Link do Projeto"
    },
    hi: {
      "Calculators": "कैलकुलेटर (Tools)",
      "Shop Guides": "कार्पेंट्री गाइड्स",
      "Lumber Chart": "लकड़ी साइज चार्ट",
      "About": "हमारे बारे में",
      "Contact": "संपर्क करें",
      "Home": "होम",
      "Calculate Stringer Blueprint": "सीढ़ी स्ट्रिंगर ब्लूप्रिंट बनाएं",
      "Calculate Wall Layout": "वॉल पैनल लेआउट गणना करें",
      "Calculate Even Spacing": "बराबर दूरी (Spacing) निकालें",
      "Optimize Sheet Cut List": "प्लाईवुड कट-लिस्ट ऑप्टिमाइज़ करें",
      "Calculate Board Feet": "बोर्ड फीट और कीमत निकालें",
      "Calculate Wall Framing": "वॉल स्टड फ्रेमिंग निकालें",
      "Calculate Deck Materials": "डेक बोर्ड सामग्री निकालें",
      "Calculate Fence Materials": "फेंस पोस्ट और कंक्रीट निकालें",
      "Calculate Miter & Bevel Angles": "माइटर और बेवल कोण निकालें",
      "Calculate Shelf Deflection": "शेल्फ का झुकाव (Sag) जांचें",
      "📷 Download Blueprint PNG": "📷 ब्लूप्रिंट PNG डाउनलोड करें",
      "🖨️ Print Jobsite Cut Sheet": "🖨️ कट-शीट प्रिंट करें",
      "🔗 Copy Shareable Link": "🔗 प्रोजेक्ट लिंक कॉपी करें",
      "Equal Riser Height": "प्रत्येक सीढ़ी की ऊंचाई (Riser)",
      "Bottom Cut Riser": "पहली सीढ़ी का निचला कट",
      "Total Horizontal Run": "कुल क्षैतिज लंबाई (Total Run)",
      "Stringer Board Length": "स्ट्रिंगर बोर्ड की लंबाई",
      "2x12 Throat Remaining": "बची हुई मजबूती (Throat)",
      "Clear Gap Between Items": "दो पट्टियों के बीच खाली जगह",
      "On-Center (OC) Spacing": "सेंटर-टू-सेंटर दूरी (OC)",
      "Sheets Required": "कुल प्लाईवुड शीट्स",
      "Material Yield": "शीट उपयोग प्रतिशत",
      "Net Board Feet": "कुल बोर्ड फीट (Net BDFT)",
      "Estimated Lumber Cost": "अनुमानित लकड़ी लागत"
    },
    ja: {
      "Calculators": "計算ツール",
      "Shop Guides": "木工ガイド",
      "Lumber Chart": "木材寸法表",
      "About": "概要",
      "Contact": "お問い合わせ",
      "Home": "ホーム",
      "📷 Download Blueprint PNG": "📷 図面PNGをダウンロード",
      "🖨️ Print Jobsite Cut Sheet": "🖨️ カット表を印刷",
      "🔗 Copy Shareable Link": "🔗 共有リンクをコピー"
    },
    ar: {
      "Calculators": "الحاسبات الهندسية",
      "Shop Guides": "أدلة النجارة",
      "Lumber Chart": "جدول مقاسات الخشب",
      "About": "من نحن",
      "Contact": "اتصل بنا",
      "Home": "الرئيسية",
      "📷 Download Blueprint PNG": "📷 تحميل المخطط PNG",
      "🖨️ Print Jobsite Cut Sheet": "🖨️ طباعة جدول القص",
      "🔗 Copy Shareable Link": "🔗 نسخ رابط المشروع"
    }
  };

  var PS = {
    unitMode: localStorage.getItem("ps_unit_mode") || "imperial", // 'imperial' | 'metric'
    lang: localStorage.getItem("ps_lang") || "en",
    googleTranslateApiKey: localStorage.getItem("ps_gtranslate_api_key") || "",

    /* Convert decimal inches to nearest 1/16" (or 1/32") tape-measure string */
    toFraction: function (inches, denom) {
      denom = denom || 16;
      if (!isFinite(inches)) return "—";
      var neg = inches < 0 ? "-" : "";
      var val = Math.abs(inches);
      var whole = Math.floor(val + 1e-9);
      var rem = val - whole;
      var num = Math.round(rem * denom);
      if (num === denom) {
        whole += 1;
        num = 0;
      }
      if (num === 0) return neg + whole + '"';
      var g = gcd(num, denom);
      var n = num / g;
      var d = denom / g;
      return neg + (whole > 0 ? whole + " " : "") + n + "/" + d + '"';
    },

    /* Convert decimal inches to Feet + Fractional Inches (or Meters in Metric Mode) */
    toFeetInches: function (inches, denom) {
      denom = denom || 16;
      if (!isFinite(inches)) return "—";
      if (PS.unitMode === "metric") {
        var mm = inches * 25.4;
        return (mm / 1000).toFixed(2) + " m (" + Math.round(mm) + " mm)";
      }
      var totalSixteenths = Math.round(Math.abs(inches) * denom);
      var totalIn = totalSixteenths / denom;
      var ft = Math.floor(totalIn / 12 + 1e-9);
      var remIn = totalIn - ft * 12;
      if (ft === 0) return PS.toFraction(remIn, denom);
      return ft + "' " + PS.toFraction(remIn, denom);
    },

    /* Format a length (stored internally in inches) according to active unit mode */
    fmtLen: function (inches, denom) {
      if (!isFinite(inches)) return "—";
      if (PS.unitMode === "metric") {
        var mm = inches * 25.4;
        if (Math.abs(mm) >= 1000) {
          return (mm / 1000).toFixed(3) + " m (" + Math.round(mm) + " mm)";
        }
        return Math.round(mm) + " mm";
      }
      return PS.toFraction(inches, denom || 16);
    },

    /* Format dual output: e.g., 14 3/16" (360 mm) */
    fmtDual: function (inches, denom) {
      if (!isFinite(inches)) return "—";
      var frac = PS.toFraction(inches, denom || 16);
      var mm = Math.round(inches * 25.4);
      return PS.unitMode === "metric"
        ? mm + " mm (" + frac + ")"
        : frac + " (" + mm + " mm)";
    },

    /* Parse user input string that may be decimal ("14.375") or fraction ("14 3/8") */
    parseFrac: function (str) {
      if (typeof str === "number") return str;
      str = String(str || "").trim().replace(/"|in|mm|cm/gi, "").trim();
      if (!str) return 0;
      var parts = str.split(/\s+/);
      if (parts.length === 2 && parts[1].indexOf("/") > -1) {
        var whole = parseFloat(parts[0]) || 0;
        var f = parts[1].split("/");
        var frac = (parseFloat(f[0]) || 0) / (parseFloat(f[1]) || 1);
        return whole >= 0 ? whole + frac : whole - frac;
      }
      if (str.indexOf("/") > -1) {
        var f2 = str.split("/");
        return (parseFloat(f2[0]) || 0) / (parseFloat(f2[1]) || 1);
      }
      return parseFloat(str) || 0;
    },

    /* Toast notification */
    toast: function (msg) {
      var old = document.querySelector(".ps-toast");
      if (old) old.remove();
      var el = document.createElement("div");
      el.className = "ps-toast";
      el.textContent = msg;
      document.body.appendChild(el);
      setTimeout(function () {
        if (el.parentNode) el.remove();
      }, 2800);
    },

    /* Switch global unit mode */
    setUnitMode: function (mode) {
      PS.unitMode = mode === "metric" ? "metric" : "imperial";
      try {
        localStorage.setItem("ps_unit_mode", PS.unitMode);
      } catch (e) {}
      document.querySelectorAll(".unit-btn").forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-unit") === PS.unitMode);
      });
      if (typeof window.onPSUnitChange === "function") {
        window.onPSUnitChange(PS.unitMode);
      }
      if (PS.lang !== "en") {
        PS.applyDictionary(PS.lang);
      }
    },

    /* Apply instant built-in dictionary + optional Google Cloud Translate API v2 + Google Website Widget */
    applyDictionary: function (lang) {
      var selector = ".nav-links a, .breadcrumb a, .btn-primary, .action-btn, .kpi-label, .site-footer h4";
      var els = document.querySelectorAll(selector);
      if (!els || !els.forEach) return;
      els.forEach(function (el) {
        var orig = el.getAttribute("data-en-orig");
        if (!orig) {
          orig = (el.textContent || "").trim();
          el.setAttribute("data-en-orig", orig);
        }
        if (lang === "en") {
          el.textContent = orig;
        } else if (I18N_DICT[lang] && I18N_DICT[lang][orig]) {
          el.textContent = I18N_DICT[lang][orig];
        }
      });
    },

    /* Translate full page content using Google Cloud Translation API v2 if API key is provided */
    translateWithGoogleCloudApi: function (targetLang) {
      var apiKey = PS.googleTranslateApiKey || window.PS_GOOGLE_TRANSLATE_API_KEY || "";
      if (!apiKey || targetLang === "en" || typeof fetch !== "function") return;

      var blocks = document.querySelectorAll(
        "h1, h2, h3, .panel-title span:first-child, .field-help, article.guide-content p, article.guide-content li, .faq-list summary"
      );
      if (!blocks || !blocks.length) return;

      var toTranslate = [];
      var nodes = [];
      blocks.forEach(function (node) {
        if (node.closest(".svg-stage") || node.closest(".mono")) return;
        var orig = node.getAttribute("data-en-orig");
        if (!orig) {
          orig = (node.innerHTML || "").trim();
          node.setAttribute("data-en-orig", orig);
        }
        if (orig && toTranslate.length < 60) {
          toTranslate.push(orig);
          nodes.push(node);
        }
      });

      if (!toTranslate.length) return;

      fetch("https://translation.googleapis.com/language/translate/v2?key=" + encodeURIComponent(apiKey), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: toTranslate,
          source: "en",
          target: targetLang,
          format: "html"
        })
      })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && data.data && data.data.translations) {
            data.data.translations.forEach(function (tr, i) {
              if (nodes[i] && tr.translatedText) {
                nodes[i].innerHTML = tr.translatedText;
              }
            });
            PS.toast("🌐 Translated via Google Cloud Translation API (" + targetLang.toUpperCase() + ")");
          } else if (data && data.error) {
            PS.toast("⚠️ Google API Key Error: " + (data.error.message || "Check key"));
          }
        })
        .catch(function () {});
    },

    /* Trigger free Google Website Translator widget if loaded */
    triggerGoogleWidget: function (lang) {
      try {
        document.cookie = "googtrans=/en/" + lang + "; path=/";
        var combo = document.querySelector(".goog-te-combo");
        if (combo) {
          combo.value = lang;
          combo.dispatchEvent(new Event("change"));
        }
      } catch (e) {}
    },

    /* Toggle compact corner language dropdown menu */
    toggleLangMenu: function (ev) {
      if (ev && ev.stopPropagation) ev.stopPropagation();
      var menu = document.getElementById("psLangMenu");
      if (menu) menu.classList.toggle("open");
    },

    /* Switch active language via buttons */
    setLanguage: function (lang) {
      PS.lang = lang || "en";
      try {
        localStorage.setItem("ps_lang", PS.lang);
      } catch (e) {}

      if (document.documentElement) {
        document.documentElement.lang = PS.lang;
        document.documentElement.dir = PS.lang === "ar" ? "rtl" : "ltr";
      }

      var curLbl = document.getElementById("psCurLangLabel");
      if (curLbl) curLbl.textContent = PS.lang.toUpperCase();
      var menu = document.getElementById("psLangMenu");
      if (menu && menu.classList) menu.classList.remove("open");
      var btns = document.querySelectorAll(".lang-btn");
      if (btns && btns.forEach) {
        btns.forEach(function (b) {
          b.classList.toggle("active", b.getAttribute("data-lang") === PS.lang);
        });
      }

      // Restore original HTML blocks if switching back to English
      if (PS.lang === "en") {
        var restored = document.querySelectorAll("[data-en-orig]");
        if (restored && restored.forEach) {
          restored.forEach(function (node) {
            if (node.tagName === "P" || node.tagName === "LI" || node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3") {
              node.innerHTML = node.getAttribute("data-en-orig");
            }
          });
        }
      }

      PS.applyDictionary(PS.lang);
      PS.triggerGoogleWidget(PS.lang);
      if (PS.lang !== "en") {
        PS.translateWithGoogleCloudApi(PS.lang);
      }
    },

    /* Modal to configure Google Cloud Translation API Key */
    openTranslateApiModal: function () {
      var m = document.getElementById("psLangMenu"); if (m && m.classList) m.classList.remove("open");
      var existing = document.getElementById("psApiModal");
      if (existing) existing.remove();

      var modal = document.createElement("div");
      modal.id = "psApiModal";
      modal.className = "ps-modal-backdrop";
      var curKey = PS.googleTranslateApiKey || "";
      modal.innerHTML =
        '<div class="ps-modal-card">' +
        '<div class="ps-modal-head"><span>🔑 Google Translate API Key Setup</span><button type="button" class="ps-modal-close" id="psModalCloseBtn">✕</button></div>' +
        '<p style="font-size:0.86rem;color:#4b5563;margin-bottom:10px">PlumbSquare includes an <strong>instant built-in 8-language workshop translator</strong> plus automatic <strong>Google Website Translator</strong> support. To enable full-article neural translation via <strong>Google Cloud Translation API v2</strong>, paste your API key below:</p>' +
        '<label style="font-size:0.82rem;font-weight:700;color:#111827;display:block;margin-bottom:4px">Google Cloud Translation API Key (v2):</label>' +
        '<input type="text" id="psApiKeyInput" value="' + curKey.replace(/"/g, "&quot;") + '" placeholder="AIzaSyYourGoogleTranslateAPIKey..." style="width:100%;padding:9px 11px;border:1.5px solid #d1d5db;border-radius:8px;font-family:monospace;font-size:0.86rem;margin-bottom:12px">' +
        '<div style="display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap">' +
        '<button type="button" class="action-btn" id="psModalClearBtn">Clear Key</button>' +
        '<button type="button" class="action-btn primary" id="psModalSaveBtn">💾 Save & Activate API Key</button>' +
        '</div>' +
        '</div>';
      document.body.appendChild(modal);

      document.getElementById("psModalCloseBtn").onclick = function () { modal.remove(); };
      document.getElementById("psModalClearBtn").onclick = function () {
        PS.googleTranslateApiKey = "";
        try { localStorage.removeItem("ps_gtranslate_api_key"); } catch (e) {}
        document.getElementById("psApiKeyInput").value = "";
        PS.toast("🗑️ Cleared Google Translate API Key (using built-in instant translator).");
        modal.remove();
      };
      document.getElementById("psModalSaveBtn").onclick = function () {
        var val = (document.getElementById("psApiKeyInput").value || "").trim();
        PS.googleTranslateApiKey = val;
        try { localStorage.setItem("ps_gtranslate_api_key", val); } catch (e) {}
        modal.remove();
        PS.toast("✅ Google Translate API Key saved! Click any language button to translate.");
        if (PS.lang !== "en") PS.translateWithGoogleCloudApi(PS.lang);
      };
    },

    /* Load URL query parameters into form inputs (#id) */
    loadUrlParams: function () {
      var params = new URLSearchParams(window.location.search);
      var loaded = false;
      params.forEach(function (val, key) {
        if (key === "unit" && (val === "imperial" || val === "metric")) {
          PS.unitMode = val;
          return;
        }
        if (key === "lang") {
          PS.lang = val;
          return;
        }
        var el = document.getElementById(key);
        if (el && (el.tagName === "INPUT" || el.tagName === "SELECT")) {
          if (el.type === "checkbox") el.checked = val === "1" || val === "true";
          else el.value = val;
          loaded = true;
        }
      });
      return loaded;
    },

    /* Copy shareable permalink with current calculator inputs */
    copyShareLink: function () {
      var params = new URLSearchParams();
      params.set("unit", PS.unitMode);
      if (PS.lang && PS.lang !== "en") params.set("lang", PS.lang);
      document.querySelectorAll(".calc-workspace input, .calc-workspace select").forEach(function (el) {
        if (!el.id) return;
        if (el.type === "checkbox") params.set(el.id, el.checked ? "1" : "0");
        else if (el.value !== "") params.set(el.id, el.value);
      });
      var url = window.location.origin + window.location.pathname + "?" + params.toString();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function () {
          PS.toast("✅ Shareable project link copied to clipboard!");
        });
      } else {
        window.prompt("Copy your project link:", url);
      }
    },

    /* Render current SVG diagram + KPIs + Cut List into a high-res PNG shop card */
    exportBlueprintPNG: function (toolTitle) {
      var svgEl = document.querySelector(".svg-stage svg");
      var kpis = [];
      document.querySelectorAll(".kpi-card").forEach(function (c) {
        var lbl = c.querySelector(".kpi-label");
        var val = c.querySelector(".kpi-val");
        var sub = c.querySelector(".kpi-sub");
        if (lbl && val) {
          kpis.push({
            label: lbl.textContent.trim(),
            value: val.textContent.trim(),
            sub: sub ? sub.textContent.trim() : ""
          });
        }
      });

      var rows = [];
      var table = document.querySelector(".calc-workspace table.data-table");
      if (table) {
        table.querySelectorAll("tr").forEach(function (tr, idx) {
          if (idx > 10) return;
          var cells = [];
          tr.querySelectorAll("th, td").forEach(function (td) {
            cells.push(td.textContent.trim());
          });
          if (cells.length) rows.push(cells);
        });
      }

      var canvas = document.createElement("canvas");
      var W = 1200;
      var tableH = rows.length ? 48 + rows.length * 34 : 0;
      var H = 640 + tableH;
      canvas.width = W;
      canvas.height = H;
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = "#0f1e36";
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = "rgba(96, 165, 250, 0.12)";
      ctx.lineWidth = 1;
      for (var gx = 0; gx < W; gx += 25) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke();
      }
      for (var gy = 0; gy < H; gy += 25) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
      }

      ctx.fillStyle = "#172e5c";
      ctx.fillRect(0, 0, W, 78);
      ctx.fillStyle = "#fbbf24";
      ctx.fillRect(0, 75, W, 3);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 26px system-ui, -apple-system, sans-serif";
      ctx.fillText("PLUMBSQUARE · JOBSITE CUT & LAYOUT SHEET", 32, 48);

      ctx.fillStyle = "#fbbf24";
      ctx.font = "bold 18px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(toolTitle || document.title.split("–")[0].trim(), W - 32, 48);
      ctx.textAlign = "left";

      var kx = 32, ky = 104;
      kpis.slice(0, 6).forEach(function (k, idx) {
        var col = idx % 2;
        var row = Math.floor(idx / 2);
        var bx = kx + col * 220;
        var by = ky + row * 94;
        ctx.fillStyle = "rgba(255,255,255,0.07)";
        ctx.strokeStyle = "rgba(147,197,253,0.35)";
        ctx.lineWidth = 1.5;
        ctx.fillRect(bx, by, 206, 82);
        ctx.strokeRect(bx, by, 206, 82);

        ctx.fillStyle = "#93c5fd";
        ctx.font = "bold 12px system-ui, sans-serif";
        ctx.fillText(k.label.toUpperCase().slice(0, 26), bx + 12, by + 24);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 22px monospace";
        ctx.fillText(k.value.slice(0, 16), bx + 12, by + 52);

        if (k.sub) {
          ctx.fillStyle = "#d1d5db";
          ctx.font = "11px system-ui, sans-serif";
          ctx.fillText(k.sub.slice(0, 28), bx + 12, by + 71);
        }
      });

      function finishAndDownload() {
        if (rows.length) {
          var ty = 420;
          ctx.fillStyle = "#fbbf24";
          ctx.font = "bold 16px system-ui, sans-serif";
          ctx.fillText("TAPE-MEASURE HOOK MARKS / CUT SCHEDULE", 32, ty - 12);
          var colW = Math.floor((W - 64) / (rows[0].length || 1));
          rows.forEach(function (r, rIdx) {
            var ry = ty + rIdx * 32;
            ctx.fillStyle = rIdx === 0 ? "#1e3a8a" : (rIdx % 2 === 0 ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.1)");
            ctx.fillRect(32, ry, W - 64, 30);
            ctx.fillStyle = rIdx === 0 ? "#fbbf24" : "#f3f4f6";
            ctx.font = (rIdx === 0 ? "bold 13px " : "13px ") + "monospace";
            r.forEach(function (cell, cIdx) {
              ctx.fillText(String(cell).slice(0, 28), 44 + cIdx * colW, ry + 20);
            });
          });
        }

        ctx.fillStyle = "#93c5fd";
        ctx.font = "13px system-ui, sans-serif";
        ctx.fillText("Generated free on PlumbSquare · Verify all measurements on-site before cutting lumber.", 32, H - 18);

        var a = document.createElement("a");
        var slug = (location.pathname.split("/").pop() || "blueprint").replace(/\.html$/, "");
        a.download = "plumbsquare-" + slug + "-plan.png";
        a.href = canvas.toDataURL("image/png");
        a.click();
        PS.toast("📷 Jobsite Blueprint PNG downloaded!");
      }

      if (svgEl) {
        var xml = new XMLSerializer().serializeToString(svgEl);
        var svg64 = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);
        var img = new Image();
        img.onload = function () {
          ctx.drawImage(img, 485, 100, 680, 290);
          finishAndDownload();
        };
        img.onerror = finishAndDownload;
        img.src = svg64;
      } else {
        finishAndDownload();
      }
    }
  };

  window.PS = PS;

  /* Google Website Translator Callback */
  window.googleTranslateElementInit = function () {
    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,es,fr,de,pt,hi,ja,ar", autoDisplay: false },
        "google_translate_element"
      );
    }
  };

  document.addEventListener("click", function (e) {
    var m = document.getElementById("psLangMenu");
    if (m && m.classList && m.classList.contains("open")) {
      if (!e.target || !e.target.closest || !e.target.closest(".lang-dropdown-wrap")) m.classList.remove("open");
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".unit-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-unit") === PS.unitMode);
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === PS.lang);
    });
    if (PS.lang && PS.lang !== "en") {
      PS.setLanguage(PS.lang);
    }
  });
})();
