@echo off
call npm install
call npm run dist
echo.
echo DONE - your EXE is in the "dist" folder.
pause
