(self["webpackChunkapp_react"] = self["webpackChunkapp_react"] || []).push([[8792],{

/***/ 99759:
/***/ (function() {

(function (a, s, y, n, c, h, i, d, e) {
  s.className += ' ' + y;
  h.start = 1 * new Date();
  h.end = i = function i() {
    s.className = s.className.replace(RegExp(' ?' + y), '');
  };
  (a[n] = a[n] || []).hide = h;
  setTimeout(function () {
    i();
    h.end = null;
  }, c);
  h.timeout = c;
})(window, document.documentElement, 'async-hide', 'dataLayer', 4000, {
  'GTM-W8VM27R': true
});
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-Z1N982VMBK');

/***/ }),

/***/ 75456:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
;// ../../libs/utils/src/session-timeout/index.ts
const STORAGE_KEY = 'lastActiveAt';
const SESSION_INACTIVITY_LIMIT = 4 * 60 * 60 * 1000; // 4 hours
function updateLastActive() {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
}
function initActivityListeners() {
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach((ev) => {
        window.addEventListener(ev, updateLastActive);
    });
    // initialize now
    updateLastActive();
}
function hasSessionExpired() {
    const last = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    return Date.now() - last > SESSION_INACTIVITY_LIMIT;
}

// EXTERNAL MODULE: ../../libs/config/src/firebase.ts
var firebase = __webpack_require__(70035);
;// ../../libs/hooks/src/use-session-timeout.ts



function useSessionTimeout() {
    (0,react.useEffect)(() => {
        initActivityListeners();
        const interval = setInterval(async () => {
            if (hasSessionExpired()) {
                console.warn('Session expired due to inactivity');
                await firebase/* auth */.j2.signOut();
            }
        }, 15_000);
        return () => clearInterval(interval);
    }, []);
}

// EXTERNAL MODULE: ../../libs/stores/src/providers/root-store-provider.tsx + 1 modules
var root_store_provider = __webpack_require__(85113);
// EXTERNAL MODULE: ../../libs/utils/src/i18n.ts
var i18n = __webpack_require__(29581);
// EXTERNAL MODULE: ../../node_modules/@tanstack/query-core/build/modern/queryClient.js + 3 modules
var queryClient = __webpack_require__(9643);
// EXTERNAL MODULE: ../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(93402);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ../../node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(47304);
// EXTERNAL MODULE: ../../node_modules/i18next-http-backend/esm/index.js + 2 modules
var esm = __webpack_require__(8486);
// EXTERNAL MODULE: ../../node_modules/posthog-js/react/dist/esm/index.js
var dist_esm = __webpack_require__(75267);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(25873);
// EXTERNAL MODULE: ../../node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(97434);
// EXTERNAL MODULE: ./src/hoc/JsInsert/thirdPartServices.js
var thirdPartServices = __webpack_require__(99759);
// EXTERNAL MODULE: ../../node_modules/@amplitude/analytics-browser/lib/esm/index.js + 70 modules
var lib_esm = __webpack_require__(55818);
// EXTERNAL MODULE: ../../node_modules/@amplitude/analytics-core/lib/esm/identify.js
var identify = __webpack_require__(3990);
// EXTERNAL MODULE: ../../libs/constants/src/index.ts + 30 modules
var src = __webpack_require__(67559);
// EXTERNAL MODULE: ../../libs/utils/src/cookie.ts
var cookie = __webpack_require__(34551);
// EXTERNAL MODULE: ../../libs/utils/src/ls-available.ts
var ls_available = __webpack_require__(98946);
// EXTERNAL MODULE: ../../node_modules/dynamic-polyfill/index.js
var dynamic_polyfill = __webpack_require__(5789);
var dynamic_polyfill_default = /*#__PURE__*/__webpack_require__.n(dynamic_polyfill);
;// ./src/hoc/JsInsert/index.js








if (false) // removed by dead control flow
{}
__webpack_require__.e(/* import() */ 8084).then(__webpack_require__.bind(__webpack_require__, 88084));
function InsertJs() {
  var anchorForScript = (0,react.useRef)(null);
  function dynamicPolyfill() {
    var cssVars = {
      test: ((window || {}).CSS || {}).supports && window.CSS.supports('(--a: 0)'),
      config: {
        watch: true,
        updateURLs: false,
        onComplete: function onComplete() {
          setTimeout(function () {
            return document.body.style.visibility = 'visible';
          }, 10);
        }
      }
    };
    ['Array.from'].length && dynamic_polyfill_default()({
      fills: ['Array.from'],
      rum: false,
      afterFill: function afterFill() {
        return null;
      }
    });

    // Custom polyfill for CSS Variables
    if (!cssVars.test) {
      __webpack_require__.e(/* import() | css-vars-ponyfill */ 3811).then(__webpack_require__.bind(__webpack_require__, 25770)).then(function (_ref) {
        var cssVarsPonyfill = _ref.default;
        document.body.style.visibility = 'hidden';
        cssVarsPonyfill(cssVars.config);
      });
    }
  }
  var initView = function initView() {
    if (!document.getElementById('fa')) {
      var _anchorForScript$curr;
      var script = document.createElement('script');
      script.async = true;
      script.id = 'fa';
      script.src = 'https://kit.fontawesome.com/f5adea20e2.js';
      script.crossorigin = 'anonymous';
      anchorForScript.current.appendChild(script);
      var scriptGoogle = document.createElement('script');
      scriptGoogle.async = true;
      scriptGoogle.id = 'ga';
      scriptGoogle.src = 'https://apis.google.com/js/api.js';
      anchorForScript.current.appendChild(scriptGoogle);
      var scriptGoogle2 = document.createElement('script');
      scriptGoogle2.async = true;
      scriptGoogle2.id = 'ga2';
      scriptGoogle2.src = 'https://accounts.google.com/gsi/client';
      (_anchorForScript$curr = anchorForScript.current) === null || _anchorForScript$curr === void 0 || _anchorForScript$curr.appendChild(scriptGoogle2);
      var isRms = !window.location.href.includes('app.rezi.ai') && "production" === 'production';
      lib_esm.init(isRms && "production" === 'production' ? '2e509b7a2dd6ae80cd99eed145a68c57' :  true ? '845d745c55d1b18da05a844624809b6b' : 0, '', {
        defaultTracking: false
      });
      lib_esm.track('Session start');
      var identifyEvent = new identify/* Identify */.T$();
      identifyEvent.set('realtimeSubscription', 'free');
      lib_esm.identify(identifyEvent);
      lib_esm.flush();
      dynamicPolyfill();
    }
  };
  var initPath = function initPath() {
    if (window.location.search.indexOf('partner=stackcommerce') > -1) {
      (0,cookie/* setCookie */.TV)('partner', 'stack-commerce', src/* ONE_YEAR */.$H);
    }
    if (window.location.search.indexOf('partner=dealify') > -1) {
      (0,cookie/* setCookie */.TV)('partner', 'dealify', src/* ONE_YEAR */.$H);
    }
    if (window.location.search.indexOf('coupon=') > -1) {
      var coupon = window.location.search.substr(window.location.search.indexOf('coupon=') + 7, window.location.search.substring(window.location.search.indexOf('coupon=') + 7, window.location.search.length).split('&')[0].length);
      (0,cookie/* setCookie */.TV)('rezicoupon', coupon, 2);
    }
    if (window.location.search.indexOf('invt=') > -1) {
      var invitationId = window.location.search.substring(window.location.search.indexOf('invt=') + 5, window.location.search.substring(window.location.search.indexOf('invt=') + 5, window.location.search.length).split('&')[0].length);
      (0,cookie/* setCookie */.TV)('invitation', invitationId, 2);
    }
    if (window.location.search.indexOf('tid') > -1) {
      var _url = window.location.href,
        name = 'tid',
        regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(_url),
        affiliateID = !results || !results[2] ? '' : decodeURIComponent(results[2].replace(/\+/g, ' '));
      if ((0,ls_available/* lsTest */.c)() === true) window.localStorage.setItem('affiliate-rezi-id', affiliateID);
    }

    //from linkedin extension
    if (window.location.search.indexOf('imp=linkedin') > -1) {
      //check if user from RMS
      var rmsNeedRedirect = (0,ls_available/* lsTest */.c)() === true ? window.localStorage.getItem('rmsKey') : null;
      if (rmsNeedRedirect && window.localStorage) {
        if ((0,ls_available/* lsTest */.c)() === true) window.localStorage.removeItem('rmsKey');
        window.location.href = "https://".concat(rmsNeedRedirect.replace(/"/g, ''), "?imp=linkedin");
      }
      if ((0,ls_available/* lsTest */.c)() === true) window.localStorage.setItem('imp-linkedin-rezi', 'true');
    }
    var url = window.location.pathname.split('/');
    if (url[1] === 'invite' || (0,ls_available/* lsTest */.c)() === true && window.localStorage.getItem('rf-rezi')) {
      if (url[1] === 'invite' && (0,ls_available/* lsTest */.c)() === true) {
        window.localStorage.setItem('rf-rezi', url[2]);
      }
    }
  };
  (0,react.useEffect)(function () {
    initView();
    initPath();
    if (true) {
      console.info = function () {};
    }
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    ref: anchorForScript
  });
}
;// ./src/utils/setup-history-listener.ts
/**
 * Patches window.history methods to dispatch custom 'urlchange' events
 * whenever the URL is changed programmatically via pushState or replaceState.
 * This allows React hooks to detect URL changes without using React Router.
 *
 * Call this once at app initialization.
 */
const setupHistoryListener = () => {
    // Store original methods
    const originalPushState = window.history.pushState.bind(window.history);
    const originalReplaceState = window.history.replaceState.bind(window.history);
    // Override pushState
    window.history.pushState = function (state, title, url) {
        originalPushState(state, title, url);
        window.dispatchEvent(new Event('urlchange'));
    };
    // Override replaceState
    window.history.replaceState = function (state, title, url) {
        originalReplaceState(state, title, url);
        window.dispatchEvent(new Event('urlchange'));
    };
};

;// ./src/index.js













// import './wdyr';

// Setup history listener for URL changes
setupHistoryListener();
i18next/* default.use */.Ay.use(esm/* default */.A).use(es/* initReactI18next */.r9).init(i18n/* i18nInitOptions */.T);
var container = document.getElementById('root');
var hasStaticContent = container.hasChildNodes();
var src_queryClient = new queryClient/* QueryClient */.E({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 0,
      cacheTime: 0
    }
  }
});
var PostHogProviderWrapper = function PostHogProviderWrapper(_ref) {
  var _process$env$POSTHOG_, _process$env$POSTHOG_2;
  var children = _ref.children;
  if (false) // removed by dead control flow
{}
  return /*#__PURE__*/react.createElement(dist_esm/* PostHogProvider */.so, {
    apiKey: (_process$env$POSTHOG_ = "phc_30W57cjU6y0mIT0wKmE7l1rUk4MzJNOGPadAuFBjeK4") !== null && _process$env$POSTHOG_ !== void 0 ? _process$env$POSTHOG_ : '',
    options: {
      api_host: (_process$env$POSTHOG_2 = "https://us.i.posthog.com") !== null && _process$env$POSTHOG_2 !== void 0 ? _process$env$POSTHOG_2 : 'https://us.i.posthog.com',
      defaults: '2026-01-03'
    }
  }, /*#__PURE__*/react.createElement(dist_esm/* PostHogErrorBoundary */.x4, null, children));
};
var App = /*#__PURE__*/react.lazy(function () {
  return __webpack_require__.e(/* import() */ 2101).then(__webpack_require__.bind(__webpack_require__, 82101)).then(function (module) {
    return {
      default: module.App
    };
  });
});
var shouldSkipThirdParty = window.__skipThirdParty === true || window.location.pathname.startsWith('/d/');
var AppWithErrorBoundary = function AppWithErrorBoundary() {
  useSessionTimeout();
  var Component = /*#__PURE__*/react.createElement(QueryClientProvider/* QueryClientProvider */.Ht, {
    client: src_queryClient
  }, !shouldSkipThirdParty && /*#__PURE__*/react.createElement(InsertJs, null), /*#__PURE__*/react.createElement(root_store_provider/* RootStoreProvider */.x, null, /*#__PURE__*/react.createElement(PostHogProviderWrapper, null, /*#__PURE__*/react.createElement("a", {
    className: (0,clsx/* default */.A)('skip-link absolute top-auto -left-[999px] h-[1px] w-[1px] overflow-hidden', 'focus:fixed focus:top-[1rem] focus:left-[1rem] focus:z-[9999] focus:h-auto focus:w-auto focus:rounded-[0.25rem] focus:border-[2px] focus:border-black focus:bg-white focus:p-[0.5rem_0.75rem] focus:text-black'),
    href: "#main-content"
  }, "Go to content"), /*#__PURE__*/react.createElement(App, null))));
  return Component;
};
if (hasStaticContent) {
  hydrateRoot(container, /*#__PURE__*/react.createElement(AppWithErrorBoundary, null));
} else {
  var root = (0,client.createRoot)(container);
  root.render(/*#__PURE__*/react.createElement(AppWithErrorBoundary, null));
}

/***/ }),

/***/ 70035:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IG: function() { return /* binding */ storage; },
/* harmony export */   db: function() { return /* binding */ db; },
/* harmony export */   j2: function() { return /* binding */ auth; }
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90826);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2491);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98569);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56384);
/* harmony import */ var _rezi_utils_constants_public_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82755);




