<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StaticController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('static/home.html.twig', [
            'controller_name' => 'StaticController',
        ]);
    }
    #[Route('/about', name:'app_about')]
    public function about(){
        return $this->render('static/about.html.twig');
    }
}
