# Inspeccion ambiental mobile-first

Web app basada en tu archivo de inspeccion ambiental.

## Como usar

1. Abre `/Users/juliogomez/Documents/ecology-web/index.html` en el navegador.
2. Completa los datos iniciales.
3. Responde el cuestionario.
4. Revisa la puntuacion final y los riesgos mas altos al final.

## Llenado desde Excel

Se cargaron 11 categorias y 81 preguntas desde:
- `/Users/juliogomez/Downloads/Base de Datos para Inspección ambiental(1).xlsx`

Reglas de evaluacion:
- Cada respuesta `Cumple` suma 1 punto a la puntuacion final.
- Las respuestas `No aplica` no suman ni restan y se excluyen del total evaluable.
- En todas las secciones, si la primera respuesta es `No aplica`, el resto del bloque se marca como `No aplica` y se salta automaticamente.
