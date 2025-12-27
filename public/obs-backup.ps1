# ====================================================================
# OBS Studio Backup Script (PowerShell)
# Erstellt ein komprimiertes Backup deiner GESAMTEN OBS-Installation
# (Einstellungen, Szenen, Plugins, etc.)
# ====================================================================
#
# WICHTIG: PASSE DIESEN PFAD AN!
# ====================================================================
# 
# So findest du deinen OBS-Pfad:
# 1. Steam-Version: 
#    - Rechtsklick auf OBS in Steam -> Verwalten -> Lokale Dateien durchsuchen
#    - Kopiere den Pfad aus der Adressleiste
# 
# 2. Manuelle Installation:
#    - Standard: C:\Program Files\obs-studio
#    - Falls du einen anderen Pfad gewählt hast, nutze diesen
#
# 3. Andere Festplatte?
#    - Beispiel: D:\Steam\steamapps\common\OBS Studio
#    - Beispiel: E:\Programme\obs-studio
#
# ANPASSEN: Trage DEINEN OBS-Pfad hier ein (zwischen den Anführungszeichen):
# ====================================================================

$ObsPath = "C:\Program Files (x86)\Steam\steamapps\common\OBS Studio"

# Alternative Pfade (auskommentiert - entferne # um zu aktivieren):
# $ObsPath = "C:\Program Files\obs-studio"
# $ObsPath = "D:\Steam\steamapps\common\OBS Studio"
# $ObsPath = "E:\OBS Studio"

# ====================================================================
# Backup Zielordner (wo die Backups gespeichert werden)
# ====================================================================
$BackupDir = "$env:USERPROFILE\Documents\OBS-Backups"

# ====================================================================
# AB HIER NICHTS MEHR ÄNDERN!
# ====================================================================

Write-Host ""
Write-Host "========================================"
Write-Host "  OBS Studio Backup Script (PowerShell)"
Write-Host "========================================"
Write-Host ""

# Aktuelles Datum im Format YYYY-MM-DD
$BackupDate = Get-Date -Format "yyyy-MM-dd"

# Pruefe ob OBS-Pfad existiert
if (!(Test-Path $ObsPath)) {
    Write-Host "[FEHLER] OBS-Pfad nicht gefunden: $ObsPath" -ForegroundColor Red
    Write-Host ""
    Write-Host "Bitte passe den ObsPath am Anfang dieser Datei an!" -ForegroundColor Yellow
    Write-Host "Rechtsklick auf diese Datei -> Bearbeiten mit -> Editor/Notepad++"
    Write-Host ""
    Write-Host "Haeufige Pfade:" -ForegroundColor Yellow
    Write-Host "  - C:\Program Files\obs-studio"
    Write-Host "  - C:\Program Files (x86)\Steam\steamapps\common\OBS Studio"
    Write-Host "  - D:\Steam\steamapps\common\OBS Studio"
    Write-Host ""
    Read-Host "Druecke Enter zum Beenden"
    exit 1
}

Write-Host "[INFO] OBS gefunden: $ObsPath" -ForegroundColor Green
Write-Host "[INFO] Der gesamte OBS-Ordner wird gebackupt" -ForegroundColor Green

# Erstelle Backup-Verzeichnis falls nicht vorhanden
if (!(Test-Path $BackupDir)) {
    New-Item -ItemType Directory -Path $BackupDir | Out-Null
    Write-Host "[INFO] Backup-Verzeichnis erstellt: $BackupDir" -ForegroundColor Green
}

# Backup-Dateiname
$BackupFile = "$BackupDir\OBS-Backup_$BackupDate.zip"

Write-Host ""
Write-Host "[INFO] Starte Backup..."
Write-Host "[INFO] Quelle: $ObsPath"
Write-Host "[INFO] Ziel: $BackupFile"
Write-Host ""
Write-Host "[INFO] Dies kann einige Minuten dauern, bitte warten..." -ForegroundColor Yellow
Write-Host ""

try {
    # Erstelle ZIP-Backup des gesamten OBS-Ordners (PowerShell 5.0+)
    Compress-Archive -Path "$ObsPath\*" -DestinationPath $BackupFile -CompressionLevel Optimal -Force
    
    Write-Host ""
    Write-Host "========================================"
    Write-Host "  BACKUP ERFOLGREICH!"
    Write-Host "========================================"
    Write-Host ""
    Write-Host "Backup gespeichert unter:"
    Write-Host $BackupFile -ForegroundColor Cyan
    Write-Host ""
    
    # Zeige Dateigröße
    $FileInfo = Get-Item $BackupFile
    $SizeMB = [math]::Round($FileInfo.Length / 1MB, 2)
    Write-Host "Groesse: $SizeMB MB" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host ""
    Write-Host "[FEHLER] Backup fehlgeschlagen!" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
}

Read-Host "Druecke Enter zum Beenden"

