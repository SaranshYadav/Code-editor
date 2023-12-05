import { basicSetup, EditorState, EditorView } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import { syntaxTree } from '@codemirror/language';
import { linter, Diagnostic } from '@codemirror/lint';

// const regexpLinter = linter((view: EditorView): Diagnostic[] => {
//     let diagnostics: Diagnostic[] = [];
//     syntaxTree(view.state).cursor().iterate(node => {
//         // Your linting logic here
//         // For example, checking for the use of RegExp and adding diagnostics if necessary
//         if (node.type.name === 'RegExp') {
//             diagnostics.push({
//                 from: node.from,
//                 to: node.to,
//                 severity: 'warning',
//                 message: 'Regular expressions are FORBIDDEN',
//                 actions: [{
//                     name: 'Remove',
//                     apply(view, from, to) { view.dispatch({ changes: { from, to } }) }
//                 }]
//             });
//         }
//     });
//     return diagnostics;
// });

const initialState = EditorState.create({
    doc: '',
    extensions: [basicSetup],
});

const view = new EditorView({
    parent: document.getElementById('editor')!,
    state: initialState,
});

// Assign the linter to the view
// view.setExtensions([regexpLinter]);

// For debugging purposes
(window as any).view = view;
