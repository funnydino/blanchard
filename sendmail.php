<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';
  // require 'phpmailer/src/SMTP.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language');
  $mail->IsHTML(true);

  // Настройки SMTP
  // $mail->isSMTP();
  // $mail->SMTPAuth = true;
  // $mail->SMTPDebug = 0;

  // $mail->Host = 'ssl://smtp.timeweb.ru';
  // $mail->Port = 465;
  // $mail->Username = 'username';
  // $mail->Password = 'password';
  // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

  // От кого письмо:
  $mail->setFrom('funnydino1@gmail.com', 'FunnyDino');
  // Кому отправить:
  $mail->addAddress('funnydino1@gmail.com');
  // Тема письма:
  $mail->Subject = 'Новое личное сообщение с сайта Blanchard!';

  // Тело письма:
  $body = '<h1>Заказан обратный звонок с сайта Blanchard!</h1>';

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
  }

  $mail->Body = $body;

  // Отправляем:
  if (!$mail->send()) {
    $message = 'Ошибка :(';
  } else {
    $message = 'Заявка отправлена.';
  }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>