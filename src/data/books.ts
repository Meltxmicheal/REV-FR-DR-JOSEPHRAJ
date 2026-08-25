export type BookStatus = "DRAFT" | "COMING_SOON" | "PUBLISHED" | "AVAILABLE" | "OUT_OF_STOCK"

export type ChapterOutline = {
  number: string
  title: string
  description: string
  topics: string[]
}

export type BookSection = {
  heading?: string
  paragraphs: string[]
}

export type ConcludingReflection = {
  heading: string
  subtitle?: string
  points?: string[]
  paragraphs?: string[]
}

export type FeatureSection = {
  heading: string
  subtitle?: string
  paragraphs: string[]
  points?: string[]
}

export type PullQuote = {
  text: string
  author?: string
}

export type Progression = {
  title: string
  steps: string[]
}

export type ThreefoldDimension = {
  label: string
  title: string
  description: string
}

export type KeyDistinction = {
  heading: string
  subtitle?: string
  left: {
    title: string
    subtitle?: string
    points: string[]
  }
  right: {
    title: string
    subtitle?: string
    points: string[]
  }
}

export type DiscoveryCategory =
  | "Gospel & Homily Reflections"
  | "Faith & Trust"
  | "Evangelization & Mission"
  | "Christian Discipleship"
  | "Biblical Characters"
  | "Prayer, Mercy & Spiritual Growth"
  | "The Human Heart & Transformation"

export const DISCOVERY_CATEGORIES: DiscoveryCategory[] = [
  "Gospel & Homily Reflections",
  "Faith & Trust",
  "Evangelization & Mission",
  "Christian Discipleship",
  "Biblical Characters",
  "Prayer, Mercy & Spiritual Growth",
  "The Human Heart & Transformation",
]

export type Book = {
  id: string
  order?: number
  title: string
  slug: string
  description: string
  coverImage: string
  status: BookStatus
  category: string
  categories?: DiscoveryCategory[]
  publishedAt: string | null
  createdAt: string
  structureOverview?: string
  generalIntroduction?: BookSection[]
  chapters?: ChapterOutline[]
  personalPilgrimage?: FeatureSection
  trainingGround?: FeatureSection
  bookThemes?: FeatureSection
  centralQuestion?: string
  sanctificationProgression?: string[]
  progression?: Progression
  threefoldDimension?: ThreefoldDimension[]
  keyDistinction?: KeyDistinction
  pullQuote?: PullQuote
  concludingReflection?: ConcludingReflection
  seo?: {
    title: string
    description: string
  }
}

/* NOTE: Titles and descriptions for Books 8-15 are placeholders.
   Real content must be supplied when the backend is connected.
   Cover image paths follow the convention /images/books/book{n}.jpg */
