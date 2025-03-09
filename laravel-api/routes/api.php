<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CamisetaController;

Route::get('camisetas', [CamisetaController::class, 'index']); // Obtener todas las camisetas
Route::get('camisetas/{id}', [CamisetaController::class, 'show']); // Obtener camiseta por ID
Route::post('camisetas', [CamisetaController::class, 'store']); // Crear una nueva camiseta
Route::put('camisetas/{id}', [CamisetaController::class, 'update']); // Actualizar una camiseta
Route::delete('camisetas/{id}', [CamisetaController::class, 'destroy']); // Eliminar una camiseta
