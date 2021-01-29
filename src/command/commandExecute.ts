
import * as vscode from 'vscode';


let executeCommandNoArgs = vscode.commands.registerCommand('helloworld.executeCommandNoArgs', () => {
    vscode.commands.executeCommand('editor.action.addCommentLine');
});

let executeDefinitionCommand = vscode.commands.registerCommand('helloworld.executeDefinitionCommand', () => {
    async function printDefinitionsForActiveEditor() {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) {
            return;
        }

        const definitions = await vscode.commands.executeCommand<vscode.Location[]>(
            'vscode.executeDefinitionProvider',
            activeEditor.document.uri,
            activeEditor.selection.active
        );

        if (definitions !== undefined) {
            for (const definition of definitions) {
                console.log(`定义的位置在${definition.uri.path}文件的第${definition.range.start.line}行第${definition.range.start.character}个字符到`
                + `第${definition.range.end.line}行第${definition.range.end.character}个字符`);
            }
        }

    }
    printDefinitionsForActiveEditor();
});

export { executeCommandNoArgs, executeDefinitionCommand };
