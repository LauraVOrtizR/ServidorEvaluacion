CREATE DATABASE Evaluacion;

USE Evaluacion;

CREATE TABLE Usuarios(
idUsuario INT AUTO_INCREMENT PRIMARY KEY,
nombreUsuario VARCHAR(50),
claveUsuario VARCHAR(100),
correoUsuario VARCHAR(50)
)

-- Insertar datos
INSERT INTO Usuarios(nombreUsuario, claveUsuario, correoUsuario)
VALUES('Laura', 'Contraseña123', 'laura@hotmail.com'),
    ('Juan', 'Contraseña456', 'juan@gmail.com'),
    ('Valeria', 'Contraseña789', 'valeria@outlook.com')

-- Consulta para traer datos de los usuarios
SELECT idUsuario, nombreUsuario FROM usuarios
WHERE claveUsuario = ? AND correoUsuario = ?;