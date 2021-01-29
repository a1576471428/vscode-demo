import * as vscode from 'vscode';

/**
 * 为了生成hover内容，需要自己定义一个HoverProvider
 */
class MyHover implements vscode.HoverProvider {
    provideHover(
        document: vscode.TextDocument,
        _position: vscode.Position,
        _token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {

        // 将editor.action.addCommentLine解析成URI
        // 所有命令要解析成URI都必须使用command scheme
        const commentCommandUri = vscode.Uri.parse(`command:editor.action.addCommentLine`);

        // 要生成的hover内容，这里使用了markdown文档格式
        const contents = new vscode.MarkdownString(`[Add comment](${commentCommandUri})`);

        // 在markdown中执行command URI,必须设置此项
        contents.isTrusted = true;

        return new vscode.Hover(contents);
    }
}

export { MyHover };