# Inspeccion ambiental mobile-first

Web app simple basada en tu archivo de inspeccion ambiental.

## Como usar

1. Abre `/Users/juliogomez/Documents/ecology-web/index.html` en el navegador.
2. Completa los datos iniciales.
3. Responde el cuestionario.
4. Revisa el indice de cumplimiento y los riesgos mas altos al final.

## Llenado desde Excel

Se cargaron 3 categorias y 19 preguntas desde:
- `/Users/juliogomez/Downloads/Base de Datos para Inspección ambiental.xlsx`

Incluye una regla especial:
- Si en la primera pregunta de residuos peligrosos se responde `No`, el resto de preguntas de ese bloque se marca como `No aplica` y el flujo salta al siguiente bloque.
