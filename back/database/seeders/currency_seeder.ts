import { BaseSeeder } from '@adonisjs/lucid/seeders'
import data from '../fixture_data/currencies.json' assert { type: 'json' }
import Currency from '#models/currency'

interface DataType {
  [key: string]: {
    name: string
    name_plural: string
    code: string
    symbol: string
  }
}

export default class extends BaseSeeder {
  async run() {
    const typedData: DataType = data
    for (const key of Object.keys(typedData)) {
      const el = typedData[key]
      await Currency.create({
        code: el.code,
        symbol: el.symbol,
        name: el.name,
        name_plural: el.name_plural,
      })
    }
  }
}
