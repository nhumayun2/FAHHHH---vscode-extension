import * as vscode from "vscode";
import * as path from "path";

const sound = require("sound-play");

export function activate(context: vscode.ExtensionContext) {
  console.log("Error Sound Alert extension is now active!");

  let isPlaying = false;

  const diagnosticChangeListener = vscode.languages.onDidChangeDiagnostics(
    (event) => {
      const activeEditor = vscode.window.activeTextEditor;
      if (!activeEditor) {
        return;
      }

      const uri = activeEditor.document.uri;

      if (
        event.uris.some(
          (changedUri) => changedUri.toString() === uri.toString(),
        )
      ) {
        const diagnostics = vscode.languages.getDiagnostics(uri);
        const hasError = diagnostics.some(
          (diag) => diag.severity === vscode.DiagnosticSeverity.Error,
        );

        if (hasError && !isPlaying) {
          isPlaying = true;

          const audioPath = path.join(
            context.extensionPath,
            "audio",
            "error.mp3",
          );
          sound.play(audioPath).catch((err: any) => {
            console.error("Audio error:", err);
          });

          setTimeout(() => {
            isPlaying = false;
          }, 2000);
        }
      }
    },
  );

  context.subscriptions.push(diagnosticChangeListener);
}

export function deactivate() {}
