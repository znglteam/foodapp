import os
import re

files_to_check = []
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            files_to_check.append(os.path.join(root, file))

# Regex to match a component tag that starts with a capital letter and has a className attribute
# We will match the entire tag if it's self-closing or has no children, but let's just match the start tag.
# We will look for <[A-Z][A-Za-z]+ ... className="..." ... />
# Actually, it's easier to just replace any text-[a-z]+-[0-9]{3} with text-slate-500 dark:text-slate-400
# INSIDE the className of a capital-letter tag. But some capital-letter tags are components like <Button>, <Card>.
# The request says "all icons". Lucide icons are used heavily here.

def process_match(m):
    tag_name = m.group(1)
    # We only want to process if it's likely an icon.
    # Most icons have `w-` and `h-` in their className.
    class_attr = m.group(2)
    
    if 'w-' in class_attr and 'h-' in class_attr:
        # replace any text-[color]-[num] and dark:text-[color]-[num] and fill-[color]-[num]
        class_attr = re.sub(r'\btext-[a-z]+-[0-9]{2,3}(?:/[0-9]{2,3})?\b', '', class_attr)
        class_attr = re.sub(r'\bdark:text-[a-z]+-[0-9]{2,3}(?:/[0-9]{2,3})?\b', '', class_attr)
        class_attr = re.sub(r'\bfill-[a-z]+-[0-9]{2,3}(?:/[0-9]{2,3})?\b', '', class_attr)
        class_attr = re.sub(r'\bdark:fill-[a-z]+-[0-9]{2,3}(?:/[0-9]{2,3})?\b', '', class_attr)
        
        # also remove any multiple spaces
        class_attr = re.sub(r'\s+', ' ', class_attr).strip()
        
        # append the new color
        class_attr += ' text-slate-500 dark:text-slate-400'
        
        return f'<{tag_name} className="{class_attr}"'
    return m.group(0)

pattern = re.compile(r'<([A-Z][A-Za-z0-9_]*)[^>]*?className=["\']([^"\']*)["\']')

for file in files_to_check:
    with open(file, 'r') as f:
        content = f.read()
    
    new_content = pattern.sub(process_match, content)
    
    if new_content != content:
        with open(file, 'w') as f:
            f.write(new_content)
        print(f"Updated {file}")
