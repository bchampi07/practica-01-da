<?php require '../layout/init.php' ?>
    <body>
        <div class="container">
            <h2>Registro</h2>
            <form id="registrationForm">
                <!-- Nombre -->
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" required minlength="3" maxlength="50" pattern="[a-zA-Z\s]+" title="El nombre solo puede contener letras y espacios.">
                    <div class="error" id="nameError"></div>
                </div>

                <!-- Correo Electrónico -->
                <div class="form-group">
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required>
                    <div class="error" id="emailError"></div>
                </div>

                <!-- Contraseña -->
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required minlength="8" maxlength="20" title="La contraseña debe tener entre 8 y 20 caracteres.">
                    <div class="error" id="passwordError"></div>
                </div>

                <!-- Confirmar Contraseña -->
                <div class="form-group">
                    <label for="confirmPassword">Confirmar Contraseña:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                    <div class="error" id="confirmPasswordError"></div>
                </div>

                <!-- Botón de Enviar -->
                <button type="submit" class="submit-btn">Registrar</button>
            </form>
        </div>
        <script>
            <?php require '../../js/app.js' ?>
        </script>
    </body>
</html>