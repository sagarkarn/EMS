<?php

namespace App\Http\Controllers;

use App\Events\EmployeeCreated;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Models\Employee;
use App\Models\User;
use Exception;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::with('employee')->get();
    }

    /**
     * Show the form for creating a new resource.
     * 
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEmployeeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEmployeeRequest $request)
    {
        DB::beginTransaction();

        $data = $request->validated();
        try {
            $user = User::create([
                "name" => $data['f_name'] . ' ' . $data['l_name'],
                "email" => $data['email'],
                "password" => "123456"
            ]);

            $employee = Employee::create([

                "user_id" => $user->id,
                "country" => $data['country'],
                'join_date' => $data['start_date'],
                'job_title' => $data['job_title'],
                'type' => $data['employment_type'],
                'team_id' => $data['team'],
                'manager_id' => $data['line_manager'],
                'office_id' => $data['office'],
                'currency_id' => $data['currency'],
                'amount' => $data['amount'],
                'frequency' => $data['frequency'],
                'salary_date' => $data['salery_start_date']

            ]);

            if ($employee) {

                event(new EmployeeCreated($data['email']));

                DB::commit();
                return response([
                    'message' => 'user created successfully'
                ], 201);
            } else {
                DB::rollBack();
                return response([
                    'message' => 'something is wrong'
                ]);
            }
        } catch (Exception $e) {
            DB::rollBack();
            return response([
                'message' => 'something is wrong' . $e
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEmployeeRequest  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEmployeeRequest $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
