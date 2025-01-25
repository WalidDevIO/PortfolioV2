"use client";

import dynamic from "next/dynamic";
import React, { useRef, MutableRefObject } from "react";
import { TuiWithForwardedRefProps } from "./tui/Editor";
import { EditorProps, Editor as EditorType } from '@toast-ui/react-editor';

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
  const editorRef = useRef<EditorType>();

  return (
    <div className="p-4 rounded-md shadow">
      <EditorWithForwardRef
        ref={editorRef}
        previewStyle="vertical"
        height="500px"
        initialEditType="markdown"
        useCommandShortcut={true}
        theme="dark"
        onChange={() => onChange(editorRef.current?.getInstance().getMarkdown())}
        initialValue={value}
        viewer={true}
      />
    </div>
  );
};

export default MarkdownEditor;

