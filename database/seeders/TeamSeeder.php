<?php

namespace Database\Seeders;

use App\Models\Team;
use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $teamsName = array('php', 'android', 'testing', 'dubugging', 'IOS', 'Business');
        foreach ($teamsName as $teamName) {
            Team::create([
                "name" => $teamName
            ]);
        }
    }
}
