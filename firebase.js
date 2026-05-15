// ============================================================
//  NŌVA — Firebase Configuration
//  Import this file in any panel that needs Firebase services.
//
//  Usage (ES Module):
//    import { db, analytics } from './firebase.js';
//
//  Usage (script tag, CDN):
//    <script type="module" src="firebase.js"></script>
// ============================================================

import { initializeApp }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics }    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore }    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth }         from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ── App config ───────────────────────────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyCjieTX_M2PDIgtC2u6vMfyzXYsWYXmiUk",
  authDomain:        "protech-6c388.firebaseapp.com",
  projectId:         "protech-6c388",
  storageBucket:     "protech-6c388.firebasestorage.app",
  messagingSenderId: "987892798162",
  appId:             "1:987892798162:web:2307b1e8773430df1d930b",
  measurementId:     "G-ZY0H0WFRWT",
};

// ── Initialize ───────────────────────────────────────────────
const app       = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db        = getFirestore(app);
const auth      = getAuth(app);

export { app, analytics, db, auth };