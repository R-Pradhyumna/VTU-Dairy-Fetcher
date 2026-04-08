/*
===========================================
VTU DIARY DATA EXTRACTOR (BROWSER SCRIPT)
===========================================

DESCRIPTION:
This script extracts internship diary entries from the VTU portal,
processes them, and downloads a clean JSON file.

-------------------------------------------
HOW TO USE
-------------------------------------------

1. Open the VTU Diary page:
   https://vtu.internyet.in/dashboard/student/diary-entries

2. Make sure you are logged in

3. Open Developer Tools:
   - Press F12
   - Go to the "Console" tab

4. Copy the entire script (this file)

5. Paste it into the console and press Enter

6. Wait for the script to finish:
   - You will see logs like "Fetching page X..."

7. A file named "refined_diary.json" will be downloaded automatically

-------------------------------------------
OUTPUT FORMAT
-------------------------------------------

Each entry contains:
- date
- hours
- work_summary (from description)
- learnings (first 2 lines)

-------------------------------------------
NOTES
-------------------------------------------

- Requires active login session
- Runs entirely in browser (no installation needed)
- Safe to use for personal data extraction

===========================================
*/

(async () => {
  const API_URL =
    "https://vtuapi.internyet.in/api/v1/student/internship-diaries";

  let page = 1;
  let finalData = [];

  // Helper: take only first 2 lines
  const getTwoLines = (text) => {
    if (!text) return "";
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .slice(0, 2)
      .join("\n");
  };

  while (true) {
    console.log(`Fetching page ${page}...`);

    const res = await fetch(`${API_URL}?page=${page}`, {
      credentials: "include",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) break;

    const data = await res.json();
    const entries = data.data?.data || data.data || [];

    if (!entries.length) break;

    // Extract ONLY required fields
    finalData.push(
      ...entries.map((e) => ({
        date: e.date,
        hours: e.hours,
        work_summary: getTwoLines(e.description || ""),
        learnings: getTwoLines(e.learnings || ""),
      })),
    );

    if (data.meta?.last_page && page >= data.meta.last_page) break;

    page++;
  }

  // Sort ascending
  finalData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Download JSON
  const blob = new Blob([JSON.stringify(finalData, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "refined_diary.json";
  a.click();

  console.log("Extraction complete:", finalData.length);
})();
