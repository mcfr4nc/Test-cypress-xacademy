# QA Automation | Trabajo "Entrega Final"

## Descripción del Proyecto

Este repositorio contiene la automatización de pruebas para el sitio [Sauce Demo](https://www.saucedemo.com) utilizando **Cypress**. El objetivo principal es validar el proceso de compra en el sitio web a través de dos usuarios diferentes, con la implementación de buenas prácticas en la automatización de pruebas.

## Contenido

1. **Plan de Pruebas**
   - Generación de un plan de pruebas detallado para la automatización.

2. **Configuración de Cypress**
   - Instalación y configuración de Cypress para la automatización de pruebas.

3. **Archivos de Prueba**
   - `myTestSaucedemo.cy.js`: Script de prueba para la compra en Sauce Demo.

4. **Casos de Prueba**
   - **Compra con Usuario 1 (`standard_user`):**
     - Login con usuario `standard_user`.
     - Agregar productos al carrito.
     - Realizar el checkout.
     - Validar la finalización del checkout.
     - Realizar logout.
   - **Compra con Usuario 2 (`problem_user`):**
     - Ingresar con usuario `problem_user`.
     - Repetir los pasos de agregar productos al carrito, realizar checkout y logout.

5. **Gestión de Incidencias**
   - Utilización de Trello para la gestión de defectos y mejoras detectadas durante las pruebas.
   - https://trello.com/b/hHKohUlv/curso-xacademy-reporte (Link trello de reporte)

## Criterios de Evaluación

- **Aplicación de Conocimientos:**
  - Comprensión y aplicación correcta de conceptos aprendidos durante el curso.
  - Uso de buenas prácticas en automatización de pruebas.

- **Uso de Herramientas:**
  - Flexibilidad en la elección y uso de herramientas.
  - Integración eficiente de diversas herramientas dentro del proyecto.

- **Plan de Pruebas:**
  - Presencia de un plan de pruebas bien definido.
  - Claridad y detalle en la descripción de casos de prueba.

- **Automatización de Pruebas:**
  - Cumplimiento de los requisitos especificados.
  - Validaciones y verificaciones adecuadas para asegurar resultados correctos.
