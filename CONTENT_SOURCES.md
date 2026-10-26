# Portfolio content sources

Updated 26 October 2026.

- LinkedIn: https://www.linkedin.com/in/sheyiadekoya/ — read in the user’s signed-in Chrome session with their authorization. Current title, location, and work-history dates were read directly from the profile and expanded Experience page.
- Redcare Pharmacy: Software Engineer, October 2021–present, Berlin.
- Doctolib: Full Stack Developer, June 2020–October 2021, Berlin.
- Wunderflats: Senior Fullstack Engineer, March 2019–May 2020, Berlin.
- Codementor: JavaScript Mentor, November 2016–March 2020, Nigeria.
- MindRight Health: Full Stack Engineer and Lead Developer, January 2017–February 2019, Washington D.C. metro area.
- Andela: Full Stack Engineer, April 2016–February 2019, United States.
- Testify: Full Stack Engineer and Co-Founder, September 2015–February 2016, Nigeria.
- Public LinkedIn search extract: Ambrose Alli University, 2012–2016; Codility Golden Award Vanadium 2016, issued January 2017. No degree or field of study was visible, so none is asserted.
- Original repository: project descriptions, technologies, GradeAccess history, public email, GitHub, portrait, and personal interests.

Redcare and Doctolib role descriptions remain intentionally brief because detailed responsibilities and achievements were not visible. No achievement metrics, degree, proficiency percentages, or current availability have been invented. The existing portrait is retained; it is not a new LinkedIn profile photograph.

Edit `src/data/profile.js` to update the shared portfolio and CV content. The CV is an HTML route (`/resume`) with print styles and the browser’s Print / save PDF action.

The implemented visual design follows the user-approved combination of the developer workspace and career story concepts, with a responsive mobile layout. Original monospace typography, purple branding, green name highlight, and curly-brace navigation are retained.

Map outlines use Natural Earth's public-domain 1:110m geographic region polygons and country boundaries: https://www.naturalearthdata.com/. `scripts/generate-journey-map.py` projects Africa and Europe as separate orthographic insets at different scales, including Madagascar, the British Isles, and Iceland. Country highlights and markers use the same projections as the coastlines. Berlin uses 13.4050° E, 52.5200° N; Nigeria uses a country-level reference point at 8.6753° E, 9.0820° N, without implying a hometown. Generated paths are bundled locally in `src/data/journey-map.js`; the decorative connection does not represent a flight route or geographic distance.
