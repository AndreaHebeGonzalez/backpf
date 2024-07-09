const { Router } = require('express');

const authController = require('../controllers/auth.controllers');

const authMiddleware = require('../middlewares/authMiddleware');

const authRouter = Router();

authRouter.post('/register', authController.register); 

authRouter.post('/login', authController.login);

authRouter.get('/protected', authMiddleware, (req, res) => {
    res.json({ userId: req.userId });
});


module.exports = authRouter;


/*
/protected es un ejemplo de cómo puedes proteger una ruta en tu aplicación usando el middleware de autenticación (authMiddleware). Esta ruta solo debería ser accesible si el usuario ha proporcionado un token JWT válido en la solicitud.

Cuándo usar la ruta /protected:
Datos Sensibles: Si tienes datos que solo deberían ser accesibles para usuarios autenticados (por ejemplo, datos de perfil de usuario, configuraciones personales, etc.).
Acciones Protegidas: Si tienes acciones que solo deberían ser ejecutadas por usuarios autenticados (por ejemplo, realizar una compra, actualizar información personal, etc.).
Restricción de Acceso: Para cualquier ruta que quieras restringir el acceso solo a usuarios autenticados.

?la ruta de login es diferente de la ruta protegida. La ruta de login no necesita autenticación porque su propósito es precisamente autenticar al usuario y generar un token JWT. Una vez que el usuario está autenticado y tiene un token JWT, puede acceder a las rutas protegidas que requieren ese token para verificar la autenticidad del usuario.

!Flujo de Autenticación

Registro de Usuario (/register): Un usuario se registra proporcionando un correo electrónico y una contraseña. Esta información se guarda en la base de datos con la contraseña encriptada.

Inicio de Sesión (/login): El usuario proporciona sus credenciales (correo electrónico y contraseña). El backend verifica estas credenciales y, si son correctas, genera un token JWT y lo devuelve al usuario.

Acceso a Rutas Protegidas (/protected): El usuario intenta acceder a una ruta que está protegida. Debe enviar el token JWT en el encabezado de la solicitud. El backend verifica el token y, si es válido, permite el acceso a la ruta.
*/