Use an elegant scrolling duration.

Do not make scrolling slow or cinematic to the point that it hurts usability.

Support:

Anchor navigation

Home section links

Footer links

Back-to-top behavior if useful

Respect:

prefers-reduced-motion
Users who disable motion must receive an accessible static experience.

4. PAGE TRANSITIONS
Add subtle page transitions between:

Home
About
Books
Book Detail
Contact
Recommended behavior:

Current Page
      ↓
Subtle fade / opacity transition
      ↓
New Page
Keep the transition short.

Do NOT use:

Large sliding panels

Dramatic zoom transitions

Flash effects

Full-screen animated loaders

Excessive page movement

The transition should feel like a premium editorial website.

5. BOOK QUICK VIEW POPUP
This is an important new requirement.

When the visitor clicks a book card, provide a Book Quick View Modal before navigating to the full book detail page.

Example:

Book Card
   ↓
Click
   ↓
Book Quick View Modal
The popup should contain:

Left
Large portrait book cover.

Right
Book title

Category

Short description

Publication status

Author

Primary action

View Full Details

6. BOOK POPUP DESIGN
The modal must look editorial and premium.

Structure:

┌──────────────────────────────────────────────┐
│                                      CLOSE X │
│                                              │
│   BOOK COVER       BOOK TITLE                │
│                   Category                   │
│                   Description                │
│                                              │
│                   Status                     │
│                                              │
│                   [ Primary Action ]         │
│                   View Full Details          │
│                                              │
└──────────────────────────────────────────────┘
Use:

Warm ivory background

Deep navy typography

Muted gold accents

Thin borders

Generous whitespace

Do NOT make the modal look like a generic rounded SaaS dialog.

7. BOOK POPUP ANIMATION
Opening:

Overlay fades in
+
Modal subtly moves upward
+
Content becomes visible
Closing:

Modal subtly fades/moves out
+
Overlay disappears
Keep animation approximately:

200–300ms
Do not use excessive spring/bounce effects.

8. MODAL ACCESSIBILITY
The book modal must be accessible.

Support:

ESC to close

Close button

Click outside to close

Keyboard navigation

Focus management

Screen-reader labeling

Correct ARIA dialog semantics

Body scroll lock while modal is open

On mobile:

The modal can become a full-height or near-full-height bottom sheet/page-like presentation.

Do not make it too small.

9. BOOK PURCHASE / PUBLICATION STATE
The current books are not yet published.

Therefore:

DO NOT pretend that purchasing is currently available.

The UI must be driven by the book status.

Use:

COMING_SOON
PUBLISHED
AVAILABLE
OUT_OF_STOCK
10. COMING SOON BOOK
For:

COMING_SOON
Show:

Status
Coming Soon

Primary action
Notify Me

Optional secondary action:

Request Publication Update

Do NOT show an active payment checkout.

11. FUTURE PURCHASE BUTTON
The UI architecture must already support a future purchase button.

When:

status === AVAILABLE
display:

Buy Now

Example:

COMING SOON
→ Notify Me

AVAILABLE
→ Buy Now

OUT OF STOCK
→ Notify Me
The frontend must make this state change through data rather than requiring a redesign.

12. OPTIONAL FUTURE PRE-ORDER STATE
Prepare the component architecture for:

PRE_ORDER
If pre-order is eventually enabled, the button can become:

Pre-order

But DO NOT implement a fake pre-order system now.

Do not collect payment until the actual backend/payment system is connected.

13. "PURCHASE" UX FOR UNPUBLISHED BOOKS
For an unpublished book, the visitor should understand clearly:

This book is not yet available for purchase.

Example:

COMING SOON

This title is currently being prepared for publication.

[ Notify Me ]

Publication and purchasing details will be announced when available.
This is better than showing a disabled fake Buy Now button.

14. FUTURE PURCHASE BUTTON LOCATION
The primary purchase action should exist in both:

Book Quick View
[ Notify Me ]
or:

[ Buy Now ]
Book Detail Page
Same dynamic state.

This creates consistent UX.

15. BOOK CARD IMPROVEMENT
Improve the existing BookCard.

