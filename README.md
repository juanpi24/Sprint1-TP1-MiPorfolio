# TP 1 - Mi Presentación Personal

## Qué es
Página web de presentación personal desarrollada con React y Tailwind CSS v4. El objetivo del proyecto es ejercitar los fundamentos de React: composición de componentes independientes, paso de props, eventos `onClick` y renderizado de listas mediante `.map()` sin el uso de estado.

## Estructura de Componentes
El proyecto se encuentra desacoplado en componentes independientes dentro de `src/components/`:

* **`ProfileHeader.jsx`**: Presenta la inicial del nombre, título profesional, biografía corta y un botón interactivo.
* **`SkillList.jsx`**: Importa el arreglo de datos desde `src/data/skills.js` e itera sobre ellos mediante `.map()`.
* **`SkillCard.jsx`**: Renderiza cada tarjeta de habilidad recibiendo props desestructuradas y mostrando una etiqueta mediante renderizado condicional (`&&`) si la habilidad es favorita.
* **`Footer.jsx`**: Pie de página con el nombre del autor y créditos[cite: 1].

## Cómo correrlo

1. Clonar el repositorio e ingresar a la carpeta del proyecto:
   ```bash
   git clone https://github.com/juanpi24/Sprint1-TP1-MiPorfolio 
   cd Sprint1-TP1-MiPorfolio

2. Instalar las dependencias:
    ```bash
    npm install

3. Iniciar el servidor de desarrollo local:
    ```bash
    npm run dev

## 🚀 Deploy online (Netlify)
* [Ir al Porfolio ](https://miporfolioreact.netlify.app/) 

## Uso de IA
* Herramientas utilizadas: Gemini.

* Qué generé y qué corregí: Utilicé la IA para estructurar el archivo de datos inicial **`src/data/skills.js`**. Escribí a mano el código de cada componente en archivos **`.jsx`** separados para asegurar que las props se transmitan correctamente y que cada iteración cuente con su atributo **`key`** único.

## Lo que me costó
* Adaptar la configuración de Tailwind CSS en **`src/index.css`** utilizando la directiva **`@theme`** para definir los colores globales del proyecto en un solo lugar.