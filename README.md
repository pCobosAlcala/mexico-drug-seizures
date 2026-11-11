# Mexico drug supply data

Working draft, November 2026. Site: https://pcobosalcala.github.io/mexico-drug-seizures/

Two pages:

- **Seizures by source** (`index.html`). How much of each drug Mexican agencies say they seized each year, from every government source we hold: the army (SEDENA), the navy (SEMAR), the Federal Police and Guardia Nacional, the federal prosecutors (FGR), state police and prosecutors, and pooled totals. Pick a drug, unit and place; compare agencies, or compare the versions of one agency's own records, which do not always agree.
- **What data exists** (`matrix.html`). The data we hold for each stage of enforcement (precursors, eradication, labs, drugs seized, incineration, airstrips, customs and ports, arrests) by agency. Click a cell to see each source, its years, how detailed it is and its caveats.

## Data

`data/dash_seizures.csv`: one row per source, agency, place, year, drug and unit.

| Column | Meaning |
|---|---|
| source_id | Source (see `dash_sources.csv`) |
| agency | Agency as the source names it |
| place | INEGI state code; 00 is national, 99 is state not identified |
| year | Calendar year |
| drug | Harmonized drug name; cannabis plants kept apart as marijuana_plant |
| unit | kg, pills, ampoules or litres; tons, grams and milligrams converted to kg; units are never added |
| amount | Amount seized |
| events | Number of seizure events, only where the source counts them |
| partial | 1 when the source covers only part of that year |
| flag | Values kept out of the chart as likely errors at the source |

`data/dash_sources.csv`: one row per source, with its agency, version, role, years, most detailed level, drugs, notes and where we hold the original file. Main source (main = 1) is the version drawn in the one line per agency view. Pooled totals and compiled files are for comparison only and are never added to agency series.

## Caveats

The navy and Guardia Nacional transparency answers stop in 2022 and 2021; after that the Guardia Nacional appears only in INEGI's police census. The INEGI federal prosecutor census has no seizure table for 2020 and 2021. SEDENA's yearly public sheets count marijuana seized plus incinerated. The FGR fentanyl file has a likely unit error in 2020 (flagged).
