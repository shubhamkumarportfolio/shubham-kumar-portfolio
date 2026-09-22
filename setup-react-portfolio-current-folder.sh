#!/usr/bin/env bash
set -euo pipefail

# Shubham Portfolio - React setup for the CURRENT folder.
# Run this while you are inside:
# ~/Documents/Shubham Portfolio/My First Web

echo ""
echo "============================================================"
echo "  Shubham Portfolio - React Setup"
echo "  Target folder: $(pwd)"
echo "============================================================"
echo ""

# Safety check: make sure the user is in the intended folder.
CURRENT_FOLDER="$(basename "$PWD")"
if [[ "$CURRENT_FOLDER" != "My First Web" ]]; then
  echo "WARNING: You are currently inside: $PWD"
  echo "This script is intended to be run from the 'My First Web' folder."
  echo ""
  read -r -p "Continue anyway? (y/N): " answer
  if [[ ! "$answer" =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 1
  fi
fi

# Check Node/npm.
if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Node.js/npm not found."

  if [[ "$(uname -s)" == "Darwin" ]]; then
    if ! command -v brew >/dev/null 2>&1; then
      echo "Installing Homebrew..."
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

      if [[ -x "/opt/homebrew/bin/brew" ]]; then
        eval "$(/opt/homebrew/bin/brew shellenv)"
      elif [[ -x "/usr/local/bin/brew" ]]; then
        eval "$(/usr/local/bin/brew shellenv)"
      fi
    fi

    echo "Installing Node.js..."
    brew install node
  else
    echo "Please install Node.js LTS, then run this script again."
    exit 1
  fi
fi

echo "Node: $(node -v)"
echo "npm:  $(npm -v)"
echo ""

# Don't overwrite an existing React/Vite project.
if [[ -f "package.json" ]]; then
  echo "A package.json already exists in this folder."
  echo "I will NOT overwrite it."
  echo ""
  echo "If this is already a React project, run:"
  echo "  npm install"
  echo "  npm run dev"
  exit 0
fi

# Vite refuses some non-empty directories, so scaffold in a temporary folder
# and then copy the project files into the current directory.
TMP_DIR=".portfolio-vite-temp"

if [[ -e "$TMP_DIR" ]]; then
  rm -rf "$TMP_DIR"
fi

echo "Creating React + Vite project..."
npm create vite@latest "$TMP_DIR" -- --template react

echo "Moving React files into current folder..."
cp -R "$TMP_DIR"/. .
rm -rf "$TMP_DIR"

echo "Installing dependencies..."
npm install
npm install react-router-dom lucide-react

echo "Creating portfolio structure..."
mkdir -p \
  src/components/layout \
  src/components/ui \
  src/sections \
  src/pages \
  src/data \
  src/styles \
  public/projects/treewalker \
  public/projects/galla \
  public/projects/rfid \
  public/projects/airson \
  docs

# Add simple design tokens.
cat > src/styles/tokens.css <<'EOF'
:root {
  --color-bg: #0b0d10;
  --color-surface: #141920;
  --color-text: #f3f5f7;
  --color-muted: #9ea8b3;
  --color-border: #343c46;
  --color-accent: #d7ff69;
  --container: 1248px;
}
EOF

cat > src/styles/global.css <<'EOF'
@import "./tokens.css";

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-width: 320px;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: Inter, Arial, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(calc(100% - 48px), var(--container));
  margin-inline: auto;
}
EOF

cat > src/App.jsx <<'EOF'
import "./styles/global.css";

export default function App() {
  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <p style={{ color: "var(--color-accent)", fontWeight: 700 }}>
        BRAND & MARKETING VISUAL DESIGNER
      </p>

      <h1 style={{ fontSize: "clamp(48px, 7vw, 84px)", maxWidth: "1000px" }}>
        Shubham Kumar Portfolio
      </h1>

      <p style={{ color: "var(--color-muted)", fontSize: "20px", maxWidth: "720px" }}>
        React development environment is ready. We will build the portfolio
        section by section from the approved design.
      </p>
    </main>
  );
}
EOF

# Git only locally; nothing is uploaded to GitHub.
if command -v git >/dev/null 2>&1; then
  if [[ ! -d ".git" ]]; then
    git init
  fi
  git add .
  git commit -m "chore: initialize Shubham portfolio React project" || true
fi

echo ""
echo "============================================================"
echo "  SETUP COMPLETE"
echo "============================================================"
echo "Folder: $(pwd)"
echo ""
echo "Starting the local React server..."
echo "Use Ctrl+C to stop it."
echo ""

npm run dev
