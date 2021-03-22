export type IFormValidationRules = 'required' | 'email' | 'min'

export type IFormFieldsInLocales<T> = Record<keyof T, {
    label: string;
    id: string;
    errors?: Partial<Record<IFormValidationRules, string>>;
}>;

export interface IFormInLocales<T> {
    submit: string;
    fields: IFormFieldsInLocales<T>
}
