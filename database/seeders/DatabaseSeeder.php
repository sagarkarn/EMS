<?php

namespace Database\Seeders;

use App\Models\Currency;
use App\Models\Office;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();

        User::factory()->create([
            "name" => "sagar karn",
            "email" => "sagarkarn9@gmail.com"
        ]);

        $this->call([
            TeamSeeder::class
        ]);
        Office::create([
            "name" => "Main office"
        ]);
        Currency::create([
            "name" => "$"
        ]);
        Currency::create([
            "name" => "₹"
        ]);
    }
}
