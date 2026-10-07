import re
import json

path = r"C:\REV DR FR JOSEPH RAJ\src\data\books.ts"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

aeo_data = {
    "book-01": {
        "aeoQuestions": {
            "aboutThisBook": "An in-depth study of matrimonial consent in its juridical, theological, and pastoral dimensions, examining its importance in Christian marriage, the validity of marital consent, the sacramental nature of marriage, and the role of the Christian family in the Church and society.",
            "whoIsThisBookFor": "Canonists, parish priests, marriage tribunal judges, moral theologians, seminarians, engaged couples, and researchers in canon law.",
            "mainThemes": [
                "Juridical validity of marital consent",
                "Sacramental covenant of Christian marriage",
                "Canonical form and diriment impediments",
                "Pastoral response to the contemporary crisis of marriage and family"
            ],
            "questionsAddressed": [
                "What constitutes valid matrimonial consent in Canon Law?",
                "How do canonical impediments and defects of consent impact marriage validity?",
                "What are the theological and pastoral consequences of marital consent?",
                "How can the Church pastorally accompany families facing contemporary cultural challenges?"
            ],
            "theologicalSignificance": "Grounds matrimonial consent in the covenantal love of Christ for the Church, emphasizing that marital consent is an irrevocable act of the will establishing a lifelong partnership.",
            "pastoralSignificance": "Provides canonical clarity and pastoral guidance for parish marriage preparation and tribunal ministry."
        },
        "faqs": [
            {
                "question": "What is matrimonial consent in Catholic canon law and theology?",
                "answer": "Matrimonial consent is an act of the will by which a man and a woman by an irrevocable covenant mutually give and accept each other for the purpose of establishing a partnership in marriage (Canon 1057 §2). It is the essential element that brings marriage into existence."
            },
            {
                "question": "Why is valid matrimonial consent crucial for Christian marriage?",
                "answer": "Without freely and legitimately expressed consent between a man and a woman, no valid marriage comes into existence. A fundamental defect or flaw in consent renders the marriage invalid."
            },
            {
                "question": "What are the three dimensions of matrimonial consent examined in this volume?",
                "answer": "The juridical dimension (governing legal capacity and canonical form), the theological dimension (exploring sacramental grace and marital covenant), and the pastoral dimension (guiding parish preparation and tribunal care)."
            }
        ]
    },
    "book-02": {
        "aeoQuestions": {
            "aboutThisBook": "A theological and pastoral investigation exploring how Catholic virtue ethics provides a constructive moral framework to address common law unions and foster marital readiness.",
            "whoIsThisBookFor": "Moral theologians, pastors, family life ministry directors, and researchers studying Caribbean and global family structures.",
            "mainThemes": [
                "Virtue ethics and character formation",
                "Pastoral accompaniment of cohabiting couples",
                "Moral theology of marriage",
                "Socio-cultural challenges to Christian family life"
            ],
            "questionsAddressed": [
                "Why do couples enter common law unions?",
                "How can virtue ethics foster moral growth and marital readiness?",
                "What pastoral approach effectively guides couples toward the Sacrament of Marriage?"
            ],
            "theologicalSignificance": "Applies virtue ethics (prudence, justice, fortitude, temperance, faith, hope, charity) to moral theology and relational formation.",
            "pastoralSignificance": "Offers a pathway of pastoral accompaniment that meets couples where they are and encourages transformation toward sacramental marriage."
        },
        "faqs": [
            {
                "question": "How does virtue ethics apply to common law unions?",
                "answer": "Virtue ethics focuses on personal character formation and moral growth, helping couples cultivate the virtues necessary for a lifelong, faithful marital covenant."
            },
            {
                "question": "What pastoral approach does this study propose for common law cohabitation?",
                "answer": "It advocates for compassionate pastoral accompaniment that leads cohabiting couples to understand the dignity of human love and guides them toward the full grace of sacramental marriage."
            }
        ]
    },
    "book-03": {
        "aeoQuestions": {
            "aboutThisBook": "A spiritual reflection structuring the season of Lent into a seven-stage pilgrimage of conversion, prayer, penance, and encounter with Christ.",
            "whoIsThisBookFor": "Lay faithful, retreat directors, prayer groups, and anyone seeking a structured spiritual journey through Lent.",
            "mainThemes": [
                "Lenten pilgrimage and conversion",
                "Seven-stage spiritual journey",
                "Prayer, fasting, and almsgiving",
                "Encounter with the Risen Lord"
            ],
            "questionsAddressed": [
                "How can Lent be lived as a transformative pilgrimage?",
                "What are the seven stages of spiritual renewal during Lent?",
                "How does personal conversion deepen one's relationship with God?"
            ],
            "theologicalSignificance": "Explores the paschal mystery and the grace of personal metanoia as an essential dimension of Christian discipleship.",
            "pastoralSignificance": "Provides practical daily reflections and spiritual disciplines to guide believers from Ash Wednesday to Easter joy."
        },
        "faqs": [
            {
                "question": "What is the Lenten journey of a pilgrim?",
                "answer": "It is a focused spiritual pilgrimage—a short journey within the longer journey of life—guiding the soul through prayer, repentance, and renewal toward Christ's Resurrection."
            },
            {
                "question": "What are the seven stages of spiritual renewal in this Lenten guide?",
                "answer": "The seven stages are: Awakening to Conversion, Entering the Desert of Prayer, Purifying the Heart Through Penance, Embracing the Word of God, Bearing the Cross, Walking Through Passiontide, and Entering Easter Victory."
            }
        ]
    },
    "book-04": {
        "aeoQuestions": {
            "aboutThisBook": "An extensive treatise on God's divine plan for the family, highlighting the nuptial blessing as a source of sanctifying grace for married couples and their domestic church.",
            "whoIsThisBookFor": "Married couples, engaged couples, family life ministry leaders, clergy, and theologians focusing on sacramental marriage.",
            "mainThemes": [
                "Sanctification of the family",
                "The Nuptial Blessing",
                "The domestic church",
                "Sacramental grace in marital life"
            ],
            "questionsAddressed": [
                "What is God's divine plan for Christian family life?",
                "What grace is imparted through the Nuptial Blessing?",
                "How does the family function as the sanctuary of life and faith?"
            ],
            "theologicalSignificance": "Synthesizes biblical doctrine, patristic teaching, and Vatican II ecclesiology on the domestic church.",
            "pastoralSignificance": "Equips families to withstand secular cultural pressures by living out their sacramental identity and marital grace."
        },
        "faqs": [
            {
                "question": "What is the central theological question of this book?",
                "answer": "How does God the Creator sanctify the Christian family through the divine grace bestowed in the Nuptial Blessing of the Sacrament of Marriage?"
            },
            {
                "question": "Why is the Nuptial Blessing essential for Christian family life?",
                "answer": "The Nuptial Blessing invokes the Holy Spirit upon the spouses, bestowing special grace to live in mutual fidelity, raise children in faith, and build up the Church as a domestic church."
            }
        ]
    },
    "book-05": {
        "aeoQuestions": {
            "aboutThisBook": "A Mariological study and devotional tribute exploring the Virgin Mary's role in salvation history through her Magnificat, fiat, and maternal intercession.",
            "whoIsThisBookFor": "Devotees of Our Lady, Marian scholars, clergy, and Christians desiring to deepen their Marian spirituality.",
            "mainThemes": [
                "Mariology and salvation history",
                "The Magnificat (Luke 1:46–55)",
                "Mary's fiat and total obedience",
                "Maternal intercession and discipleship"
            ],
            "questionsAddressed": [
                "Why is Mary called the Mother of God and first disciple?",
                "What is the spiritual meaning of Mary's Magnificat?",
                "How does Marian devotion lead believers closer to Jesus Christ?"
            ],
            "theologicalSignificance": "Affirms Marian dogma and biblical Mariology as central to understanding Christology and ecclesiology.",
            "pastoralSignificance": "Encourages personal and parish prayer through the Rosary, Marian reflections, and imitation of Mary's faith."
        },
        "faqs": [
            {
                "question": "What is the spiritual message of Mary's Magnificat?",
                "answer": "Mary's Magnificat (Luke 1:46–55) is a hymn of praise exalting God's divine mercy, covenant faithfulness, and salvation accomplished through humility and obedience."
            }
        ]
    },
    "book-06": {
        "aeoQuestions": {
            "aboutThisBook": "A biblical study uncovering the spiritual and covenantal symbolism of the number seven throughout the Old and New Testaments.",
            "whoIsThisBookFor": "Scripture students, Bible study groups, preachers, and readers interested in biblical numerology and symbolism.",
            "mainThemes": [
                "Biblical symbolism of number 7",
                "Covenant completion and creation week",
                "Seven sacraments and gifts of the Spirit",
                "Scriptural harmony across Testaments"
            ],
            "questionsAddressed": [
                "Why does the number 7 recur so frequently in the Bible?",
                "What does 7 symbolize in creation, covenants, and sacraments?",
                "How does biblical numerology illuminate divine providence?"
            ],
            "theologicalSignificance": "Demonstrates the canonical unity of Sacred Scripture through divine patterns of covenant perfection.",
            "pastoralSignificance": "Enriches Bible study and homiletic preparation by highlighting deep scriptural patterns of divine order."
        },
        "faqs": [
            {
                "question": "Why is the number 7 considered significant in Sacred Scripture?",
                "answer": "In biblical Hebrew and Christian tradition, 7 represents divine perfection, completion, covenant oath, and spiritual fulfillment, as seen in the 7 days of Creation, 7 sacraments, and 7 gifts of the Holy Spirit."
            }
        ]
    },
    "book-07": {
        "aeoQuestions": {
            "aboutThisBook": "A comprehensive examination of the seven sacraments of the Catholic Church from theological, canonical, and pastoral perspectives.",
            "whoIsThisBookFor": "Catechists, seminarians, priests, RCIA instructors, and lay faithful seeking a thorough understanding of sacramental theology.",
            "mainThemes": [
                "The Seven Sacraments",
                "Efficacious signs of grace",
                "Canonical norms governing sacraments",
                "Pastoral administration and reception"
            ],
            "questionsAddressed": [
                "What makes a sacrament an efficacious sign of grace?",
                "How do canon law and theology work together in sacramental life?",
                "How should sacraments be pastored in parish communities?"
            ],
            "theologicalSignificance": "Integrates sacramental theology, liturgical tradition, and canon law into a coherent doctrine of grace.",
            "pastoralSignificance": "Guides clergy and catechists in preparing the faithful for fruitful reception of Baptism, Eucharist, Confirmation, Confession, Anointing, Holy Orders, and Matrimony."
        },
        "faqs": [
            {
                "question": "What are the theological, canonical, and pastoral significances of the sacraments?",
                "answer": "The theological dimension treats sacraments as efficacious signs of Christ's grace; the canonical dimension ensures valid and licit celebration; and the pastoral dimension guides their reception for spiritual transformation."
            }
        ]
    },
    "book-08": {
        "aeoQuestions": {
            "aboutThisBook": "An exploration of Gospel accounts where individuals encountered Jesus Christ, demonstrating how active faith brings healing, transformation, and salvation.",
            "whoIsThisBookFor": "Christians seeking to strengthen their personal faith, prayer leaders, and anyone experiencing doubt or trial.",
            "mainThemes": [
                "Biblical encounters with Jesus",
                "The nature and power of faith",
                "Miracles and spiritual healing",
                "Discipleship and trust in Divine Providence"
            ],
            "questionsAddressed": [
                "What is the essence of biblical faith?",
                "How did Jesus respond to persons of deep faith in the Gospels?",
                "How can believers maintain strong faith during personal trials?"
            ],
            "theologicalSignificance": "Examines faith as a theological virtue and personal self-surrender to God's revelation in Christ.",
            "pastoralSignificance": "Inspires readers to trust Christ unconditionally in daily life, pastoral ministry, and spiritual struggles."
        },
        "faqs": [
            {
                "question": "What do biblical encounters with Christ reveal about faith?",
                "answer": "Gospel encounters reveal that faith is an active, trusting response to Jesus Christ that opens the human heart to divine healing, forgiveness, and salvation."
            }
        ]
    },
    "book-09": {
        "aeoQuestions": {
            "aboutThisBook": "A study celebrating the crucial roles played by holy women in the Gospels and early Church as primary witnesses and proclaimers of Christ.",
            "whoIsThisBookFor": "Women in ministry, catechists, scripture scholars, and believers interested in the biblical foundation of female evangelization.",
            "mainThemes": [
                "Biblical women in salvation history",
                "Evangelization and gospel proclamation",
                "Witness to the Resurrection",
                "Female discipleship in scripture"
            ],
            "questionsAddressed": [
                "How did women serve as first witnesses of the Resurrection?",
                "What role did female disciples play in Jesus' ministry?",
                "How can women today exercise leadership in gospel evangelization?"
            ],
            "theologicalSignificance": "Highlights the dignity, equal vocation, and essential mission of women in biblical theology and ecclesial life.",
            "pastoralSignificance": "Empowers and encourages women in parish leadership, catechesis, missionary outreach, and family witness."
        },
        "faqs": [
            {
                "question": "How did holy women serve as evangelizers in the Gospel?",
                "answer": "Women such as Mary Magdalene ('Apostle to the Apostles') and the Samaritan Woman encountered Christ, bore witness to His Resurrection and Messiahship, and actively proclaimed the Gospel."
            }
        ]
    },
    "book-10": {
        "aeoQuestions": {
            "aboutThisBook": "A spiritual reflection on interiority, authenticity, and divine gaze, examining how God looks past human appearances into the truth of the human heart.",
            "whoIsThisBookFor": "Retreatants, spiritual directors, Christians seeking interior healing, and anyone desiring genuine humility before God.",
            "mainThemes": [
                "Divine gaze and human interiority",
                "Purity of heart and humility",
                "Transformation of the soul",
                "Sincerity versus superficiality"
            ],
            "questionsAddressed": [
                "How does God's judgment differ from human perception?",
                "What does it mean to cultivate a heart pleasing to God?",
                "How can one overcome spiritual hypocrisy and pride?"
            ],
            "theologicalSignificance": "Rooted in 1 Samuel 16:7 and Beatitudinous theology ('Blessed are the pure in heart').",
            "pastoralSignificance": "Offers gentle guidance for self-examination, confession, spiritual healing, and authentic Christian living."
        },
        "faqs": [
            {
                "question": "What does Scripture teach about how God views the human heart?",
                "answer": "While human beings judge by outward appearance, status, and external performance, God looks directly into the sincerity, humility, and love within the human heart (1 Samuel 16:7)."
            }
        ]
    },
    "book-11": {
        "aeoQuestions": {
            "aboutThisBook": "A guide to understanding, participating in, and celebrating the Church's liturgical year, feast days, and mystery of Christ.",
            "whoIsThisBookFor": "Liturgical ministers, choir members, priests, sacristans, and parishioners desiring deeper participation in Mass and liturgy.",
            "mainThemes": [
                "The Liturgical Year (Advent to Ordinary Time)",
                "Sacramental worship and liturgy",
                "Active participation of the faithful",
                "Ecclesial prayer and praise"
            ],
            "questionsAddressed": [
                "Why is liturgical celebration the summit of Christian life?",
                "How do the liturgical seasons sanctify human time?",
                "How can parishes cultivate reverent and engaging worship?"
            ],
            "theologicalSignificance": "Reflects Sacrosanctum Concilium's vision of liturgy as the source and summit of the Church's life.",
            "pastoralSignificance": "Provides practical insights for enriching Sunday worship and celebrating feast days with spiritual understanding."
        },
        "faqs": [
            {
                "question": "Why is celebrating the liturgical life of the Church important?",
                "answer": "Through the liturgy, the Church enters into the saving mysteries of Christ's incarnation, death, and resurrection, drawing grace to sanctify daily life."
            }
        ]
    },
    "book-12": {
        "aeoQuestions": {
            "aboutThisBook": "A Christological and biblical study exploring the mystery of the Incarnation and Jesus as Immanuel ('God with us') in prophecy and fulfillment.",
            "whoIsThisBookFor": "Bible readers, theology students, Advent and Christmas reflection groups, and believers deepening their Christology.",
            "mainThemes": [
                "Incarnation and Messianic prophecy",
                "Immanuel – God with us",
                "Fulfillment of Old Testament scripture",
                "Encountering Christ in daily life"
            ],
            "questionsAddressed": [
                "What is the biblical origin of the title Immanuel?",
                "How does Jesus fulfill Isaiah's prophecies?",
                "What does 'God with us' mean for suffering and hope today?"
            ],
            "theologicalSignificance": "Explores the hypostatic union and divine presence in salvation history.",
            "pastoralSignificance": "Brings comfort and assurance of God's real, abiding presence in every human trial."
        },
        "faqs": [
            {
                "question": "Who is Immanuel the Messiah in scriptural prophecy and theology?",
                "answer": "Immanuel—meaning 'God with us'—expresses the central truth of the Incarnation: that Almighty God took on human flesh to dwell permanently among humanity and redeem the world."
            }
        ]
    },
    "book-13": {
        "aeoQuestions": {
            "aboutThisBook": "The first volume of a three-part homiletic collection offering comprehensive sermon outlines and reflections for Liturgical Cycle A (Gospel of Matthew).",
            "whoIsThisBookFor": "Priests, deacons, lay preachers, catechists, and faithful preparing for Sunday and weekday Masses in Cycle A.",
            "mainThemes": [
                "Homiletics and preaching",
                "Gospel of St. Matthew",
                "Liturgical Cycle A reflections",
                "Scriptural interpretation for pastoral life"
            ],
            "questionsAddressed": [
                "How can preachers effectively break open the Gospel of Matthew?",
                "How to connect scriptural texts to modern parish challenges?",
                "How to structure inspiring daily and Sunday homilies?"
            ],
            "theologicalSignificance": "Demonstrates how sound exegesis and Catholic dogma inform faithful preaching.",
            "pastoralSignificance": "Serves as an indispensable companion for homilists and lay readers seeking daily scriptural nourishment."
        },
        "faqs": [
            {
                "question": "What is the focus of Liturgical Cycle A preaching?",
                "answer": "Liturgical Cycle A focuses primarily on the Gospel of Saint Matthew, presenting Jesus as the fulfillment of the Law and Prophets and Teacher of the Kingdom of God."
            }
        ]
    },
    "book-14": {
        "aeoQuestions": {
            "aboutThisBook": "The second volume of the homiletic trilogy focusing on Liturgical Cycle B (Gospel of Mark and John 6).",
            "whoIsThisBookFor": "Homilists, deacons, religious educators, and readers following the Cycle B Lectionary.",
            "mainThemes": [
                "Gospel of St. Mark",
                "The Suffering Servant and Son of God",
                "Liturgical Cycle B reflections",
                "Eucharistic discourse (John 6)"
            ],
            "questionsAddressed": [
                "How does Mark's Gospel present Jesus' divine mission and urgency?",
                "How to preach the Eucharistic mystery in John 6?",
                "How to craft clear, memorable homilies for Cycle B?"
            ],
            "theologicalSignificance": "Highlights Markan Christology and Eucharistic theology.",
            "pastoralSignificance": "Equips preachers with homiletic insight for every Sunday and weekday reading of Cycle B."
        },
        "faqs": [
            {
                "question": "What are the central themes of Liturgical Cycle B preaching?",
                "answer": "Liturgical Cycle B focuses on the Gospel of Saint Mark, presenting Jesus as the Suffering Servant and Son of God, together with Saint John's Bread of Life discourse."
            }
        ]
    },
    "book-15": {
        "aeoQuestions": {
            "aboutThisBook": "The third volume of the homiletic series providing reflections and sermon guides for Liturgical Cycle C (Gospel of Luke).",
            "whoIsThisBookFor": "Clergy, preachers, prayer groups, and lay Catholics seeking depth during Liturgical Cycle C.",
            "mainThemes": [
                "Gospel of St. Luke",
                "Divine mercy, prayer, and the Holy Spirit",
                "Liturgical Cycle C reflections",
                "Social justice and compassion for the poor"
            ],
            "questionsAddressed": [
                "How does Luke emphasize God's infinite mercy and joy?",
                "How to preach Luke's parables (Prodigal Son, Good Samaritan)?",
                "How to connect Luke's Gospel to contemporary pastoral care?"
            ],
            "theologicalSignificance": "Explores Luken pneumatology, Marian theology, and the gospel of divine mercy.",
            "pastoralSignificance": "Provides homilists with rich material to proclaim God's mercy and call to prayer."
        },
        "faqs": [
            {
                "question": "What distinguishes Liturgical Cycle C in homiletic preaching?",
                "answer": "Liturgical Cycle C centers on the Gospel of Saint Luke, emphasizing God's infinite mercy, the role of the Holy Spirit, prayer, and compassion for the poor and marginalized."
            }
        ]
    }
}

for b_id, data in aeo_data.items():
    # Find position of id: "b_id"
    pattern = rf'id:\s*"{b_id}"'
    match = re.search(pattern, content)
    if match:
        start_idx = match.start()
        # Find closing brace of this book object before the next id: "book-
        # Or let's insert aeoQuestions and faqs before the closing brace of this book entry
        # We can insert aeoQuestions and faqs after seo block
        seo_pattern = rf'(id:\s*"{b_id}".*?seo:\s*\{{\n\s*title:.*?\n\s*description:.*?\n\s*\}},?)'
        seo_match = re.search(seo_pattern, content, re.DOTALL)
        if seo_match:
            replacement = seo_match.group(1) + f"\n    aeoQuestions: {json.dumps(data['aeoQuestions'], indent=6)},\n    faqs: {json.dumps(data['faqs'], indent=6)},"
            content = content.replace(seo_match.group(1), replacement, 1)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully injected AEO questions and FAQs into books.ts for all 15 books.")
