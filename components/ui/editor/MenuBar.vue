<template>
    <section v-if="editor"
        class="buttons text-gray-700 flex items-center flex-wrap gap-x-4 border-t border-l border-r border-gray-400 p-4">
        <button type="button" @click="editor.chain().focus().toggleBold().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('bold') }" class="p-1">
            <BoldIcon title="Bold" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleItalic().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('italic') }" class="p-1">
            <ItalicIcon title="Italic" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleUnderline().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('underline') }" class="p-1">
            <UnderlineIcon title="Underline" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleStrike().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('strike') }" class="p-1">
            <Strikethrough title="Strike" />
        </button>
        <div class="inline-block w-0.5 self-stretch bg-black/50 dark:bg-white/10"></div>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{
            'bg-gray-200 rounded': editor.isActive('heading', { level: 1 }),
        }" class="p-1">
            <Heading1 title="H1" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{
            'bg-gray-200 rounded': editor.isActive('heading', { level: 2 }),
        }" class="p-1">
            <Heading2 title="H2" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{
            'bg-gray-200 rounded': editor.isActive('heading', { level: 3 }),
        }" class="p-1">
            <Heading3 title="H3" />
        </button>
        <div class="inline-block w-0.5 self-stretch bg-black/50 dark:bg-white/10"></div>
        <button type="button" @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('bulletList') }" class="p-1">
            <List title="Bullet List" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('orderedList') }" class="p-1">
            <ListOrdered title="Ordered List" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('blockquote') }" class="p-1">
            <Quote title="Blockquote" />
        </button>
        <div class="inline-block w-0.5 self-stretch bg-black/50 dark:bg-white/10"></div>
        <button type="button" @click="editor.chain().focus().toggleCode().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('code') }" class="p-1">
            <CodeIcon title="Code" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleCodeBlock().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('codeBlock') }" class="p-1">
            <SquareCode title="Code block" />
        </button>
        <div class="inline-block w-0.5 self-stretch bg-black/50 dark:bg-white/10"></div>
        <button type="button" @click="editor.chain().focus().setHorizontalRule().run()" class="p-1">
            <SeparatorHorizontal title="Horizontal Rule" />
        </button>
        <button type="button"
            @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()" class="p-1">
            <Table title="Table" />
        </button>
        <button @click="editor.chain().focus().toggleTaskList().run()" type="button" :class="{ 'bg-gray-200 rounded': editor.isActive('codeBlock') }" class="p-1">
            <SquareCheck />
        </button>
        <div class="inline-block w-0.5 self-stretch bg-black/50 dark:bg-white/10"></div>
        <button type="button" class="p-1 disabled:text-gray-400" @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().chain().focus().undo().run()">
            <Undo title="Undo" />
        </button>
        <button type="button" @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().chain().focus().redo().run()" class="p-1 disabled:text-gray-400">
            <Redo title="Redo" />
        </button>
    </section>
</template>

<script setup>
import {
    Bold as BoldIcon,
    Italic as ItalicIcon,
    Underline as UnderlineIcon,
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    Quote,
    Code as CodeIcon,
    SeparatorHorizontal,
    Undo,
    Redo,
    Strikethrough,
    SquareCode,
    Table,
    SquareCheck
} from 'lucide-vue-next'
import { Editor } from '@tiptap/vue-3';

const props = defineProps({
    editor: Editor
})
</script>