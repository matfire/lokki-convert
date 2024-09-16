/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const CurrenciesController = () => import('#controllers/currencies_controller')
const ConversionsController = () => import('#controllers/conversions_controller')

router.get('/currencies', [CurrenciesController, 'index'])
router.post('/convert', [ConversionsController, 'convert'])
