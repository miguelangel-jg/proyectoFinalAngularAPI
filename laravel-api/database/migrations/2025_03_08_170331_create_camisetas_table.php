<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCamisetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('camisetas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre_equipo');
            $table->string('temporada');
            $table->string('marca');
            $table->string('talla');
            $table->decimal('precio', 8, 2);
            $table->integer('stock');
            $table->string('imagen');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('camisetas');
    }
}
