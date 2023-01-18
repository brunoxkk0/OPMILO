@echo off

::Based on https://github.com/EnigmaticaModpacks/Enigmatica9/blob/master/automation/InstanceSyncSetup.bat

:: Cleaning git
cd ..
type NUL > .git/hooks/post-merge
echo #!/bin/sh > .git/hooks/post-merge
echo java -jar InstanceSync.jar >> .git/hooks/post-merge

echo Hooks configurados com sucesso.
echo Sincronizando a instancia.

java -jar InstanceSync.jar

echo Feito.