Current structure is good, but improve hierarchy.

Recommended:

BOOK COVER

CATEGORY

BOOK TITLE

Short description

STATUS

View Details →
Make the book title visually dominant.

The category should be understated.

The status should be clearly visible but not overly colorful.

16. BOOK COVER INTERACTION
Add a subtle hover state.

Example:

Hover
 ↓
Very subtle elevation
 ↓
Border refinement
 ↓
Title/link emphasis
Do NOT dramatically zoom the book cover.

A tiny scale such as:

scale(1.01)
may be used if it genuinely improves the interaction.

Keep it extremely subtle.

17. IMAGE LOADING EXPERIENCE
Improve image loading.

For every book image:

Image request
      ↓
Static low-quality / blurred placeholder
      ↓
Final image
The transition can be a very subtle opacity fade.

Do not use:

Shimmer

Pulsing skeleton

Moving gradient

Animated blur

The final implementation should use optimized responsive images.

18. AUTHOR IMAGE
The author portrait should receive the same quality treatment.

Use:

Correct aspect ratio

Proper object positioning

Responsive sizing

Static placeholder

Accessible alt text

Subtle image reveal

Do not use dramatic image effects.

19. NAVIGATION IMPROVEMENT
Improve the navbar.

When scrolling:

Initial:

Transparent / normal editorial navigation
Scrolled:

Clean solid background
+
Subtle bottom border
Do not use glassmorphism.

Do not use backdrop blur.

The navbar should remain readable and stable.

20. ACTIVE NAVIGATION
Clearly show the current page.

Example:

Home
About
Books
Contact
Active state:

Books
─────
or a subtle accent indicator.

Use muted gold carefully.

21. MICRO-INTERACTIONS
Add tasteful micro-interactions to:

Buttons
Hover:

Slight color change

Very subtle movement

Focus:

Clear focus ring

Links
Hover:

Underline transition

Subtle color change

Book cards
Hover:

Border/elevation refinement

Modal
Open/close:

Subtle fade + movement

All motion should be restrained.

22. HOMEPAGE SECTION REVEALS
You may add subtle section entrance animations.

Example:

opacity: 0 → 1
transform: translateY(8px) → 0
Use only once when a section enters the viewport.

Do not animate every individual element separately.

Do not create a theatrical scrolling experience.

23. HERO SECTION
Keep the existing editorial hero.

Improve:

Typography scale

Text width

Vertical spacing

Image composition

CTA hierarchy

Possible subtle entrance:

Eyebrow
   ↓
Heading
   ↓
Description
   ↓
CTA
Use small staggered timing if appropriate, but keep it very subtle.

Respect reduced-motion preferences.

24. BOOKS PAGE UX
Improve the catalogue experience.

Add:

Header
Books
A collection of theological, pastoral,
canonical and spiritual writings.
Then:

All Books
Optional future-ready filter:

All
Moral Theology
Canon Law
Marriage & Family
Spirituality
Other
Do not add filtering unless it genuinely improves the current catalogue.

If implemented, make it keyboard accessible.

25. BOOK COUNT
Clearly communicate:

15 Books
This reinforces the author's body of work.

Example:

Books
15 works
Keep this understated.

26. BOOK DETAIL PAGE
Improve the current BookDetailPage.

The existing structure should remain.

Enhance:

Book cover presentation

Title hierarchy

Category

Description

Status

CTA

Related books

Breadcrumbs

Recommended breadcrumb:

Books
/
Book Title
27. BOOK DETAIL CTA
Dynamic:

Coming Soon
[ Notify Me ]
Available
[ Buy Now ]
Out of Stock
[ Notify Me ]
The CTA should be visually prominent but still editorial.

28. RELATED BOOKS
At the bottom of Book Detail:

More from the Catalogue
Show 3 related books.

Use subtle hover interactions.

Do not create a carousel unless necessary.

A clean grid is preferred.

29. MOBILE BOOK EXPERIENCE
On mobile:

Book card:

Cover
Title
Status
View Details
Click:

Quick View
The modal should use almost the full viewport width.

