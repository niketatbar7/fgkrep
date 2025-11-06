const vscode = require('vscode');

function activate(context) {
  console.log('VSCode Sample Extension 2 is now active!');

  let disposable = vscode.commands.registerCommand('sampleExtension2.greetUser', async function () {
    const name = await vscode.window.showInputBox({ prompt: 'Enter your name:' });
    if (name) {
      vscode.window.showInformationMessage(`Hello, ${name}! Welcome from Sample Extension 2.`);
    } else {
      vscode.window.showWarningMessage('No name entered. Hello from Extension 2 anyway!');
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
