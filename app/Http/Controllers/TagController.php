<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tag;

class TagController extends Controller
{
    public function index()
    {
        return Tag::all();
    }
    public function create(Request $request)
    {
        // validation
        return Tag::create([
            'tagName' => $request->tagName,
        ]);
    }
}
