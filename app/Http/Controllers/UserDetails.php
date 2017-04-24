<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User as userModel;
use JavaScript;

use App\Http\Requests;

class UserDetails extends Controller
{


    public function index()
    {
        JavaScript::put([
            'name' => Auth::user()->id,
        ]);
        return view('user');
    }

    public function details($id)
    {
        return userModel::find($id);


    }

    /*
     * this function for post to
     * i have problem when use axios post in react this is the issue!
     * Deprecated: Automatically populating $HTTP_RAW_POST_DATA is  deprecated and will be removed in a future version.
     *  To avoid this warning set 'always_populate_raw_post_data' to '-1' in php.ini
     *  and use the php://input stream instead. in Unknown on line 0
and this is the post input
    {"firstName":"Fred","lastName":"Flintstone"}
     * */
    public function post(Request $request)
    {

        return response()->json($request->all()

        );

    }
}
