import type { HttpContext } from '@adonisjs/core/http'
import ConversionService from '#services/conversion_service'
import { createConversionValidator } from '#validators/conversion'
import { inject } from '@adonisjs/core'
import { errors } from '@vinejs/vine'

@inject()
export default class ConversionsController {
  constructor(protected conversionService: ConversionService) {}
  async convert({ request, response }: HttpContext) {
    const data = request.all()
    try {
      const payload = await createConversionValidator.validate(data)
      const conversion = await this.conversionService.convert(
        payload.from,
        payload.to,
        payload.value
      )
      return response.json({
        value: conversion,
      })
    } catch (error) {
      if (error instanceof errors.E_VALIDATION_ERROR) {
        console.log(error.messages)
        return response.status(500).json({
          messages: error.messages,
        })
      }
    }
  }
}
