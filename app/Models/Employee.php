<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "country",
        'join_date',
        'job_title',
        'type',
        'team_id',
        'manager_id',
        'office_id',
        'currency_id',
        'amount',
        'frequency',
        'salary_date'
    ];
}
