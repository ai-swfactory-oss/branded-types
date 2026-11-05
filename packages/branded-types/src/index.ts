declare const brand: unique symbol

export type Branded<Base, Name extends string> = Base & { readonly [brand]: Name }

export const isNonEmptyString = (value: unknown): value is string => typeof value === 'string' && value.length > 0
