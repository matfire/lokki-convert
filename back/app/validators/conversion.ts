import vine from '@vinejs/vine'

export const createConversionValidator = vine.compile(
  vine.object({
    to: vine.string(),
    from: vine.string(),
    value: vine.number().min(0),
  })
)
