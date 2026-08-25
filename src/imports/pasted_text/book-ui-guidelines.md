21. BOOK GRID

Desktop:

3 columns.

Tablet:

2 columns.

Mobile:

1 column.

Book covers must remain portrait.

Do not crop or stretch them.

Maintain consistent aspect ratio.

22. BOOK CARD

Each book card should contain:

Book Cover

Book Title

Short Description

Status

View Book

Current status:

COMING SOON

Do NOT show:

fake price
fake ISBN
fake stock
fake publisher
fake publication date
Buy Now

unless actual information is supplied.

23. BOOK CARD DESIGN

Keep the book card minimal.

The cover should dominate.

Under the cover:

Book Title

Small metadata/status

Description

View Book

Avoid unnecessary boxes.

Do not make every element a rounded card.

24. BOOK HOVER

Use only subtle interaction.

Allowed:

slight border color change
title color change
simple underline
subtle elevation if necessary

Do NOT use:

zoom
image scaling
glow
floating
rotation
animation
parallax
25. BOOKS PAGE

Create:

/books

Structure:

Books

Short introductory text.

Then:

15-book catalogue.

Each book links to:

/books/[slug]

26. BOOK DETAIL PAGE

Create:

/books/[slug]

Desktop:

LEFT:

Large portrait book cover.

RIGHT:

Book title

Status

Description

Author

Relevant publication information if available

CTA:

Notify Me

Current state:

Coming Soon

27. FUTURE BOOK STATES

The frontend must support:

COMING SOON

Show:

Notify Me

AVAILABLE

Show:

Buy Now

OUT OF STOCK

Show:

Notify Me

Current website state:

COMING SOON

Do not implement actual payments yet.

28. ABOUT PAGE

Create:

/about

This should be a professional long-form biography.

Sections:

Author

Portrait + introduction.

Biography

Complete supplied biography.

Academic Formation

Educational background.

Priesthood & Ministry

Professional/pastoral journey.

Academic & Ecclesiastical Qualifications

Credentials.

Areas of Expertise

Major fields of work.

Languages

Languages listed from the supplied biography.

29. BIOGRAPHY CONTENT

Use the supplied author biography as the source of truth.

Important:

DO NOT invent:

qualifications
positions
awards
dates
institutions
books
ministry history

If information is missing, leave it as a content placeholder rather than inventing it.

30. ACADEMIC TIMELINE

Create a static editorial timeline.

Example structure:

YEAR

Event

Location

Description

No animated timeline.

No moving line.

No scroll animation.

Use typography and dividers.

31. CREDENTIALS

Present major qualifications clearly.

Examples from the supplied biography include:

Bachelor of Arts
University Gold Medal
Licentiate in Moral Theology
Doctorate in Moral Theology
Licentiate in Canon Law

Only use information supported by the supplied biography.

32. BOOK CATALOGUE INFORMATION

The website must be designed so book data can eventually come from the database.

The frontend should conceptually support:

Book
├── title
├── slug
├── description
├── coverImage
├── status
├── category
├── publishedAt
└── createdAt

Do not hardcode book information into UI components.

33. CONTACT PAGE

Create:

/contact

Professional contact form:

Name

Email

Subject

Message

Submit:

Send Message

Include:

labels
validation
focus state
error state
success state
disabled state

No animated form transitions.

34. PUBLICATION UPDATES

Create a publication-update section.

Purpose:

Allow visitors to receive notifications when books become available.

Heading:

Publication Updates

Text:

"Receive updates when new books become available."

Email input

Button:

Notify Me

This is NOT a marketing-heavy newsletter popup.

Keep it simple.

35. FUTURE BOOK ENQUIRY SYSTEM

Current flow:

Visitor

↓

Book Detail

↓

Coming Soon

↓

Notify Me

Future backend:

Form

↓

Next.js API / Server Action

↓

Validation

↓

Spam Protection / Rate Limiting

↓

Prisma

↓

BookEnquiry

↓

Email Notification

Do not implement payment at this stage.

36. FOOTER

Create a professional institutional footer.

Include:

Rev. Fr. Dr. Joseph Raj

Short author description.

Navigation:

Home
About
Books
Contact

Publication Updates

Privacy Policy

Terms

Copyright

Use subtle borders.

Do not use a huge decorative footer.

37. BUTTON SYSTEM

Create:

Primary

Deep Navy background
Ivory/white text

Secondary

Transparent / outlined

Text Button

Simple text + subtle underline

Hover:

Simple color or border change.

No animation.

No gradient.

No glow.

38. FORM SYSTEM

Define:

Default

Focus

Error

Success

Disabled

All forms must have accessible labels.

Do not rely on placeholder text as the only label.

39. IMAGE SYSTEM

Use:

next/image

for production.

Images must:

preserve aspect ratio
avoid layout shift
have meaningful alt text
load efficiently
use appropriate sizes
remain sharp

