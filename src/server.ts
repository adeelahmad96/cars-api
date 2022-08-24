import { logger } from './helpers/logger';
import app from './index';
const port = process.env.PORT

logger.info(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
    logger.info(`Example app listening at port http://localhost:${port}`)
}) 
