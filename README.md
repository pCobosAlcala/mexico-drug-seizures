# Mexico drug supply data

Working draft, November 2026. Site: https://pcobosalcala.github.io/mexico-drug-seizures/

Seven pages:

- **Seizures by source** (`index.html`). How much of each drug Mexican agencies say they seized each year, from every government source we hold: the army (SEDENA), the navy (SEMAR), the Federal Police and Guardia Nacional, the federal prosecutors (FGR), state police and prosecutors, and pooled totals. Pick a drug, unit and place; compare agencies, or compare the versions of one agency's own records, which do not always agree.
- **Labs by source** (`labs.html`). How many clandestine drug labs each agency says it found each year: the army, the Federal Police and Guardia Nacional, the FGR, state police, and UNODC for comparison. Pick the drug a lab produced (where the source records it) and the place.
- **Precursors by source** (`precursors.html`). Precursor chemicals the army (SEDENA) and the federal prosecutors (FGR) seized each year, grouped by the drug each chemical is used to make, with a reference table of which chemical goes with which drug.
- **Eradication by source** (`eradication.html`). Marijuana and poppy plots destroyed and hectares eradicated, by agency, and for the army by method (aerial spraying or by hand).
- **Incineration by source** (`incineration.html`). Kilograms of seized drugs the army incinerated, by drug.
- **Airstrips by source** (`airstrips.html`). Clandestine airstrips disabled by the army, the navy and the FGR.
- **What data exists** (`matrix.html`). The data we hold for each stage of enforcement (precursors, eradication, labs, drugs seized, incineration, airstrips, arrests) by agency. A cell opens its dashboard on that agency; arrests is still pending, and its cells show the sources we hold.

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

`data/labs.csv`: one row per source, agency, place, year and drug produced.

| Column | Meaning |
|---|---|
| source_id | Source (see `labs_sources.csv`) |
| agency | Agency as the source names it |
| place | INEGI state code; 00 is national |
| year | Calendar year the lab was found |
| product | Drug the lab produced: all (every lab), meth, heroin, cocaine, fentanyl, other, not_stated |
| labs | Number of labs |
| partial | 1 when the source covers only part of that year |
| flag | Values kept out of the chart as likely errors at the source (none so far) |

`data/labs_sources.csv`: one row per lab source, same layout as `dash_sources.csv`.

## Caveats

Seizures: the navy and Guardia Nacional transparency answers stop in 2022 and 2021; after that the Guardia Nacional appears only in INEGI's police census. The INEGI federal prosecutor census has no seizure table for 2020 and 2021. SEDENA's yearly public sheets count marijuana seized plus incinerated. The FGR fentanyl file has a likely unit error in 2020 (flagged).

Labs: only the army's register, GI-TOC, UNODC and one Guardia Nacional answer record the drug produced, and none has a fentanyl category; SEDENA counted 26 fentanyl pill sites separately in 2019 to 2024 (folio 330026424002985, known from press reports, file not obtained), shown as their own line. The Federal Police answer has no labs after 2018; the INEGI police censuses ask about labs only for 2024 and 2025. UNODC's figures equal the FGR census in 2020 to 2022.

Precursors: two sources only, SEDENA's records (2011 to 2024, by municipality and month) and FGR rows in Alejandro's file (fentanyl chemicals, 2017 to 2023); neither release is identified. `data/precursors.csv` items are single chemicals (`chem:`) or drug groups (`grp:`, the sum of a group's chemicals in one unit); `data/precursor_chemicals.csv` lists each chemical with its drug, role and the totals held. Kilograms and litres are never added.

Eradication, incineration and airstrips: `data/<page>.csv` and `data/<page>_sources.csv` have the same layout as the seizure files (the `drug` column holds the crop and method, the drug, or `all` for airstrips). The FGR census eradication figures repeat the all-agency national total and are shown as comparison only.
