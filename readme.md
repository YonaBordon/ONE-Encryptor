# Encriptador de Texto

Este proyecto es una aplicación web simple que permite encriptar y desencriptar texto utilizando un conjunto específico de reglas de encriptación. La aplicación también incluye la funcionalidad para copiar el texto encriptado o desencriptado al portapapeles.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Reglas de Encriptación](#reglas-de-encriptación)
- [Estilos Responsivos](#estilos-responsivos)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/YonaBordon/ONE-Encryptor
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd ONE-Encryptor
   ```

3. Ejecute el proyecto con las extensiones Live-Server o Five-Server.

## Uso

1. Ingresa el texto que deseas encriptar o desencriptar en el área de texto.
2. Presiona el botón **Encriptar** para encriptar el texto.
3. Presiona el botón **Desencriptar** para desencriptar el texto.
4. Una vez obtenido el resultado, puedes copiar el texto encriptado o desencriptado usando el botón **Copiar**.

## Reglas de Encriptación

Las "llaves" de encriptación que utilizamos son las siguientes:

- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "a" es convertida para "ai"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"

Por ejemplo:

- "gato" => "gaitober"
- "gaitober" => "gato"

## Estilos Responsivos

El diseño de la aplicación es responsivo y se adapta a diferentes tamaños de pantalla:

- **Móviles**: Todo el contenido se muestra en una sola columna.
- **Tablets**: Los botones de encriptar y desencriptar se muestran uno al lado del otro.
- **Escritorio**: La sección de entrada ocupa el 70% del ancho de la pantalla y la sección de salida el 30%.

## Estructura del Proyecto

```plaintext
encriptador-texto/
│
├── assets/
│   ├── Logo.png
│   └── bi_exclamation-circle-fill.svg
│
├── css/
│   └── style.css
│
├── javascript/
│   └── script.js
│
├── index.html
└── README.md
```
