<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grazie! | AchrisGraphics</title>

    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Gabriele Pedesini">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

    <link rel="stylesheet" href="assets/css/style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=K2D:wght@100;200;300;400;500;600&family=Mulish:wght@200;300;400;500;600&family=Noto+Serif:wght@300;400;500&family=Poppins:wght@200;300;400;500&family=Rubik:wght@300;400;500;600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0" />

    <script src="https://kit.fontawesome.com/50849fb9f7.js" crossorigin="anonymous"></script>

    <!-- Favicon -->

    <!-- Favicon SVG per browser moderni -->
	<link rel="icon" type="image/svg+xml" href="assets/images/favicon/favicon-dark.svg" id="light-scheme-icon">
	<link rel="icon" type="image/svg+xml" href="assets/images/favicon/favicon-light.svg" id="dark-scheme-icon">
	<script src="assets/js/faviscript.js"></script>
	
    <!-- Favicon per dispositivi Apple -->
	<link rel="apple-touch-icon" href="assets/images/favicon/apple/apple-touch-icon-180x180.png">
	<link rel="apple-touch-icon" sizes="57x57" href="assets/images/favicon/apple/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="assets/images/favicon/apple/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="assets/images/favicon/apple/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicon/apple/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="assets/images/favicon/apple/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="assets/images/favicon/apple/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicon/apple/apple-touch-icon-152x152.png">
    <link rel="mask-icon" href="assets/images/favicon/apple/safari-pinned-tab.svg" color="#ff911a">
	
    <!-- Favicon per Android e altri dispositivi -->
	<link rel="icon" type="image/png" sizes="96x96" href="assets/images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/images/favicon/site.webmanifest">
    <meta name="msapplication-config" content="assets/images/favicon/browserconfig.xml">
    <meta name="msapplication-TileColor" content="#ff911a">
    
    <!-- Colori barra indirizzi per mobile -->
    <meta name="theme-color" content="#000000">

</head>
<body>

    <!----------------- HEADER ------------------------>

    <header>

        <div class="navbar">
            
            <a href="index.html" class="logo-btn">
                <img src="../assets/images/a.png" alt="" class="logo">
            </a>

            <div class="hamburger hamburger--collapse-r" id="hamburger">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>

        </div>

        <div id="myNav" class="overlay">
            
            <nav class="overlay-content">

                <ul class="portfolio-list">
                    <li class="portfolio-item">
                        <a class="portfolio-title" onclick="closeNav()" href="index.html#portfolio">PORTFOLIO</a>
                        <a class="portfolio-title-alt" onclick="closeNav()" href="index.html#portfolio">PORTFOLIO</a>
                        <p class="n-1">01</p>
                    </li>
                    <li class="portfolio-item">
                        <a class="portfolio-title" onclick="closeNav()" href="index.html#servizi">SERVIZI</a>
                        <a class="portfolio-title-alt" onclick="closeNav()" href="index.html#servizi">SERVIZI</a>
                        <p class="n-2">02</p>
                    </li>
                    <li class="portfolio-item">
                        <a class="portfolio-title" onclick="closeNav()" href="index.html#skills">SKILLS</a>
                        <a class="portfolio-title-alt" onclick="closeNav()" href="index.html#skills">SKILLS</a>
                        <p class="n-3">03</p>
                    </li>
                    <li class="portfolio-item">
                        <a class="portfolio-title" onclick="closeNav()" href="index.html#contatti">CONTATTI</a>
                        <a class="portfolio-title-alt" onclick="closeNav()" href="index.html#contatti">CONTATTI</a>
                        <p class="n-4">04</p>
                    </li>
                </ul>
            </nav>
        </div>
        
    </header>

    <div class="container grazie-container">
        <p class="grazie-text">Grazie!</p>
        <p class="if-return">Il tuo messaggio è stato recapitato.</p>
        <a href="index.html" class="return">Torna alla home</a>
    </div>


    <?php
            
    // Funzione per validare l'email
    function validateEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

    // Verifica se il form è stato inviato
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        // Raccogli i dati dal form
        $name = htmlspecialchars(trim($_POST['name']));
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $message = htmlspecialchars(trim($_POST['message']));

        // Verifica l'email
        if (!validateEmail($email)) {
            echo "Email non valida. Per favore, riprova.";
            exit;
        }

        // Genera un boundary
        $mail_boundary = "=_NextPart_" . md5(uniqid(time()));

        $to = "gxbbry@gmail.com";
        $subject = "Nuovo messaggio dal sito";
        $sender = "postmaster@achrisgraphics.it";

        // Intestazioni email
        $headers = "From: $sender\r\n";
        // $headers .= "Reply-To: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/alternative; boundary=\"$mail_boundary\"\r\n";
        $headers .= "X-Mailer: PHP " . phpversion() . "\r\n";

        // Costruisci il corpo del messaggio nei due formati
        $text_msg = "Nome: $name\nEmail: $email\n\nMessaggio:\n$message";
        $html_msg = "<b>Nome</b> <br> $name <br> <br> <b>Email</b> <br> $email <br> <br> <b>Messaggio</b> <br>" . nl2br($message);

        // Costruisci il corpo del messaggio da inviare
        $msg = "This is a multi-part message in MIME format.\r\n\r\n";
        $msg .= "--$mail_boundary\r\n";
        $msg .= "Content-Type: text/plain; charset=\"iso-8859-1\"\r\n";
        $msg .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $msg .= "$text_msg\r\n";

        $msg .= "--$mail_boundary\r\n";
        $msg .= "Content-Type: text/html; charset=\"iso-8859-1\"\r\n";
        $msg .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
        $msg .= "$html_msg\r\n";

        // Boundary di terminazione multipart/alternative
        $msg .= "--$mail_boundary--\r\n";

        // Invia il messaggio
        if (mail($to, $subject, $msg, $headers, "-f$sender")) {
            // echo "<p>Messaggio inviato con <span class='bold'>successo</span>!</p> <p> Grazie per avermi contattato $name, le risponderò appena possibile.</p> 
            // <a href='index.html' class='btn' style='margin-top: 35px'>Torna alla Home</a>";
        } else {
            // echo "Recapito messaggio <span class='bold'>fallito</span>!";
        }
    } else {
        // echo "Recapito messaggio <span class='bold'>fallito</span>!";
    }

    ?>

    <!--------- SCRIPT ---------->

    <script src="assets/js/cursor.js"></script>
    <script src="assets/js/header.js"></script>
    
</body>
</html>