Book covers must never be distorted.

40. IMAGE PLACEHOLDER

Use a static placeholder:

Blurred low-resolution image OR subtle neutral gradient.

Then display the final image.

No animated shimmer.

No pulsing.

No moving gradient.

41. ACCESSIBILITY

Follow accessibility best practices.

Ensure:

semantic HTML
correct heading hierarchy
keyboard navigation
visible focus
accessible forms
sufficient contrast
meaningful alt text
accessible buttons
touch-friendly mobile controls
42. SEO

Frontend must support:

page metadata
Open Graph
canonical URLs
sitemap
robots
structured data where appropriate
author metadata
book metadata

Pages:

/

/about

/books

/books/[slug]

/contact

43. PERFORMANCE

Optimize for:

fast initial load
optimized images
responsive images
minimal client JavaScript
Server Components where possible
lazy loading where appropriate
optimized fonts
semantic HTML

Do not add libraries just for visual effects.

44. PRODUCTION TECHNOLOGY

The final implementation will eventually use:

Frontend

Next.js

TypeScript

React

App Router

Tailwind CSS

Backend

Next.js Route Handlers / Server Actions

ORM

Prisma

Database

Supabase PostgreSQL

Deployment

Vercel

For this frontend task:

DO NOT implement:

Prisma
Supabase
payment gateway
checkout
cart
orders

The frontend should simply be architected so these can be integrated later.

45. FUTURE E-COMMERCE PREPARATION

The website is currently a professional author/book showcase.

Future:

Books

↓

Available

↓

Buy Now

↓

Cart

↓

Checkout

↓

Payment

↓

Order

Do not make the current UI look like an online store.

The author's identity remains the primary focus.

46. COMPONENT ARCHITECTURE

Create reusable components such as:

components/
├── layout/
│   ├── Navbar
│   ├── MobileNavigation
│   ├── Footer
│   └── Container
│
├── author/
│   ├── AuthorHero
│   ├── AuthorPortrait
│   ├── AuthorIntro
│   ├── Credentials
│   └── Timeline
│
├── books/
│   ├── BookGrid
│   ├── BookCard
│   ├── BookCover
│   ├── BookStatus
│   └── BookDetail
│
├── forms/
│   ├── ContactForm
│   └── PublicationForm
│
└── ui/
    ├── Button
    ├── Input
    ├── Textarea
    ├── SectionHeading
    └── Divider

Keep components reusable.

Avoid unnecessary abstraction.

47. SERVER VS CLIENT

Design the frontend to minimize Client Components.

Prefer:

Server Components

for:

page content
author content
book catalogue
book details

Use Client Components only when required for:

mobile menu
forms
interactive controls

Do not turn the entire website into a Client Component.

48. FINAL SCREEN REQUIREMENTS

Design all of the following:

1. Home — Desktop
2. Home — Mobile
3. About — Desktop
4. About — Mobile
5. Books — Desktop
6. Books — Mobile
7. Book Detail — Desktop
8. Book Detail — Mobile
9. Contact — Desktop
10. Contact — Mobile

Also provide component states:

Coming Soon
Available
Out of Stock
Form Default
Form Focus
Form Error
Form Success
Form Disabled
Navigation Active
Navigation Hover
Button Hover
Button Focus
49. DESIGN SYSTEM DELIVERABLE

Create a reusable design system containing:

Colors

Primary
Secondary
Background
Surface
Accent
Text
Muted
Border
Error
Success

Typography

Display
H1
H2
H3
Body
Small
Caption
Navigation
Button

Spacing

Use a consistent spacing scale.

Borders

Subtle editorial borders.

Buttons

Primary
Secondary
Text

Forms

Default
Focus
Error
Success
Disabled

Book Status

Coming Soon
Available
Out of Stock

50. QUALITY STANDARD

The final website must look as if it was designed by:

a senior UI/UX designer
an editorial art director
a professional publishing designer

It should communicate:

"quietly premium"

rather than:

"visually impressive because of effects."

Use:

Typography
+
Whitespace
+
Composition
+
Photography
+
Book Covers
+
Color Harmony
+
Grid
+
Information Hierarchy

to create the visual quality.

51. DO NOT INVENT CONTENT

This is extremely important.

Use the supplied:

author biography
author image
15 book images
confirmed book information

Do not invent missing book metadata.

Do not create fake:

prices
publication dates
ISBN
publishers
reviews
ratings
sales numbers
awards
testimonials

Use placeholders only where necessary and clearly label them.

52. FINAL DESIGN OBJECTIVE

The finished frontend should feel like:

A respected theologian and author's official digital home.

It should be:

elegant
scholarly
warm
readable
professional
accessible
responsive
timeless
book-focused

It should NOT depend on animation, motion graphics, glassmorphism, parallax, WebGL, or visual gimmicks.

The design quality must come from the fundamentals of excellent UI/UX design.