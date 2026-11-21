export const EMAIL = "wijesinghe.anj@gmail.com";

// Opens Gmail's compose window in the browser. Unlike `mailto:`, this works
// even when no desktop mail app is set up (the usual reason mailto does nothing).
export const gmailCompose = ({ to = EMAIL, subject = "", body = "" } = {}) =>
  "https://mail.google.com/mail/?view=cm&fs=1" +
  `&to=${encodeURIComponent(to)}` +
  (subject ? `&su=${encodeURIComponent(subject)}` : "") +
  (body ? `&body=${encodeURIComponent(body)}` : "");

export const mailto = ({ to = EMAIL, subject = "", body = "" } = {}) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
