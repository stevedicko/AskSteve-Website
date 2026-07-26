ASK STEVE WEBSITE V3 - DEPLOYMENT NOTES

Upload the CONTENTS of this folder to the OVHcloud /www directory.

IMPORTANT BEFORE GOING LIVE
1. Replace this placeholder everywhere it appears:
   [ADD YOUR UK BUSINESS / SERVICE ADDRESS BEFORE PUBLISHING]
   with a UK address at which business/legal documents can be served.
   It appears in privacy.html, terms.html and cancellation-form.html.

2. Review the indicative prices. Current draft rates:
   - On-site first hour: £45
   - Additional on-site: £20 / 30 min
   - Remote first hour: £35
   - Training: £40/hour
   - Small business: £55/hour
   - Travel: 0-5 miles included, 5-10 miles £5, 10-20 miles £10

3. The site currently uses no analytics, advertising cookies or tracking pixels.
   Do not add Google Analytics, Meta Pixel or similar without updating privacy/cookie controls.

4. When taking a consumer booking by phone/email/WhatsApp or at the customer's home,
   ensure your booking confirmation provides the required pre-contract/cancellation information
   where the Consumer Contracts Regulations apply. If the customer wants work to start inside
   the 14-day cancellation period, capture their express request before starting.

FILES
- index.html
- prices.html
- privacy.html
- terms.html
- cancellation-form.html
- styles.css
- robots.txt
- sitemap.xml
- site.webmanifest
- assets/
- downloads/ask-steve-rate-card.pdf

Suggested launch checks:
- Test all call, WhatsApp and email links on mobile
- Confirm HTTPS is active
- Submit sitemap.xml to Google Search Console
- Create/complete Google Business Profile
- Keep business name, phone, service area and URL consistent everywhere


ANIMATION NOTES
- This version uses CSS-only animation; no JavaScript framework or video is required.
- The hero includes slow translucent blue/teal swirling shapes.
- Cards and buttons have restrained hover motion.
- Decorative animation is automatically disabled for visitors who use the 'Reduce motion' accessibility setting.
- No extra cookies or tracking are introduced by these animations.

V5 UPDATE
- The homepage hero section now has a more noticeable but still gentle animated background, created with CSS only.


V6 REFINEMENTS
- Added restrained service-card motion and highlight effects.
- Added subtle scroll-in reveals using a tiny vanilla JavaScript file (site.js).
- Added clearer keyboard focus states for accessibility.
- Added a small fixed Call / WhatsApp contact control for easier conversion on desktop and mobile.
- Added minor FAQ/heading micro-interactions.
- All effects respect the visitor's Reduce Motion preference.
- No external libraries, analytics, cookies or tracking were added.

V7 UPDATE
- Added phone, WhatsApp and email icons to all relevant action buttons.
- Added a slightly stronger 3D button effect using layered shadows and pressed states.
- No external icon library is used; icons are inline SVG and inherit button colour.


V8 UPDATE
- Added a moving blue navigation indicator on the homepage. As the page scrolls, it slides beneath Services, Areas or Contact Steve as those linked sections become current.
- Standalone pages such as Prices, Privacy and Terms show the indicator beneath their current navigation item.
- Increased the visibility of the hero animation with stronger but still translucent blue/teal movement and a gentle animated glow.
- The navigation indicator is disabled on the compact mobile navigation, and all animation still respects Reduce Motion.

V9 REMOTE SUPPORT
- Added remote-support.html explaining Microsoft Quick Assist in plain English.
- Added four lightweight screenshot-style SVG illustrations created specifically for Ask Steve.
- Added Remote Support to the site navigation and a Remote Support card on the homepage.
- Added remote support page to sitemap.xml.
- Instructions are based on current Microsoft Support guidance for Quick Assist.

V10 PRICES PAGE
- Replaced the Travel charges table on prices.html with the Ask Steve service-area map.
- Added assets/ask-steve-service-area-map.png.
- Added responsive styling so the map scales cleanly on mobile and desktop.
