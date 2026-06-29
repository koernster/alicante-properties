# Alicante Property Search — 2026-06-29

**Daily automated search · Costa Blanca North · Luxury Villas**

---

## Summary

- **Properties tracked**: 57 villas (unchanged from 2026-06-28)
- **New qualifying listings found**: 0
- **Key update**: ITP transfer tax reduced 10% → 9% — all-in price formula updated to ×1.11
- **Budget impact**: ky-20878937 (Calpe, €760k) moves from just over budget to within budget (€843,600)

---

## Key Finding: ITP Tax Reduction

The Valencian Community has reduced the ITP (Impuesto de Transmisiones Patrimoniales) transfer tax from **10% to 9%**, confirmed via the Select Villas blog. This changes the all-in cost formula:

- **Old formula**: list price × 1.12 (10% ITP + ~2% notary/legal)
- **New formula**: list price × 1.11 (9% ITP + ~2% notary/legal)

**Impact on tracked properties**: All 57 `priceAllIn` values have been recalculated using ×1.11.

**Budget threshold effect**: `ky-20878937` (Mediterranean villa with panoramic sea views, Empedrola, Calpe, €760,000) was previously flagged as "just over budget" at €851,200 (×1.12). At the new rate it comes in at **€843,600 (×1.11)**, which is within the €850,000 all-in budget. The OVER BUDGET badge has been removed and the property note updated.

---

## Properties Reviewed — None Qualify

### Villas Buigues (Moraira/Benissa)

- **VB946** — Renovated traditional villa, Benissa. €1,499,000 · 315 m² · 2+2 beds · 1,049 m² plot. **Excluded**: far over budget (all-in ~€1.66M) and plot too large.
- **VB984** — Semi-detached villa, Benissa. ~€425,000 · 126 m² · 3 bed. **Excluded**: semi-detached (not detached villa) and below 160 m² size target.
- **VB1024** — Villa El Portet, Teulada. €1,550,000 · 336 m² · 4 beds. **Excluded**: over budget.
- **VB963** — New villa El Portet, Moraira. €1,975,000 · 280 m². **Excluded**: over budget and reserved.

### Select Villas (New Listing Checked)

- **sv-03847M** (Pinar de L'Advocat, Moraira) — €825,000 · 127 m² · 3 beds. **Excluded**: over budget (€825k × 1.11 = ~€916k all-in) AND below 160 m² size target.

### Costa Houses (Moraira)

All current listings priced at €1.1M+. No qualifying properties.

### Portals (Kyero, Fotocasa, Idealista, ThinkSpain, Luxinmo)

Search result pages were inaccessible due to provenance restrictions in the automated environment. Individual property pages for known listings remain tracked.

---

## No Changes to Tracked Property List

All 57 existing property IDs are preserved unchanged, maintaining favourites continuity for users. No properties were added or removed.

Current breakdown by area:

| Area | Count |
|------|-------|
| Jávea | 12 |
| Moraira | 7 |
| Benitachell | 14 |
| Calpe | 16 |
| Benissa | 8 |
| **Total** | **57** |

---

## Data Updates Applied to index.html

1. **All `priceAllIn` values** recalculated: `price × 1.11` (previously `× 1.12`) across all 57 properties
2. **ky-20878937** note updated: removed "just over budget" warning; now shows "All-in ~€843.6k (within budget at 9% ITP)"
3. **`LAST_UPDATED`** updated: `"2026-06-28"` → `"2026-06-29"`
4. **Footer** updated: "10% ITP transfer tax" → "9% ITP transfer tax", "× 1.12" → "× 1.11"

---

## Deployment

- `index.html` updated and pushed to `koernster/alicante-properties` (branch: main)
- `worker.js` updated with new HTML content and pushed to GitHub
- GitHub Actions workflow `deploy-cf-workers.yml` triggered automatically on push, deploying to Cloudflare Workers at `https://alicante-properties.stkoern.workers.dev`

---

*Automated run · stkoern@gmail.com · Costa Blanca North Villa Search*
