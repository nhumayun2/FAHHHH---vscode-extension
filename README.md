# FAHHHH - The VS Code Error Sound Alert 📢

Because the tiny red squiggly line under your broken code just isn't punishing enough. 

**FAHHHH** is a highly necessary, incredibly professional VS Code extension that loudly plays a "Faaaaaaaaaah" sound every single time you write a bug. Whether you forgot a semicolon, misspelled a variable, or completely destroyed your logic, this extension is here to verbally judge you in real-time. 

Built for developers who need more chaos in their workflow.

---

## 🚀 Quick Install (For Friends & Victims)

Since this masterpiece isn't on the official VS Code Marketplace just yet, you can install it manually in about 10 seconds.

**[⬇️ CLICK HERE TO DOWNLOAD THE EXTENSION](https://github.com/nhumayun2/FAHHHH---vscode-extension/releases/download/v0.0.1/fahhhh-0.0.1.vsix)**

### How to install it in VS Code:
1. Download the `.vsix` file from the link above.
2. Open **VS Code**.
3. Open the **Extensions** panel on the left sidebar (or press `Ctrl+Shift+X`).
4. Click the `...` (three dots) icon at the top right of the Extensions panel.
5. Select **Install from VSIX...**
6. Find and select the `fahhhh-0.0.1.vsix` file you just downloaded.

*Boom. You are now ready to be yelled at by your code.*

---

## ✨ Features

* **Instant Emotional Damage:** Hooks directly into VS Code's native error diagnostics. The moment an `Error` severity is detected, you hear about it.
* **Anti-Spam Cooldown:** Features a built-in 5-second audio cooldown. This ensures your computer speakers don't explode if you paste a massive block of broken code all at once.
* **Native Windows Support:** Uses the lightweight `sound-play` package so the audio triggers flawlessly in the background.

## 🛠️ Build It Yourself

Want to fork this and make it play a different weird sound? 

1. Clone this repository to your machine.
2. Open the folder in VS Code.
3. Run `npm install` in the terminal to grab the dependencies.
4. Drop your custom `.mp3` file into the `audio/` folder and name it exactly `error.mp3`.
5. Press `F5` to test it in the Extension Development Host.
6. Run `npm install -g @vscode/vsce` and then `vsce package` to build your own `.vsix` file!

> **Disclaimer:** Please use headphones if you are working in a quiet office, a library, or around people who are easily startled. Or don't. Assert dominance over the other developers.
