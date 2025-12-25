@echo off
setlocal enabledelayedexpansion

:: ====================================================================
:: OBS Studio Portable Backup Script
:: Erstellt ein komprimiertes Backup deiner OBS-Installation
:: ====================================================================
::
:: WICHTIG: PASSE DIESE PFADE AN!
:: ====================================================================
:: 
:: So findest du deinen OBS-Pfad:
:: 1. Steam-Version: 
::    - Rechtsklick auf OBS in Steam -> Verwalten -> Lokale Dateien durchsuchen
::    - Kopiere den Pfad aus der Adressleiste
:: 
:: 2. Manuelle Installation:
::    - Standard: C:\Program Files\obs-studio
::    - Falls du einen anderen Pfad gewahlt hast, nutze diesen
::
:: 3. Andere Festplatte?
::    - Beispiel: D:\Steam\steamapps\common\OBS Studio
::    - Beispiel: E:\Programme\obs-studio
::
:: ANPASSEN: Trage DEINEN OBS-Pfad hier ein (zwischen den Anfuhrungszeichen):
:: ====================================================================

set "OBS_PATH=C:\Program Files (x86)\Steam\steamapps\common\OBS Studio"

:: Alternative Pfade (auskommentiert - entferne :: um zu aktivieren):
:: set "OBS_PATH=C:\Program Files\obs-studio"
:: set "OBS_PATH=D:\Steam\steamapps\common\OBS Studio"
:: set "OBS_PATH=E:\OBS Studio"

:: ====================================================================
:: Backup Zielordner (wo die Backups gespeichert werden)
:: ====================================================================
set "BACKUP_DIR=%USERPROFILE%\Documents\OBS-Backups"

:: ====================================================================
:: AB HIER NICHTS MEHR ANDERN!
:: ====================================================================

echo.
echo ========================================
echo   OBS Studio Backup Script
echo ========================================
echo.

:: Aktuelles Datum im Format YYYY-MM-DD
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set BACKUP_DATE=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2%

:: Prüfe ob 7-Zip installiert ist
set "SEVENZIP_PATH=C:\Program Files\7-Zip\7z.exe"
if not exist "%SEVENZIP_PATH%" (
    set "SEVENZIP_PATH=C:\Program Files (x86)\7-Zip\7z.exe"
)

if not exist "%SEVENZIP_PATH%" (
    echo [FEHLER] 7-Zip wurde nicht gefunden!
    echo Bitte installiere 7-Zip von: https://www.7-zip.org/
    echo.
    pause
    exit /b 1
)

:: Pruefe ob OBS-Pfad existiert
if not exist "%OBS_PATH%" (
    echo [FEHLER] OBS-Pfad nicht gefunden: %OBS_PATH%
    echo.
    echo Bitte passe den OBS_PATH am Anfang dieser Datei an!
    echo Rechtsklick auf diese Datei -^> Bearbeiten
    echo.
    pause
    exit /b 1
)

:: Pruefe ob portable_mode Ordner existiert
if not exist "%OBS_PATH%\portable_mode" (
    echo [FEHLER] Kein "portable_mode" Ordner gefunden in: %OBS_PATH%
    echo.
    echo Hast du OBS portabel gemacht?
    echo Erstelle einen Ordner namens "portable_mode" im OBS-Verzeichnis.
    echo.
    pause
    exit /b 1
)

echo [INFO] OBS gefunden: %OBS_PATH%

:: Erstelle Backup-Verzeichnis falls nicht vorhanden
if not exist "%BACKUP_DIR%" (
    mkdir "%BACKUP_DIR%"
    echo [INFO] Backup-Verzeichnis erstellt: %BACKUP_DIR%
)

:: Backup-Dateiname
set "BACKUP_FILE=%BACKUP_DIR%\OBS-Backup_%BACKUP_DATE%.7z"

echo.
echo [INFO] Starte Backup...
echo [INFO] Quelle: %OBS_PATH%\portable_mode
echo [INFO] Ziel: %BACKUP_FILE%
echo.

:: Erstelle komprimiertes Backup
"%SEVENZIP_PATH%" a -t7z -mx=9 "%BACKUP_FILE%" "%OBS_PATH%\portable_mode\*" -r

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   BACKUP ERFOLGREICH!
    echo ========================================
    echo.
    echo Backup gespeichert unter:
    echo %BACKUP_FILE%
    echo.
    
    :: Zeige Dateigröße
    for %%A in ("%BACKUP_FILE%") do (
        set "size=%%~zA"
        set /a size_mb=!size! / 1048576
        echo Groesse: !size_mb! MB
    )
    echo.
) else (
    echo.
    echo [FEHLER] Backup fehlgeschlagen!
    echo Fehlercode: %ERRORLEVEL%
    echo.
)

pause

