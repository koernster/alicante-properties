# Alicante Property Search — 2026-05-17

**Run date:** 2026-05-17  
**Search corridor:** Costa Blanca North — Jávea, Moraira, Benitachell/Cumbre del Sol, Calpe, Benissa Costa  
**Budget:** Max €850K all-in (≈€759K purchase price)  
**Criteria:** Min 160m² built, 3+ bedrooms, private pool, enclosed garage, post-2000 or refurbished

---

## Summary

| Item | Count |
|------|-------|
| Properties visible in tracker before this run | 53 |
| Orphaned properties recovered (file corruption fix) | 32 |
| New qualifying property found this run | 1 |
| Properties rejected (over budget) | 3 |
| Properties rejected (under size) | 3 |
| **Total properties in tracker after this run** | **86** |

> **Note:** The previous deployment had a file corruption where 36 properties were appended after the closing `</html>` tag and thus invisible in the tracker UI. This run recovers all 32 qualifying ones and merges them properly into the main array.

---

## ✅ New Property Added This Run

### ts-9832367 — 4BR Villa Benissa — Pool + Garage, Sea Views
- **Source:** ThinkSpain (listed 2026-05-13)
- **Price:** €695,000 (all-in: ~€778,400)
- **Size:** 264m² built / 1,049m² plot
- **Bedrooms/Bathrooms:** 4 / 4
- **Location:** Benissa Costa, near Cala Baladrar
- **Year built:** 2002
- **Features:** Private pool, enclosed garage, sea views, garden, 3 independent living units
- **URL:** https://www.thinkspain.com/property-for-sale/9832367

---

## 🔄 Properties Recovered From Corrupted Section (32)

These were found in a previous run but never displayed due to file corruption:

Benitachell/Cumbre del Sol: ts-9720251, ts-9773405, ts-9585098, ts-9105553, ts-8813498, ts-7359703  
Calpe: ts-9805540, ts-9374568  
Benissa: ts-9761000, ts-9528866  
Jávea: ts-9808089, ts-9566358, ts-9826696, ts-8815386, ts-8970229, ts-9783667, ts-9279876, ts-8997594, ts-9805541, ts-9200243, ts-9265739, ts-9821230, ts-5821025  
Moraira: ts-9219205, ts-9628400, ts-9687311, ts-9694039, ts-9696361, ts-8662035, ts-9385457  
Benissa Costa (Select Villas): sv-5367, sv-5368

---

## ❌ Properties Excluded

| ID | Reason |
|----|--------|
| ts-8769426 | 152m² built — below 160m² minimum |
| ts-9723484 | ~134m² built — below 160m² minimum |
| ts-9819289 | ~106m² built (field mismatch) — below 160m² minimum |
| Villa Clavellines | €950,000 — over €759K purchase budget |
| Villa Brisa | €1,395,000 — far over budget |
| Villa Galera | €1,450,000 — far over budget |

---

## Sources Searched

| Source | Method | Result |
|--------|--------|--------|
| ThinkSpain (Jávea, Moraira, Calpe, Benissa, Benitachell) | web_fetch | ✅ 1 new qualifying property found |
| Select Villas (select-villas.es) | WebSearch | ⚠️ Provenance restriction |
| Villas Buigues (villasbuigues.com) | WebSearch | ⚠️ Provenance restriction |
| LuxInmo (luxinmo.com) | WebSearch | ⚠️ Provenance restriction |
| Rightmove | web_fetch | ⚠️ JavaScript-rendered |
| Idealista | web_fetch | ⚠️ JavaScript-rendered |
| Kyero | web_fetch | ⚠️ JavaScript-rendered |

---

## Deployment

- **Cloudflare Workers URL:** https://alicante-properties.stkoern.workers.dev
- **GitHub repo:** https://github.com/koernster/alicante-properties

---

*Next run: 2026-05-18*
