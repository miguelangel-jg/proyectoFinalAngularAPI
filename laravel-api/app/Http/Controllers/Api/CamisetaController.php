<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Camiseta;
use Illuminate\Http\Request;


class CamisetaController extends Controller
{
    // Obtener todas las camisetas
    public function index()
    {
        $camisetas = Camiseta::all();
        return response()->json($camisetas);
    }

    // Obtener una camiseta por ID
    public function show($id)
    {
        $camiseta = Camiseta::find($id);

        if (!$camiseta) {
            return response()->json(['message' => 'Camiseta no encontrada'], 404);
        }

        return response()->json($camiseta);
    }

    // Crear una nueva camiseta
    public function store(Request $request)
    {
        $request->validate([
            'nombre_equipo' => 'required|string',
            'temporada' => 'required|string',
            'marca' => 'required|string',
            'talla' => 'required|string',
            'precio' => 'required|numeric',
            'stock' => 'required|integer',
            'imagen' => 'required|string',
        ]);

        $camiseta = Camiseta::create($request->all());

        return response()->json($camiseta, 201);
    }

    // Actualizar una camiseta
    public function update(Request $request, $id)
    {
        $camiseta = Camiseta::find($id);

        if (!$camiseta) {
            return response()->json(['message' => 'Camiseta no encontrada'], 404);
        }

        $camiseta->update($request->all());

        return response()->json($camiseta);
    }

    // Eliminar una camiseta
    public function destroy($id)
    {
        $camiseta = Camiseta::find($id);

        if (!$camiseta) {
            return response()->json(['message' => 'Camiseta no encontrada'], 404);
        }

        $camiseta->delete();

        return response()->json(['message' => 'Camiseta eliminada']);
    }
}
