SUBTITLE AUDIO 3.0 - WINDOWS EXE BUILD

The project is configured to build a portable Windows .exe using GitHub Actions.
The build runs on a Windows machine hosted by GitHub, so you do not need to install
Node.js or test/build the project on your own PC.

BUILD STEPS
1. Sign in to GitHub and create a new empty repository.
2. Upload the CONTENTS of this folder to the repository (keep the .github folder).
3. Open the repository's Actions tab.
4. Select "Build Subtitle Audio for Windows" on the left.
5. Click "Run workflow" and confirm with the green button.
6. Wait for the workflow to finish. Open the completed run.
7. Under Artifacts, download "Subtitle-Audio-Windows-EXE".
8. Extract the downloaded ZIP. It contains the portable .exe.

The EXE is built by electron-builder using the project's existing package.json.
The app's JavaScript syntax and package.json were checked before delivery, but a
full Electron packaging/runtime test could not be run in this environment because
it cannot reach the npm package registry. GitHub Actions performs the actual
Windows build and will report any build failure in the Actions log.

LOCAL BUILD (optional, not required)
- Install Node.js 20 or newer.
- Double-click build.bat.
- The EXE will be created in the dist folder.