// import {
//   initializeAppCheck,
//   ReCaptchaEnterpriseProvider,
// } from 'firebase/app-check';

const firebaseConfig = {
    apiKey: _rezi_utils_constants_public_keys__WEBPACK_IMPORTED_MODULE_4__/* .PUB_FIREBASE_API_KEY */ .Zl,
    authDomain: "app.rezi.ai",
    databaseURL: `https://${"rezi-3f268"}.firebaseio.com`,
    projectId: "rezi-3f268",
    storageBucket: "rezi-3f268.appspot.com",
    messagingSenderId: "924097261936",
    appId: "1:924097261936:web:b2e21c1d52450e49",
};
const app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .getApps */ .Dk)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .Wp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .getApp */ .Sx)();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__/* .initializeFirestore */ ._A)(app, {
    experimentalForceLongPolling: true,
});
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .c7)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .initializeAuth */ .Nu)(app, {
    persistence: [
        firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .indexedDBLocalPersistence */ .Gt,
        firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .browserLocalPersistence */ .F0,
        firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .browserSessionPersistence */ .iM,
    ],
    popupRedirectResolver: firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .browserPopupRedirectResolver */ .hk,
});
if (true) {
    // initializeAppCheck(app, {
    //   provider: new ReCaptchaEnterpriseProvider(process.env.RECAPTCHA_SITE_KEY),
    //   isTokenAutoRefreshEnabled: true,
    // });
}



/***/ }),

/***/ 67559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gG: function() { return /* reexport */ ACCOUNT_HIJACK_LOGGED_IN_KEY; },
  wE: function() { return /* reexport */ AlternativeLayout; },
  Hw: function() { return /* reexport */ AlternativePreset; },
  jc: function() { return /* reexport */ AppErrorMessagesEnum; },
  SE: function() { return /* reexport */ BoldLayout; },
  BU: function() { return /* reexport */ BoldPreset; },
  ay: function() { return /* reexport */ CompactLayout; },
  Bw: function() { return /* reexport */ CompactPreset; },
  vN: function() { return /* reexport */ HarvardLayout; },
  sX: function() { return /* reexport */ HarvardPreset; },
  qB: function() { return /* reexport */ HighlightCompactLayout; },
  nq: function() { return /* reexport */ HighlightCompactPreset; },
  t2: function() { return /* reexport */ HighlightLayout; },
  sv: function() { return /* reexport */ HighlightPreset; },
  i8: function() { return /* reexport */ HttpEnum; },
  m1: function() { return /* reexport */ JakeLayout; },
  rw: function() { return /* reexport */ JakePreset; },
  qo: function() { return /* reexport */ MAX_PASSWORD_LENGTH; },
  AG: function() { return /* reexport */ MIN_PASSWORD_LENGTH; },
  u0: function() { return /* reexport */ ModernLayout; },
  VU: function() { return /* reexport */ ModernPreset; },
  Lm: function() { return /* reexport */ NOTIFICATIONS; },
  $H: function() { return /* reexport */ ONE_YEAR; },
  $K: function() { return /* reexport */ PaywallFeaturesEnum; },
  aN: function() { return /* reexport */ ReziBasicMonthly; },
  zh: function() { return /* reexport */ ReziBasicQuarterly; },
  ee: function() { return /* reexport */ ReziFreePlan; },
  BR: function() { return /* reexport */ ReziFullLifetime; },
  nZ: function() { return /* reexport */ ReziLifetimePlan; },
  ev: function() { return /* reexport */ ReziPlusMonthly; },
  KU: function() { return /* reexport */ ReziPlusQuarterly; },
  Ar: function() { return /* reexport */ ReziProAnnually; },
  RM: function() { return /* reexport */ ReziProMonthly; },
  vQ: function() { return /* reexport */ ReziProPlan; },
  vk: function() { return /* reexport */ ReziProQuarterly; },
  Sy: function() { return /* reexport */ ReziSimpleLifetime; },
  Wx: function() { return /* reexport */ StandardLayout; },
  b2: function() { return /* reexport */ StandardPreset; },
  Oj: function() { return /* reexport */ getDefaultSampleCategories; },
  qx: function() { return /* reexport */ priceTable; },
  ii: function() { return /* reexport */ progressStates; }
});

// UNUSED EXPORTS: DEFAULT_TEMPLATE_ID, EMPTY_ARRAY, EMPTY_STRING, PaywallSubscriptionStatusEnum, RESTRICTED_COUNTRY_CODES, getPriceLabel

