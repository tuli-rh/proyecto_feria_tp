# ...
**Autor:** yuliethgonzalez@liceovvh.cl
Yulieth Gonzalez


    <div class="container">
        <div class="logo">
            <img src="static/images/images.png" alt="Servidor no disponible.">
            <h2>Iniciar sesión en Silent Alert</h2>
        </div>

        /* resetear css */





<div class="social-login">
    <p>O inicia sesión con:</p>
        <div class="social-icons">
            <a href="#" class="social-icon google"><i class="fab fa-google"></i></a>
            <a href="#" class="social-icon facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon twitter"><i class="fab fa-twitter"></i></a>
        </div>
 </div>

/* Login con redes sociales */
.social-login {
    text-align: center;
    margin-bottom: 20px;
}

.social-login p {
    color: #777;
    font-size: 13px;
    margin-bottom: 15px;
    position: relative;
}

.social-login p::before,
.social-login p::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 30%;
    background: #ddd;
    top: 50%;
}

.social-login p::before {
    left: 0;
}

.social-login p::after {
    right: 0;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
}

.social-icon.google {
    background-color: #db4437;
}

.social-icon.facebook {
    background-color: #4267B2;
}

.social-icon.twitter {
    background-color: #1DA1F2;
}

.social-icon:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}



