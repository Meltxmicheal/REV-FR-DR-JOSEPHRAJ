import http from "http"

const routes = [
  "/",
  "/about",
  "/books",
  "/contact",
  "/privacy",
  "/terms",
  "/404",
  "/books/an-analysis-of-the-juridical-theological-and-pastoral-ramifications-of-matrimonial-consent",
  "/books/common-law-unions-and-the-use-of-virtue-ethics",
  "/books/the-lenten-journey-of-a-pilgrim",
  "/books/god-the-creators-plan-for-sanctification-of-family",
  "/books/my-soul-magnifies-the-lord-a-tribute-to-the-blessed-virgin-mother-mary",
  "/books/the-magical-perfection-of-number-7-in-sacred-scripture",
  "/books/the-theological-canonical-and-pastoral-significances-of-the-sacraments-in-the-church",
  "/books/what-matters-most-is-faith-biblical-encounters-with-christ-that-reveal-the-power-of-faith",
  "/books/holy-women-as-evangelizers-of-the-gospel",
  "/books/the-heart-god-sees-beyond-what-man-cannot-see",
  "/books/celebrating-the-liturgical-life-of-the-church",
  "/books/encountering-immanuel-the-messiah",
  "/books/preaching-gods-word-day-in-and-day-out-cycle-a",
  "/books/preaching-gods-word-day-in-and-day-out-cycle-b",
  "/books/preaching-gods-word-day-in-and-day-out-cycle-c",
]

async function testAll() {
  console.log("Testing all 22 pre-rendered routes on http://localhost:4173...")
  let passed = 0
  let failed = 0

  for (const r of routes) {
    await new Promise((resolve) => {
      http.get("http://localhost:4173" + r, (res) => {
        if (res.statusCode === 200) {
          console.log(`[PASS 200] ${r}`)
          passed++
        } else {
          console.error(`[FAIL ${res.statusCode}] ${r}`)
          failed++
        }
        res.resume()
        resolve()
      }).on("error", (err) => {
        console.error(`[ERROR] ${r}: ${err.message}`)
        failed++
        resolve()
      })
    })
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed out of ${routes.length} routes.`)
  if (failed > 0) process.exit(1)
}

testAll()
