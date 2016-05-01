'use strict';

import * as vscode from 'vscode';

const formatDocument = function () {
    return new Promise((resolve, reject) => {
        vscode.commands.executeCommand('editor.action.format').then(() => {
            resolve();
        }, reject);
    });
};

const saveDocument = () => {
    return new Promise((resolve, reject) => {
        vscode.commands.executeCommand('workbench.action.files.save').then(resolve, reject);
    });
};

const formatAndSave = (params) => {
    formatDocument().then(saveDocument);
};

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('editor.action.formatAndSave', formatAndSave);

    context.subscriptions.push(disposable);
}

export function deactivate() {
}