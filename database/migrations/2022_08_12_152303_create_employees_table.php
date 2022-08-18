<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('country', 20);
            $table->date('join_date');
            $table->string('job_title');
            $table->enum('type', array('permanent', 'freelancer'));
            $table->unsignedBigInteger('team_id');
            $table->unsignedBigInteger('manager_id');
            $table->unsignedBigInteger('office_id');
            $table->unsignedBigInteger('currency_id');
            $table->integer('amount');
            $table->enum('frequency', array(1, 2, 3, 4, 5, 6));
            $table->date('salary_date');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
