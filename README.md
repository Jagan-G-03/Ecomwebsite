# CareerBridge

CareerBridge is a responsive, frontend-only career and job discovery demonstration built with semantic HTML, CSS, and vanilla JavaScript.

## Run locally

1. Open this folder in Visual Studio Code.
2. Open `index.html` with the Live Server extension, or open it directly in a browser.
3. No build step, package install, or backend is required.

## Included features

- Responsive landing page with job search and curated demonstration listings.
- Job filtering by keyword, location, type, experience, salary sorting, remote, fresher, and internship.
- Job details, save/bookmark state, duplicate-application prevention, and demo application form.
- Browser-only profile registration/login, career path suggestions, interview quizzes, and a live resume builder.
- FAQ accordion, toast notifications, keyboard/Escape modal closing, mobile navigation, reduced-motion support, and reset-demo-data action.

## Browser storage

The app stores saved job IDs, non-sensitive demo profile fields, application metadata, and resume form data in `localStorage` using keys prefixed with `cb_`. Resume files are never uploaded or persisted. Clear the data with **Reset demo data** in the footer or through browser storage settings.

## Important limitations

This is not an authentication or employment platform. Passwords are accepted only for frontend validation and are not stored, but frontend-only login is not secure. Listings, testimonials, career guidance, and application outcomes are fictional demonstration content. Applications remain in the browser and are not sent to employers. A production application must enforce authorization, validation, file handling, and status changes on a backend.

## Connecting a Django/PostgreSQL backend later

1. Replace the localStorage profile flow with Django authentication and secure, HTTP-only session or token handling.
2. Add Django REST endpoints for jobs, saved jobs, profiles, applications, quiz results, and recruiter-owned listings.
3. Validate every request server-side, check ownership and recruiter permissions, and store uploaded resumes in controlled object storage.
4. Use PostgreSQL models and migrations for users, companies, jobs, applications, saved jobs, and application status history.
5. Replace the static `jobs` array with API requests, add loading/error states, and configure CORS/CSRF protections for the deployed frontend.
