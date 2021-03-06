// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { executeCommandNoArgs, executeDefinitionCommand } from './command/commandExecute';
import { MyHover } from './command/commandURI';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('wow！666！');
	});

	let anotherHelloDisposable = vscode.commands.registerCommand('helloworld.anotherHello', () => {
		vscode.window.showWarningMessage('this is my warning!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(anotherHelloDisposable);

	// 无参命令
	context.subscriptions.push(executeCommandNoArgs);

	// 有参命令
	context.subscriptions.push(executeDefinitionCommand);

	vscode.languages.registerHoverProvider('python', new MyHover());

}

// this method is called when your extension is deactivated
export function deactivate() { }
