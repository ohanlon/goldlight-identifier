// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { randomUUID } from 'crypto';
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('goldlight-identifier.createIdentifier', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			editor.edit((textEditorEdit) => {
				editor.selections.forEach((selection) => {
					textEditorEdit.replace(selection, getUuid());
				});
			});
		}
	});

	function getUuid(): string {
		return randomUUID();
	}

	context.subscriptions.push(disposable);
}
