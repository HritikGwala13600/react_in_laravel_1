<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    public function index(){
        return view('welcome');
    }

    public function students(){
        return response()->json([
            'data' => User::all(),
            'status' => true
        ],200);
    }

    public function editStudent($id){
        $user = User::find($id);
        return response()->json([
            'data' => $user
        ],200);
    }

}
