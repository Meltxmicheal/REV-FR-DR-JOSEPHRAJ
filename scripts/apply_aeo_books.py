import re
import json

# Read books.ts
path = r"C:\REV DR FR JOSEPH RAJ\src\data\books.ts"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Add types if not already present
type_addition = """export type AEOQuestionSection = {
  aboutThisBook?: string
  whoIsThisBookFor?: string
  mainThemes?: string[]
  questionsAddressed?: string[]
  theologicalSignificance?: string
  pastoralSignificance?: string
}

export type BookFAQ = {
  question: string
  answer: string
}

"""

if "export type AEOQuestionSection" not in content:
    content = type_addition + content

if "aeoQuestions?:" not in content:
    content = content.replace(
        "  seo?: {\n    title: string\n    description: string\n  }\n}",
        "  seo?: {\n    title: string\n    description: string\n  }\n  aeoQuestions?: AEOQuestionSection\n  faqs?: BookFAQ[]\n}"
    )

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated types in books.ts successfully.")
