#!/bin/bash

# ====================================================================
# OBS Studio Backup Script (Linux/Mac)
# Erstellt ein komprimiertes Backup deiner GESAMTEN OBS-Installation
# (Einstellungen, Szenen, Plugins, etc.)
# ====================================================================
#
# WICHTIG: PASSE DIESEN PFAD AN!
# ====================================================================
# 
# So findest du deinen OBS-Pfad:
# 
# Linux Standard-Pfade:
#   - Flatpak: ~/.var/app/com.obsproject.Studio
#   - Native:  ~/.config/obs-studio
#   - Custom:  ~/OBS-Studio (falls selbst installiert)
#
# macOS Standard-Pfade:
#   - ~/Library/Application Support/obs-studio
#
# So bearbeitest du diese Datei:
#   nano obs-backup.sh    (oder vim/gedit)
#
# ANPASSEN: Trage DEINEN OBS-Pfad hier ein:
# ====================================================================

OBS_PATH="$HOME/.config/obs-studio"

# Alternative Pfade (auskommentiert - entferne # um zu aktivieren):
# OBS_PATH="$HOME/.var/app/com.obsproject.Studio"
# OBS_PATH="$HOME/Library/Application Support/obs-studio"  # macOS
# OBS_PATH="$HOME/OBS-Studio"

# ====================================================================
# Backup Zielordner (wo die Backups gespeichert werden)
# ====================================================================
BACKUP_DIR="$HOME/Documents/OBS-Backups"

# ====================================================================
# AB HIER NICHTS MEHR ÄNDERN!
# ====================================================================

echo ""
echo "========================================"
echo "  OBS Studio Backup Script"
echo "========================================"
echo ""

# Aktuelles Datum im Format YYYY-MM-DD
BACKUP_DATE=$(date +%Y-%m-%d)

# Pruefe ob OBS-Pfad existiert
if [ ! -d "$OBS_PATH" ]; then
    echo "[FEHLER] OBS-Pfad nicht gefunden: $OBS_PATH"
    echo ""
    echo "Bitte passe den OBS_PATH am Anfang dieser Datei an!"
    echo "Bearbeiten mit: nano obs-backup.sh"
    echo ""
    read -p "Druecke Enter zum Beenden"
    exit 1
fi

echo "[INFO] OBS gefunden: $OBS_PATH"

# Erstelle Backup-Verzeichnis falls nicht vorhanden
if [ ! -d "$BACKUP_DIR" ]; then
    mkdir -p "$BACKUP_DIR"
    echo "[INFO] Backup-Verzeichnis erstellt: $BACKUP_DIR"
fi

# Backup-Dateiname
BACKUP_FILE="$BACKUP_DIR/OBS-Backup_$BACKUP_DATE.tar.gz"

echo ""
echo "[INFO] Starte Backup..."
echo "[INFO] Quelle: $OBS_PATH"
echo "[INFO] Ziel: $BACKUP_FILE"
echo ""
echo "[INFO] Dies kann einige Minuten dauern, bitte warten..."
echo ""

# Erstelle komprimiertes Backup des gesamten OBS-Ordners
tar -czf "$BACKUP_FILE" -C "$(dirname "$OBS_PATH")" "$(basename "$OBS_PATH")"

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "  BACKUP ERFOLGREICH!"
    echo "========================================"
    echo ""
    echo "Backup gespeichert unter:"
    echo "$BACKUP_FILE"
    echo ""
    
    # Zeige Dateigröße
    SIZE=$(du -h "$BACKUP_FILE" | cut -f1)
    echo "Groesse: $SIZE"
    echo ""
else
    echo ""
    echo "[FEHLER] Backup fehlgeschlagen!"
    echo "Fehlercode: $?"
    echo ""
fi

read -p "Druecke Enter zum Beenden"

