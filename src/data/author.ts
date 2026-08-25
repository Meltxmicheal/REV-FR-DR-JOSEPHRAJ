/* ─────────────────────────────────────────────────────────────────────────
   AUTHORITATIVE AUTHOR DATA
   Source: supplied biography — do not alter facts, dates, institutions,
   names, or terminology. Only presentation/structure may be adjusted.
   ───────────────────────────────────────────────────────────────────────── */

export type Credential = {
  degree: string
  institution: string
  location?: string
  note?: string
}

export type Language = {
  name: string
  level: "fluent" | "working"
}

export type MinistryRole = {
  title: string
  note?: string
}

export type PublishedWork = {
  title: string
  note?: string
}

export type AuthorData = {
  name: string
  fullName: string
  eyebrow: string
  shortBio: string
  imageUrl: string

  /* Biography sections */
  earlyLifeAndFormation: string[]
  priesthoodAndHigherStudies: string[]
  languages: Language[]
  ministry: {
    intro: string
    roles: MinistryRole[]
    weddingNote: string
  }
  areasOfWriting: string[]
  publishedWorks: PublishedWork[]
  homileticsCollection: {
    title: string
    note: string
  }
  recentMinistry: string
  closingStatement: string

  /* Used by homepage credentials strip */
  credentials: Credential[]

  /* Used by homepage scholarly areas section */
  areasOfExpertise: string[]
}

export const author: AuthorData = {
  name: "Joseph Raj",
  fullName: "Rev. Fr. Dr. Joseph Raj",
  eyebrow: "PRIEST · THEOLOGIAN · CANONIST · PREACHER · AUTHOR",

  shortBio:
    "Born in Tamil Nadu, India, and ordained to the priesthood in 1997 for the Archdiocese of Castries, Saint Lucia, Rev. Fr. Dr. Joseph Raj is a theologian, canonist, preacher, and author whose writings span marriage, family life, moral theology, canon law, and spirituality.",

  imageUrl: "/images/author/author.jpg",

  /* ── Section 01: Early Life & Formation ──────────────────────── */
  earlyLifeAndFormation: [
    "Rev. Fr. Dr. Joseph Raj was born on 5 June 1967 in Tamil Nadu, India.",
    "Following his initial formation at the Tamil Nadu Xavier Mission Home in Nagercoil, he pursued his minor seminary studies at St. Paul's Seminary, Lucknow, and his major seminary formation at St. Charles Seminary, Nagpur. He holds a Bachelor of Arts degree from the University of Nagpur and was awarded the University Gold Medal for ranking first in Philosophy.",
  ],

  /* ── Section 02: Priesthood & Higher Studies ─────────────────── */
  priesthoodAndHigherStudies: [
    "Ordained to the priesthood in 1997 for the Archdiocese of Castries, Saint Lucia, West Indies, Fr. Joseph Raj later pursued higher ecclesiastical studies in Rome from 2013 to 2018, earning a Licentiate and Doctorate in Moral Theology from the Pontifical University of Accademia Alfonsiana and a Licentiate in Canon Law from the Pontifical University of St. Thomas Aquinas (Angelicum).",
  ],

  /* ── Section 03: Languages ───────────────────────────────────── */
  languages: [
    { name: "Tamil", level: "fluent" },
    { name: "Hindi", level: "fluent" },
    { name: "English", level: "fluent" },
    { name: "Italian", level: "fluent" },
    { name: "Spanish", level: "working" },
    { name: "Malayalam", level: "working" },
    { name: "St Lucian French Creole (Kweyol)", level: "working" },
  ],

  /* ── Section 04: Pastoral & Ecclesiastical Ministry ─────────── */
  ministry: {
    intro:
      "Throughout his priestly ministry, Fr. Joseph Raj has served the Church with dedication in various pastoral, judicial, and administrative capacities.",
    roles: [
      { title: "Parish Priest" },
      { title: "Judicial Vicar" },
      { title: "Consultor" },
      { title: "Member of the Presbyteral Council" },
      {
        title: "Judge of the Inter-Diocesan Marriage Tribunal",
        note: "Trinidad and Tobago",
      },
    ],
    weddingNote:
      "His extensive pastoral experience includes the preparation of couples for Christian marriage and the celebration of 225 weddings in the Archdiocese of Castries, Saint Lucia.",
  },

  /* ── Section 05: Areas of Writing ───────────────────────────── */
  areasOfWriting: [
    "Marriage",
    "Family Life",
    "Moral Theology",
    "Canon Law",
    "Spirituality",
  ],

  /* ── Section 06: Published Works (from biography) ───────────── */
  publishedWorks: [
    {
      title:
        "God the Creator's Plan for the Sanctification of Family Through the Nuptial Blessing of the Sacrament of Marriage",
    },
    {
      title:
        "An Analysis of the Juridical, Theological and Pastoral Ramifications of Matrimonial Consent",
    },
    { title: "Common Law Unions and the Use of Virtue Ethics" },
    {
      title:
        "The Lenten Journey of a Pilgrim – A Short Journey within the Longer Journey of Life",
    },
    { title: "The Magical Perfection of Number 7 in Sacred Scriptures" },
    {
      title:
        "The Theological, Canonical and Pastoral Implications of the Sacraments in the Church",
    },
    { title: "What Matters Most is Faith" },
    { title: "Holy Women As Evangelizers of the Gospel" },
    { title: "The Heart God Sees - Beyond What Man Cannot See" },
    {
      title:
        "My Soul Magnifies the Lord: A Tribute to the Blessed Virgin Mother Mary",
    },
  ],

  /* ── Section 07: Homiletic Collection ───────────────────────── */
  homileticsCollection: {
    title: "Preaching God's Word Day in and Day Out for Liturgical Cycles A, B, and C",
    note: "Three-volume homiletic collection",
  },

  /* ── Section 08: Recent Ministry ────────────────────────────── */
  recentMinistry:
    "Following a year of ministry in the Archdiocese of Melbourne, Australia (2025–2026), where he served as Auditor and Defender of the Bond at the Catholic Marriage Tribunal and assisted in several parishes, he has returned to the Archdiocese of Castries.",

  /* ── Section 09: Closing Statement ──────────────────────────── */
  closingStatement:
    "His writings reflect a profound love for the Church, a deep commitment to sound theology, and a pastoral concern for guiding the faithful on their journey toward God.",

  /* ── Homepage — credentials strip ───────────────────────────── */
  credentials: [
    {
      degree: "Bachelor of Arts",
      institution: "University of Nagpur",
      note: "University Gold Medal — First in Philosophy",
    },
    {
      degree: "Licentiate in Moral Theology",
      institution: "Accademia Alfonsiana",
      location: "Rome",
    },
    {
      degree: "Doctorate in Moral Theology",
      institution: "Accademia Alfonsiana",
      location: "Rome",
    },
    {
      degree: "Licentiate in Canon Law",
      institution: "Pontifical University of St. Thomas Aquinas (Angelicum)",
      location: "Rome",
    },
  ],

  /* ── Homepage — scholarly areas section ─────────────────────── */
  areasOfExpertise: [
    "Marriage & Family",
    "Moral Theology",
    "Canon Law",
    "Spirituality",
    "Scripture",
  ],
}
