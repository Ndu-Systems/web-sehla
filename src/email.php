<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email= $data->email;
$cell= $data->cell;
$message= $data->message;

 $msg = "
<div class='container' style='position:relative;width:90%;padding-top:5%;padding-bottom:5%;padding-right:5%;padding-left:5%;font-family:Trebuchet MS;background-color:#dcdde1;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;text-align:center;margin-top:2%;margin-bottom:2%;margin-right:2%;margin-left:2%;' >
        <div class='head' style='width:100%;' >
          <h2>
           <u> Sehla Trading cleint query</u>
          </h2>
        </div>
        <div class='body' style='width:100%;padding-top:5%;padding-bottom:5%;padding-right:5%;padding-left:5%;' >
          <p style='text-align:center;width:80%;' >
          $message
          </p>
          <p class='left' style='width:80%;text-align:left;padding-top:2%;border-top-width:1px;border-top-style:solid;border-top-color:#000;' >
              Regrads <br>
              $name <br>
              $cell
          </p>
        </div>
      </div>
      
";

$to = "mrnnmthembu@gmail.com";
// $to = "ronald@titanemporium.co.za,mrnnmthembu@gmail.com,Freedom.Khanyile1@gmail.com";
$subject = 'Sehla Trading cleint query- Via website';
$from = $email;
 
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
if(mail($to, $subject, $msg, $headers)){
    echo 1;
}else{
    echo 0;
}

?>