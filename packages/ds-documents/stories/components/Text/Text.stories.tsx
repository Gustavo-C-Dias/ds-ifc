import type { Meta, StoryObj } from '@storybook/react'
import { Text } from "@ds-ifc/ds-components"

const meta: Meta<typeof Text> = {
    title: "Components/Text",
    component: Text,
    argTypes: {
        id: {
            description: 'Identificação única do elemento',
            control: 'text',
            type: {
                name: 'string',
                required: true,
            },
        },
        children: {
            description: 'Conteúdo do componente',
            control: 'text',
            type: {
                name: 'string',
                required: true,
            },
        },
        variant: {
            description: 'Estilo do componente',
            options: ["title", "subtitle", "body", "detail"],
            control: 'select',
        },
        weight: {
            description: 'Peso da fonte',
            options: ["regular", "semibold", "bold"],
            control: 'select',
        },
    },
    args: {
        id: 'text-base-id',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        variant: "body",
        weight: "regular",
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}