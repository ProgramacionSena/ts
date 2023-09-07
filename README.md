# CRUD con JavaScript

## Páginas WEB

-

## Videos de YouTube

1. PreWork

   - [Cómo Instalar NodeJS, NPM y NVM en Windows](https://youtu.be/Z-Ofqd2yBCc?si=rlu2p10FVMyxSW9X)
   
     La versión original de NVM es esta https://github.com/nvm-sh/nvm la cual esta diseñada para correr sobre plataformas unix, macOS, and windows WSL, lo cual sugiere "[Instalación de Linux en Windows con WSL](https://learn.microsoft.com/es-es/windows/wsl/install)", pero esto no es impedimento para trabajar en windows, la página oficial de NVM sugiere trabajar con esta versión (realmente es un proyecto completamente aparte, no es un clone, tiene una filisofia completamente diferente pero es recomendado por Microsoft/[npm](https://www.npmjs.com)/Google) del NVM ajustado para [nvm-windows](https://github.com/coreybutler/nvm-windows).

     Para instalar el **administrador de versiones** NVM - [Node Version Manager](https://desarrolloweb.com/home/nvm) se hará desarrrollando el siguinte paso a paso

     - Asegurar que no esté instalada ninguna versión de Node:

       ![power shell como administrador](/README-images/20230906_221711.png)

       1 abrir Power Shell,

       2 abrir como adminsitrador

       ahora, una vez allí escribir `node -v`

       ![validando node en power shell](/README-images/20230906_222240.png)

       se espera que salga así, con esta letras en rojo que evidencian que no esta "instalado", por lo menos las varialbles de entorno ya no están en el sistema de windows

       ahora validar en las carpetas de *archivos de programa* y *archivos de programa X86* de windows

       ![archivos de programa x86](/README-images/20230906_223333.png)

       ![archivos de programa x86](/README-images/20230906_223802.png)

       Hacer la desacarga en https://github.com/coreybutler/nvm-windows
       ![descarga](/README-images/20230906_225126.png)
       
       se descarga al versión 'nvm-setup.exe' de https://github.com/coreybutler/nvm-windows/releases

       ![version nvm](/README-images/20230906_225129.png)

       ![nvm descargado](/README-images/20230906_225131.png)

       Se procede con la instalación con todos lo valores predeterminados

       ![instalacion predeterminada](/README-images/20230906_225135.png)

       ![instalacion predeterminada](/README-images/20230906_225137.png)

       ![instalacion predeterminada](/README-images/20230906_225139.png)

       ![instalacion predeterminada](/README-images/20230906_225142.png)

       ![instalacion predeterminada](/README-images/20230906_225145.png)

       Allí se digita `nvm` para conocer si ya se esta ejecutando el NVM,luego se digita `nvm install lts` para finalmente hacer la instalación de NodeJS y npm, ahora se digita `nvm use 18.17.1` (este número depende de la version que salio en el punto 2) para poner en uso la versión que se acaba de instalar de NodeJS; para confirmar se digita `node -v`.

       ![power shell validadndo nvm](/README-images/20230906_231511.png)

    ---
    [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

    [Primeros pasos con Express](https://desarrolloweb.com/articulos/primeros-pasos-express.html)

    desarrolloweb.com

    - [Manual de NestJS](https://desarrolloweb.com/manuales/manual-nestjs)

    -   [Manual de NodeJS](https://desarrolloweb.com/manuales/manual-nodejs.html)

    - [Taller de MySQL](https://desarrolloweb.com/manuales/taller-mysql.html)

    - [Tutorial de SQL](https://desarrolloweb.com/manuales/tutorial-sql.html)

    - [Iniciación a las bases de datos](https://desarrolloweb.com/manuales/iniciacion-bases-de-datos)

    - [Manual de JavaScript](https://desarrolloweb.com/manuales/manual-javascript.html)