;// ../../libs/constants/src/constants/billing/billingPlans.ts
const ReziFreePlan = {
    id: 'prod_FfrohAFnsPcvLm',
    object: 'product',
    active: true,
    attributes: [],
    created: 1566541008,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan',
        features: '1 Resume',
        resumes: '1',
        interviews: '1',
        coverLetter: '0',
        resignationLetter: '0',
        docx: 'false',
        analyse: 'false',
        keyword: 'false',
        review: '0',
        proSample: 'false',
        unlock_templates: 'false',
        picture: 'false',
        ai_coverLetter: 'false',
        accessCover: 'false',
        download: 'false',
        credits: '0',
        ai_resume: 'false',
        agent: 'false',
    },
    name: 'Rezi Free',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591083965,
    plan: {
        id: 'plan_FfroNQtjGkZjYS',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 0,
        amount_decimal: '0',
        billing_scheme: 'per_unit',
        created: 1566541008,
        currency: 'usd',
        interval: 'month',
        interval_count: 1,
        livemode: true,
        metadata: {},
        nickname: 'Monthly',
        product: 'plan_FfroNQtjGkZjYS',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziProPlan = {
    id: 'prod_Ffroe6Ht43gZNJ',
    object: 'product',
    active: true,
    attributes: [],
    created: 1566541005,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan',
        features: 'Unlimited Resumes, 1 Review Per Month',
        resumes: '9999999999',
        interviews: '9999999999',
        unlock_templates: 'true',
        picture: 'true',
        coverLetter: '9999999999',
        resignationLetter: '9999999999',
        docx: 'true',
        analyse: 'true',
        keyword: 'true',
        review: '1',
        proSample: 'true',
        ai_coverLetter: 'true',
        accessCover: 'true',
        download: 'true',
        credits: '100k',
        ai_resume: 'true',
        agent: 'true',
    },
    name: 'Rezi Pro',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591084321,
    plan: {
        id: 'plan_G4ad8l1Pv8oVcw',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 900,
        amount_decimal: '900',
        billing_scheme: 'per_unit',
        created: 1572243124,
        currency: 'usd',
        interval: 'month',
        interval_count: 1,
        livemode: true,
        metadata: {},
        nickname: 'Monthly',
        product: 'prod_Ffroe6Ht43gZNJ',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziLifetimePlan = {
    id: 'prod_HObrDlBxT4ASyP',
    object: 'product',
    active: true,
    attributes: [],
    created: 1591160139,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan_v1.1',
        resumes: '9999999999',
        interviews: '9999999999',
        coverLetter: '9999999999',
        resignationLetter: '9999999999',
        unlock_templates: 'true',
        picture: 'true',
        docx: 'true',
        analyse: 'true',
        keyword: 'true',
        review: '0',
        proSample: 'true',
        ai_coverLetter: 'false',
        accessCover: 'true',
        download: 'true',
        credits: '0',
        ai_resume: 'false',
        agent: 'true',
    },
    name: 'Rezi Lifetime',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591174400,
    plan: {
        id: 'price_1GpqZmEd6K02KvTIaMwLhFBC',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 0,
        amount_decimal: '0',
        billing_scheme: 'per_unit',
        created: 1591167590,
        currency: 'usd',
        interval: 'year',
        interval_count: 1,
        livemode: true,
        metadata: {},
        nickname: 'Rezi Lifetime',
        product: 'prod_HObrDlBxT4ASyP',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziBasicQuarterly = {
    id: 'prod_HOD3Trk7tq86Ao',
    object: 'product',
    active: true,
    attributes: [],
    created: 1591067865,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan_v1.1',
        resumes: '1',
        interviews: '1',
        coverLetter: '0',
        resignationLetter: '0',
        docx: 'true',
        analyse: 'false',
        keyword: 'false',
        review: '0',
        proSample: 'false',
        unlock_templates: 'false',
        picture: 'false',
        ai_coverLetter: 'false',
        accessCover: 'false',
        download: 'true',
        credits: '0',
        ai_resume: 'false',
        agent: 'false',
    },
    name: 'Rezi Basic - Quarterly',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591170068,
    plan: {
        id: 'price_HOD32Nm8FThE3Q',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 600,
        amount_decimal: '600',
        billing_scheme: 'per_unit',
        created: 1591067866,
        currency: 'usd',
        interval: 'month',
        interval_count: 3,
        livemode: true,
        metadata: {},
        nickname: 'Rezi Basic - Quarterly',
        product: 'prod_HOD3Trk7tq86Ao',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziBasicMonthly = {
    id: 'prod_HOD2oLyIlY3ISl',
    object: 'product',
    active: true,
    attributes: [],
    created: 1591067815,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan_v1.1',
        resumes: '1',
        interviews: '1',
        coverLetter: '0',
        resignationLetter: '0',
        docx: 'true',
        analyse: 'false',
        keyword: 'false',
        review: '0',
        proSample: 'false',
        unlock_templates: 'false',
        picture: 'false',
        ai_coverLetter: 'false',
        accessCover: 'false',
        download: 'true',
        credits: '0',
        ai_resume: 'false',
        agent: 'false',
    },
    name: 'Rezi Basic - Monthly',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591083399,
    plan: {
        id: 'price_HOD2wWk5du5uz2',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 300,
        amount_decimal: '300',
        billing_scheme: 'per_unit',
        created: 1591067816,
        currency: 'usd',
        interval: 'month',
        interval_count: 1,
        livemode: true,
        metadata: {},
        nickname: 'Rezi Basic - Monthly',
        product: 'prod_HOD2oLyIlY3ISl',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziProQuarterly = {
    id: 'prod_Gkv3mbJHn5bWLs',
    object: 'product',
    active: true,
    attributes: [],
    created: 1582005964,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan_v1.1',
        resumes: '9999999999',
        interviews: '9999999999',
        coverLetter: '9999999999',
        resignationLetter: '9999999999',
        docx: 'true',
        analyse: 'true',
        keyword: 'true',
        review: '1',
        proSample: 'true',
        unlock_templates: 'true',
        picture: 'true',
        ai_writer: 'pro',
        ai_coverLetter: 'true',
        accessCover: 'true',
        download: 'true',
        credits: '100k',
        ai_resume: 'true',
        agent: 'true',
    },
    name: 'Rezi Pro - Quarterly',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591167370,
    plan: {
        id: 'plan_Gm1lqXelCF8zLY',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 8700,
        amount_decimal: '8700',
        billing_scheme: 'per_unit',
        created: 1582261520,
        currency: 'usd',
        interval: 'month',
        interval_count: 3,
        livemode: true,
        metadata: {},
        nickname: 'Rezi Pro - Quarterly',
        product: 'prod_Gkv3mbJHn5bWLs',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziProMonthly = {
    id: 'prod_Gkv2kacUL4E1br',
    object: 'product',
    active: true,
    attributes: [],
    created: 1582005906,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan_v1.1',
        resumes: '9999999999',
        interviews: '9999999999',
        coverLetter: '9999999999',
        resignationLetter: '9999999999',
        unlock_templates: 'true',
        picture: 'true',
        docx: 'true',
        analyse: 'true',
        keyword: 'true',
        review: '1',
        proSample: 'true',
        ai_writer: 'pro',
        ai_coverLetter: 'true',
        accessCover: 'true',
        download: 'true',
        credits: '100k',
        ai_resume: 'true',
        agent: 'true',
    },
    name: 'Rezi Pro - Monthly',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591083598,
    plan: {
        id: 'plan_Gkv3ysaZTULusA',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 2900,
        amount_decimal: '2900',
        billing_scheme: 'per_unit',
        created: 1582005924,
        currency: 'usd',
        interval: 'month',
        interval_count: 1,
        livemode: true,
        metadata: {},
        nickname: 'Rezi Pro - Monthly',
        product: 'prod_Gkv2kacUL4E1br',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziProAnnually = {
    id: 'prod_TEPRgTUr1PvucH',
    object: 'product',
    active: true,
    attributes: [],
    created: 1582005906,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan_v1.1',
        resumes: '9999999999',
        interviews: '9999999999',
        coverLetter: '9999999999',
        resignationLetter: '9999999999',
        unlock_templates: 'true',
        picture: 'true',
        docx: 'true',
        analyse: 'true',
        keyword: 'true',
        review: '1',
        proSample: 'true',
        ai_writer: 'pro',
        ai_coverLetter: 'true',
        accessCover: 'true',
        download: 'true',
        credits: '100k',
        ai_resume: 'true',
        agent: 'true',
    },
    name: 'Rezi Pro - Annually',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591083598,
    plan: {
        id: 'price_1SHxLhEd6K02KvTILZ4avBQi',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 14400,
        amount_decimal: '14400',
        billing_scheme: 'per_unit',
        created: 1582005924,
        currency: 'usd',
        interval: 'year',
        interval_count: 1,
        livemode: true,
        metadata: {},
        nickname: 'Rezi Pro - Annually',
        product: 'prod_TEPRgTUr1PvucH',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziPlusQuarterly = {
    id: 'prod_Gkuz8WI1tg4uNu',
    object: 'product',
    active: true,
    attributes: [],
    created: 1582005686,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan_v1.1',
        resumes: '999999999',
        interviews: '999999999',
        coverLetter: '999999999',
        resignationLetter: '9999999999',
        docx: 'true',
        analyse: 'false',
        keyword: 'false',
        review: '1',
        proSample: 'false',
        unlock_templates: 'true',
        picture: 'true',
        ai_coverLetter: 'true',
        accessCover: 'true',
        download: 'true',
        credits: '0',
        ai_resume: 'false',
        agent: 'false',
    },
    name: 'Rezi Plus - Quarterly',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591083764,
    plan: {
        id: 'plan_GkuzUFJiaQmxRX',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 2100,
        amount_decimal: '2100',
        billing_scheme: 'per_unit',
        created: 1582005714,
        currency: 'usd',
        interval: 'month',
        interval_count: 3,
        livemode: true,
        metadata: {},
        nickname: 'Rezi Plus - Quarterly',
        product: 'prod_Gkuz8WI1tg4uNu',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziPlusMonthly = {
    id: 'prod_GkrOZum7e3Grf8',
    object: 'product',
    active: true,
    attributes: [],
    created: 1581992332,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        resumes: '999999999',
        interviews: '999999999',
        features: 'Unlimited Resumes',
        unlock_templates: 'true',
        picture: 'true',
        type: 'plan_v1.1',
        coverLetter: '999999999',
        resignationLetter: '9999999999',
        docx: 'true',
        analyse: 'false',
        keyword: 'false',
        review: '1',
        proSample: 'false',
        ai_coverLetter: 'true',
        accessCover: 'true',
        download: 'true',
        credits: '0',
        ai_resume: 'false',
        agent: 'false',
    },
    name: 'Rezi Plus - Monthly',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1591083823,
    plan: {
        id: 'plan_GkrPTfjPh1N0yZ',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 900,
        amount_decimal: '900',
        billing_scheme: 'per_unit',
        created: 1581992389,
        currency: 'usd',
        interval: 'month',
        interval_count: 1,
        livemode: true,
        metadata: {},
        nickname: 'Rezi Plus Monthly',
        product: 'prod_GkrOZum7e3Grf8',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziFullLifetime = {
    id: 'prod_GGBWkTZPVR1NaL',
    object: 'product',
    active: true,
    attributes: [],
    created: 1574917391,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'plan-life-time',
        resumes: '9999999999',
        interviews: '9999999999',
        unlock_templates: 'true',
        picture: 'true',
        coverLetter: '9999999999',
        resignationLetter: '9999999999',
        docx: 'true',
        analyse: 'true',
        keyword: 'true',
        review: '1',
        proSample: 'true',
        features: 'Unlimited Resumes',
        ai_coverLetter: 'false',
        accessCover: 'true',
        download: 'true',
        credits: '100k',
        ai_resume: 'true',
        agent: 'true',
    },
    name: 'Rezi Full Lifetime',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1587366364,
    plan: {
        id: 'plan_GGBXUEEMKSjGUn',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 0,
        amount_decimal: '0',
        billing_scheme: 'per_unit',
        created: 1574917446,
        currency: 'usd',
        interval: 'year',
        interval_count: 1,
        livemode: true,
        metadata: {},
        nickname: 'Life-time',
        product: 'prod_GGBWkTZPVR1NaL',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};
const ReziSimpleLifetime = {
    id: 'prod_H8A2RqRTXRQMRW',
    object: 'product',
    active: true,
    attributes: [],
    created: 1587366411,
    description: '',
    images: [],
    livemode: true,
    metadata: {
        type: 'simple-life-time',
        resumes: '9999999999',
        interviews: '9999999999',
        unlock_templates: 'true',
        picture: 'true',
        coverLetter: '9999999999',
        resignationLetter: '9999999999',
        docx: 'true',
        analyse: 'true',
        keyword: 'true',
        review: '0',
        proSample: 'true',
        features: 'Unlimited Resumes',
        ai_coverLetter: 'false',
        accessCover: 'true',
        download: 'true',
        credits: '0',
        ai_resume: 'false',
        agent: 'true',
    },
    name: 'Rezi Simple Lifetime',
    statement_descriptor: null,
    type: 'service',
    unit_label: null,
    updated: 1587448844,
    plan: {
        id: 'plan_H8A3goj44Vv3Hu',
        object: 'plan',
        active: true,
        aggregate_usage: null,
        amount: 0,
        amount_decimal: '0',
        billing_scheme: 'per_unit',
        created: 1587366453,
        currency: 'usd',
        interval: 'month',
        interval_count: 1,
        livemode: true,
        metadata: {},
        nickname: 'Rezi Simple Lifetime',
        product: 'prod_H8A2RqRTXRQMRW',
        tiers: null,
        tiers_mode: null,
        transform_usage: null,
        trial_period_days: null,
        usage_type: 'licensed',
    },
};

;// ../../libs/constants/src/constants/billing/price-table.ts
const priceTable = {
    Quarterly: {
        Free: {
            price: 0,
            label: 'Free',
            value: 'prod_FfrohAFnsPcvLm',
            duration: 'forever',
            cycle: 'Quarterly',
        },
        Basic: {
            price: 2,
            label: 'Basic',
            value: 'prod_HOD3Trk7tq86Ao',
            duration: 'forever',
            cycle: 'Quarterly',
        },
        Plus: {
            price: 7,
            label: 'Plus',
            value: 'prod_Gkuz8WI1tg4uNu',
            duration: 'forever',
            cycle: 'Quarterly',
        },
        Pro: {
            price: 19,
            label: 'Pro',
            value: 'prod_Gkv3mbJHn5bWLs',
            duration: 'forever',
            cycle: 'Quarterly',
        },
        Lifetime: {
            price: 249,
            label: 'Lifetime',
            value: 'prod_HObrDlBxT4ASyP',
            duration: 'once',
            cycle: 'Lifetime',
        },
        OLD_Pro: {
            price: 29,
            label: 'Pro',
            value: 'prod_Gkv3mbJHn5bWLs',
            duration: 'forever',
            cycle: 'Quarterly',
        },
        Lifetime_Pro: {
            price: 0,
            label: 'Pro',
            value: 'prod_GGBWkTZPVR1NaL',
            duration: 'once',
            cycle: 'Lifetime',
        },
        Simple_Lifetime_Pro: {
            price: 0,
            label: 'Pro',
            value: 'prod_H8A2RqRTXRQMRW',
            duration: 'once',
            cycle: 'Lifetime',
        },
    },
    Monthly: {
        Free: {
            price: 0,
            label: 'Free',
            value: 'prod_FfrohAFnsPcvLm',
            duration: 'forever',
            cycle: 'Monthly',
        },
        Basic: {
            price: 3,
            label: 'Basic',
            value: 'prod_HOD2oLyIlY3ISl',
            duration: 'forever',
            cycle: 'Monthly',
        },
        Plus: {
            price: 9,
            label: 'Plus',
            value: 'prod_GkrOZum7e3Grf8',
            duration: 'forever',
            cycle: 'Monthly',
        },
        Pro: {
            price: 29,
            label: 'Pro',
            value: 'prod_Gkv2kacUL4E1br',
            duration: 'forever',
            cycle: 'Monthly',
        },
        Lifetime: {
            price: 249,
            label: 'Lifetime',
            value: 'prod_HObrDlBxT4ASyP',
            duration: 'once',
            cycle: 'Lifetime',
        },
        OLD_Pro: {
            price: 9,
            label: 'Pro',
            value: 'prod_Gkv3mbJHn5bWLs',
            duration: 'forever',
            cycle: 'Monthly',
        },
        Lifetime_Pro: {
            price: 0,
            label: 'Pro',
            value: 'prod_GGBWkTZPVR1NaL',
            duration: 'once',
            cycle: 'Lifetime',
        },
        Simple_Lifetime_Pro: {
            price: 0,
            label: 'Pro',
            value: 'prod_H8A2RqRTXRQMRW',
            duration: 'once',
            cycle: 'Lifetime',
        },
    },
    Annually: {
        Pro: {
            price: 12,
            label: 'Pro',
            value: 'prod_TEPRgTUr1PvucH',
            duration: 'forever',
            cycle: 'Annually',
        },
    },
};
const getPriceLabel = {
    prod_HOD2oLyIlY3ISl: 'Basic',
    prod_GkrOZum7e3Grf8: 'Plus',
    prod_Gkv2kacUL4E1br: 'Pro',
    prod_HOD3Trk7tq86Ao: 'Basic',
    prod_Gkuz8WI1tg4uNu: 'Plus',
    prod_Gkv3mbJHn5bWLs: 'Pro',
    prod_Ffroe6Ht43gZNJ: 'Pro',
    prod_TEPRgTUr1PvucH: 'Pro',
    prod_FfrohAFnsPcvLm: 'Free',
    prod_GGBWkTZPVR1NaL: 'Lifetime_Pro',
    prod_H8A2RqRTXRQMRW: 'Simple_Lifetime_Pro',
    prod_HObrDlBxT4ASyP: 'Lifetime',
    job_lite: 'Job_lite',
    job_standard: 'Job_standard',
};

;// ../../libs/constants/src/constants/billing/index.ts



;// ../../libs/constants/src/constants/resume.ts
const RESTRICTED_COUNTRY_CODES = (/* unused pure expression or super */ null && (['IN', 'PK', 'PH', 'EG', 'NG']));
// Progress states for the progress bar
const progressStates = [
    {
        index: 0,
        placeholder: 'resume.settings.progress_bar_file_upload_label',
        percentComplete: 0,
    },
    {
        index: 1,
        placeholder: 'resume.settings.uploaing_file',
        percentComplete: 10,
    },
    {
        index: 2,
        placeholder: 'resume.extracting.volunteering',
        percentComplete: 20,
    },
    {
        index: 3,
        placeholder: 'resume.extracting.organizations',
        percentComplete: 30,
    },
    {
        index: 4,
        placeholder: 'resume.extracting.skills',
        percentComplete: 40,
    },
    {
        index: 5,
        placeholder: 'resume.extracting.education',
        percentComplete: 50,
    },
    {
        index: 6,
        placeholder: 'resume.extracting.languages',
        percentComplete: 60,
    },
    {
        index: 7,
        placeholder: 'resume.extracting.experiences',
        percentComplete: 70,
    },
    {
        index: 8,
        placeholder: 'resume.extracting.courses',
        percentComplete: 80,
    },
    {
        index: 9,
        placeholder: 'resume.extracting.projects',
        percentComplete: 90,
    },
    {
        index: 10,
        placeholder: 'resume.extracting.education',
        percentComplete: 93,
    },
    {
        index: 11,
        placeholder: 'resume.extracting.certifications',
        percentComplete: 96,
    },
    {
        index: 12,
        placeholder: 'resume.settings.progress_bar_finalizing',
        percentComplete: 96,
    },
    {
        index: 13,
        placeholder: 'resume.settings.progress_bar_success',
        percentComplete: 100,
    },
];

;// ../../libs/constants/src/constants/common.ts
const DEFAULT_TEMPLATE_ID = 'standard';
const NOTIFICATIONS = {
    error: 'Something went wrong.',
};
const ONE_YEAR = 365;
const EMPTY_STRING = '';
const EMPTY_ARRAY = (/* unused pure expression or super */ null && ([]));
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 50;

;// ../../libs/constants/src/constants/samples.ts
const getDefaultSampleCategories = (t) => {
    const SAMPLE_CATEGORIES = [
        {
            to: '/dashboard/samples/library/pro',
            label: t('samples.category.pro'),
        },
        {
            to: '/dashboard/samples/library/business',
            label: t('samples.category.business'),
        },
        {
            to: '/dashboard/samples/library/programming',
            label: t('samples.category.programming'),
        },
        {
            to: '/dashboard/samples/library/engineering',
            label: t('samples.category.engineering'),
        },
        {
            to: '/dashboard/samples/library/marketing',
            label: t('samples.category.marketing'),
        },
        {
            to: '/dashboard/samples/library/design',
            label: t('samples.category.design'),
        },
        {
            to: '/dashboard/samples/library/student',
            label: t('samples.category.student'),
        },
        {
            to: '/dashboard/samples/library/medical',
            label: t('samples.category.medical'),
        },
        {
            to: '/dashboard/samples/library/finance',
            label: t('samples.category.finance'),
        },
        {
            to: '/dashboard/samples/library/education',
            label: t('samples.category.education'),
        },
        {
            to: '/dashboard/samples/library/legal',
            label: t('samples.category.legal'),
        },
        {
            to: '/dashboard/samples/library/other',
            label: t('samples.category.other'),
        },
    ];
    return SAMPLE_CATEGORIES;
};

;// ../../libs/constants/src/app-error-messages-enum.ts
var AppErrorMessagesEnum;
(function (AppErrorMessagesEnum) {
    AppErrorMessagesEnum["AUTH_EMAIL_INVALID"] = "auth.email.invalid";
    AppErrorMessagesEnum["AUTH_EMAIL_REQUIRED"] = "auth.email.required";
    AppErrorMessagesEnum["AUTH_USER_NOT_FOUND"] = "auth.user.not_found";
    AppErrorMessagesEnum["INTERNAL_SERVER_ERROR"] = "internal.server.error";
})(AppErrorMessagesEnum || (AppErrorMessagesEnum = {}));

;// ../../libs/constants/src/http-enum.ts
var HttpEnum;
(function (HttpEnum) {
    HttpEnum[HttpEnum["SUCCESS"] = 200] = "SUCCESS";
    HttpEnum[HttpEnum["SUCCESS_NO_CONTENT"] = 204] = "SUCCESS_NO_CONTENT";
    HttpEnum[HttpEnum["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpEnum[HttpEnum["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpEnum[HttpEnum["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpEnum[HttpEnum["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpEnum[HttpEnum["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpEnum || (HttpEnum = {}));

;// ../../libs/constants/src/paywall-enums.ts
var PaywallSubscriptionStatusEnum;
(function (PaywallSubscriptionStatusEnum) {
    PaywallSubscriptionStatusEnum["ACTIVE"] = "active";
    PaywallSubscriptionStatusEnum["CANCELLED"] = "cancelled";
    PaywallSubscriptionStatusEnum["EXPIRED"] = "expired";
    PaywallSubscriptionStatusEnum["FETCHING"] = "fetching";
})(PaywallSubscriptionStatusEnum || (PaywallSubscriptionStatusEnum = {}));
var PaywallFeaturesEnum;
(function (PaywallFeaturesEnum) {
    PaywallFeaturesEnum["DEPLOYMENT"] = "deployment";
    PaywallFeaturesEnum["WHITELABEL"] = "whitelabel";
    PaywallFeaturesEnum["TALENT_SEARCH"] = "talent_search";
    PaywallFeaturesEnum["RESUME_BUILDER"] = "resume_builder";
    PaywallFeaturesEnum["RESUME_TEMPLATE_BUILDER"] = "resume_template_builder";
    PaywallFeaturesEnum["BILLING"] = "billing";
})(PaywallFeaturesEnum || (PaywallFeaturesEnum = {}));

;// ../../libs/constants/src/templates/highlight.ts
const HighlightLayout = {
    displayName: 'Highlight',
    legacyName: 'highlight-template',
    name: 'highlight',
    spacing: {
        defaults: {
            sections: '0px',
            items: '11px',
        },
        skills: {
            items: '0px',
        },
    },
    sections: {
        experience: {
            headlines: {
                '0': ['role'],
                '1': ['company'],
                '2': ['duration', 'location'],
            },
        },
        projects: {
            headlines: {
                '0': ['title'],
                '1': ['organization', 'url', 'duration'],
                '2': [],
            },
        },
        education: {
            headlines: {
                '0': ['qualification'],
                '1': ['minor', 'institution', 'location', 'date', 'gpa'],
                '2': [],
            },
        },
        certification: {
            headlines: {
                '0': ['name'],
                '1': ['department', 'date'],
                '2': [],
            },
        },
        coursework: {
            headlines: {
                '0': ['name'],
                '1': ['department', 'date', 'skill'],
                '2': [],
            },
        },
        involvement: {
            headlines: {
                '0': ['role'],
                '1': ['location', 'organization', 'duration'],
                '2': [],
            },
        },
        research: {
            headlines: {
                '0': ['position'],
                '1': ['project', 'funding_source', 'duration'],
                '2': ['description'],
            },
        },
        publication: {
            headlines: {
                '0': ['title'],
                '1': ['type', 'conference', 'date'],
                '2': [],
            },
        },
        teaching: {
            headlines: {
                '0': ['position'],
                '1': ['course'],
                '2': ['institution', 'department', 'duration'],
            },
        },
        awards: {
            headlines: {
                '0': ['name'],
                '1': ['institution', 'date'],
                '2': [],
            },
        },
        references: {
            headlines: {
                '0': ['name'],
                '1': ['employer', 'title', 'email', 'phone'],
                '2': [],
            },
        },
    },
};

;// ../../libs/constants/src/templates/highlight-compact.ts
const HighlightCompactLayout = {
    displayName: 'Highlight Compact',
    legacyName: 'highlight-compact-template',
    name: 'highlight-compact',
    spacing: {
        defaults: {
            sections: '8px',
            items: '11px',
        },
        skills: {
            items: '0px',
        },
    },
    sections: {
        coursework: {
            headlines: {
                '0': ['name', 'department', 'skill', 'date'],
                '1': [],
                '2': [],
            },
        },
        experience: {
            headlines: {
                '0': ['role', 'company', 'location', 'duration'],
                '1': [],
                '2': [],
            },
        },
        education: {
            headlines: {
                '0': [
                    'qualification',
                    'institution',
                    'minor',
                    'location',
                    'date',
                    'gpa',
                ],
                '1': [],
                '2': [],
            },
        },
        certification: {
            headlines: {
                '0': ['name', 'department', 'date'],
                '1': [],
                '2': [],
            },
        },
        projects: {
            headlines: {
                '0': ['title', 'organization', 'url', 'duration'],
                '1': [],
                '2': [],
            },
        },
        involvement: {
            headlines: {
                '0': ['role', 'location', 'organization', 'duration'],
                '1': [],
                '2': [],
            },
        },
        research: {
            headlines: {
                '0': ['position'],
                '1': ['project', 'funding_source', 'duration'],
                '2': ['description'],
            },
        },
        publication: {
            headlines: {
                '0': ['title', 'type', 'conference', 'date'],
                '1': [],
                '2': [],
            },
        },
        teaching: {
            headlines: {
                '0': ['position'],
                '1': ['course'],
                '2': ['institution', 'department', 'duration'],
            },
        },
        awards: {
            headlines: {
                '0': ['name', 'institution', 'date'],
                '1': [],
                '2': [],
            },
        },
        references: {
            headlines: {
                '0': ['name', 'employer', 'title', 'email', 'phone'],
                '1': [],
                '2': [],
            },
        },
    },
};

;// ../../libs/constants/src/templates/alternative.ts
const AlternativeLayout = {
    displayName: 'Alternative',
    legacyName: 'gamma-template',
    name: 'alternative',
    spacing: {
        defaults: {
            sections: '29px',
            items: '29px',
        },
        skills: {
            items: '6.75px',
        },
    },
    sections: {
        experience: {
            headlines: {
                '0': ['role', 'duration'],
                '1': ['company', 'location'],
                '2': ['company_short_description', 'description'],
            },
        },
        involvement: {
            headlines: {
                '0': ['role', 'location', 'organization', 'duration'],
                '1': ['organization'],
                '2': ['description'],
            },
        },
        coursework: {
            headlines: {
                '0': ['name', 'duration'],
                '1': ['department', 'skill'],
                '2': ['description'],
            },
        },
        certification: {
            headlines: {
                '0': ['name', 'date'],
                '1': ['department'],
                '2': ['description'],
            },
        },
        projects: {
            headlines: {
                '0': ['title', 'duration'],
                '1': ['organization', 'url'],
                '2': ['description'],
            },
        },
        education: {
            headlines: {
                '0': ['qualification', 'minor'],
                '1': ['institution'],
                '2': ['location', 'date', 'gpa', 'description'],
            },
        },
        research: {
            headlines: {
                '0': ['position'],
                '1': ['project', 'funding_source', 'duration'],
                '2': ['description'],
            },
        },
        publication: {
            headlines: {
                '0': ['type', 'title'],
                '1': ['conference', 'date'],
                '2': [],
            },
        },
        teaching: {
            headlines: {
                '0': ['position'],
                '1': ['course'],
                '2': ['institution', 'department', 'duration'],
            },
        },
        awards: {
            headlines: {
                '0': ['name'],
                '1': ['institution', 'date'],
                '2': ['description'],
            },
        },
        references: {
            headlines: {
                '0': ['name'],
                '1': ['employer', 'title'],
                '2': ['email', 'phone'],
            },
        },
    },
};

;// ../../libs/constants/src/templates/bold.ts
const BoldLayout = {
    displayName: 'Bold',
    legacyName: 'beta-template',
    name: 'bold',
    spacing: {
        defaults: {
            sections: '11px',
            items: '8px',
        },
        skills: {
            items: '6.75px',
        },
    },
    sections: {
        education: {
            headlines: {
                '0': ['qualification', 'institution', 'minor', 'gpa'],
                '1': ['location', 'date'],
                '2': [],
            },
        },
        involvement: {
            headlines: {
                '0': ['role', 'location', 'organization', 'duration'],
                '1': [],
                '2': [],
            },
        },
        coursework: {
            headlines: {
                '0': ['name', 'department', 'date', 'skill'],
                '1': [],
                '2': [],
            },
        },
        projects: {
            headlines: {
                '0': ['title', 'organization', 'url', 'duration'],
                '1': [],
                '2': [],
            },
        },
        experience: {
            headlines: {
                '0': ['role', 'company', 'location', 'duration'],
                '1': [],
                '2': [],
            },
        },
        certification: {
            headlines: {
                '0': ['name', 'department', 'date'],
                '1': [],
                '2': [],
            },
        },
        research: {
            headlines: {
                '0': ['position'],
                '1': ['project', 'funding_source', 'duration'],
                '2': [],
            },
        },
        publication: {
            headlines: {
                '0': ['title'],
                '1': ['type', 'conference', 'date'],
                '2': [],
            },
        },
        teaching: {
            headlines: {
                '0': ['position'],
                '1': ['course'],
                '2': ['institution', 'department', 'duration'],
            },
        },
        awards: {
            headlines: {
                '0': ['name'],
                '1': ['institution', 'date'],
                '2': [],
            },
        },
        references: {
            headlines: {
                '0': ['name'],
                '1': ['employer', 'title', 'email', 'phone'],
                '2': [],
            },
        },
    },
};

;// ../../libs/constants/src/templates/standard.ts
const StandardLayout = {
    displayName: 'Standard',
    legacyName: 'omega-template',
    name: 'standard',
    spacing: {
        defaults: {
            sections: '8px',
            items: '11px',
        },
        skills: {
            items: '6.75px',
        },
    },
    sections: {
        experience: {
            headlines: {
                '0': ['role'],
                '1': ['company'],
                '2': ['duration', 'location'],
            },
        },
        projects: {
            headlines: {
                '0': ['title'],
                '1': ['organization', 'url', 'duration'],
                '2': [],
            },
        },
        education: {
            headlines: {
                '0': ['qualification'],
                '1': ['minor', 'institution', 'location', 'date', 'gpa'],
                '2': [],
            },
        },
        certification: {
            headlines: {
                '0': ['name'],
                '1': ['department', 'date'],
                '2': [],
            },
        },
        coursework: {
            headlines: {
                '0': ['name'],
                '1': ['department', 'date', 'skill'],
                '2': [],
            },
        },
        involvement: {
            headlines: {
                '0': ['role'],
                '1': ['location', 'organization', 'duration'],
                '2': [],
            },
        },
        research: {
            headlines: {
                '0': ['position'],
                '1': ['project', 'funding_source', 'duration'],
                '2': [],
            },
        },
        publication: {
            headlines: {
                '0': ['title'],
                '1': ['type', 'conference', 'date'],
                '2': [],
            },
        },
        teaching: {
            headlines: {
                '0': ['position'],
                '1': ['course'],
                '2': ['institution', 'department', 'duration'],
            },
        },
        awards: {
            headlines: {
                '0': ['name'],
                '1': ['institution', 'date'],
                '2': [],
            },
        },
        references: {
            headlines: {
                '0': ['name'],
                '1': ['title', 'employer', 'email', 'phone'],
                '2': [],
            },
        },
    },
};

;// ../../libs/constants/src/templates/compact.ts
const CompactLayout = {
    displayName: 'Compact',
    legacyName: 'alpha-template',
    name: 'compact',
    spacing: {
        defaults: {
            sections: '8px',
            items: '11px',
        },
        skills: {
            items: '6.75px',
        },
    },
    sections: {
        coursework: {
            headlines: {
                '0': ['name', 'department', 'skill', 'date'],
                '1': [],
                '2': [],
            },
        },
        experience: {
            headlines: {
                '0': ['role', 'company', 'location', 'duration'],
                '1': [],
                '2': [],
            },
        },
        education: {
            headlines: {
                '0': [
                    'qualification',
                    'institution',
                    'minor',
                    'location',
                    'date',
                    'gpa',
                ],
                '1': [],
                '2': [],
            },
        },
        certification: {
            headlines: {
                '0': ['name', 'department', 'date'],
                '1': [],
                '2': [],
            },
        },
        projects: {
            headlines: {
                '0': ['title', 'organization', 'url', 'duration'],
                '1': [],
                '2': [],
            },
        },
        involvement: {
            headlines: {
                '0': ['role', 'location', 'organization', 'duration'],
                '1': [],
                '2': [],
            },
        },
        research: {
            headlines: {
                '0': ['position', 'project', 'funding_source', 'duration'],
                '1': [],
                '2': [],
            },
        },
        publication: {
            headlines: {
                '0': ['title', 'type', 'conference', 'date'],
                '1': [],
                '2': [],
            },
        },
        teaching: {
            headlines: {
                '0': ['position'],
                '1': ['course'],
                '2': [],
            },
        },
        awards: {
            headlines: {
                '0': ['name', 'institution', 'date'],
                '1': [],
                '2': [],
            },
        },
        references: {
            headlines: {
                '0': ['name', 'employer', 'title', 'email', 'phone'],
                '1': [],
                '2': [],
            },
        },
    },
};

;// ../../libs/constants/src/templates/modern.ts
const ModernLayout = {
    displayName: 'Modern',
    legacyName: 'lambda-template',
    name: 'modern',
    spacing: {
        defaults: {
            sections: '8px',
            items: '11px',
        },
        skills: {
            items: '6.75px',
        },
    },
    sections: {
        coursework: {
            headlines: {
                '0': ['name', 'department', 'skill'],
                '1': ['date'],
                '2': [],
            },
        },
        certification: {
            headlines: {
                '0': ['name', 'department'],
                '1': ['date'],
                '2': [],
            },
        },
        experience: {
            headlines: {
                '0': ['role', 'company'],
                '1': ['duration', 'location'],
                '2': [],
            },
        },
        education: {
            headlines: {
                '0': ['qualification', 'institution'],
                '1': ['minor', 'gpa', 'location', 'date'],
                '2': [],
            },
        },
        projects: {
            headlines: {
                '0': ['title', 'organization'],
                '1': ['url', 'duration'],
                '2': [],
            },
        },
        involvement: {
            headlines: {
                '0': ['role', 'location', 'organization'],
                '1': ['duration'],
                '2': [],
            },
        },
        research: {
            headlines: {
                '0': ['position'],
                '1': ['project', 'funding_source', 'duration'],
                '2': ['description'],
            },
        },
        publication: {
            headlines: {
                '0': ['title'],
                '1': ['type', 'conference', 'date'],
                '2': [],
            },
        },
        teaching: {
            headlines: {
                '0': ['position'],
                '1': ['course'],
                '2': ['institution', 'department', 'duration'],
            },
        },
        awards: {
            headlines: {
                '0': ['name'],
                '1': ['institution', 'date'],
                '2': [],
            },
        },
        references: {
            headlines: {
                '0': ['name'],
                '1': ['employer', 'title', 'email', 'phone'],
                '2': [],
            },
        },
    },
};

;// ../../libs/constants/src/templates/harvard.ts
const HarvardLayout = {
    displayName: 'Harvard',
    legacyName: 'harvard-template',
    name: 'harvard',
    spacing: {
        defaults: {
            sections: '8px',
            items: '11px',
        },
        skills: {
            items: '0px',
        },
    },
    sections: {
        experience: {
            headlines: {
                '0': ['company'],
                '1': ['role'],
                '2': ['location', 'duration'],
            },
        },
        projects: {
            headlines: {
                '0': ['title'],
                '1': ['organization', 'url'],
                '2': ['duration'],
            },
        },
        education: {
            headlines: {
                '0': ['qualification'],
                '1': ['minor', 'institution', 'gpa'],
                '2': ['location', 'date'],
            },
        },
        certification: {
            headlines: {
                '0': ['name'],
                '1': ['department', 'date'],
                '2': [],
            },
        },
        coursework: {
            headlines: {
                '0': ['name'],
                '1': ['department', 'date', 'skill'],
                '2': [],
            },
        },
        involvement: {
            headlines: {
                '0': ['organization'],
                '1': ['role'],
                '2': ['location', 'duration'],
            },
        },
        research: {
            headlines: {
                '0': ['position'],
                '1': ['project', 'funding_source', 'duration'],
                '2': ['description'],
            },
        },
        publication: {
            headlines: {
                '0': ['title'],
                '1': ['type', 'conference', 'date'],
                '2': [],
            },
        },
        teaching: {
            headlines: {
                '0': ['position'],
                '1': ['course'],
                '2': ['institution', 'department', 'duration'],
            },
        },
        awards: {
            headlines: {
                '0': ['name'],
                '1': ['institution', 'date'],
                '2': [],
            },
        },
        references: {
            headlines: {
                '0': ['name'],
                '1': ['employer', 'title', 'email', 'phone'],
                '2': [],
            },
        },
    },
};

;// ../../libs/constants/src/templates/jake.ts
const JakeLayout = {
    displayName: "Jake's Resume",
    legacyName: 'jake-template',
    name: 'jake',
    spacing: {
        defaults: {
            sections: '8px',
            items: '11px',
        },
        skills: {
            items: '6.75px',
        },
    },
    sections: {
        experience: {
            headlines: {
                '0': ['company'],
                '1': ['role'],
                '2': ['location', 'duration'],
            },
        },
        projects: {
            headlines: {
                '0': ['organization', 'title'],
                '1': ['url'],
                '2': ['duration'],
            },
        },
        education: {
            headlines: {
                '0': ['qualification'],
                '1': ['institution', 'minor', 'gpa'],
                '2': ['location', 'date'],
            },
        },
        certification: {
            headlines: {
                '0': ['name'],
                '1': ['department', 'date'],
                '2': [],
            },
        },
        coursework: {
            headlines: {
                '0': ['name'],
                '1': ['department', 'date', 'skill'],
                '2': [],
            },
        },
        involvement: {
            headlines: {
                '0': ['organization'],
                '1': ['role'],
                '2': ['location', 'duration'],
            },
        },
        research: {
            headlines: {
                '0': ['position'],
                '1': ['project', 'funding_source', 'duration'],
                '2': ['description'],
            },
        },
        publication: {
            headlines: {
                '0': ['title', 'type'],
                '1': ['conference', 'date'],
                '2': [],
            },
        },
        teaching: {
            headlines: {
                '0': ['position'],
                '1': ['course'],
                '2': ['institution', 'department', 'duration'],
            },
        },
        awards: {
            headlines: {
                '0': ['name'],
                '1': ['institution', 'date'],
                '2': [],
            },
        },
        references: {
            headlines: {
                '0': ['name'],
                '1': ['employer', 'title', 'email', 'phone'],
                '2': [],
            },
        },
    },
};

;// ../../libs/constants/src/templates/index.ts










;// ../../libs/constants/src/default-resume-presets/alternative.ts
const AlternativePreset = {
    paperFormat: 'letter',
    background: 'alternative',
    fonts: {
        contactBaselineWeight: '500',
        family: {
            global: 'sourcesanspro',
        },
        descriptionWeight: '500',
    },
    layout: {
        colors: {
            alternative: '#2e3d50',
            content: '#2e3d50',
            column: '#ffffff',
            columnContent: '#2e3d50',
            topBigBorder: '#202020',
            secondary: '#2e3d50',
            primary: '#2e3d50',
        },
        sections: {
            titleStyle: 'uppercase',
            titleWeight: '600',
            contact: {
                picturePosition: 'left',
                align: 'left',
                divider: false,
            },
            education: {
                showMinorPrefix: true,
            },
        },
        indent: false,
        titleDivider: false,
        sideColumnPosition: 'left',
        divider: false,
        sideColumnEnabled: false,
        resumeLayout: 'alternative',
        topBigBorder: false,
    },
};

;// ../../libs/constants/src/default-resume-presets/bold.ts
const BoldPreset = {
    layout: {
        sections: {
            contact: {
                picturePosition: 'left',
                divider: true,
                align: 'left',
            },
            titleWeight: '600',
            education: {
                showMinorPrefix: true,
            },
            titleStyle: 'uppercase',
        },
        indent: false,
        divider: true,
        sideColumnEnabled: false,
        sideColumnPosition: 'left',
        titleDivider: false,
        colors: {
            secondary: '#2e3d50',
            topBigBorder: '#4B6EE6',
            primary: '#3c78d8',
            alternative: '#2E3D68',
            columnContent: '#2e3d50',
            content: '#2E3D68',
            column: '#ffffff',
        },
        resumeLayout: 'bold',
        topBigBorder: true,
    },
    fonts: {
        family: {
            global: 'sourcesanspro',
        },
        descriptionWeight: '400',
        contactBaselineWeight: '500',
    },
    paperFormat: 'letter',
};

;// ../../libs/constants/src/default-resume-presets/compact.ts
const CompactPreset = {
    fonts: {
        family: {
            global: 'merriweather',
        },
        contactBaselineWeight: '300',
        descriptionWeight: '100',
    },
    layout: {
        sideColumnEnabled: false,
        indent: false,
        colors: {
            columnContent: '#2E3D68',
            primary: '#2e3d50',
            topBigBorder: '#202020',
            alternative: '#2E3D68',
            secondary: '#2e3d50',
            content: '#2E3D68',
            column: '#ffffff',
        },
        resumeLayout: 'compact',
        titleDivider: true,
        sideColumnPosition: 'left',
        topBigBorder: false,
        divider: true,
        sections: {
            titleWeight: '600',
            contact: {
                align: 'center',
                picturePosition: 'left',
                divider: false,
            },
            titleStyle: 'uppercase',
            education: {
                showMinorPrefix: true,
            },
        },
    },
    paperFormat: 'letter',
};

;// ../../libs/constants/src/default-resume-presets/standard.ts
const StandardPreset = {
    fonts: {
        contactBaselineWeight: '300',
        family: {
            global: 'merriweather',
        },
        descriptionWeight: '100',
    },
    paperFormat: 'letter',
    layout: {
        titleDivider: true,
        divider: true,
        sections: {
            titleStyle: 'uppercase',
            contact: {
                divider: false,
                picturePosition: 'left',
                align: 'center',
            },
            education: {
                showMinorPrefix: true,
            },
            titleWeight: '600',
        },
        indent: false,
        resumeLayout: 'standard',
        sideColumnEnabled: false,
        topBigBorder: false,
        colors: {
            content: '#2e3d50',
            primary: '#2e3d50',
            secondary: '#2e3d50',
            columnContent: '#2e3d50',
            column: '#ffffff',
            topBigBorder: '#202020',
            alternative: '#2e3d50',
        },
        sideColumnPosition: 'left',
    },
};

;// ../../libs/constants/src/default-resume-presets/highlight.ts
const HighlightPreset = {
    background: '',
    fonts: {
        contactBaselineWeight: '300',
        family: {
            global: 'calibri',
        },
        descriptionWeight: '100',
    },
    paperFormat: 'letter',
    layout: {
        colors: {
            content: '#2e3d50',
            primary: '#2e3d50',
            secondary: '#2e3d50',
            columnContent: '#2e3d50',
            column: '#ffffff',
            topBigBorder: '#202020',
            alternative: '#2e3d50',
        },
        titleDivider: false,
        divider: true,
        sections: {
            titleStyle: 'uppercase font-bold',
            titleWeight: '800',
            contact: {
                align: 'left',
                divider: false,
                picturePosition: 'left',
            },
            education: {
                showMinorPrefix: true,
            },
        },
        resumeLayout: 'highlight',
        sideColumnEnabled: false,
        sideColumnPosition: 'left',
        indent: false,
        topBigBorder: false,
    },
};

;// ../../libs/constants/src/default-resume-presets/modern.ts
const ModernPreset = {
    fonts: {
        contactBaselineWeight: '500',
        family: {
            global: 'sourcesanspro',
        },
        descriptionWeight: '400',
    },
    layout: {
        indent: false,
        sideColumnEnabled: false,
        sideColumnPosition: 'left',
        resumeLayout: 'modern',
        divider: true,
        colors: {
            primary: '#4d70eb',
            secondary: '#999999',
            columnContent: '#2e3d50',
            topBigBorder: '#202020',
            alternative: '#2e3d50',
            column: '#ffffff',
            content: '#2e3d50',
        },
        sections: {
            contact: {
                align: 'left',
                divider: false,
                picturePosition: 'left',
            },
            titleStyle: 'uppercase',
            education: {
                showMinorPrefix: true,
            },
            titleWeight: '600',
        },
        titleDivider: false,
        topBigBorder: false,
    },
    paperFormat: 'letter',
};

;// ../../libs/constants/src/default-resume-presets/highlight-compact.ts
const HighlightCompactPreset = {
    background: '',
    fonts: {
        contactBaselineWeight: '300',
        family: {
            global: 'calibri',
        },
        descriptionWeight: '100',
    },
    paperFormat: 'letter',
    layout: {
        colors: {
            content: '#2e3d50',
            primary: '#2e3d50',
            secondary: '#2e3d50',
            columnContent: '#2e3d50',
            column: '#ffffff',
            topBigBorder: '#202020',
            alternative: '#2e3d50',
        },
        titleDivider: false,
        divider: true,
        sections: {
            titleStyle: 'uppercase font-bold',
            titleWeight: '800',
            contact: {
                align: 'left',
                divider: false,
                picturePosition: 'left',
            },
            education: {
                showMinorPrefix: true,
            },
        },
        resumeLayout: 'highlight-compact',
        sideColumnEnabled: false,
        sideColumnPosition: 'left',
        indent: false,
        topBigBorder: false,
    },
};

;// ../../libs/constants/src/default-resume-presets/harvard.ts
const HarvardPreset = {
    background: '',
    fonts: {
        contactBaselineWeight: '300',
        family: {
            global: 'timesnewroman',
        },
        descriptionWeight: '100',
    },
    paperFormat: 'letter',
    layout: {
        titleCentered: true,
        titleDivider: false,
        divider: true,
        sections: {
            titleStyle: 'uppercase',
            contact: {
                divider: false,
                picturePosition: 'left',
                align: 'center',
            },
            education: {
                showMinorPrefix: true,
            },
            titleWeight: '600',
        },
        indent: false,
        resumeLayout: 'harvard',
        sideColumnEnabled: false,
        topBigBorder: false,
        colors: {
            content: '#2e3d50',
            primary: '#2e3d50',
            secondary: '#2e3d50',
            columnContent: '#2e3d50',
            column: '#ffffff',
            topBigBorder: '#202020',
            alternative: '#2e3d50',
        },
        sideColumnPosition: 'left',
    },
};

;// ../../libs/constants/src/default-resume-presets/jake.ts
const JakePreset = {
    background: '',
    fonts: {
        contactBaselineWeight: '300',
        family: {
            global: 'timesnewroman',
        },
        descriptionWeight: '100',
    },
    paperFormat: 'letter',
    layout: {
        titleDivider: true,
        divider: false,
        sections: {
            titleStyle: '',
            contact: {
                divider: false,
                picturePosition: 'left',
                align: 'center',
            },
            education: {
                showMinorPrefix: true,
            },
            titleWeight: '400',
        },
        indent: true,
        resumeLayout: 'jake',
        sideColumnEnabled: false,
        topBigBorder: false,
        colors: {
            content: '#2e3d50',
            primary: '#2e3d50',
            secondary: '#2e3d50',
            columnContent: '#2e3d50',
            column: '#ffffff',
            topBigBorder: '#202020',
            alternative: '#2e3d50',
        },
        sideColumnPosition: 'left',
    },
};

;// ../../libs/constants/src/default-resume-presets/index.ts










;// ../../libs/constants/src/account-hijack/index.ts
// account hijacking detection is on only when user logs in. Since initUser is called whenever user section change is detected, we set localstore flag after login operation is successfull.
const ACCOUNT_HIJACK_LOGGED_IN_KEY = 'ACCOUNT_HIJACK_LOGGED_IN';

;// ../../libs/constants/src/index.ts












/***/ }),

/***/ 85113:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: function() { return /* binding */ RootStoreProvider; },
  Q: function() { return /* binding */ useRootStore; }
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(14041);
// EXTERNAL MODULE: ../../node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(83794);
;// ../../libs/stores/src/root-store.ts

class RootStore {
    constructor(isEnterprise = false) {
        this.isEnterprise = false;
        this.isInitialized = false;
        this.analyseStore = undefined;
        this.billingStore = undefined;
        this.coverLettersStore = undefined;
        this.designStudioStore = undefined;
        this.generatorStore = undefined;
        this.jobSearchStore = undefined;
        this.paymentStore = undefined;
        this.referralStore = undefined;
        this.resignationLettersStore = undefined;
        this.resumesStore = undefined;
        this.rmsStore = undefined;
        this.rmsTokenStore = undefined;
        this.sampleStore = undefined;
        this.scoreStore = undefined;
        this.userStore = undefined;
        this.ABStore = undefined;
        this.otpStore = undefined;
        this.reviewsStore = undefined;
        this.resumeReviewStore = undefined;
        this.notificationStore = undefined;
        this.aiGenerateStore = undefined;
        this.keywordsStore = undefined;
        this.resumeReviewCheckoutStore = undefined;
        this.conversationsStore = undefined;
        // Enterprise stores
        this.connectStore = undefined;
        this.organizationStore = undefined;
        this.userEnterpriseStore = undefined;
        this.resumeEnterpriseStore = undefined;
        this.reziAdminSamplesStore = undefined;
        this.rmsSamplesStore = undefined;
        this.authStore = undefined;
        this.paywallStore = undefined;
        this.talentSearchStore = undefined;
        this.webhooksStore = undefined;
        this.isEnterprise = isEnterprise;
        (0,mobx_esm/* makeObservable */.Gn)(this, isEnterprise
            ? {
                //Common stores
                analyseStore: mobx_esm/* observable */.sH.ref,
                billingStore: mobx_esm/* observable */.sH.ref,
                coverLettersStore: mobx_esm/* observable */.sH.ref,
                designStudioStore: mobx_esm/* observable */.sH.ref,
                generatorStore: mobx_esm/* observable */.sH.ref,
                jobSearchStore: mobx_esm/* observable */.sH.ref,
                paymentStore: mobx_esm/* observable */.sH.ref,
                referralStore: mobx_esm/* observable */.sH.ref,
                resignationLettersStore: mobx_esm/* observable */.sH.ref,
                resumesStore: mobx_esm/* observable */.sH.ref,
                rmsStore: mobx_esm/* observable */.sH.ref,
                rmsTokenStore: mobx_esm/* observable */.sH.ref,
                sampleStore: mobx_esm/* observable */.sH.ref,
                scoreStore: mobx_esm/* observable */.sH.ref,
                userStore: mobx_esm/* observable */.sH.ref,
                ABStore: mobx_esm/* observable */.sH.ref,
                otpStore: mobx_esm/* observable */.sH.ref,
                reviewsStore: mobx_esm/* observable */.sH.ref,
                resumeReviewStore: mobx_esm/* observable */.sH.ref,
                notificationStore: mobx_esm/* observable */.sH.ref,
                aiGenerateStore: mobx_esm/* observable */.sH.ref,
                keywordsStore: mobx_esm/* observable */.sH.ref,
                resumeReviewCheckoutStore: mobx_esm/* observable */.sH.ref,
                //Enterprise specific
                conversationsStore: mobx_esm/* observable */.sH.ref,
                connectStore: mobx_esm/* observable */.sH.ref,
                organizationStore: mobx_esm/* observable */.sH.ref,
                userEnterpriseStore: mobx_esm/* observable */.sH.ref,
                resumeEnterpriseStore: mobx_esm/* observable */.sH.ref,
                reziAdminSamplesStore: mobx_esm/* observable */.sH.ref,
                rmsSamplesStore: mobx_esm/* observable */.sH.ref,
                authStore: mobx_esm/* observable */.sH.ref,
                paywallStore: mobx_esm/* observable */.sH.ref,
                talentSearchStore: mobx_esm/* observable */.sH.ref,
                webhooksStore: mobx_esm/* observable */.sH.ref,
                initializeStores: mobx_esm/* action */.XI,
            }
            : {
                isInitialized: mobx_esm/* observable */.sH.ref,
                isEnterprise: mobx_esm/* observable */.sH.ref,
                analyseStore: mobx_esm/* observable */.sH.ref,
                billingStore: mobx_esm/* observable */.sH.ref,
                coverLettersStore: mobx_esm/* observable */.sH.ref,
                designStudioStore: mobx_esm/* observable */.sH.ref,
                generatorStore: mobx_esm/* observable */.sH.ref,
                jobSearchStore: mobx_esm/* observable */.sH.ref,
                paymentStore: mobx_esm/* observable */.sH.ref,
                referralStore: mobx_esm/* observable */.sH.ref,
                resignationLettersStore: mobx_esm/* observable */.sH.ref,
                resumesStore: mobx_esm/* observable */.sH.ref,
                rmsStore: mobx_esm/* observable */.sH.ref,
                rmsTokenStore: mobx_esm/* observable */.sH.ref,
                sampleStore: mobx_esm/* observable */.sH.ref,
                scoreStore: mobx_esm/* observable */.sH.ref,
                userStore: mobx_esm/* observable */.sH.ref,
                ABStore: mobx_esm/* observable */.sH.ref,
                otpStore: mobx_esm/* observable */.sH.ref,
                reviewsStore: mobx_esm/* observable */.sH.ref,
                resumeReviewStore: mobx_esm/* observable */.sH.ref,
                notificationStore: mobx_esm/* observable */.sH.ref,
                aiGenerateStore: mobx_esm/* observable */.sH.ref,
                keywordsStore: mobx_esm/* observable */.sH.ref,
                resumeReviewCheckoutStore: mobx_esm/* observable */.sH.ref,
                initializeStores: mobx_esm/* action */.XI,
            });
    }
    async initializeStores() {
        if (this.isEnterprise) {
            await this.initPriorityEnterpriseStores();
            this.initCommonStores();
            this.initEnterpriseStores();
        }
        else {
            await this.initPriorityStores();
            this.initCommonStores();
            this.initAppStores();
        }
        this.isInitialized = true;
        return this;
    }
    async initPriorityStores() {
        const { User } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(4767)]).then(__webpack_require__.bind(__webpack_require__, 10304));
        const { BillingStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(8273)]).then(__webpack_require__.bind(__webpack_require__, 10998));
        const { RmsStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(9313), __webpack_require__.e(9629)]).then(__webpack_require__.bind(__webpack_require__, 63258));
        const { AB } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(3990)]).then(__webpack_require__.bind(__webpack_require__, 39127));
        this.userStore = new User(this);
        this.rmsStore = new RmsStore(this, this.isEnterprise);
        this.billingStore = new BillingStore(this);
        this.ABStore = new AB(this);
        this.ABStore.initStore();
        this.userStore.initStore();
        this.billingStore?.initRootStore();
    }
    async initPriorityEnterpriseStores() {
        const { User } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(4767)]).then(__webpack_require__.bind(__webpack_require__, 10304));
        const { BillingStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(8273)]).then(__webpack_require__.bind(__webpack_require__, 10998));
        const { OrganizationStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(5552), __webpack_require__.e(6541)]).then(__webpack_require__.bind(__webpack_require__, 66541));
        const { UserEnterprise } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(3256)]).then(__webpack_require__.bind(__webpack_require__, 22069));
        const { AuthStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(9313), __webpack_require__.e(3151)]).then(__webpack_require__.bind(__webpack_require__, 23088));
        const { RmsStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(9313), __webpack_require__.e(9629)]).then(__webpack_require__.bind(__webpack_require__, 63258));
        this.userStore = new User(this);
        this.organizationStore = new OrganizationStore(this);
        this.userEnterpriseStore = new UserEnterprise(this);
        this.authStore = new AuthStore(this);
        this.rmsStore = new RmsStore(this, this.isEnterprise);
        this.billingStore = new BillingStore(this);
        await this.userStore.initStore();
        await this.billingStore.initRootStore();
        this.authStore.initStore();
    }
    async initCommonStores() {
        const { GeneratorStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(9870), __webpack_require__.e(3972), __webpack_require__.e(1808), __webpack_require__.e(5439)]).then(__webpack_require__.bind(__webpack_require__, 41808));
        const { Resumes } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(7044)]).then(__webpack_require__.bind(__webpack_require__, 30425));
        const { CoverLetters } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(998)]).then(__webpack_require__.bind(__webpack_require__, 52487));
        const { OtpStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(7604)]).then(__webpack_require__.bind(__webpack_require__, 34585));
        const { AIGenerates } = await __webpack_require__.e(/* import() */ 7470).then(__webpack_require__.bind(__webpack_require__, 97470));
        const { NotificationStore } = await __webpack_require__.e(/* import() */ 7349).then(__webpack_require__.bind(__webpack_require__, 97349));
        const { Analysis } = await __webpack_require__.e(/* import() */ 3076).then(__webpack_require__.bind(__webpack_require__, 3076));
        const { PaymentStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(2513)]).then(__webpack_require__.bind(__webpack_require__, 24662));
        const { DesignStudioStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(5552), __webpack_require__.e(4735)]).then(__webpack_require__.bind(__webpack_require__, 14735));
        const { ReferralStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(5716)]).then(__webpack_require__.bind(__webpack_require__, 58025));
        const { ResignationLetters } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(7632)]).then(__webpack_require__.bind(__webpack_require__, 21405));
        const { Reviews } = await __webpack_require__.e(/* import() */ 5985).then(__webpack_require__.bind(__webpack_require__, 75985));
        const { RmsPrivateTokens } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(8623)]).then(__webpack_require__.bind(__webpack_require__, 42960));
        const { Samples } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(4839)]).then(__webpack_require__.bind(__webpack_require__, 39416));
        const { Score } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(585)]).then(__webpack_require__.bind(__webpack_require__, 6606));
        const { KeywordsStore } = await __webpack_require__.e(/* import() */ 8294).then(__webpack_require__.bind(__webpack_require__, 28294));
        const { JobSearchStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(1540), __webpack_require__.e(7496), __webpack_require__.e(456), __webpack_require__.e(2817)]).then(__webpack_require__.bind(__webpack_require__, 60456));
        const { ResumeReviewCheckoutStore } = await __webpack_require__.e(/* import() */ 1651).then(__webpack_require__.bind(__webpack_require__, 71651));
        const { ResumeReviewStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(7721)]).then(__webpack_require__.bind(__webpack_require__, 96078));
        (0,mobx_esm/* runInAction */.h5)(() => {
            this.generatorStore = new GeneratorStore(this);
            this.resumesStore = new Resumes(this);
            this.coverLettersStore = new CoverLetters(this);
            this.resignationLettersStore = new ResignationLetters(this);
            this.jobSearchStore = new JobSearchStore();
            this.paymentStore = new PaymentStore(this);
            this.rmsTokenStore = new RmsPrivateTokens(this.isEnterprise);
            this.scoreStore = new Score(this);
            this.referralStore = new ReferralStore(this);
            this.designStudioStore = new DesignStudioStore();
            this.analyseStore = new Analysis(this);
            this.sampleStore = new Samples(this);
            this.aiGenerateStore = new AIGenerates(this);
            this.otpStore = new OtpStore();
            this.reviewsStore = new Reviews();
            this.notificationStore = new NotificationStore(this, this.isEnterprise);
            this.keywordsStore = new KeywordsStore(this);
            this.resumeReviewCheckoutStore = new ResumeReviewCheckoutStore(this);
            this.resumeReviewStore = new ResumeReviewStore(this);
        });
        this.paymentStore?.initRootStore();
        this.resumesStore?.initStore();
        this.coverLettersStore?.initStore();
        this.resignationLettersStore?.initStore();
        this.generatorStore?.initStore();
        this.referralStore?.initStore();
        this.sampleStore?.initStore();
        this.aiGenerateStore?.initRootStore();
        this.keywordsStore?.initStore();
    }
    async initAppStores() {
        const { Conversations } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(8195)]).then(__webpack_require__.bind(__webpack_require__, 21372));
        this.conversationsStore = new Conversations(this);
    }
    async initEnterpriseStores() {
        const { ConnectStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(5369)]).then(__webpack_require__.bind(__webpack_require__, 6990));
        const { ResumeEnterpriseStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(5984)]).then(__webpack_require__.bind(__webpack_require__, 91533));
        const { ReziAdminSamplesStore } = await __webpack_require__.e(/* import() */ 9638).then(__webpack_require__.bind(__webpack_require__, 59638));
        const { RmsSamplesStore } = await Promise.all(/* import() */[__webpack_require__.e(2161), __webpack_require__.e(3890)]).then(__webpack_require__.bind(__webpack_require__, 53890));
        const { PaywallStore } = await __webpack_require__.e(/* import() */ 5294).then(__webpack_require__.bind(__webpack_require__, 45294));
        const { TalentSearchStore } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(4224)]).then(__webpack_require__.bind(__webpack_require__, 28317));
        const { AB } = await Promise.all(/* import() */[__webpack_require__.e(1554), __webpack_require__.e(2161), __webpack_require__.e(3990)]).then(__webpack_require__.bind(__webpack_require__, 39127));
        const { WebhooksStore } = await Promise.all(/* import() */[__webpack_require__.e(9313), __webpack_require__.e(7720)]).then(__webpack_require__.bind(__webpack_require__, 47720));
        this.ABStore = new AB(this);
        this.connectStore = new ConnectStore(this);
        this.resumeEnterpriseStore = new ResumeEnterpriseStore(this);
        this.reziAdminSamplesStore = new ReziAdminSamplesStore(this);
        this.rmsSamplesStore = new RmsSamplesStore(this);
        this.paywallStore = new PaywallStore(this);
        this.talentSearchStore = new TalentSearchStore(this);
        this.webhooksStore = new WebhooksStore(this);
        this.ABStore.initStore();
    }
}

