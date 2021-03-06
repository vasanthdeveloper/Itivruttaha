import itivrutaha from '../dist/itivrutaha.js'

const logger = await itivrutaha.createNewLogger()

logger.error('some error')
logger.info('nice info')
logger.note('a useful note')
logger.okay(`it's okay`)
logger.success('that is a success')
logger.verbose('useful for developers')
logger.warning('something is going wrong')
