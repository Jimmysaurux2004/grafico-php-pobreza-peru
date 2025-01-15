<?php
// Configuración
// Nota: La API PIP del Banco Mundial solo proporciona datos desde 1997 en adelante.
// Por lo tanto, no hay datos disponibles para los años 1995 y 1996, y se incluirán como null.

$startYear = 1995;
$endYear = 2020;
$country = "PER"; // Código del país
$headcounts = [];

// Iterar sobre los años para obtener datos de la API
for ($year = $startYear; $year <= $endYear; $year++) {
    $url = "https://api.worldbank.org/pip/v1/pip?country=$country&year=$year";
    $response = file_get_contents($url);

    if ($response === FALSE) {
        // Si hay un error, añadir null al array
        $headcounts[] = null;
        continue;
    }

    $data = json_decode($response, true);
    if (!empty($data) && isset($data[0]['headcount'])) {
        $headcount = $data[0]['headcount'] * 100; // Convertir a porcentaje
        $headcounts[] = round($headcount, 2); // Redondear a 2 decimales
    } else {
        $headcounts[] = null; // Si no hay datos, añadir null
    }
}

// Devolver los datos como JSON
header('Content-Type: application/json');
echo json_encode($headcounts);
