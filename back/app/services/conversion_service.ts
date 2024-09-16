// @ts-ignore
// no types available
import CurrencyAPI from '@everapi/currencyapi-js'
import env from '#start/env'
import { createStorage, Storage } from 'unstorage'

export default class ConversionService {
  private cache: Storage
  private client
  constructor() {
    this.cache = createStorage()
    this.client = new CurrencyAPI(env.get('CURRENCY_API_KEY'))
  }

  public async convert(from: string, to: string, value: number) {
    let data
    if (!(await this.cache.hasItem(from))) {
      data = (await this.client.latest({ base_currency: from })).data
      await this.cache.setItem(from, data)
    } else {
      data = await this.cache.getItem(from)
    }
    return value * data[to]['value']
  }
}
