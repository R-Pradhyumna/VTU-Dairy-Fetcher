# VTU Diary Data Extractor

A browser-based script to extract, clean, and export internship diary entries from the VTU portal into a structured JSON format.

---

## Overview

This project provides a simple and efficient way to retrieve internship diary data directly from the VTU student dashboard. It automates the process of fetching, processing, and exporting data, eliminating the need for manual copying.

The extracted data is cleaned, structured, and sorted, making it suitable for reports, analysis, or documentation.

---

## Features

- No installation required
- Runs entirely in the browser console
- Automatically handles paginated API responses
- Extracts only relevant fields:
  - Date
  - Hours
  - Work Summary (from description)
  - Learnings

- Cleans and trims text content
- Sorts data chronologically
- Downloads output as a JSON file

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

## How It Works

The script interacts with the VTU internship diary API:

```
https://vtuapi.internyet.in/api/v1/student/internship-diaries
```

### Workflow

1. Fetches diary entries page by page
2. Extracts required fields from each entry
3. Processes text fields:
   - Removes empty lines
   - Keeps only first two meaningful lines

4. Aggregates all entries
5. Sorts data by date (ascending)
6. Generates and downloads a JSON file

---

## Usage

### Step 1: Open VTU Portal

Navigate to:

https://vtu.internyet.in/dashboard/student/diary-entries

Ensure you are logged in.

---

### Step 2: Open Developer Console

- Press `F12`
- Go to the **Console** tab

---

### Step 3: Execute Script

- Copy the contents of `fetchData.js`
- Paste into the console
- Press Enter

---

### Step 4: Download Output

- The file `refined_diary.json` will be downloaded automatically

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

## Key Implementation Details

- Uses `fetch` with `credentials: "include"` for authenticated requests
- Handles pagination dynamically
- Safely processes API response variations
- Uses browser APIs (`Blob`, `URL.createObjectURL`) for file download

---

## Limitations

- Requires active login session
- Works only in browser environment
- Dependent on VTU API structure and availability

---

## Security Considerations

- Do not share session cookies or sensitive data
- Use only on trusted devices
- Intended for personal data extraction only
