# UniBot – Sistema Asesor Académico

Proyecto de la Tarea Integradora del curso **Algoritmos y programación**.

UniBot es una aplicación de consola en Node.js que funciona como un asesor académico para estudiantes de primer ingreso. Usa un modelo de inteligencia artificial (LLM), pero solo responde sobre los temas permitidos para la carrera de cada estudiante. Para lograrlo, antes de enviar la pregunta busca en un archivo local la información de la carrera (un RAG simplificado).

## Estado del proyecto

**Fase 1 – Pensamiento sistémico e ingeniería de requisitos (Sprint 0).**
En esta fase todavía no hay código. Se hizo la especificación del sistema, la planeación por sprints, el Product Backlog y el diagrama de casos de uso.

## Roles del sistema

- **Estudiante:** ingresa con su código institucional y hace preguntas sobre su carrera.
- **Administrador:** ingresa con una contraseña maestra (archivo `.env`), registra estudiantes, agrega temas permitidos, revisa las sesiones y hace cierres forzados.

## Planeación

| Sprint | Fase | Qué se construye |
|---|---|---|
| 0 | Fase 1 | Especificación, backlog y diagrama de casos de uso |
| 1 | Fase 2 | Menú principal, acceso con .env y lectura del CSV (RF-01 a RF-04) |
| 2 | Fase 3 | Migración a TypeScript y módulo del administrador (RF-05 a RF-10) |
| 3 | Fase 4 | Conexión con la IA, logs y manejo de errores (RF-11 a RF-14) |

## Documentación

- [Documento de especificación y planeación](UniBot_Fase1_Especificacion_y_Planeacion_version_final.pdf)
- [Diagrama de casos de uso](Diagrama_Casos_de_Uso_UniBot_version_final.png)
- [Declaración y reflexión sobre el uso de IA](Declaracion_Uso_IA_UniBot_Fase1.pdf)
- Tablero Kanban: [captura](Tablero_Kanban_UniBot.png) · [ver tablero en Trello](https://trello.com/invite/b/6ab877fdf3a003001a14847e/ATTI5868e021104d52792f5d2794a43025ddB5DD1EC3/tablero-unibot-apo)

## Tecnologías

Node.js · JavaScript (prototipo) · TypeScript (versión final) · dotenv · Git y GitHub

## Autor

Juan Alejandro Barrero – A00418628