Book cover should remain portrait.

CTA should be easy to tap.

Minimum touch target:

44 × 44px
30. MOBILE NAVIGATION
Improve the existing mobile navigation.

Include:

Menu button

Full navigation

Active state

Close button

Accessible keyboard behavior

Use a simple fade/slide.

No dramatic animation.

31. SMOOTH PAGE EXPERIENCE
The complete interaction flow should feel like:

HOME
 ↓
Smooth scroll / subtle transition
 ↓
BOOKS
 ↓
Hover
 ↓
Click Book
 ↓
Quick View
 ↓
View Full Details
 ↓
Book Detail
 ↓
Notify Me / Buy Now
Everything should feel connected.

32. FORM UX
Improve:

Publication Form
States:

Default
Focus
Submitting
Success
Error
Already Subscribed
Success message:

Thank you. You will be notified when publication information becomes available.
Do not use excessive animations.

33. CONTACT FORM
Improve:

Input spacing

Labels

Error messages

Focus state

Submit state

Success state

Use clear professional feedback.

34. FOOTER
Improve the footer hierarchy.

Primary:

Rev. Fr. Dr. Joseph Raj

Navigation:

Home
About
Books
Contact

Publication:

Receive publication updates

Keep the footer minimal and institutional.

35. RESPONSIVE QUALITY
Review every screen at:

1440px
1280px
1024px
768px
430px
390px
375px
Check:

Typography

Book cover size

Modal size

Navigation

CTA placement

Section spacing

Footer

Form layout

Nothing should overflow horizontally.

36. ACCESSIBILITY
Maintain:

Semantic HTML

Keyboard navigation

Focus management

ESC modal close

Reduced-motion support

Proper ARIA labels

Accessible contrast

Meaningful image alt text

Proper form labels

Especially test the Book Quick View modal with keyboard navigation.

37. REDUCED MOTION
Implement:

@media (prefers-reduced-motion: reduce)
When enabled:

Disable page transitions

Disable section reveal

Disable hover movement

Disable modal movement

Keep opacity/static state

Preserve functionality

Accessibility must override visual motion.

38. PERFORMANCE
Do not add unnecessary animation libraries.

If a lightweight CSS transition is enough, use CSS.

If a routing transition requires a library, use the smallest appropriate solution.

Avoid increasing bundle size unnecessarily.

39. IMPORTANT — DO NOT CHANGE CONTENT
The current project contains placeholder book titles/descriptions.

Do NOT assume those placeholders are the real books.

The final content must come from the actual supplied book information/assets.

Do not invent:

Titles

Prices

ISBNs

Publication dates

Publishers

Reviews

Ratings

Stock

Purchase links

40. IMPORTANT — DO NOT CHANGE THE CORE BRAND
Keep:

Deep navy

Warm ivory

Muted antique gold

EB Garamond

Inter

Editorial layout

Scholarly tone

You may refine the exact shades, spacing, sizing, and hierarchy if required.

41. FINAL UX STANDARD
The website should feel:

Premium without being flashy.

The visitor should experience:

Elegant
   ↓
Easy to navigate
   ↓
Interesting to explore
   ↓
Book discovery
   ↓
Quick preview
   ↓
Detailed information
   ↓
Clear publication status
   ↓
Future-ready purchasing
42. FINAL IMPLEMENTATION INSTRUCTION
Review the existing implementation in the attached project.

Do not blindly redesign everything.

First identify what is already working.

Then improve the existing implementation in this order:

UX

Information hierarchy

Book discovery

Book quick-view modal

Publication/purchase state

Navigation

Responsive behavior

Accessibility

Smooth scrolling

Page transitions

Micro-interactions

Visual polish

The result should look like a professionally designed official author and scholarly publication website, not a template.

Most importantly:

The books and the author must remain the visual focus.

Motion is supporting UX, not the main attraction.


### One change I strongly recommend

For the **unpublished books**, don't use a fake/disabled **“Buy Now”** button. Use:

**Coming Soon → Notify Me**

Then when the database status changes to `AVAILABLE`, the same component automatically becomes:

**Available → Buy Now**