;// ../../libs/stores/src/providers/root-store-provider.tsx


const StoreContext = (0,react.createContext)(undefined);
function RootStoreProvider({ isEnterprise = false, children, }) {
    const [loading, setLoading] = (0,react.useState)(true);
    const [store, setStore] = (0,react.useState)(null);
    (0,react.useEffect)(() => {
        const initStore = async () => {
            setLoading(true);
            const root = store ?? new RootStore(isEnterprise);
            await root.initializeStores();
            setStore(root);
            setLoading(false);
        };
        initStore();
    }, [isEnterprise]);
    (0,react.useEffect)(() => {
        if (store?.rmsStore) {
            store.rmsStore.initRmsStore();
        }
    }, [store?.rmsStore]);
    return loading || !store ? (react.createElement(react.Fragment, null)) : (react.createElement(StoreContext, { value: { rootStore: store } }, children));
}
function useRootStore() {
    const context = (0,react.use)(StoreContext);
    if (!context) {
        throw new Error('useRootStore must be used within RootStoreProvider');
    }
    return context.rootStore;
}


/***/ }),

/***/ 82755:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D8: function() { return /* binding */ PUB_GCLIENT_ID; },
/* harmony export */   Y_: function() { return /* binding */ PUB_GAPI_KEY; },
/* harmony export */   Zl: function() { return /* binding */ PUB_FIREBASE_API_KEY; }
/* harmony export */ });
// only keep safe public keys. Ignored in netlify build
// see -> SECRETS_SCAN_OMIT_PATHS
// https://docs.netlify.com/environment-variables/secrets-controller/#configure-secrets-scanning
// Also, individual vales can be added using SECRETS_SCAN_SMART_DETECTION_OMIT_VALUES
// https://docs.netlify.com/security/secret-scanning/#manage-false-positives
// add more keys as needed
const PUB_GAPI_KEY = "AIzaSyCKHbjcAafz3k0Om9NTGqgeLm0t3P-VUiQ" || 0;
const PUB_GCLIENT_ID = "924097261936-i4rnin2ki0qdg3idvorohr829731eg9v.apps.googleusercontent.com" || 0;
const PUB_FIREBASE_API_KEY = "AIzaSyCYkFhhPtZ6lCvYGF8-gwQVNRgjPsGWbxg" || 0;


