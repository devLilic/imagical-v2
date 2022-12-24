<?php

namespace App\Exceptions;

use Exception;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PlaylistNotFoundException extends Exception
{

    public function register()
    {
        $this->renderable(function (NotFoundHttpException $e, $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'data'=>[
                        'message' => 'Record not found.'
                    ]
                ], 404);
            }
        });
    }
}
