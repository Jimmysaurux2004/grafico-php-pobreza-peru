# Gráfico del Índice de Pobreza en Perú (1997-2020)

Este proyecto muestra un gráfico interactivo sobre cómo ha cambiado la tasa de pobreza en Perú entre 1997 y 2020. Se usaron **HTML**, **CSS** y **JavaScript** para la interfaz, y **PHP** para procesar los datos obtenidos de una API.

## Requisitos para ejecutar el proyecto

Para que funcione correctamente (por el uso de PHP), necesitas usar un servidor local como **XAMPP**.

### Pasos:
1. Descarga e instala **XAMPP**.
2. Pon los archivos del proyecto en la carpeta `htdocs` de XAMPP.
3. Activa el servidor desde el panel de XAMPP.
4. Abre tu navegador y entra a `http://localhost/[nombre-de-la-carpeta-del-proyecto]/index.html`.

## Detalles del proyecto

### Tecnologías usadas:
- **HTML**: Para el diseño de la página.
- **CSS**: Para los estilos.
- **JavaScript**: Para crear el gráfico con **Highcharts**.
- **PHP**: Para obtener los datos desde la API del Banco Mundial.

### Notas importantes:
- Aunque el ejercicio pide datos desde **1995**, la API solo tiene información disponible desde **1997** para Perú. Por eso, en el gráfico no hay datos de los años 1995 y 1996. Lo dejé así a propósito porque me di cuenta de este detalle.
- El gráfico muestra los datos de los años disponibles y ajusta los valores faltantes con `null`.

## ¿Por qué usar PHP?

PHP se usó aquí para manejar la extracción de datos desde la API y preparar la información que luego el gráfico usa. Todo lo demás, como la parte visual y el gráfico, funciona con JavaScript y CSS.