/***/ }),

/***/ 34551:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ri: function() { return /* binding */ getCookie; },
/* harmony export */   TV: function() { return /* binding */ setCookie; },
/* harmony export */   Yj: function() { return /* binding */ deleteCookie; }
/* harmony export */ });
const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};
const setCookie = (cookieName, cookieValue, expireInDays, path = '/', domain = '') => {
    const isDev = window.location.hostname.split('.')[0] === 'develop--rezi' ||
        window.location.hostname.split('.')[0] === 'localhost';
    let expires = '';
    if (expireInDays) {
        const date = new Date();
        date.setTime(date.getTime() + expireInDays * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie =
        `${cookieName}=${encodeURIComponent(cookieValue)}${expires}; path=${path};` +
            (domain ? ` domain=${domain};` : '') +
            `${isDev ? '' : ' Secure; SameSite=None'}`;
};
const deleteCookie = (name, path = '/', domain) => {
    const isDev = window.location.hostname.split('.')[0] === 'develop--rezi' ||
        window.location.hostname.split('.')[0] === 'localhost';
    document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};` +
            (domain ? ` domain=${domain};` : '') +
            `${isDev ? '' : 'Secure'}`;
};


/***/ }),

/***/ 29581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ i18nInitOptions; },
/* harmony export */   c: function() { return /* binding */ langs; },
/* harmony export */   t: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47304);

const t = i18next__WEBPACK_IMPORTED_MODULE_0__.t;
// to add a new language, add it to the langs array
// * Add necessary translations in the locales folder
// * Update type: Languages from "@rezi/types";
// * Implement a Locale for calender in /libs/ui/src/date-picker/locales/
const langs = [
    {
        value: 'en-US',
        label: 'English (US)',
        fallback: true,
    },
    {
        value: 'en-GB',
        label: 'English (GB)',
        fallback: false,
    },
    {
        value: 'es-ES',
        label: 'Español',
        fallback: false,
    },
    {
        value: 'fr-FR',
        label: 'Français',
        fallback: false,
    },
    {
        value: 'fr-CA',
        label: 'Français(Canada)',
        fallback: false,
    },
    {
        value: 'hi-IN',
        label: 'हिन्दी',
        fallback: false,
    },
    {
        value: 'ko-KR',
        label: '한국어',
        fallback: false,
    },
];
const i18nInitOptions = {
    lng: 'en-US',
    fallbackNS: 'translation',
    debug: false,
    load: 'currentOnly',
    supportedLngs: langs.map((lang) => lang.value),
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
        escapeValue: false,
    },
};


/***/ }),

/***/ 98946:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ lsTest; }
/* harmony export */ });
function lsTest() {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    }
    catch (e) {
        return false;
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9768], function() { return __webpack_exec__(75456); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);