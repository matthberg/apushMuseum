@ECHO OFF
TITLE Launch Test
cls
:run
node main.js
firefox file:///%cd%/../apushMuseumCompile/index.html
pause
goto run