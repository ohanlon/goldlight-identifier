import { randomUUID } from 'crypto';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('goldlight-identifier.createIdentifier', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			editor.edit((textEditorEdit) => {
				editor.selections.forEach((selection) => {
					textEditorEdit.replace(selection, randomUUID());
				});
			});
		}
	});

	context.subscriptions.push(disposable);
}
