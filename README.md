# DevCrafter वेबसाइट (Next.js + TypeScript)

## फ़ोल्डर में क्या है

| फ़ाइल / फ़ोल्डर | काम |
|---|---|
| `src/data/site.ts` | **सारा कंटेंट यहीं है**: प्राइस, सर्विसेज़, FAQ, फ़ोन नंबर, ईमेल, सोशल लिंक |
| `src/components/` | हर सेक्शन का अलग कंपोनेंट (Hero, Pricing, Contact वग़ैरह) |
| `src/app/page.tsx` | होमपेज, सारे सेक्शन यहाँ जुड़ते हैं |
| `src/app/layout.tsx` | फ़ॉन्ट, SEO मेटा टैग्स |
| `src/app/globals.css` | डिज़ाइन, रंग, एनिमेशन, मोबाइल लेआउट |

## चलाने का तरीका

```bash
npm install        # पहली बार
npm run dev        # http://localhost:3000 पर डेवलपमेंट
npm run build      # प्रोडक्शन बिल्ड
npm run start      # बिल्ड को चलाना
npm run typecheck  # TypeScript चेक
```

## बदलाव कैसे करें

- **प्राइस / टेक्स्ट बदलना:** `src/data/site.ts` खोलें और बदल दें।
- **फ़ोन नंबर बदलना:** `site.ts` में `site.phone`, `site.phoneHref` और `site.whatsappNumber`।
- **सोशल लिंक जोड़ना:** `site.ts` के आख़िर में `socials` ऐरे में डालें, जैसे `{ label: "Instagram", href: "https://instagram.com/devcrafter" }`। लिंक अपने आप footer में दिखने लगेंगे।

## लाइव करना (Vercel, फ़्री)

1. कोड GitHub पर पुश करें।
2. **vercel.com** पर GitHub से साइन-इन करें, **Add New → Project** में यह repo चुनें।
3. **Deploy** दबाएँ। Next.js अपने आप पहचान लिया जाता है, कोई सेटिंग नहीं बदलनी।
4. **Settings → Domains** में अपना डोमेन (जैसे `devcrafter.in`) जोड़ें और Vercel के बताए DNS रिकॉर्ड अपने डोमेन प्रोवाइडर में डालें। SSL (https) अपने आप लग जाता है।

## लाइव होने के बाद चेकलिस्ट

- [ ] मोबाइल पर खोलें, मेन्यू (☰) दबाकर देखें
- [ ] सारे बटन और लिंक दबाकर देखें ("Get a quote" दबाने पर फ़ॉर्म में पैकेज चुना हुआ दिखना चाहिए)
- [ ] फ़ॉर्म में नाम और नंबर भरकर "Send on WhatsApp" दबाएँ
- [ ] हरा WhatsApp बटन (नीचे दाईं ओर) चेक करें
- [ ] pagespeed.web.dev पर स्पीड स्कोर देखें
- [ ] **Google Search Console** में डोमेन जोड़कर होमपेज की indexing माँगें
