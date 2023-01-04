<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function contact(): Response
    {
        return $this->render('contact/contact.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }
    #[Route('/contact/handler', name:'app_contact_handler')]
    public function contactHandler(MailerInterface $mailer){
        $contact_message = (new Email())
        ->from($_POST['user-email'])
        ->to('saurychristopher@gmail.com')
        ->subject('Contact Portfolio : ' . $_POST['subject'])
        ->text(
            'Sender : ' . $_POST['user-email'] . \PHP_EOL
            . 'Name : ' . $_POST['name'] . \PHP_EOL
            . 'Subject : ' . $_POST['subject'] .\PHP_EOL
            . 'Message : ' . $_POST['message'],
            'text/plain');
        $mailer->send($contact_message);

        return new Response(200);
    }
}
