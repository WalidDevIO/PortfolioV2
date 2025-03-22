<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import { all, createLowlight } from 'lowlight'
import suggestion from './suggestion'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import CodeLowLight from '@tiptap/extension-code-block-lowlight'
import CodeInlineLowLight from '@nartix/tiptap-inline-code-highlight'
import Emoji from '@tiptap-pro/extension-emoji'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import MenuBar from './MenuBar.vue'

const lowlight = createLowlight(all)

const props = defineProps({
    modelValue: String,
})
const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
    content: props.modelValue,
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML())
    },
    extensions: [
        StarterKit.configure({
            heading: {
                levels: [1, 2, 3],
            },
            codeBlock: false,
        }),
        CodeLowLight.configure({
            lowlight,
        }),
        CodeInlineLowLight.configure({
            lowlight,
        }),
        Table.configure({
            resizable: true
        }),
        TaskItem.configure({
            nested: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        Underline,
        Emoji.configure({
            suggestion
        }),
        TaskList,
    ],
    editorProps: {
        attributes: {
            class:
                'border border-gray-400 p-4 min-h-80 max-h-100 overflow-y-auto outline-none prose max-w-none',
        },
    },
})
</script>

<template>
    <div>
        <MenuBar :editor="editor"/>
        <EditorContent :editor="editor" />
    </div>
</template>

<style lang="scss">
pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em
}

code.hljs {
    padding: 3px 5px
}

/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/
.hljs {
    color: #c9d1d9;
    background: #0d1117
}

.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_ {
    color: #ff7b72
}

.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_ {
    color: #d2a8ff
}

.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id,
.hljs-variable {
    color: #79c0ff
}

.hljs-meta .hljs-string,
.hljs-regexp,
.hljs-string {
    color: #a5d6ff
}

.hljs-built_in,
.hljs-symbol {
    color: #ffa657
}

.hljs-code,
.hljs-comment,
.hljs-formula {
    color: #8b949e
}

.hljs-name,
.hljs-quote,
.hljs-selector-pseudo,
.hljs-selector-tag {
    color: #7ee787
}

.hljs-subst {
    color: #c9d1d9
}

.hljs-section {
    color: #1f6feb;
    font-weight: 700
}

.hljs-bullet {
    color: #f2cc60
}

.hljs-emphasis {
    color: #c9d1d9;
    font-style: italic
}

.hljs-strong {
    color: #c9d1d9;
    font-weight: 700
}

.hljs-addition {
    color: #aff5b4;
    background-color: #033a16
}

.hljs-deletion {
    color: #ffdcd7;
    background-color: #67060c
}
</style>