import React, { MutableRefObject } from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import Prism from 'prismjs';
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor/dist/i18n/fr-fr';

export interface TuiWithForwardedRefProps extends EditorProps {
    forwardedRef?: MutableRefObject<Editor>;
}

const TuiWithForwardedRef: React.FC<TuiWithForwardedRefProps> = (props) => (
    <Editor
        {...props}
        ref={props.forwardedRef}
        usageStatistics={false}
        plugins={[
            [codeSyntaxHighlight, { highlighter: Prism }],
        ]}
        language="fr-FR"
    />
);

export default TuiWithForwardedRef;