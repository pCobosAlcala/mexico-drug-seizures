// Where each source can be found online (links checked 16 Nov 2026).
// Matched on a source's name, short name and file location; the first match wins.
window.MX_WEB = [
  [/330026423000179|330026623000117|0413100015520|332259822000079|0001700006421/, 'https://www.mucd.org.mx/wp-content/uploads/2023/06/Respuestas_autoridades.zip', 'Transparency answers, published by MUCD (zip file)'],
  [/GI-TOC/, 'https://page.globalinitiative.net/fentanyl-and-synthetic-drugs-monitor-1/', 'GI-TOC Fentanyl and Synthetic Drugs Monitor'],
  [/Quinto Elemento/, 'https://public.flourish.studio/visualisation/17111975/', 'Quinto Elemento Lab map'],
  [/yearly public sheets|yearly results sheets/, 'https://www.gob.mx/defensa/acciones-y-programas/operaciones-contra-el-narcotrafico-6963', 'SEDENA, Operaciones contra el narcotráfico'],
  [/CNPJF|federal prosecutor census|INEGI prosecutor census/, 'https://www.inegi.org.mx/programas/cnpjf/2025/', 'INEGI federal prosecutor census'],
  [/CNSPF|federal police census/, 'https://www.inegi.org.mx/programas/cnspf/', 'INEGI federal police census'],
  [/CNSPE|state police census/, 'https://www.inegi.org.mx/programas/cnspe/', 'INEGI state police census'],
  [/CNPJE|state prosecutor census/, 'https://www.inegi.org.mx/programas/cnpje/', 'INEGI state prosecutor census'],
  [/UNODC/, 'https://www.unodc.org/unodc/en/data-and-analysis/world-drug-report-2026.html', 'UNODC World Drug Report 2026'],
  [/InSight Crime/, 'https://insightcrime.org/', 'InSight Crime (site home; the article is not linked)']
];
window.mxWebOf = function (text) { return window.MX_WEB.find(w => w[0].test(text)); };
