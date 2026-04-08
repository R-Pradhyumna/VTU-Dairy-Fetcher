# VTU Diary Fetcher

A browser-based utility to extract, clean, and export internship diary entries from the VTU portal into a structured JSON format.

Repository: https://github.com/R-Pradhyumna/VTU-Dairy-Fetcher.git

---

## Overview

Maintaining a physical internship diary requires repeatedly opening each entry on the VTU portal and copying content manually. This project eliminates that process by fetching all entries at once and exporting them into a clean, structured format.

The output can be used for:

- Writing physical diaries
- Generating reports
- Resume preparation
- Personal tracking

---

## Features

- Runs entirely in the browser
- No installation or dependencies required
- Handles paginated API responses automatically
- Extracts:
  - Date
  - Hours
  - Work Summary (from description)
  - Learnings

- Cleans and trims text data
- Sorts entries chronologically
- Downloads output as JSON

---

## Project Structure

```
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── fetchData.js
├── LICENSE.md
├── README.md
└── SECURITY.md
```

---

## Installation

No installation is required.

You only need:

- A browser (Google Chrome recommended)
- Access to your VTU student account

---

## Usage

### Step 1: Open VTU Diary Page

Go to:
https://vtu.internyet.in/dashboard/student/diary-entries

Make sure you are logged in.

---

### Step 2: Open Developer Console

- Press F12
- Navigate to the Console tab

---

### Step 3: Copy Script

- Open `fetchData.js` from this repository
- Copy the entire file content

---

### Step 4: Execute Script

- Paste the script into the browser console
- Press Enter

---

### Step 5: Download Output

- The file `refined_diary.json` will be downloaded automatically
- Wait until all pages are fetched before closing the tab

---

## Output Format

Example:

```json
[
  {
    "date": "2026-04-04",
    "hours": 6,
    "work_summary": "Developed a full-stack MERN application integrating frontend and backend.\nBuilt dynamic UI using React and implemented server logic.",
    "learnings": "Gained hands-on experience in MERN stack.\nLearned integration of frontend, backend, and database."
  }
]
```

---

## How It Works

The script calls the VTU API:

https://vtuapi.internyet.in/api/v1/student/internship-diaries

### Workflow

1. Fetches data page by page
2. Extracts relevant fields from each entry
3. Cleans text by removing empty lines
4. Keeps only the first two meaningful lines
5. Aggregates all entries
6. Sorts by date in ascending order
7. Generates and downloads a JSON file

---

## Limitations

- Requires active login session
- Works only in browser environment
- Dependent on VTU API structure

---

## Security Considerations

- Do not share your session or cookies
- Use on trusted systems only
- Intended for personal data extraction

---

## Future Improvements

- Generate print-ready diary formats (PDF/Word)
- CLI version using Node.js
- Chrome extension for one-click export
