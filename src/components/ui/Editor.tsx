"use client";

import dynamic from "next/dynamic";
import React, { useRef, MutableRefObject, useEffect } from "react";
import { TuiWithForwardedRefProps } from "./tui/Editor";
import { EditorProps, Editor as EditorType } from '@toast-ui/react-editor';
import { useTheme } from "next-themes";

const Editor = dynamic<TuiWithForwardedRefProps>(
  () => import('@/components/ui/tui/Editor'),
  {
    ssr: false
  }
)

const EditorWithForwardRef = React.forwardRef<
  EditorType | undefined,
  EditorProps
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as MutableRefObject<EditorType>} />
));
EditorWithForwardRef.displayName = 'EditorWithForwardRef';

interface MarkdownEditorProps {
  value?: string;
  onChange: (value: string) => void;
}

const MarkdownEditor = ({ value, onChange }: MarkdownEditorProps) => {
  const { theme } = useTheme()
  const editorRef = useRef<EditorType>();

  return (
    <div className="p-4 rounded-md shadow">
      <EditorWithForwardRef
        ref={editorRef}
        previewStyle="vertical"
        height="500px"
        initialEditType="markdown"
        useCommandShortcut={true}
        // Since the TUI Editor doesn't provide a method to reload the theme, if users change the theme while the editor is visible, they will need to reload the page.
        // The theme is stored in instance.options.theme, but modifying it does not update the current theme. The theme is only computed when the editor is mounted.
        // theme is set based on whether the user prefers dark mode or system dark mode settings.
        theme={theme === 'dark' || (theme === 'system' && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : ""}
        onChange={() => onChange(editorRef.current?.getInstance().getMarkdown())}
        initialValue={value}
      />
    </div>
  );
};

export default MarkdownEditor;

