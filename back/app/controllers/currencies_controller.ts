import type { HttpContext } from '@adonisjs/core/http'
import Currency from '#models/currency'

export default class CurrenciesController {
  async index({ response }: HttpContext) {
    const currencies = await Currency.all()
    return response.json({
      currencies,
    })
  }
}
