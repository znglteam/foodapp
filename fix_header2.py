with open('src/components/Header.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace("  onOpenAISearch: () => void;\n", "")
text = text.replace("  onOpenAISearch,\n", "")

with open('src/components/Header.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
