<template>
    <Credenza>
        <CredenzaTrigger asChild>
            <Button>Open modal</Button>
        </CredenzaTrigger>
        <CredenzaContent>
            <CredenzaHeader>
                <CredenzaTitle>Credenza</CredenzaTitle>
                <CredenzaDescription>
                    A responsive modal component for shadcn/ui.
                </CredenzaDescription>
            </CredenzaHeader>
            <CredenzaBody>
                This component is built using shadcn/ui&apos;s dialog and drawer
                component, which is built on top of Vaul.
            </CredenzaBody>
            <CredenzaFooter>
                <CredenzaClose asChild>
                    <Button>Close</Button>
                </CredenzaClose>
            </CredenzaFooter>
        </CredenzaContent>
    </Credenza>
</template>

<script setup lang="ts">
import { Credenza, CredenzaTrigger, CredenzaContent, CredenzaHeader, CredenzaTitle, CredenzaDescription, CredenzaBody, CredenzaFooter, CredenzaClose } from '@/components/ui/credenza';
</script>