// Di Vite, variabel env diakses lewat import.meta.env (bukan process.env seperti di Create React App).
// Nilainya di-inject saat build time, dan semua variabel REACT_APP_* terbaca publik di bundle,
// sehingga tidak boleh berisi data rahasia.
export const API_DOMAIN = import.meta.env.REACT_APP_API_DOMAIN;
