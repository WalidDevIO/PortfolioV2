export interface CredenzaRootProps {
    open?: boolean
}

export interface CredenzaRootEmits {
    'update:open'?: (value: boolean) => void
}

export interface CredenzaProps {
    class?: string,
    asChild?: boolean
}