export const books: Book[] = [
  {
    id: "book-01",
    order: 1,
    title:
      "AN ANALYSIS OF THE JURIDICAL, THEOLOGICAL, AND PASTORAL RAMIFICATIONS OF MATRIMONIAL CONSENT",
    slug: "an-analysis-of-the-juridical-theological-and-pastoral-ramifications-of-matrimonial-consent",
    description:
      "An in-depth study of matrimonial consent in its juridical, theological, and pastoral dimensions, examining its importance in Christian marriage, the validity of marital consent, the sacramental nature of marriage, and the role of the Christian family in the Church and society.",
    coverImage: "/images/books/book1.jpg",
    status: "COMING_SOON",
    category: "Moral Theology",
    categories: [
      "Christian Discipleship",
      "The Human Heart & Transformation",
      "Prayer, Mercy & Spiritual Growth",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title:
        "An Analysis of the Juridical, Theological, and Pastoral Ramifications of Matrimonial Consent",
      description:
        "An in-depth study of matrimonial consent in its juridical, theological, and pastoral dimensions, exploring Christian marriage, matrimonial consent, its sacramental foundation, and its juridical and pastoral implications.",
    },
    structureOverview:
      "The book is divided into three chapters with a General Introduction and a General Conclusion.",
    generalIntroduction: [
      {
        heading: "THE SIGNIFICANCE OF MATRIMONIAL CONSENT",
        paragraphs: [
          "The canonical motive for this venture is to emphasize the importance, significance, and implications of matrimonial consent in its juridical, theological, and pastoral sphere. Christian marriage is a union between a man and a woman, which begins by a mutual exchange of consent, and lasts their whole life. The marital consent constitutes an essential element of marriage. There can be no marriage without a freely and legitimately expressed consent between a man and a woman. Consent is the most decisive element of the marriage covenant.",
          "Marital consent is an act of the will by which a man and woman by an irrevocable covenant mutually ‘give and accept’ for the purpose of establishing partnership in marriage (Cf. Can. 1057§2) and its implications bind them for rest of their lives. Remaining faithful to the promise and consent couples make on the day of their wedding has lost its significance and its binding nature has been neglected. As a result, the fundamental values of marriage and family life and the infrastructure of families are being undermined; the value for married life has been overlooked in many parts of the world by an attitude of permissiveness and culture of death, and the family has become a cause of concern to both the Church and the society.",
        ],
      },
      {
        heading: "THE CONTEMPORARY CRISIS OF MARRIAGE AND FAMILY",
        paragraphs: [
          "There is a great lack of appreciation for the dignity of human beings, respect for human life and value for the Sacrament of Marriage has been diminishing at a rapid pace. As a result of this, people contemplate much less the need for having recourse to this sacrament, and create a proper family. A certain sense of an attitude of aversion and animosity towards the Church has crept in and a degrading level of morality is on the increase.",
          "As a result of this, the proper understanding of the concept of marriage as intended by God has disappeared. The very notion of the sacrament is going through a serious crisis today. This crisis shows modern man’s serious inability to conceive of the reality symbolically and, therefore, to understand his own life in depth. Though, there are some positive aspects of the signs of the salvation of Christ operating in the world but, the negative impacts have caused greater damage to the institution of family; generally, there is a sign of the refusal that man gives to the love of God and concrete difficulties that family experiences in transmitting values.",
          "Secularism has drained out the nature and the concept of morality from peoples’ lives and has resulted in uncontrolled freedom. The sin of the century is the loss of the sense of sin. People have lost the sense of recognizing the presence of God in their lives. There is a movement of ideas and behavior which advocates humanism totally without God, and is completely centered upon the cult of action and production caught up in the enthusiasm of consumerism and pleasure seeking, unconcerned with the danger of losing one’s soul. All these have resulted in the loss of a sense of sin, and sense of God in peoples’ lives.",
          "By and large, the value and the sanctity of family life are being devalued at a drastic level. Certainly, in Africa and Asia, human love in its natural dimension is less degraded than in the West. But over all, there is a disregard for the Sacrament of Marriage, and an attitude of contempt and hatred to the concepts of marriage and the institution of family life in countries of secularized world. There is the need to re-instill the importance of the concept of marriage, and speed up the mission and evangelization of the Gospel of Life in the Church.",
          "A great majority of people do not see sexuality as a precious gift intended by God for humanity, most of them regard humans as not being different from any other animal. So, they interpret human sexual activity as a normal biological function, and persons have become only a means for pleasure, reducing it to business. Many other factors, like –the exaggerated concept of freedom, divorce, hedonism and unlawful contraceptive practices disfigured married love.",
          "This kind of situation is very much prevalent in European, Central, and Latin America countries, and more particularly, in a small island called Saint Lucia, where disregard for the institutions of marriage and family have given rise to many laxities in commitment of partners and to many sexual deviations, such as premarital sexual activity, extra-marital sexual activities and acts of homosexuality. As the result of the practice of living in ‘common law unions’ in Saint Lucia and many other countries, children are born out of wedlock and suffer the want of parental guidance and love. Many persons live together for a number of years in ‘common law unions’ but without receiving the Sacrament of Marriage. Even those married do not see any danger of crossing the boundaries of marital obligations into having extra marital relations.",
        ],
      },
      {
        heading: "THE SACRAMENTAL AND CANONICAL DIMENSION",
        paragraphs: [
          "By the matrimonial consent the covenant of marriage begins to exist (Cf. Can. 1057§1). It is a foundation for the building of life of the couples and their family. Even though, consent is made on the day of the wedding its impacts last for the rest of their lives. A defect in the consent of either one or both of the parties renders the marriage invalid. An annulment, a declaration of nullity, that there never was a marriage in a particular case (Cf. Can. 1656) can be granted even after twenty or many years of marriage if there was a flawed consent.",
        ],
      },
      {
        heading: "THE PURPOSE OF THIS STUDY",
        paragraphs: [
          "Therefore, the matrimonial consent through which the establishment of family is constituted is a very important concept in its juridical, theological, and pastoral dimensions, and hence, it has significant impacts in the life of the Christian married couples who live in the community. In the context of modern and permissive culture and having in mind, particularly, the people of Saint Lucia and other neighboring Islands where the institutions of marriage and family are not the order of priority, it is even more imperative to understand the juridical, theological, and pastoral implications of validly and legitimately expressed matrimonial consent and their consequences before, during and after marriage.",
          "Though, one must keep in mind that, it would be a mistake to reduce the Church’s teaching on marriage to merely the requirement of the canons because, marriage has a human, theological, and ecclesial richness which goes well beyond these juridical norms and which have practical implications of marital covenant established for whole life both for the society and the church.",
        ],
      },
    ],
    chapters: [
      {
        number: "Chapter One",
        title: "Juridical Dimension",
        description:
          "The first chapter deals with juridical requirements for manifesting matrimonial consent, including:",
        topics: [
          "Legal capacity",
          "Freedom from impediments",
          "Observance of canonical form",
          "A brief analysis of the 12 diriment impediments",
          "Elements or factors that may vitiate valid manifestation of consent",
          "Circumstances in which a marriage may be declared null and void",
        ],
      },
      {
        number: "Chapter Two",
        title: "Theological Dimension",
        description:
          "The second chapter elaborates upon the theological implications of marriage, including:",
        topics: [
          "Permanent partnership in marital life",
          "The Sacrament of Marriage",
          "The wellbeing of the spouses",
          "Procreation and education of children",
          "The theological foundation for matrimonial consent in its sacramental aspect",
          "The witnessing life of married couples to the beauty of covenantal life",
          "The grace of marriage within the theological realm of the Sacrament instituted and intended by God",
        ],
      },
      {
        number: "Chapter Three",
        title: "Pastoral Dimension",
        description:
          "The third chapter centers on the pastoral connotations and ramifications of matrimonial consent, including:",
        topics: [
          "Effects of marriage",
          "The indissoluble nature of the bond of marriage",
          "Pastoral requisites and preparation for the Sacrament of Marriage",
          "The role of the Christian family in building up the Church and society",
          "The Christian family as a domestic church",
          "The witness of Christian couples to the beauty of married life in the community",
        ],
      },
    ],
  },
  {
    id: "book-02",
    order: 2,
    title: "Common Law Unions and the Use of Virtue Ethics",
    slug: "common-law-unions-and-the-use-of-virtue-ethics",
    description:
      "An exploration of common law unions and their effects on marriage and family life, examining how virtue ethics, pastoral accompaniment, and the teaching of the Church can help people embrace the Sacrament of Marriage and pursue lives of Christian holiness.",
    coverImage: "/images/books/book2.jpg",
    status: "COMING_SOON",
    category: "Moral Theology",
    categories: [
      "Christian Discipleship",
      "The Human Heart & Transformation",
      "Prayer, Mercy & Spiritual Growth",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title: "Common Law Unions and the Use of Virtue Ethics",
      description:
        "An exploration of common law unions and virtue ethics, examining marriage, family life, pastoral accompaniment, the Sacrament of Marriage, grace, morality and Christian holiness.",
    },
    structureOverview: "The book is divided into three chapters.",
    generalIntroduction: [
      {
        heading: "THE ROLE OF VIRTUE ETHICS",
        paragraphs: [
          "The application of Virtue Ethics can help people embrace the Sacrament of Marriage and reduce the number of many common law unions, thus, benefitting both the Church and the society. The fundamental values of families are being undermined in Saint Lucia, in the wider Caribbean and generally in many parts of the world. People no longer appreciate the value of the Sacrament of Marriage, and do not want to have any recourse to this particular sacrament. The very notion of the sacrament is going through a serious crisis today. This crisis shows the modern humanity’s serious inability to conceive of the reality symbolically and to understand their own life in depth.",
        ],
      },
      {
        heading: "THE CRISIS OF MARRIAGE AND FAMILY LIFE",
        paragraphs: [
          "The great majority of people do not see sexuality as a precious gift intended by God for humanity. Most of them regard humans as not being different from any other animal. So, they interpret human sexual activity merely as a normal biological function, and persons have become only a means for pleasure, reducing it to a business. Many other factors, such as the exaggerated concept of freedom, hedonism, unlawful contraceptive practices and disregard for the concept of marriage have given rise to many sexual deviations, such as premarital sexual activity, extramarital sexual activities, acts of homosexuality and same-sex unions.",
        ],
      },
      {
        heading: "COMMON LAW UNIONS AND FAMILY STABILITY",
        paragraphs: [
          "As a result of the practice of living in common law unions in Saint Lucia, so many children are born out of wedlock, and both, parents who struggle to bring up their children, and the children, themselves consequently suffer from a lack of proper parental guidance and stability. I wish to encourage everyone living in common law unions to embrace the Sacrament of Marriage, and to form proper families which are the bedrock of society. Marriage is an intimate community of life and love ordered by God from the very beginning in the act of creation. The importance of the gift of human sexuality intended by God as a precious gift, is rooted in the sexual difference God himself saw in human beings when he created: “Male and female he created them” (Cf. Gen.1:27).",
        ],
      },
      {
        heading: "THE SACRAMENT OF MARRIAGE AND A LIFE OF HOLINESS",
        paragraphs: [
          "Sexuality is an integral part of being human and is natural to every human being. For the complete humanity intended by God and for a complete continuing society, the humankind must be willing to recognize this male-female sexual differentiation. The act of sexual intercourse is the climax of a relationship of oneness, a communion of both the spirit and the body that involves a mutual giving and receiving; it is a perfect sharing done only in the context of marriage.",
        ],
      },
      {
        heading: "THE CHURCH'S PASTORAL RESPONSE",
        paragraphs: [
          "The Church must be patient with persons living in common law unions or other ‘irregular’ situations, as they are termed by the Church and must invite them to appreciate the gospel of the family and to offer them ways and means to ensure the gift of human sexuality is to be exercised only in the context of marriage. The Church, with its pastors and other formators, has the task of educating and identifying the common elements between the married people and those living in common law unions, and offer them constructive responses to embrace the Sacrament of Marriage.",
        ],
      },
    ],
    chapters: [
      {
        number: "Chapter One",
        title: "Common Law Unions and Their Consequences",
        description: "The first chapter analyzes:",
        topics: [
          "The nature of common law union marriages",
          "Their drawbacks",
          "The consequences of this way of life",
          "The impact in Saint Lucia",
          "The impact on societies generally",
          "The effects on family life",
          "The need for proper education on the theology of marriage",
          "Pastoral programs proposed by the III Extraordinary General Assembly of the Synod of Bishops (5–19 October 2014) on the Family",
        ],
      },
      {
        number: "Chapter Two",
        title: "Biblical and Magisterial Teaching on Marriage and Family",
        description: "The second chapter examines:",
        topics: [
          "The teaching of the Bible on marriage",
          "The teaching of the Magisterium of the Church on marriage and family",
          "Stability in family life",
          "Common law union relationships",
          "Changes from one partner to another",
          "Christian values in families",
          "Stability for the rearing and education of children",
          "The author's theological understanding of marriage as God's plan",
        ],
      },
      {
        number: "Chapter Three",
        title: "Virtue Ethics and the Sacrament of Marriage",
        description: "The third and final chapter explores:",
        topics: [
          "Common elements of marriage found in common law union marriages",
          "How those elements may help persons move toward the Sacrament of Marriage",
          "Sacramental marriage",
          "The transforming power of grace",
          "The image of the holy city and the new Jerusalem: \"prepared as a bride adorned for her husband\" (Cf. Rev.21:2)",
          "The role of the Sacrament of Reconciliation",
          "Perseverance in the practice of virtue ethics",
          "Receiving the grace of the Sacrament of Marriage",
          "God's mercy in relation to human weakness",
        ],
      },
    ],
    concludingReflection: {
      heading: "CONCLUDING REFLECTION",
      subtitle:
        "The movement toward the Sacrament of Marriage, morality, holiness and the grace of God.",
      points: [
        "The special charism given in the Sacrament of Matrimony",
        "The grace of God",
        "The possibility of persons living in common law unions moving toward the Sacrament of Marriage",
        "Living a life intended by God",
        "The continued task of the Church",
        "Preparation for marriage",
        "A life of morality",
        "A life of holiness",
        "The vocation of the Christian family",
      ],
      paragraphs: [
        "The book concludes by encouraging newly married couples to live a life of holiness, emphasizing that with the grace of God and the special charism of the Sacrament of Matrimony, persons living in common law unions can embrace the Sacrament of Marriage and live the fullness of Christian family life as intended by God.",
      ],
    },
  },
  {
    id: "book-03",
    order: 3,
    title: "THE LENTEN JOURNEY OF A PILGRIM",
    slug: "the-lenten-journey-of-a-pilgrim",
    description:
      "A reflective spiritual journey that presents Lent as a sacred pilgrimage within the larger journey of human life, guiding the reader through prayer, fasting, almsgiving, struggle, transformation, grace, and ultimately the hope of Resurrection and eternal life.",
    coverImage: "/images/books/book3.jpg",
    status: "COMING_SOON",
    category: "Spiritual Theology",
    categories: [
      "Prayer, Mercy & Spiritual Growth",
      "The Human Heart & Transformation",
      "Christian Discipleship",
      "Biblical Characters",
      "Faith & Trust",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title: "The Lenten Journey of a Pilgrim",
      description:
        "The Lenten Journey of a Pilgrim presents Lent as a sacred journey within the pilgrimage of life, offering simple and reflective insights through prayer, fasting, almsgiving, temptation, transformation, grace, Resurrection, and eternal life.",
    },
    structureOverview:
      "A spiritual journey unfolded through seven chapters corresponding to the seven Sundays of Lent.",
    pullQuote: {
      text: "The Lenten journey is not about perfection; it is about direction.",
      author: "Rev. Fr. Dr. Joseph Raj",
    },
    generalIntroduction: [
      {
        heading: "THE PILGRIMAGE OF HUMAN LIFE",
        paragraphs: [
          "Every human life is, in its deepest sense, a pilgrimage. We are not static beings; we are travelers, men and women in motion, journeying through time, experiences, struggles, and grace toward an ultimate destination that often lies beyond what we can fully comprehend. Life unfolds as a long journey marked by moments of joy and sorrow, clarity and confusion, strength and weakness. Within this greater pilgrimage, the season of Lent emerges as a sacred and concentrated journey—a “journey within the journey”—inviting us to pause, reflect, and realign our path with God.",
        ],
      },
      {
        heading: "LENT AS A JOURNEY WITHIN THE JOURNEY",
        paragraphs: [
          "The Lenten Journey of a Pilgrim is born out of this awareness: that Lent is not an isolated spiritual exercise, but a meaningful segment of the broader pilgrimage of life. It is a time given to us not merely to observe religious practices, but to enter into a deeper encounter and establishing a genuine triad relationship with God, with our own inner selves and with our neighbors, and to correspondingly practice the invitation extended on Ash Wednesday: Prayer to strengthen our union with God; fasting to control our inordinate and carnal desires to find peace with oneself and almsgiving to be exercised to our neighbors in the context of spiritual and corporal works of mercy.",
        ],
      },
      {
        heading: "THE FORTY-DAY WALK WITH CHRIST",
        paragraphs: [
          "The forty days of Lent offer a unique opportunity to step aside from the distractions and noise that so often dominate our lives, and to walk intentionally with Christ—more closely, more honestly, and more faithfully. This book invites you, the reader, to see yourself as a pilgrim. A pilgrim is not simply a traveler; a pilgrim is one who journeys with purpose, with faith, and with a longing for transformation. The pilgrim understands that the journey itself is formative, that the road shapes the traveler just as much as the destination draws them forward. Lent, then, becomes a school of pilgrimage. It teaches us how to walk: how to let go of unnecessary burdens, how to depend more fully on God, and how to remain faithful even when the path becomes uncertain and difficult.",
        ],
      },
      {
        heading: "THE SEVEN SUNDAYS AS A SPIRITUAL MAP",
        paragraphs: [
          "The structure of this journey is beautifully reflected in the seven Sundays of the Lenten Season. Beginning with the celebration of Ash Wednesday which introduces the season of Lent inviting us with a theme of Praying, Fasting and Alms-giving. Each Sunday offers a distinct spiritual theme, guiding us step by step along the path of renewal. From the stark encounter with temptation in the desert to the radiant hope of the Resurrection, these Sundays form a spiritual map—a progression that mirrors the inner journey of every pilgrim. They remind us that the path to new life is neither instant nor effortless; it is a gradual unfolding, marked by struggle, grace, and ultimately, victory.",
        ],
      },
    ],
    chapters: [
      {
        number: "Chapter One",
        title: "Temptation, Trials and Struggles",
        description:
          "The First Chapter begins the journey of the Lenten season with the ever-present reality of temptations, trials and struggles of this world.",
        topics: [
          "Christ Himself as the true Pilgrim who walks before us and with us",
          "Christ as the Way, the Truth and the Life",
          "Walking the Lenten journey with Christ",
          "Using Christ's Word to overcome temptations and trials",
          "Christ's victory over Satan",
        ],
      },
      {
        number: "Chapter Two",
        title: "Desert, Transfiguration and the Journey of Faith",
        description:
          "The Second Chapter follows Christ's journey through the desert and toward the mountain of Transfiguration.",
        topics: [
          "Christ journeys through the desert",
          "The mountain of Transfiguration",
          "Moving from the earthly and temporary world toward heavenly and perennial reality",
          "Abraham's example of faith",
          "Leaving behind things and attachments of this world",
          "A leap of faith",
          "Carrying our crosses daily and walking the way of Calvary",
          "Hope of eternal glory",
        ],
      },
      {
        number: "Chapter Three",
        title: "Transformation",
        description:
          "The Third Chapter invites the reader to make a journey of transformation across the three liturgical cycles:",
        topics: [
          "Cycle A: The Samaritan woman at the well — Movement from the world of unquenched thirst toward finding the living water in Christ.",
          "Cycle B: The cleansing of the Temple of Jerusalem — Movement from a life of sin toward embracing the life of grace in Christ.",
          "Cycle C: The parable of the barren Fig Tree — Movement from a life of barrenness toward bearing fruits and the fruits of the Spirit in Jesus.",
        ],
      },
      {
        number: "Chapter Four",
        title: "Spiritual Sight and Returning to the Father",
        description:
          "The Fourth Chapter invites the reader to examine physical sight and, more importantly, spiritual sight across the liturgical cycles:",
        topics: [
          "Cycle A: The man born blind — Movement from blindness to sight and from doubt to faith.",
          "Cycle B: Nicodemus — Christ leads Nicodemus toward recognizing Him as the One sent by the Father to save the world.",
          "Cycle C: The Prodigal Son — Movement from a life of debauchery toward a life of sonship as the Prodigal Son comes back to his senses and makes a return journey to his father's house.",
        ],
      },
      {
        number: "Chapter Five",
        title: "From Death to Life",
        description:
          "The Fifth Chapter centers on the theme of 'translocation' with emphasis on Jesus Christ as the resurrection and the life:",
        topics: [
          "Cycle A: Martha and Mary — Manifestation of faith and the raising of their brother Lazarus from death.",
          "Cycle B: The grain of wheat — The grain must die in order to give life; sacrifice and a fruitful life in Christ.",
          "Cycle C: The woman caught in adultery — Dead in sin, brought back to life through the loving forgiveness of Christ.",
        ],
      },
      {
        number: "Chapter Six",
        title: "Tribulation",
        description:
          "The Sixth Chapter centers on Palm Sunday and the solemn entry into Holy Week:",
        topics: [
          "Palm Sunday as an invitation to respond to the Passion of Christ: positively, negatively, or by remaining reticent",
          "Entry into Holy Week",
          "The Sacred Triduum — forming ONE ACT of the Paschal Mystery of Christ",
        ],
      },
      {
        number: "Chapter Seven",
        title: "Resurrection and Eternal Life",
        description:
          "The Seventh Chapter concludes the short journey of Lent within the longer journey toward eternal life:",
        topics: [
          "Victorious Resurrection of Christ",
          "Celebration of Easter",
          "Becoming messengers of hope and new life",
          "The ultimate goal of life: completion of the earthly journey",
          "Unfading glory and eternal life",
        ],
      },
    ],
    personalPilgrimage: {
      heading: "THE PERSONAL PILGRIMAGE",
      subtitle: "Every pilgrim carries their own story, wounds, hopes and fears.",
      paragraphs: [
        "This journey is deeply personal. Every pilgrim carries their own story, wounds, hopes, and fears. No two journeys are exactly alike. Along the road, pilgrims experience different spiritual seasons—moments of healing and moments of struggle, seasons of awakening and seasons of spiritual dryness, sudden insight and profound consolation. This work is a gentle invitation to meet God honestly wherever you are and to take the next step on the road.",
      ],
      points: [
        "Healing in moments of brokenness",
        "Awakening to God's presence",
        "Faithfulness through spiritual struggle and dryness",
        "Consolation and insight along the pilgrim way",
      ],
    },
    trainingGround: {
      heading: "LENT AS A TRAINING GROUND FOR LIFE",
      subtitle: "The short journey of Lent within the longer journey of life.",
      paragraphs: [
        "Lent is a microcosm—a concentrated reflection of the larger pilgrimage of human existence. The lessons learned during these forty days do not end with Easter; virtues such as patience, humility, and compassion accompany us throughout life. Lent becomes a spiritual training ground that prepares the pilgrim to face life's ongoing challenges with greater faith and resilience: crossing deserts, overcoming temptations, climbing mountains, bearing crosses, and experiencing moments of transfiguration, encounters of grace, and the promise of Resurrection.",
        "This book does not seek to offer complex theological arguments or exhaustive explanations. It provides simple, reflective insights and companionship for the road, inviting a slow, prayerful reading where the pilgrim can pause, listen, and respond. Readers are encouraged to approach the season with openness—to be surprised by God, confront what needs to be confronted, let go of what needs to be released, and embrace what needs to be renewed.",
      ],
    },
    concludingReflection: {
      heading: "THE JOURNEY TOWARD RESURRECTION",
      subtitle:
        "Closing reflection on grace, renewal, and the fullness of life in Christ.",
      points: [
        "Walking into the mystery of God's love",
        "God walking with us in our struggles, questions, quests, and hopes",
        "Journeying through the desert, the garden of passion, the cross, and the tomb of death",
        "The glorious Resurrection of eternal life",
        "Movement toward grace, renewal, transformation, transition, and translocation toward heavenly reality",
        "Drawing closer to the celebration of Easter and the fullness of life God desires",
      ],
      paragraphs: [
        "The Lenten Journey of a Pilgrim is an invitation to walk more deeply into the mystery of God's love. God walks with us in our struggles, questions, quests, and hopes—leading us through the desert, the garden of passion, the cross, and the tomb to the glorious victory of the Resurrection.",
      ],
    },
  },
  {
    id: "book-04",
    order: 4,
    title:
      "God the Creator’s Plan for Sanctification of Family Through the Nuptial Blessing of the Sacrament of Marriage",
    slug: "god-the-creators-plan-for-sanctification-of-family",
    description:
      "An exploration of God’s plan for marriage and family life, focusing on the Nuptial Blessing, the grace of the Sacrament of Marriage, and the vocation of Christian families to holiness and sanctification through Sacred Scripture and the teachings of the Church.",
    coverImage: "/images/books/book4.jpg",
    status: "COMING_SOON",
    category: "Marriage & Family",
    categories: [
      "Christian Discipleship",
      "Prayer, Mercy & Spiritual Growth",
      "The Human Heart & Transformation",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title:
        "God the Creator’s Plan for Sanctification of Family Through the Nuptial Blessing of the Sacrament of Marriage",
      description:
        "Explore God’s plan for marriage and family through the Nuptial Blessing, the grace of the Sacrament of Marriage, Sacred Scripture, Church teaching, and the vocation of Christian families to holiness and sanctification.",
    },
    centralQuestion:
      "If human beings attempt to face the challenges of family life relying solely on their own strength, how much more fruitful and grace-filled would family life become if lived through reliance upon God and the graces bestowed through the Nuptial Blessing?",
    sanctificationProgression: [
      "God",
      "Marriage",
      "Nuptial Blessing",
      "Grace",
      "Family Life",
      "Sanctification",
      "Holiness",
    ],
    pullQuote: {
      text: "Be perfect, therefore, as your heavenly Father is perfect (Mt. 5:48)",
      author: "Sacred Scripture",
    },
    generalIntroduction: [
      {
        heading: "THE FAMILY AND THE CONTEMPORARY CRISIS",
        paragraphs: [
          "The family is the fundamental building block of society, a vital cell of both the Church and the human community. In recent times, the foundational values of marriage and family life have been increasingly undermined and overlooked across many parts of the world. A widespread attitude of permissiveness and what Pope John Paul II termed the “culture of death” have contributed to a diminishing appreciation for human dignity, respect for human life, and the sanctity of the Sacrament of Marriage.",
        ],
      },
      {
        heading: "REDISCOVERING GOD’S ORIGINAL PLAN",
        paragraphs: [
          "In the face of this profound contemporary crisis, there is an urgent need to rediscover the dignity and sanctity of family life as intended by God from the beginning. Marriage is not merely a social institution or a temporary human arrangement; it is an intimate partnership of life and love established within a theological and sacramental framework, sustained by God’s grace and the sacred Nuptial Blessing.",
        ],
      },
      {
        heading: "THE SACREDNESS OF MARRIAGE",
        paragraphs: [
          "The authentic meaning, excellence, and sacredness of marriage are frequently obscured by practices and attitudes such as polygamy, divorce, “free love”, cohabitation, hedonism, selfishness, and an excessive pursuit of pleasure that reduces human sexuality to a merely biological function rather than a sacred, relational gift intended by the Creator.",
        ],
      },
      {
        heading: "CONTEMPORARY CHALLENGES TO FAMILY LIFE",
        paragraphs: [
          "Family life today confronts grave challenges: exaggerated notions of freedom, immoral behavior, same-sex unions, sex trafficking, child exploitation, contraceptive practices, direct and indirect abortion, premarital and extramarital relations, single-parent households where children lack parental care, street children, and instances of abuse across communities. These realities reflect a deep woundedness in modern society that urgently calls for the healing truth of the Gospel.",
        ],
      },
      {
        heading: "THE LOSS OF THE SENSE OF GOD AND SIN",
        paragraphs: [
          "At the root of this crisis lies secularism, which drains the concept of morality from public and private life, leading to a loss of the awareness of God and a loss of the sense of sin. A humanism detached from God—centered wholly on action, material production, consumerism, and unchecked freedom—leaves individuals unconcerned with the salvation of the human soul and the spiritual foundations of family life.",
        ],
      },
      {
        heading: "PURPOSE OF THE WORK",
        paragraphs: [
          "This work seeks to promote and defend the dignity of marriage and family life in strict fidelity to Sacred Scripture, Papal documents, the doctrinal teachings of the Church, and the Catechism of the Catholic Church—which serves as a “sure and authentic reference text”. It aims to foster the sanctification of families through divine grace and encourage men and women to embrace the Sacrament of Marriage as the bedrock of authentic Christian community.",
        ],
      },
      {
        heading: "SCRIPTURE, CHURCH TEACHING AND THE FAMILY",
        paragraphs: [
          "Grounded in Sacred Scripture and Church teaching, this study draws significantly upon the insights of the Synod of Bishops concerning The Vocation and Mission of the Family in the Church and in the Contemporary World, providing pastors, couples, and the faithful with a sound doctrinal and pastoral guide for contemporary family life.",
        ],
      },
      {
        heading: "THE VOCATION AND MISSION OF THE FAMILY",
        paragraphs: [
          "The Christian family possesses a unique vocation and mission in the modern world. In cooperating with God in the transmission of human life and the education of children, fulfilling God’s will within daily family life becomes an authentic path toward holiness and sanctification.",
        ],
      },
      {
        heading: "THE NUPTIAL BLESSING",
        paragraphs: [
          "The Nuptial Blessing is integral to the theology and sacramentality of marriage. Far from being a decorative ceremonial addition, it is a profound liturgical prayer and revelation of God’s loving plan that invokes special divine graces upon the spouses for their mutual sanctification and the holy upbringing of their family.",
        ],
      },
      {
        heading: "FAMILY LIFE AS A PATH TO HOLINESS",
        paragraphs: [
          "Through the redemptive mystery of Christ, family life is elevated to become a true sanctuary of grace. When lived in reliance upon the graces bestowed through the Nuptial Blessing, the daily joys, trials, sacrifices, and mutual love of spouses become the very terrain of Christian sanctification.",
        ],
      },
      {
        heading: "SIGNS OF HOPE",
        paragraphs: [
          "Amidst contemporary challenges, there are radiant signs of hope. Many faithful Christian families sincerely strive to live their faith at home, bearing joyful witness to the beauty, resilience, and sanctity of married life. Their lives demonstrate that God’s grace remains ever active and powerful in transforming homes into domestic churches.",
        ],
      },
      {
        heading: "FAITH, GRACE AND THE SACRAMENT OF MARRIAGE",
        paragraphs: [
          "The true meaning and fruitfulness of all the sacraments are realized through the redemptive work of Jesus Christ. Faith belongs to the very essence of Christian marriage; where faith is nurtured and sustained, the Sacrament of Marriage bears rich fruit in the lives of the spouses, their children, the Church, and the wider world.",
        ],
      },
    ],
    concludingReflection: {
      heading: "CLOSING THEOLOGICAL REFLECTION",
      subtitle:
        "The vocation of the family and the universal call to holiness.",
      points: [
        "Rediscovering God's original plan for marriage and family",
        "Understanding marriage within the sacramental life of the Church",
        "The Nuptial Blessing as integral to marital theology and sacramentality",
        "Divine grace as the foundation for family sanctification",
        "The family's indispensable vocation and mission in Church and society",
        "Daily family life as a path toward holiness and perfection",
        "Faith in the Sacrament of Marriage as essential to its fruitfulness",
        "The universal call to holiness addressed to all Christian families",
      ],
      paragraphs: [
        "God the Creator’s Plan for Sanctification of Family Through the Nuptial Blessing of the Sacrament of Marriage brings together the biblical, canonical, and pastoral foundations of Christian matrimony. It reminds us that family life is not an isolated human effort, but a holy vocation sustained by the grace of Christ, the power of the Nuptial Blessing, and the universal call to holiness.",
      ],
    },
  },
  {
    id: "book-05",
    order: 5,
    title: "My Soul Magnifies the Lord – A Tribute to the Blessed Virgin Mother Mary",
    slug: "my-soul-magnifies-the-lord-a-tribute-to-the-blessed-virgin-mother-mary",
    description:
      "A heartfelt tribute to the Blessed Virgin Mary, exploring her many titles, her role in salvation history, and the faith, humility, obedience, and maternal intercession that continue to inspire Christians throughout the Church.",
    coverImage: "/images/books/book5.jpg",
    status: "COMING_SOON",
    category: "Marian Theology",
    categories: [
      "Biblical Characters",
      "Faith & Trust",
      "Christian Discipleship",
      "Prayer, Mercy & Spiritual Growth",
      "Evangelization & Mission",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title:
        "My Soul Magnifies the Lord – A Tribute to the Blessed Virgin Mother Mary",
      description:
        "A heartfelt tribute to the Blessed Virgin Mary, exploring her many titles, her role in salvation history, and the faith, humility, obedience, and maternal intercession that continue to inspire Christians throughout the Church.",
    },
    generalIntroduction: [
      {
        heading: "TRADITION AND MEANING OF MARIAN TITLES",
        paragraphs: [
          "Celebrating Mary under various titles is a long-standing tradition in the Christian faith, particularly in the Roman Catholic Church. This tradition reflects the many ways Mary participates in God’s plan of salvation and the diverse roles she plays in the life of the Church and its faithful. Each title accorded to her by the faith experience of people in a particular locality expresses a unique aspect of her relationship with God and her continuous intercession for humanity.",
          "In the life of the Church, the Virgin Mary is honored under many different titles because of the rich and multifaceted role she fulfills in salvation history. These titles—often called Marian titles—do not refer to different Marys but to the one Mother of Jesus, contemplated from different perspectives of faith, history, culture, and devotion. Although the titles are too numerous to count, this book focuses on those most pertinent to its geographical context and diverse culture of worship.",
        ],
      },
      {
        heading: "TITLES OF MOTHERHOOD, COMPASSION, AND APPARITIONS",
        paragraphs: [
          "Titles such as Mary, Mother of God and Mary, Mother of the Church emphasize her divine motherhood—the truth that she bore Jesus Christ, the Son of God. Others, such as Our Lady of Sorrows, Our Lady of Grace, and Our Lady of Mercy, highlight her compassion and her sharing in the suffering of her Son Jesus. Titles such as Our Lady of Lourdes and Our Lady of Fatima commemorate specific apparitions and the messages entrusted through them to guide the faithful.",
        ],
      },
      {
        heading: "VENERATION, HUMILITY, AND INTERCESSION",
        paragraphs: [
          "By honoring Mary under her various titles, Christians do not worship her; rather, they venerate her, giving her due honor as Mother and as the first and most faithful disciple of Christ. These celebrations help believers recognize her example of faith, humility, and obedience. They inspire devotion and deepen trust in her maternal intercession. In essence, each Marian title offers a unique invitation to reflect upon the mysteries of God through the lens of Mary’s life and virtues.",
        ],
      },
      {
        heading: "A HUMBLE EFFORT TOWARD TRUE DEVOTION",
        paragraphs: [
          "This work acknowledges that a compendium of the feasts and titles of Mother Mary can never fully capture all the roles the Blessed Virgin Mary has played—and continues to play—from heaven, where she lovingly leads her children along the path of salvation.",
          "The collection is not intended to be exhaustive. Rather, it is offered as a humble effort to inspire greater devotion to the Blessed Virgin Mary. May it encourage readers to honor her duly and draw many more people toward true devotion to her, so that through her maternal intercession they may attain eternal salvation by doing whatever her Son, Jesus, tells them.",
        ],
      },
    ],
    bookThemes: {
      heading: "WHAT THIS BOOK EXPLORES",
      subtitle: "Core themes and spiritual insights found within this Marian tribute.",
      points: [
        "The many Marian titles and their significance",
        "Mary's role in salvation history",
        "Mary as Mother of God and Mother of the Church",
        "Titles associated with Mary's compassion, mercy, and suffering",
        "Marian apparitions and their messages",
        "Mary's example of faith, humility, and obedience",
        "Marian devotion and maternal intercession",
        "Reflection on Mary as the first and faithful disciple of Christ",
        "Encouragement toward deeper devotion and Christian discipleship",
      ],
      paragraphs: [
        "This tribute guides the reader through a rich contemplation of the Blessed Virgin Mary, providing a peaceful and spiritually enriching companion for Christians seeking to deepen their understanding of her maternal role in the life of faith.",
      ],
    },
    concludingReflection: {
      heading: "MATERNAL INTERCESSION AND DISCIPLESHIP",
      subtitle: "Leading the faithful along the path of salvation.",
      points: [
        "Honoring Mary as the Mother of God and first disciple",
        "Reflecting upon the mysteries of God through Mary's virtues",
        "Trusting in her continuous maternal intercession",
        "Fulfilling the counsel to do whatever Jesus tells us",
      ],
      paragraphs: [
        "May this tribute inspire readers to honor the Blessed Virgin Mary duly and draw many more souls toward true devotion, so that through her maternal intercession they may attain eternal salvation in Christ.",
      ],
    },
  },
  {
    id: "book-06",
    order: 6,
    title: "The Magical Perfection of Number ‘7’ in Sacred Scripture",
    slug: "the-magical-perfection-of-number-7-in-sacred-scripture",
    description:
      "An exploration of the profound biblical symbolism of the number seven, revealing its connection with divine perfection, completeness, creation, salvation history, the life of the Church, and the fulfillment of God’s plan.",
    coverImage: "/images/books/book6.jpg",
    status: "COMING_SOON",
    category: "Biblical Theology",
    categories: [
      "Biblical Characters",
      "Faith & Trust",
      "Prayer, Mercy & Spiritual Growth",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title: "The Magical Perfection of Number ‘7’ in Sacred Scripture",
      description:
        "An exploration of the profound biblical symbolism of the number seven, revealing its connection with divine perfection, completeness, creation, salvation history, the life of the Church, and the fulfillment of God’s plan.",
    },
    structureOverview:
      "Seven Parts — One Journey Toward Divine Fulfillment",
    progression: {
      title: "Seven Parts — One Journey Toward Divine Fulfillment",
      steps: [
        "Creation",
        "Salvation History",
        "Christ",
        "Life of the Church",
        "Marian Devotion",
        "Revelation",
        "Divine Fulfillment",
      ],
    },
    generalIntroduction: [
      {
        heading: "NUMBERS AS SACRED THEOLOGICAL SIGNS",
        paragraphs: [
          "Numbers in Sacred Scripture are never merely mathematical values; they function as theological signs that carry spiritual meaning and reveal the hidden order of God’s revelation. In the biblical tradition, certain numbers such as 2, 5, and 9 often appear in contexts that suggest incompleteness, limitation, or transition, while other numbers such as 3, 7, 12, and 40 express fullness, divine order, covenantal structure, and spiritual transformation. This study begins by acknowledging this symbolic language of Scripture, where numbers become a sacred grammar through which God communicates mystery and reveals his plan of salvation for mankind according to divine order.",
        ],
      },
      {
        heading: "NUMBERS OF HUMAN LIMITATION AND SEARCH",
        paragraphs: [
          "The number 2 often signifies division or witness, as seen in the need for two witnesses to establish truth, yet it also reflects tension and duality—light and darkness, good and evil—pointing to the unfinished nature of human experience. The number 5 frequently represents human limitation, as seen in the five loaves offered before the miracle of multiplication, symbolizing what humanity can offer but cannot complete without divine intervention as when the five loaves and the two fish were brought to Jesus, becoming 7 and fulness, able to feed five thousand men. The number 9 is often associated with nearing completion but not attaining it fully, suggesting expectation and a movement toward fulfilment that is not yet realized. These numbers, in their own way, reveal the condition of humanity as limited, searching, and dependent upon God’s completion.",
        ],
      },
      {
        heading: "NUMBERS OF DIVINE PERFECTION, COVENANT, AND TRANSFORMATION",
        paragraphs: [
          "In contrast, Scripture consistently presents numbers that signify divine perfection and order. The number 3 reveals the fullness of God himself in the mystery of the Holy Trinity—Father, Son, and Holy Spirit—and is also the number of resurrection and divine manifestation. The number 12 signifies covenantal wholeness and the establishment of God’s people, seen in the twelve tribes of Israel and the twelve apostles of Christ, representing divine governance and completeness in community. The healing story of the woman who was suffering with hemorrhage for 12 years and the raising of Centurian’s daughter who was 12 years old as well, symbolize that in God’s plan everything is brought to wholeness, completion and life giving. The number 40 expresses sacred time of purification and transformation, as seen in the flood, the wilderness journey, Christ’s temptation, and the Lenten journey of 40 days as pilgrims, marking a process of preparation leading to renewal and spiritual maturity culminating in the eternal life the Lord has for us.",
        ],
      },
      {
        heading: "THE NUMBER SEVEN ACROSS SALVATION HISTORY",
        paragraphs: [
          "Among all these sacred numbers, the number 7 stands out as the most consistent, purposeful and profound symbol of divine perfection in Sacred Scripture. It appears over 700 times in the bible symbolizing divine perfection completeness and God’s finished work; from the very beginning in the seven days of creation, where God brings the work of creation to completion and sanctifies the seventh day as a day of rest, which would later on be called the Sabbath. This number continues to recur throughout salvation history and revelation in patterns of worship, covenant, prayer, and divine action. It is seen in the seven sacraments of the Church, the seven gifts of the Holy Spirit, the seven penitential psalms, the seven words of Christ on the Cross, the seven signs in the Gospel of John, and the seven seals, trumpets, and visions in the Book of Revelation.",
          "It is also worth mentioning here the transformative story of the Samaritan woman at the well, who has had five men and when encountering Jesus, she was with the sixth man who in the words of Jesus, is not hers, connotes her search for happiness and perfection which she found finally in Jesus, who numerically the 7th man who fulfilled all her longings and desire by offering her the living water. The filling of 6 jars with water to the brim and Jesus turning them into wine at the wedding in Cana signifies that nothing is lacking in the presence of Jesus. The casting of 7 demons from Mary Magdalene connotes complete healing. The number 7 therefore, becomes a unifying biblical symbol of completeness, harmony, and fulfillment according to the divine order.",
        ],
      },
      {
        heading: "THE SEVEN-PART SYMBOLIC STRUCTURE",
        paragraphs: [
          "This work is therefore arranged in a deliberate and symbolic manner, reflecting the very mystery it seeks to explore. It is divided into seven parts, each unfolding a particular dimension of the biblical significance of the number seven, moving from creation through salvation history, into the revelation of Christ, the life of the Church, Marian devotion, and finally the mystery of divine fulfilment in Revelation. Within this structure, the chapters together form a unified journey, guiding the reader from what is incomplete toward the perfection that finds its fullness in God.",
        ],
      },
      {
        heading: "PURPOSE OF THE WORK: THE KEY TO DIVINE ORDER",
        paragraphs: [
          "The purpose of this work is to explore this sacred numerical symbolism and to show how Scripture moves from what is incomplete and partial toward what is perfect and fulfilled in God. The choice of focusing on the number 7 is deliberate, because it represents the culmination of divine order within creation, salvation history, and revelation. It is the number in which human limitation finds completion, fragmentation finds unity, and time finds sacred rest. In this sense, the number 7 becomes a theological key that opens the deeper meaning of Scripture, revealing the perfection of God’s design and the fullness of his plan in Christ, in whom all things are brought to completion.",
        ],
      },
    ],
    bookThemes: {
      heading: "WHAT THIS BOOK EXPLORES",
      subtitle:
        "Key biblical themes, numerological symbolism, and divine order.",
      points: [
        "The theological symbolism of numbers in Sacred Scripture",
        "The meaning of numbers 2, 3, 5, 7, 9, 12, and 40",
        "The relationship between numerical symbolism and divine order",
        "The number 7 as a symbol of divine perfection and completeness",
        "The seven days of Creation and the Sabbath",
        "Biblical patterns involving seven in salvation history",
        "The seven sacraments of the Church",
        "The seven gifts of the Holy Spirit",
        "The seven penitential psalms",
        "The seven words of Christ on the Cross",
        "The seven signs in the Gospel of John",
        "The seven seals, trumpets, and visions in Revelation",
        "The Samaritan woman and the theme of fulfillment in Christ",
        "The six jars at Cana and the fullness found in Christ",
        "The seven demons of Mary Magdalene and complete healing",
        "The seven-part structure of the book",
        "The movement from human limitation toward divine fulfillment",
      ],
      paragraphs: [
        "This study invites readers into a deeper encounter with Sacred Scripture, uncovering the divine architecture that unites creation, salvation history, the sacraments, and eternal glory.",
      ],
    },
    concludingReflection: {
      heading: "THE THEOLOGICAL KEY TO SCRIPTURAL COMPLETION",
      subtitle:
        "Human limitation finding completion and rest in the perfection of God.",
      points: [
        "Numbers as a sacred grammar communicating divine mystery",
        "Moving from human limitation toward divine perfection",
        "The number 7 as the culmination of divine order in creation and salvation",
        "All things brought to completion in Jesus Christ",
      ],
      paragraphs: [
        "The choice of focusing on the number 7 is deliberate: it represents the culmination of divine order within creation, salvation history, and revelation. In Christ, human limitation finds completion, fragmentation finds unity, and time finds sacred rest.",
      ],
    },
  },
  {
    id: "book-07",
    order: 7,
    title:
      "The Theological, Canonical, and Pastoral Significances of the Sacraments in the Church",
    slug: "the-theological-canonical-and-pastoral-significances-of-the-sacraments-in-the-church",
    description:
      "A comprehensive exploration of the sacraments and sacramentals through theological, canonical, and pastoral perspectives, examining their role in salvation, the sanctification of the faithful, and the Church’s response to contemporary pastoral challenges.",
    coverImage: "/images/books/book7.jpg",
    status: "COMING_SOON",
    category: "Sacramental Theology",
    categories: [
      "Christian Discipleship",
      "Prayer, Mercy & Spiritual Growth",
      "Evangelization & Mission",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title:
        "The Theological, Canonical, and Pastoral Significances of the Sacraments in the Church",
      description:
        "A comprehensive exploration of the sacraments and sacramentals through theological, canonical, and pastoral perspectives, examining their role in salvation, the sanctification of the faithful, and the Church’s response to contemporary pastoral challenges.",
    },
    threefoldDimension: [
      {
        label: "Dimension I",
        title: "THEOLOGICAL",
        description:
          "Understanding the divine origin, meaning, efficacy, and salvific purpose of the sacraments.",
      },
      {
        label: "Dimension II",
        title: "CANONICAL",
        description:
          "Understanding the juridical norms governing the valid, licit, and proper celebration and administration of the sacraments.",
      },
      {
        label: "Dimension III",
        title: "PASTORAL",
        description:
          "Understanding the Church's responsibility to accompany, form, sanctify, and guide the faithful in sacramental life.",
      },
    ],
    keyDistinction: {
      heading: "KEY THEOLOGICAL DISTINCTION",
      subtitle:
        "Essential differences in origin, efficacy, and theological weight between Sacraments and Sacramentals.",
      left: {
        title: "SACRAMENTS",
        subtitle: "Ex Opere Operato",
        points: [
          "Instituted directly by Jesus Christ",
          "Efficacious signs conferring the grace they signify (ex opere operato)",
          "Christ himself acts through valid celebration",
          "Central to the Church's sacramental economy and necessary for salvation",
        ],
      },
      right: {
        title: "SACRAMENTALS",
        subtitle: "Ex Opere Operantis Ecclesiae",
        points: [
          "Instituted by the Church through liturgical authority",
          "Sacred signs disposing the faithful to receive grace",
          "Operate through the prayer and intercession of the Church (ex opere operantis Ecclesiae)",
          "Sanctify various circumstances of daily Christian life (blessings, holy water, rites)",
        ],
      },
    },
    generalIntroduction: [
      {
        heading: "THE SACRAMENTAL NATURE OF THE CHURCH",
        paragraphs: [
          "The life of the Church is profoundly sacramental. Through visible signs instituted by Christ and entrusted to the Church, divine grace is communicated in a manner that is both tangible and transformative. These sacred realities, known as the sacraments, stand at the very heart of Christian existence, shaping the believer’s journey from initiation into Christ to eternal life. Alongside the sacraments, the Church also proposes sacramentals—sacred signs instituted by the Church herself, which prepare the faithful to receive grace and dispose them to cooperate with it. While both sacraments and sacramentals belong to the Church’s sanctifying mission, they differ essentially in origin, efficacy, and theological weight.",
        ],
      },
      {
        heading: "EFFICACY AND OPERATION: SACRAMENTS VS. SACRAMENTALS",
        paragraphs: [
          "The sacraments are efficacious signs of grace, conferring the grace they signify ex opere operato, that is, by the very fact of their valid celebration. In them, Christ himself acts: in Baptism, one is truly reborn; in the Eucharist, one truly receives the Body and Blood of Christ; and in Penance, sins are truly forgiven. The sacraments are therefore necessary in different ways for salvation, as they constitute the ordinary means by which sanctifying grace is bestowed upon the faithful.",
          "Sacramentals, by contrast, operate ex opere operantis Ecclesiae, through the prayer and intercession of the Church. They do not confer grace in the same manner as the sacraments but dispose the faithful to receive it and sanctify various circumstances of life. Blessings, holy water and salt, consecrations of churches, the Stations of the Cross, funerals, and other liturgical and devotional rites extend the Church’s sanctifying presence into daily Christian existence.",
        ],
      },
      {
        heading: "THE THREEFOLD PERSPECTIVE: THEOLOGY, CANON LAW, AND PASTORAL CARE",
        paragraphs: [
          "This distinction is not merely theoretical; it carries profound theological, juridical, and pastoral implications. Theologically, it safeguards the uniqueness of Christ’s institution of the sacraments and their indispensable role in salvation. Juridically, it grounds the Church’s authority to regulate sacramental life with precision, as expressed in the Code of Canon Law, while allowing pastoral flexibility in the use of sacramentals. Pastorally, it calls ministers to form the faithful in a sound understanding of both realities, avoiding neglect of the sacraments on the one hand and superstition regarding sacramentals on the other. In an age marked by both spiritual hunger and doctrinal confusion, a renewed and integrated understanding of the sacramental economy is urgently needed—one that unites theological depth, juridical clarity, and pastoral sensitivity.",
          "This work seeks to explore precisely this threefold dimension by examining the divine origin and salvific purpose of the sacraments, the canonical norms governing their valid and licit celebration, and the pastoral responsibility of the Church in administering them for the sanctification of the faithful. Rooted in Sacred Scripture, developed through Sacred Tradition, and safeguarded by the Magisterium, the sacramental economy manifests the abiding presence of Christ in his Church across time and space. The sacraments stand at the heart of this economy as efficacious signs instituted by Christ and entrusted to the Church for the sanctification of humanity.",
        ],
      },
      {
        heading: "CANONICAL NORMS AND THE SALUS ANIMARUM",
        paragraphs: [
          "At the same time, their celebration and reception are not left to subjective interpretation but are governed by the juridical order of the Church, particularly as expressed in canon law. This legal structure ensures the validity, liceity, and proper administration of the sacraments, protecting both their divine integrity and the rights of the faithful. Canon law thus serves not as a merely regulatory system, but as an instrument ordered toward the salus animarum—the salvation of souls—which remains the supreme law of the Church. In their pastoral dimension, the sacraments become living channels through which the faithful are sanctified, guided, and nourished on the journey of salvation. Ultimately, they are not merely rites to be performed, but encounters with the living Christ, through whom the Church becomes what she is called to be: the universal sacrament of salvation, a visible sign and instrument of communion with God and unity among all people.",
        ],
      },
      {
        heading: "CONTEMPORARY PASTORAL REALITIES AND DISCERNMENT",
        paragraphs: [
          "Within this broader framework, the Church must also address complex pastoral realities that arise in the lives of the faithful, including divorce and remarriage, questions of proper disposition for sacramental participation, and the pastoral care of persons in same-sex relationships. These situations reveal the tension that can exist between the objective demands of sacramental discipline and lived human experience. While the Church firmly upholds the indissolubility of marriage and maintains clear canonical norms regarding sacramental participation, she also recognizes the need for pastoral accompaniment marked by discernment and compassion. In recent ecclesial reflection, particularly under Pope Francis, renewed emphasis has been placed on the careful distinction between doctrinal truth and pastoral application.",
          "Thus, while the Church does not authorize liturgical or ritual blessings that would equate irregular unions with the Sacrament of Matrimony, she does permit simple pastoral blessings as expressions of accompaniment and pastoral closeness. These do not legitimize such unions but invoke God’s grace upon persons, encouraging conversion, fidelity, and growth in the Christian life. This integrated vision highlights the Church’s enduring mission: to uphold the truth of the sacraments while extending the mercy of God to all. It reflects a pastoral theology that avoids both rigid legalism and doctrinal relativism, seeking instead a harmonious unity of truth and charity. In this way, the Church accompanies her members through the complexities of life, always directing them toward deeper communion with Christ and fuller participation in the sacramental life.",
        ],
      },
      {
        heading: "AN INTEGRATIVE AND RENEWED VISION",
        paragraphs: [
          "In addition to presenting the classical foundations of sacramental theology, this work also recognizes the need for an integrative and renewed theological vision in light of contemporary ecclesial realities. The life of the Church today calls for a deeper reflection on the role of the Holy Spirit in sacramental action, the enduring significance of sacramental character, and the intrinsically missionary nature of the sacraments. Moreover, in a world marked by cultural diversity and Christian division, questions of inculturation and ecumenical engagement become increasingly relevant, alongside the vital role of conscience and discernment in pastoral practice.",
          "Alongside the theological exploration of the sacraments and sacramentals, this study also examines the Church’s discernment regarding forbidden occult and esoteric practices. While sacramentals are sacred signs instituted by the Church to dispose believers toward grace and holiness, practices rooted in superstition, divination, magic, and occultism represent a distortion of authentic faith and worship. This distinction is pastorally significant in a contemporary world where many seek spiritual meaning outside the life of the Church. This work, therefore, offers a comprehensive study of the theology, canonical structure, liturgical expression, and pastoral practice of the sacraments.",
          "By examining their theological origins, historical context and development, juridical foundations, and contemporary challenges, this book seeks to present a holistic vision of the sacramental life of the Church, remaining faithful to Sacred Tradition and the teaching Magisterium of the Church while offering meaningful pastoral responses to the needs and challenges of the present age.",
        ],
      },
    ],
    bookThemes: {
      heading: "WHAT THIS BOOK EXPLORES",
      subtitle:
        "Comprehensive themes spanning theological doctrine, canon law, and pastoral accompaniment.",
      points: [
        "The sacramental nature of the life of the Church",
        "The theological meaning and purpose of the sacraments",
        "The distinction between sacraments and sacramentals",
        "The efficacy of the sacraments",
        "The role of sacramentals in Christian life",
        "The theological dimension of sacramental life",
        "The canonical regulation of the sacraments",
        "Validity and liceity in sacramental celebration",
        "Canon law and the salus animarum",
        "The pastoral administration of the sacraments",
        "Sacraments as encounters with the living Christ",
        "The Church as the universal sacrament of salvation",
        "Pastoral challenges involving divorce and remarriage",
        "Proper disposition for sacramental participation",
        "Pastoral accompaniment and discernment",
        "Contemporary ecclesial reflection",
        "The role of the Holy Spirit in sacramental action",
        "Sacramental character",
        "The missionary nature of the sacraments",
        "Inculturation and ecumenical engagement",
        "Conscience and discernment in pastoral practice",
        "Sacramentals and forbidden occult or esoteric practices",
        "Superstition, divination, magic, and occultism",
        "The historical and theological development of the sacraments",
        "Contemporary challenges to sacramental life",
        "A holistic theological, canonical, liturgical, and pastoral vision",
      ],
      paragraphs: [
        "This work provides a rigorous and pastorally sensitive guide through the sacramental economy of the Catholic Church, equipping ministers, scholars, and the faithful with clarity and depth.",
      ],
    },
    concludingReflection: {
      heading: "THE SACRAMENTAL ECONOMY AND THE SALVATION OF SOULS",
      subtitle:
        "A harmonious unity of truth, canonical order, and pastoral charity.",
      points: [
        "The sacraments as encounters with the living Christ",
        "Canon law ordered toward the salus animarum (the salvation of souls)",
        "Pastoral accompaniment uniting truth and mercy",
        "The Church as the universal sacrament of salvation",
      ],
      paragraphs: [
        "By examining their theological origins, juridical foundations, and contemporary challenges, this work presents a holistic vision of the sacramental life of the Church—remaining faithful to Sacred Tradition and the Magisterium while offering meaningful pastoral responses to the present age.",
      ],
    },
  },
  {
    id: "book-08",
    order: 8,
    title: "Preaching God’s Word Day in and Day Out – (Cycle-A)",
    slug: "preaching-gods-word-day-in-and-day-out-cycle-a",
    description:
      "An enriching collection of homily reflections for Liturgical Cycle A, journeying through the Gospel of Matthew and the mystery of Christ. These reflections invite readers to encounter God’s Word more deeply, connect faith with daily life, and allow the Gospel to transform the heart through prayer, meditation, and faithful living.",
    coverImage: "/images/books/book8.jpg",
    status: "COMING_SOON",
    category: "Homiletics & Liturgy",
    categories: [
      "Gospel & Homily Reflections",
      "Christian Discipleship",
      "Faith & Trust",
      "Evangelization & Mission",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title: "Preaching God’s Word Day in and Day Out – (Cycle-A)",
      description:
        "An enriching collection of homily reflections for Liturgical Cycle A, journeying through the Gospel of Matthew and the mystery of Christ. These reflections invite readers to encounter God’s Word more deeply, connect faith with daily life, and allow the Gospel to transform the heart through prayer, meditation, and faithful living.",
    },
    generalIntroduction: [
      {
        heading: "ABOUT THE BOOK",
        paragraphs: [
          "“Preaching God’s Word Day in and Day Out – (Cycle-A)” is a collection of homiletic reflections rooted in the liturgical readings of Cycle A.",
        ],
      },
      {
        heading: "THE JOURNEY THROUGH CYCLE A",
        paragraphs: [
          "In the liturgical calendar, Cycle A invites the faithful to journey more deeply into the mystery of Christ primarily through the Gospel of Matthew, complemented at important liturgical moments by the Gospel of John.",
        ],
      },
      {
        heading: "THE GOSPEL OF MATTHEW",
        paragraphs: [
          "The Gospel of Matthew provides rich insights into the life, teachings, mission, and saving work of Jesus Christ. Through His teachings and powerful miracles, Jesus is presented not merely as a teacher, but as the living fulfillment of God's saving plan.",
        ],
      },
      {
        heading: "CHRIST AS MESSIAH AND KING",
        paragraphs: [
          "A central emphasis of Matthew's Gospel is the revelation of Jesus as the long-awaited Messiah, the true King of Israel, and the fulfillment of the prophecies of the Old Testament. Matthew establishes this identity from the beginning by tracing Jesus' genealogy to Abraham and King David, emphasizing His royal lineage and covenantal identity.",
        ],
      },
      {
        heading: "THE SERMON ON THE MOUNT AND THE KINGDOM OF HEAVEN",
        paragraphs: [
          "The Gospel also gives particular importance to the Kingdom of Heaven and records profound teachings of Jesus, especially the Sermon on the Mount. Through these teachings, Christ presents the new law of love and calls His disciples to participate in the mission of proclaiming the Gospel to all nations.",
        ],
      },
      {
        heading: "HOMILIES FOR DAILY CHRISTIAN LIFE",
        paragraphs: [
          "Throughout the liturgical journey of Cycle A, the homilies seek to help the faithful recognize Christ's presence in both ordinary and extraordinary moments of daily life.",
          "The reflections are intended not merely to communicate information or theological knowledge. Their deeper purpose is to touch the heart, encourage spiritual renewal, strengthen faith, and lead believers toward a deeper encounter with the Lord.",
          "The homilies are written within the context of local culture and worship and are sometimes enriched through the use of the Italian language. They seek to communicate the unwavering love and compassion of Christ and to proclaim God's plan of salvation, expressed in the Church's mission of salvezza delle anime.",
        ],
      },
      {
        heading: "PRAYER, MEDITATION AND TRANSFORMATION",
        paragraphs: [
          "The book encourages readers not simply to read the Word of God, but to enter into it through prayer and meditation.",
          "A central spiritual message of the work is that God's Word is not merely something to be read or heard. It is something to be lived.",
          "The reader is therefore invited to pray for the guidance of the Holy Spirit so that God's Word may penetrate deeply into everyday life, transform thoughts, renew the heart, and guide the person according to the will of God.",
        ],
      },
      {
        heading: "FINAL SPIRITUAL INVITATION",
        paragraphs: [
          "Ultimately, this book is intended to accompany the faithful throughout the liturgical journey of Cycle A, helping them listen to, reflect upon, pray with, and live the Word of God.",
        ],
      },
    ],
    bookThemes: {
      heading: "WHAT THIS BOOK EXPLORES",
      subtitle: "Key liturgical, biblical, and spiritual themes across Cycle A.",
      points: [
        "Homily reflections rooted in the liturgical readings of Cycle A",
        "Journeying through the Gospel of Matthew and the Gospel of John",
        "Jesus as the long-awaited Messiah, true King of Israel, and fulfillment of prophecy",
        "Jesus' royal genealogy tracing back to Abraham and King David",
        "The Sermon on the Mount and the new law of love",
        "Proclaiming the Kingdom of Heaven to all nations",
        "Connecting Sunday Gospel readings with everyday Christian life",
        "Spiritual renewal and deeper encounter with Christ",
        "Cultural context and enrichment through the Italian language",
        "Proclamation of God's plan of salvation (salvezza delle anime)",
        "Prayer and meditation under the guidance of the Holy Spirit",
        "Living the Word of God day in and day out",
      ],
      paragraphs: [
        "This collection offers an accessible, pastorally warm companion for Sunday worshippers, preachers, and catechists seeking to integrate liturgical prayer into the fabric of daily life.",
      ],
    },
    concludingReflection: {
      heading: "LIVING THE WORD OF GOD DAY IN AND DAY OUT",
      subtitle:
        "A spiritual companion for listening, praying, and living the Gospel.",
      points: [
        "Encountering Christ in the liturgical rhythm of Cycle A",
        "Transforming the heart through prayerful meditation on Scripture",
        "The Church's supreme mission: la salvezza delle anime",
        "Allowing the Holy Spirit to guide daily thought and action",
      ],
      paragraphs: [
        "God's Word is not merely something to be read or heard—it is a living reality to be lived. This collection accompanies the faithful on their journey, inspiring minds and hearts to be transformed in Christ.",
      ],
    },
  },
  {
    id: "book-09",
    order: 9,
    title: "PREACHING GOD’S WORD DAY IN AND DAY OUT (CYCLE - B)",
    slug: "preaching-gods-word-day-in-and-day-out-cycle-b",
    description:
      "Journey through Liturgical Cycle B with the Gospel of Mark, reflecting on Christ’s humanity, compassion, suffering, discipleship, and call to service. These homily reflections connect God’s Word with daily life, Caribbean culture, and the mission of bringing Christ’s love, peace, and salvation to others.",
    coverImage: "/images/books/book9.jpg",
    status: "COMING_SOON",
    category: "Homiletics & Liturgy",
    categories: [
      "Gospel & Homily Reflections",
      "Christian Discipleship",
      "Evangelization & Mission",
      "Faith & Trust",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title: "PREACHING GOD’S WORD DAY IN AND DAY OUT (CYCLE - B)",
      description:
        "Journey through Liturgical Cycle B with the Gospel of Mark, reflecting on Christ’s humanity, compassion, suffering, discipleship, and call to service. These homily reflections connect God’s Word with daily life, Caribbean culture, and the mission of bringing Christ’s love, peace, and salvation to others.",
    },
    generalIntroduction: [
      {
        heading: "ABOUT THE BOOK",
        paragraphs: [
          "“Preaching God’s Word Day in and Day Out (Cycle - B)” is a collection of homiletic reflections centered on the liturgical readings of Cycle B.",
          "In the liturgical calendar, Cycle B invites the faithful to journey deeper into the mystery of Christ primarily through the Gospel of Mark, supplemented by the Gospel of John during key liturgical moments.",
        ],
      },
      {
        heading: "THE GOSPEL OF MARK AND CYCLE B",
        paragraphs: [
          "This cycle places particular emphasis on the humanity of Jesus, His compassion, and His call to discipleship. It provides an opportunity to reflect upon how Christ’s teachings and example continue to speak to the realities of everyday life.",
          "The book also recognizes the importance of understanding the distinctive character of Mark’s Gospel when preparing and proclaiming homilies. Pastors and preachers are encouraged to appreciate Mark’s dynamic and action-oriented narrative so that its message can be communicated effectively to the faithful.",
          "The Gospel of Mark is the shortest and one of the most action-oriented of the four Gospels. It presents Jesus as the suffering Messiah and the powerful Son of God. Rather than concentrating primarily on extended teachings, Mark frequently emphasizes the actions and miracles of Jesus.",
          "The repeated sense of urgency and movement within Mark’s narrative invites the reader to encounter Christ as one who acts, serves, heals, suffers, and calls people to follow Him.",
        ],
      },
      {
        heading: "CHRIST, DISCIPLESHIP AND SERVICE",
        paragraphs: [
          "A major theme of this cycle is discipleship. Believers are invited to follow Christ faithfully through sacrifice, suffering, service, and a life shaped by faith.",
          "Each homily seeks to bring the unwavering love and compassion of Christ to the people while proclaiming God's plan of “salvezza delle animae” — the salvation of souls, which remains paramount.",
        ],
      },
      {
        heading: "CARIBBEAN CULTURAL AND PASTORAL CONTEXT",
        paragraphs: [
          "These reflections are written within the context of Caribbean culture and worship. The homilies seek to connect the Gospel with the lived experiences of local communities, drawing examples from daily life, local cultural experiences, worship patterns, and community realities.",
          "The material also incorporates the local dialect French-Kewyol in certain places to communicate the message with greater impact among local people.",
        ],
      },
      {
        heading: "THE POWER OF GOD'S WORD",
        paragraphs: [
          "Allowing God's Word to enter deeply into our lives and meditating upon it helps us understand the message of the homilies more fully. God's Word is living and active, guiding and forming the believer in every circumstance of life (Hebrews 4:12; 2 Timothy 3:16).",
          "The faithful are called to remain open to God's Word so that Scripture becomes an integral part of everyday life, shaping decisions and deepening prayer.",
        ],
      },
      {
        heading: "FAITH, REFLECTION, AND HUMAN EXPERIENCE",
        paragraphs: [
          "Although God's Word is divine and powerful, the writing and interpretation of homilies take place through human minds with limited knowledge and understanding. The work therefore recognizes human conditions and limitations in the process of preparing these reflections.",
          "Rather than weakening the authority of Scripture, this invites both preacher and listener to approach God's Word with humility, openness, and faith.",
        ],
      },
      {
        heading: "A CALL TO RECEIVE GOD'S WORD",
        paragraphs: [
          "The reader is invited to keep the heart open to receive the seed of God's Word so that it may produce a rich harvest in daily life.",
          "The ultimate invitation is to grow in faith, deepen one's personal relationship with God, follow Christ faithfully, serve others with compassion, and become instruments of God's love and peace in the world.",
        ],
      },
    ],
    bookThemes: {
      heading: "WHAT THIS BOOK EXPLORES",
      subtitle:
        "Key liturgical, biblical, and cultural themes across Cycle B and Mark's Gospel.",
      points: [
        "Homily reflections rooted in the liturgical readings of Cycle B",
        "Journeying primarily through the action-oriented Gospel of Mark (with John at key moments)",
        "Jesus as the suffering Messiah and the powerful Son of God",
        "Urgency, movement, healing miracles, and dynamic action in Mark's Gospel",
        "Discipleship through sacrifice, suffering, service, and steadfast faith",
        "Proclaiming God's plan of salvation (salvezza delle anime)",
        "Caribbean cultural context, local community life, and worship",
        "Use of French-Kweyol dialect for meaningful local pastoral communication",
        "The living and transformative power of Scripture (Hebrews 4:12; 2 Timothy 3:16)",
        "Human limitation and humility in the ministry of the Word",
        "The spiritual seed of God's Word producing a rich harvest",
        "Becoming instruments of Christ's love, peace, and salvation in daily life",
      ],
      paragraphs: [
        "This volume provides a vibrant pastoral companion for Sunday worshippers and ministers, integrating the rapid urgency of the Gospel of Mark with the warmth and cultural richness of Caribbean parish life.",
      ],
    },
    concludingReflection: {
      heading: "THE SEED OF GOD'S WORD BEARING FRUIT",
      subtitle:
        "A pastoral journey through Mark's Gospel and the lived reality of faith.",
      points: [
        "Following Christ through discipleship, service, and sacrifice",
        "Encountering the action-oriented urgency of Mark's Gospel",
        "Rooted in Caribbean culture and the salvation of souls (salvezza delle anime)",
        "Keeping our hearts open to the transformative seed of the Word",
      ],
      paragraphs: [
        "May this collection of homilies for Cycle B inspire readers to open their hearts to the seed of God's Word, allowing it to take root and bear a rich harvest of faith, service, compassion, and peace.",
      ],
    },
  },
  {
    id: "book-10",
    order: 10,
    title: "PREACHING GOD’S WORD DAY IN AND DAY OUT (CYCLE - C)",
    slug: "preaching-gods-word-day-in-and-day-out-cycle-c",
    description:
      "Homiletic reflections for Liturgical Cycle C centered on the Gospel of Luke, reflecting on Christ’s compassion, mercy, forgiveness, the poor, prayer, the Holy Spirit, Emmaus, migrant context, and the call to eternal life.",
    coverImage: "/images/books/book10.jpg",
    status: "COMING_SOON",
    category: "Homiletics & Liturgy",
    categories: [
      "Gospel & Homily Reflections",
      "Prayer, Mercy & Spiritual Growth",
      "Christian Discipleship",
      "The Human Heart & Transformation",
      "Evangelization & Mission",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title: "PREACHING GOD’S WORD DAY IN AND DAY OUT (CYCLE - C)",
      description:
        "Homiletic reflections for Liturgical Cycle C centered on the Gospel of Luke, reflecting on Christ’s compassion, mercy, forgiveness, the poor, prayer, the Holy Spirit, Emmaus, migrant context, and the call to eternal life.",
    },
    generalIntroduction: [
      {
        heading: "ABOUT THE BOOK",
        paragraphs: [
          "“PREACHING GOD’S WORD DAY IN AND DAY OUT (CYCLE - C)” is a collection of homiletic reflections for Liturgical Cycle C, centered primarily on the Gospel of Luke and complemented by the Gospel of John during significant liturgical moments.",
        ],
      },
      {
        heading: "THE GOSPEL OF LUKE AND THE COMPASSIONATE SAVIOR",
        paragraphs: [
          "Luke presents Jesus as the compassionate Savior who seeks and saves the lost, with particular emphasis on the poor, sinners, marginalized people, prayer, mercy, forgiveness, and the Holy Spirit.",
          "The reflections invite the faithful to recognize Christ in both ordinary and extraordinary moments of life.",
        ],
      },
      {
        heading: "MIGRANT CULTURE AND LINGUISTIC CONTEXT",
        paragraphs: [
          "The book is written within a migrant cultural and worship context and incorporates Italian language and Saint Lucian French Kweyol where appropriate to connect the Word of God with the lived reality of diverse communities.",
        ],
      },
      {
        heading: "THE EMMAUS JOURNEY AND SPIRITUAL TRANSFORMATION",
        paragraphs: [
          "Throughout Cycle C, the journey of the disciples on the road to Emmaus serves as a powerful model of encounter, breaking open the Scriptures and recognizing Christ in the breaking of the bread.",
        ],
      },
      {
        heading: "A CALL TO RECEIVE GOD'S WORD",
        paragraphs: [
          "The central purpose is to allow God's Word to penetrate the heart, inspire faith, and guide the faithful toward eternal life and the salvation of souls.",
        ],
      },
    ],
    bookThemes: {
      heading: "KEY THEMES",
      subtitle:
        "Major theological and pastoral emphases in Cycle C and Luke's Gospel.",
      points: [
        "Gospel of Luke",
        "Compassion",
        "Mercy",
        "Forgiveness",
        "Prayer",
        "Holy Spirit",
        "The poor and marginalized",
        "Emmaus",
        "Migrant culture",
        "Italian language",
        "Saint Lucian French Kweyol",
        "Salvation of souls",
      ],
      paragraphs: [
        "This volume offers an inspiring, compassionate companion for Sunday worshippers and preachers, bringing Luke's portrait of the merciful Christ into the realities of modern multicultural parish life.",
      ],
    },
    concludingReflection: {
      heading: "THE SAVING MERCY OF CHRIST AND THE JOURNEY OF FAITH",
      subtitle:
        "Encountering Christ in Luke's Gospel and the life of the Church.",
      points: [
        "Encountering Jesus as the compassionate Savior who seeks the lost",
        "Living the Gospel of mercy, forgiveness, and prayer",
        "Recognizing Christ in the migrant community and the breaking of bread",
        "Guiding souls toward the fullness of eternal life",
      ],
      paragraphs: [
        "Through the Gospel of Luke and the reflections of Cycle C, the faithful are called to allow God's transformative Word to guide every step of life toward salvation and eternal communion with God.",
      ],
    },
  },
  {
    id: "book-11",
    order: 11,
    title: "What Matters Most Is Faith",
    slug: "what-matters-most-is-faith",
    description:
      "Faith is the foundation of Christian life and the doorway into relationship with God. Exploring salvation history, the Hall of Faith in Hebrews, and fifteen biblical encounters with Christ, this work reveals how genuine trust, humility, and surrender to the Lord transform the human heart.",
    coverImage: "/images/books/book11.jpg",
    status: "COMING_SOON",
    category: "Biblical Theology",
    categories: [
      "Faith & Trust",
      "Biblical Characters",
      "Christian Discipleship",
      "The Human Heart & Transformation",
      "Prayer, Mercy & Spiritual Growth",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title: "What Matters Most Is Faith | Rev. Fr. Dr. Joseph Raj",
      description:
        "Faith is the foundation of Christian life. Exploring biblical encounters with Christ, salvation history, and Hebrews 11, this book reveals how authentic trust in God transforms the heart.",
    },
    generalIntroduction: [
      {
        heading: "FAITH AS THE FOUNDATION OF CHRISTIAN LIFE",
        paragraphs: [
          "Faith is the foundation of Christian life. It is the human heart's response to God's initiative and the doorway into relationship with Him. Faith transforms Sacred Scripture into the living voice of God, the Sacraments into channels of grace, prayer into genuine conversation with the Lord, and Christian discipleship into a journey of hope. As Hebrews 11:6 teaches, without faith it is impossible to please God.",
          "The book reflects on the continuing human search for meaning in an age of scientific advancement, technological development, and material prosperity. Despite humanity's achievements, fundamental questions about identity, purpose, suffering, death, and hope remain. The Christian understanding is that this search ultimately leads toward the living God, who reveals Himself and invites humanity into a covenant relationship.",
        ],
      },
      {
        heading: "SALVATION HISTORY AND THE THEOLOGICAL VIRTUE OF FAITH",
        paragraphs: [
          "The work presents salvation history as the story of God continually seeking His people: from Adam and Eve, through Abraham, Moses, and the prophets, and ultimately through Jesus Christ. Faith is therefore presented not merely as intellectual agreement or membership in a religious community, but as a loving surrender and confident trust in God's faithfulness.",
          "The book explains faith as both a divine gift and a free human response. Drawing upon the Catechism of the Catholic Church, it presents faith as the theological virtue through which we believe in God and accept what He has revealed because He is Truth itself. Faith requires grace, but it also requires the free cooperation of the human person.",
          "Throughout Sacred Scripture, faith is portrayed as dynamic rather than static. It grows through prayer, deepens through obedience, is purified through suffering, and reaches maturity through love.",
        ],
      },
      {
        heading: "ABRAHAM AND THE HALL OF FAITH",
        paragraphs: [
          "Abraham is presented as the father of faith. His willingness to leave his homeland, trust God's promises, and remain faithful even amid profound uncertainty demonstrates that authentic faith means entrusting one's future into God's hands.",
          "Hebrews Chapter 11, the “Hall of Faith,” provides a wider panorama of people who lived through faith, including Abel, Noah, Moses, prophets, judges, kings, and martyrs. Their significance comes not from wealth, power, or social status, but from their trust in God's promises.",
        ],
      },
      {
        heading: "JESUS CHRIST AND ENCOUNTERS OF FAITH",
        paragraphs: [
          "The fullness of faith is revealed in Jesus Christ. Throughout the Gospels, Jesus repeatedly invites people to believe. The faith of individuals becomes closely connected with their encounters with Christ and with the experience of God's saving power.",
          "A central theme of the book is that Jesus looks beyond external appearances. Social status, wealth, education, nationality, religious standing, and human judgment do not determine the value of a person's faith. The examples of the poor widow, repentant sinner, Roman centurion, Canaanite woman, and woman suffering from hemorrhage demonstrate that what matters most is trust in Christ.",
          "The book particularly emphasizes Jesus' praise of faith. The faith of the Roman centurion, the Canaanite woman, the woman who touched His garment, Jairus, Bartimaeus, and others illustrates the recurring Gospel invitation to trust God.",
        ],
      },
      {
        heading: "FAITH WORKING THROUGH LOVE",
        paragraphs: [
          "At the same time, authentic faith is never presented as an abstract belief. Faith transforms the way a person lives. It shapes priorities, decisions, relationships, obedience, and actions.",
          "The relationship between faith and works is therefore an important part of the book's message. The teachings of St. Paul and St. James are presented as complementary: salvation is God's gift received through faith, while genuine faith necessarily produces works of love. As expressed in Galatians 5:6, what matters is “faith working through love.”",
        ],
      },
      {
        heading: "THE MUSTARD SEED, WEAKNESS, AND SUFFERING",
        paragraphs: [
          "The book also emphasizes that faith does not need to be extraordinary in size. The image of faith as small as a mustard seed shows that its power does not depend upon its size but upon the greatness of God in whom the person trusts.",
          "The experiences of the father who prayed, “Lord, I believe; help my unbelief,” and Peter sinking on the Sea of Galilee demonstrate that genuine faith can coexist with questions, fear, weakness, and doubt.",
          "Faith does not eliminate suffering or the Cross. Rather, it gives the Christian the strength to carry suffering with hope and to trust that God remains present even during trials.",
        ],
      },
      {
        heading: "FIFTEEN BIBLICAL ENCOUNTERS",
        paragraphs: [
          "The work presents fifteen biblical figures whose encounters with Christ reveal different dimensions of faith. Some approach Jesus boldly, some hesitate, some experience immediate answers, while others persevere through apparent silence. Some receive physical healing and others experience spiritual transformation.",
          "Readers are invited to recognize themselves within these biblical encounters: like the Roman centurion in approaching Christ with humility; like the Canaanite woman in persevering in prayer; like the woman with the hemorrhage in reaching toward Christ in hidden suffering; like Bartimaeus in crying out for mercy; like Peter in sometimes acting courageously and sometimes faltering; and like Thomas in struggling with doubt before reaching deeper faith.",
          "The ultimate message is that faith is not merely believing facts about Jesus Christ. It is placing one's entire life into His hands, trusting Him when the future is uncertain, following Him when the path is difficult, obeying Him when His commands challenge us, and remaining faithful when His presence seems hidden.",
        ],
      },
    ],
    bookThemes: {
      heading: "THE DIMENSIONS OF AUTHENTIC FAITH",
      subtitle: "Core theological and biblical dimensions presented in the work.",
      points: [
        "The foundation of Christian discipleship",
        "A divine gift and a free human response",
        "Confident trust in God's promises and faithfulness",
        "The source of perseverance amid trials and uncertainty",
        "The strength and vitality of genuine prayer",
        "The foundation of Christian hope",
        "Faith working through love and good works (Galatians 5:6)",
        "A doorway to God's transforming grace",
        "The power of faith as small as a mustard seed",
        "Grace that coexists with human weakness, questions, and doubt",
        "Fifteen biblical encounters with Christ that reveal God's mercy",
        "The beginning and foretaste of eternal life",
      ],
      paragraphs: [
        "Through these reflections, the book invites readers to see their own lives in the light of the Gospel, discovering how placing one's entire trust in Christ brings peace, purpose, and spiritual renewal.",
      ],
    },
    concludingReflection: {
      heading: "WHAT MATTERS MOST IS FAITH",
      subtitle:
        "Amid the countless pursuits and distractions of the world, one truth remains central.",
      points: [
        "Placing one's entire life into the hands of Jesus Christ",
        "Trusting Him when the future is uncertain and the path is difficult",
        "Obeying Christ when His commands challenge our human inclinations",
        "Remaining faithful even when His divine presence seems hidden",
      ],
      paragraphs: [
        "Faith transforms Sacred Scripture into the living voice of God, the Sacraments into channels of grace, and Christian discipleship into a journey of hope. Amid the countless pursuits and distractions of the world, one truth remains timeless and central: what matters most is faith.",
      ],
    },
  },
  {
    id: "book-12",
    order: 12,
    title: "Holy Women as Evangelizers of the Gospel",
    slug: "holy-women-as-evangelizers-of-the-gospel",
    description:
      "An inspiring exploration of the indispensable role of holy women in salvation history and the Church today, showing how faith, courageous testimony, prayer, hospitality, and lives transformed by Christ become powerful instruments of evangelization.",
    coverImage: "/images/books/book12.jpg",
    status: "COMING_SOON",
    category: "Spiritual Theology",
    categories: [
      "Evangelization & Mission",
      "Biblical Characters",
      "Faith & Trust",
      "Christian Discipleship",
      "Prayer, Mercy & Spiritual Growth",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title: "Holy Women as Evangelizers of the Gospel | Rev. Fr. Dr. Joseph Raj",
      description:
        "The profound contribution of holy women in salvation history and the contemporary Church, exploring how faith, courage, and lives transformed by Christ become instruments of the Gospel.",
    },
    generalIntroduction: [
      {
        heading: "GOD’S UNFAILING LOVE AND THE CALL OF WOMEN",
        paragraphs: [
          "The story of salvation is, above all, the story of God’s unfailing love for humanity. Throughout Sacred Scripture, God calls men and women alike to cooperate in His divine plan, entrusting them with unique and indispensable roles in the unfolding of His saving work.",
          "This book focuses particularly on the profound and often overlooked contribution of holy women whose faith, courage, fidelity, and witness became powerful instruments in proclaiming the Good News.",
        ],
      },
      {
        heading: "DECISIVE WITNESSES IN SALVATION HISTORY",
        paragraphs: [
          "The book explores women who stand at decisive moments in salvation history, including Mary, Elizabeth, Anna, the Samaritan woman, Martha, Mary Magdalene, and other women encountered throughout the Gospel and early Church.",
          "The central message is that these women were not merely passive observers of God's work. They were active participants and evangelizers in the mission of proclaiming the Gospel.",
          "Mary's acceptance at the Annunciation, Elizabeth's recognition of the Messiah, the Samaritan woman's testimony, Martha's profession of faith, and Mary Magdalene's witness to the Resurrection demonstrate how women became vital witnesses to God's saving work.",
        ],
      },
      {
        heading: "FORMS OF EVANGELIZATION AND FAITH IN ACTION",
        paragraphs: [
          "The book highlights the diverse and living forms of evangelization practiced by these holy women: preaching and testimony, prayer, hospitality, generous service, charity, courageous witness, sacrificial love, faithful discipleship, supporting the mission of Jesus, opening homes to Christian communities, missionary collaboration, and lives transformed by an encounter with Christ.",
          "A major theme is that evangelization is not limited to public preaching. Every act of faith, love, mercy, generosity, forgiveness, hospitality, prayer, and service that helps another person encounter Christ becomes a true proclamation of the Gospel.",
          "The book particularly emphasizes that authentic faith naturally overflows into witness and that genuine discipleship leads to mission.",
        ],
      },
      {
        heading: "THE INDISPENSABLE ROLE OF WOMEN IN THE CHURCH TODAY",
        paragraphs: [
          "The book connects these biblical examples with the Church today. Women continue to play an indispensable role in evangelization through family life, catechesis, education, counselling, healthcare, charitable service, theological scholarship, consecrated life, parish ministry, missionary outreach, and countless hidden acts of love.",
          "The final purpose of the book is to inspire readers not merely to admire these holy women but to imitate their faith, courage, humility, perseverance, generosity, and missionary zeal.",
          "The book presents the conviction that the Gospel is proclaimed most convincingly not simply through eloquent words, but through lives transformed by God's grace and lived according to the truths of the Gospel.",
        ],
      },
    ],
    bookThemes: {
      heading: "KEY THEMES OF EVANGELIZATION & WITNESS",
      subtitle: "Dimensions of feminine discipleship and missionary service.",
      points: [
        "Cooperation of women in God's divine plan of salvation",
        "Mary's Fiat and maternal cooperation in the Incarnation",
        "Elizabeth, Anna, and the recognition of the Messiah",
        "The Samaritan woman's transformative testimony",
        "Martha's profession of faith and Mary Magdalene as witness to the Resurrection",
        "Evangelization through prayer, hospitality, and generous service",
        "Opening homes to Christian communities in the early Church",
        "Charity, mercy, forgiveness, and sacrificial love as Gospel proclamation",
        "The indispensable role of women in the contemporary Church",
        "Catechesis, education, healthcare, counselling, and parish ministry",
        "Consecrated life, theological scholarship, and missionary outreach",
        "Lives transformed by grace as the most convincing Gospel proclamation",
      ],
      paragraphs: [
        "Through these biblical and ecclesial reflections, the work calls the faithful to recognize that every act of love, service, and prayer is a vital participation in the Church's ongoing mission to proclaim Christ.",
      ],
    },
    concludingReflection: {
      heading: "LIVES TRANSFORMED BY GOD'S GRACE",
      subtitle:
        "Imitating the faith, courage, and missionary zeal of holy women.",
      points: [
        "Faith that naturally overflows into courageous witness",
        "Genuine discipleship that leads directly to mission",
        "Proclaiming Christ through countless daily and hidden acts of love",
        "Living the truths of the Gospel with humility and perseverance",
      ],
      paragraphs: [
        "The Gospel is proclaimed most convincingly not simply through eloquent words, but through lives transformed by God's grace and lived according to the truths of the Gospel. Inspired by the holy women of Sacred Scripture and Church history, all believers are invited to become living witnesses of Christ's love.",
      ],
    },
  },
  {
    id: "book-13",
    order: 13,
    title: "The Heart God Sees - Beyond What Man Cannot See",
    slug: "the-heart-god-sees-beyond-what-man-cannot-see",
    description:
      "An exploration of divine perception through Sacred Scripture, revealing how God looks beyond outward appearance, social status, and human judgment to see the motives, wounds, sincerity, and transformative capacity of the human heart.",
    coverImage: "/images/books/book13.jpg",
    status: "COMING_SOON",
    category: "Spiritual Theology",
    categories: [
      "The Human Heart & Transformation",
      "Biblical Characters",
      "Prayer, Mercy & Spiritual Growth",
      "Faith & Trust",
      "Christian Discipleship",
    ],
    publishedAt: null,
    createdAt: "2024-01-01",
    seo: {
      title: "The Heart God Sees - Beyond What Man Cannot See | Rev. Fr. Dr. Joseph Raj",
      description:
        "Discovering how God looks beyond external appearances into the depths and sincerity of the human heart through Sacred Scripture and encounters with Christ.",
    },
    generalIntroduction: [
      {
        heading: "THE MYSTERY OF GOD'S VISION",
        paragraphs: [
          "One of the deepest mysteries of our relationship with God is that He does not see us as other people see us, nor even as we sometimes see ourselves. Human beings are naturally drawn to what is visible. We notice appearance, achievement, reputation, wealth, social position, success, failure, personality, influence, and outward behavior. We form impressions quickly and often make judgments from what lies before our eyes.",
          "Yet Sacred Scripture repeatedly reveals that God’s vision reaches far deeper. He sees what human eyes cannot see. He sees the motives behind our actions, the wounds hidden beneath our smiles, the struggles concealed beneath our strength, the sincerity behind our words, and the intentions that lie quietly within the human heart.",
          "This truth is expressed with remarkable clarity in God’s words to Samuel when he was tempted to anoint Eliab as king and judge him according to his outward appearance: “Do not look on his appearance or on the height of his stature, because I have rejected him; for the Lord does not see as mortals see; they look on the outward appearance, but the Lord looks on the heart” (1 Sam 16:7). These words provide the fundamental key to the pages that follow.",
        ],
      },
      {
        heading: "BIBLICAL ENCOUNTERS ACROSS THE OLD TESTAMENT",
        paragraphs: [
          "What appears impressive to us may not necessarily be pleasing to God, while what appears insignificant to human eyes may possess great value before Him. The individual whom others admire may be struggling inwardly. The sinner whom people have already condemned may still possess a heart capable of repentance and transformation.",
          "The Bible is filled with such encounters. Scripture does not present human beings as two-dimensional characters whose worth can be determined simply by their actions. Instead, it allows us to enter into the complexity of the human heart.",
          "Cain and Abel reveal that God sees beyond the gift to the heart of the giver. Esau and Jacob remind us that God’s purposes cannot always be understood according to human expectations. Leah and Rachel reveal the difference between being valued by human beings and being seen by God. Saul and David demonstrate that outward appearance and inward character are not always the same. Joseph and Judah show that a human heart can undergo profound transformation. Hannah and Peninnah remind us that suffering can remain hidden from those around us while remaining completely visible to God.",
        ],
      },
      {
        heading: "JESUS AND THE INTERIOR SANCTUARY OF THE HEART",
        paragraphs: [
          "When we come to the ministry of Jesus, this theme becomes even more striking. Jesus continually looks beyond conventional judgments and social labels. He sees the humility of the tax collector beneath his reputation as a sinner. He sees genuine love and repentance in the woman whom others regard with contempt as a sinner. He recognizes two different forms of discipleship in Martha and Mary.",
          "He sees beyond the wealth of Zacchaeus and the rich young man to the deeper question of what possesses their hearts. In the parable of the elder son and the prodigal son, Jesus exposes two very different forms of spiritual distance: one son is far from home through sin, while the other remains physically near but struggles to share his father’s mercy. In the account of the two thieves crucified beside Jesus, the world sees both criminals as deserving condemnation, but Jesus sees faith in the heart of one of them and promises him a place in Paradise.",
          "Behind every visible life lies an interior world known fully only to God. There are battles that nobody sees, prayers that nobody hears, tears that nobody notices, sacrifices that receive no recognition, acts of kindness performed without publicity, and moments of repentance known only to God.",
          "The heart is the interior sanctuary where decisions are made, desires are formed, motives are purified or corrupted, and the human person either opens himself to God or turns away from Him. In Scripture, the heart represents the deepest center of the human person—the place of thought, desire, intention, decision, conscience, and relationship with God. As Jesus teaches, “Out of the abundance of the heart the mouth speaks” (Mt 12:34), and what is in the heart eventually shapes the life.",
        ],
      },
      {
        heading: "HUMILITY IN DISCERNMENT AND THE MIRROR OF SCRIPTURE",
        paragraphs: [
          "If God alone sees the heart perfectly, then we must learn humility in the way we judge and condemn others. We do not possess God’s complete vision: we see fragments; God sees the whole. We see the present moment; God sees the entire journey. We see the wound; God sees the history behind it. We see the failure; God sees the possibility of repentance. We see the sinner; God sees a person still capable of redemption.",
          "This does not mean that Christians should become indifferent to sin or refuse to make moral judgments. Rather, it calls us to distinguish between recognizing an action as wrong and condemning the person as beyond God’s mercy. Christian discernment must always be accompanied by humility, truth, mercy, and charity.",
          "The stories explored in this book invite us to look again—not only at the people in Scripture, but mainly at ourselves. They are mirrors in which we are invited to recognize something of our own hearts: the jealousy of Cain, the immediate impulses of Esau, the feeling of being unvalued like Leah, the reliance on appearance like Saul, the mistakes of Judah, the silent suffering of Hannah, or the reluctance of the elder son.",
          "At the same time, Sacred Scripture reveals the possibility of grace: Abel teaches faithful worship; Joseph reveals transformation; David reminds us that God sees hidden qualities; the tax collector teaches humility; the sinful woman reveals love; Zacchaeus demonstrates that encountering Christ transforms our relationship with possessions; the prodigal son shows the courage to return; the good thief shows that even at the final hour a heart can turn toward Christ; and Peter demonstrates that failure does not have to be the final chapter.",
        ],
      },
      {
        heading: "FROM HOW GOD SEES US TO HOW WE SEE OTHERS",
        paragraphs: [
          "Through the Two Sons, the Rich Man and Lazarus, and the Wise and Foolish Builders, we discover that hearing God’s Word is not enough; it must lead to conversion, compassion, obedience, and action. God sees beyond our words and outward responses to the deeper disposition of the heart.",
          "The final part of the book moves from discovering how God sees to the more personal question: How do we see? The Christian disciple is gradually called to acquire something of God’s own vision. Peter and Judas reveal two different responses to failure. The wise and foolish virgins remind us that God sees the readiness of the heart. The sheep and the goats reveal that the condition of the heart eventually becomes visible through concrete acts of mercy.",
          "The journey through these eighteen chapters is an invitation to enter more deeply into the mystery of God’s gaze. The God who sees the heart is not merely the God who exposes what is hidden; He is also the God who heals, forgives, transforms, restores, and gives new beginnings.",
        ],
      },
    ],
    bookThemes: {
      heading: "WHAT THIS BOOK EXPLORES",
      subtitle: "Theological and biblical dimensions of divine vision and the human heart.",
      points: [
        "God looking on the heart rather than outward appearance (1 Samuel 16:7)",
        "The biblical heart as the interior sanctuary of decision, thought, and conscience",
        "Jesus looking beyond social labels, reputation, and conventional judgments",
        "Old Testament encounters: Cain, Abel, Esau, Jacob, Leah, Rachel, Saul, David, Joseph, Hannah",
        "The humility of the tax collector and the repentance of the sinful woman",
        "The wealth of Zacchaeus and the rich young man",
        "The Prodigal Son and the spiritual distance of the elder brother",
        "The faith of the good thief on the Cross",
        "Humility in human judgment: distinguishing wrong actions from final condemnation",
        "Biblical figures as mirrors reflecting our own inner spiritual struggles",
        "Hearing God's Word leading to conversion, compassion, and concrete mercy",
        "Acquiring God's vision: becoming a heart that increasingly resembles His own",
      ],
      paragraphs: [
        "This eighteen-chapter biblical exploration invites readers to examine their own hearts in the light of God's gaze, discovering that in the Father's loving vision there is profound truth, healing, and redemption.",
      ],
    },
    concludingReflection: {
      heading: "THE HEART TRANSFORMED BY GRACE",
      subtitle: "Allowing God to show us what He sees within us.",
      points: [
        "The loving gaze of the Father who knows us completely and calls us toward holiness",
        "Freeing ourselves from superficial judgments and learning to look with patience and compassion",
        "Examining our own hearts before asking what God sees in others",
        "A heart that, by divine grace, increasingly resembles the heart of God",
      ],
      paragraphs: [
        "Ultimately, the great lesson of Scripture is not merely that God sees the heart. It is that the heart God sees can, by His grace, become a heart that increasingly resembles His own.",
      ],
    },
  },
]

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug)
}
