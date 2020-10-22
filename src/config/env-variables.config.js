import dotenv from 'dotenv';
import path from 'path';
import { logError, logDebug } from '../helpers/logger';

if (process.env.NODE_ENV !== 'production') {
    const result = dotenv.config({
        path: path.join(__dirname, '../..', '.env'),
        silent: true
    });

    if (result.error) {
        logError(`ERROR: Load environment variables ${result.error}`)
    } else {
        logDebug(`ENVs: ${ JSON.stringify(result.parsed)}`);
    }
}
