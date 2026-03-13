import fs from 'fs';

const urls = [
  "https://dahabshilbank.com/about-us",
  "https://dahabshilbank.com/careers",
  "https://dahabshilbank.com/our-branches",
  "https://dahabshilbank.com/contact",
  "https://dahabshilbank.com/personal-accounts",
  "https://dahabshilbank.com/personal-current-account",
  "https://dahabshilbank.com/personal-saving-account",
  "https://dahabshilbank.com/diaspora-account",
  "https://dahabshilbank.com/personal-finance",
  "https://dahabshilbank.com/personal-car-finance",
  "https://dahabshilbank.com/personal-home-finance",
  "https://dahabshilbank.com/business-real-estate-finance",
  "https://dahabshilbank.com/personal-microfinance",
  "https://dahabshilbank.com/dahabo-for-women",
  "https://dahabshilbank.com/dahabo-current-account",
  "https://dahabshilbank.com/dahabo-saving-account",
  "https://dahabshilbank.com/personal-cards",
  "https://dahabshilbank.com/personal-master-cards",
  "https://dahabshilbank.com/business-account",
  "https://dahabshilbank.com/sole-proprietor-business",
  "https://dahabshilbank.com/business-finance",
  "https://dahabshilbank.com/business-car-finance",
  "https://dahabshilbank.com/business-trade-finance",
  "https://dahabshilbank.com/business-agribusiness-finance",
  "https://dahabshilbank.com/business-industrial-finance",
  "https://dahabshilbank.com/banking-app",
  "https://dahabshilbank.com/internet-banking",
  "https://dahabshilbank.com/mobile-banking",
  "https://dahabshilbank.com/dahabplus",
  "https://dahabshilbank.com/frequently-asked-questions"
];

async function scrape() {
  let output = "# Dahabshiil Bank Content Extraction\n\n";
  for (const url of urls) {
    console.log(`Fetching ${url}...`);
    try {
      const res = await fetch(url);
      const text = await res.text();
      
      const bodyMatch = text.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      let content = bodyMatch ? bodyMatch[1] : text;
      
      content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '\n');
      content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '\n');
      content = content.replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '\n');
      content = content.replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '\n');
      // strip SVG and path
      content = content.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '\n');
      content = content.replace(/<path\b[^<]*(?:(?!<\/path>)<[^<]*)*<\/path>/gi, '\n');
      
      content = content.replace(/<[^>]+>/g, ' ');
      content = content.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
      content = content.replace(/[ \t]+/g, ' ').replace(/\n\s*\n/g, '\n\n').trim();
      
      output += `## ${url}\n\n${content}\n\n---\n\n`;
    } catch (e) {
      console.log(`Failed to fetch ${url}: ${e.message}`);
    }
  }
  fs.writeFileSync('C:\\Users\\aquar\\.gemini\\antigravity\\brain\\eed80f80-02b9-420a-be35-e4b36690a562\\scraped_content.md', output);
  console.log('Done!');
}
scrape();
