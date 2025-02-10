export interface IField {
    name: string,
    type: 'text' | 'number' | 'date' | 'password' | 'textarea' | 'select' | 'multiselect',
    required: boolean
    maxCount?: number,
    minCount?: number 
    col?: number
    options?: any
}

export type ITypeFormUIBuilder = {
    formUIData: IField[]
}