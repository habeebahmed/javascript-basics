import winston, { transports, format } from 'winston';

import { DateTime } from 'luxon';

const logFormat = format.printf(({ level, message }) => {
  const timeStamp = DateTime.now().toUTC();

  return `time: ${timeStamp} level: ${level} message: ${message}`;
});

export const loggerInstance = () => {
  const logger = winston.createLogger({
    level: 'info',
    format: format.json(),
    defaultMeta: { service: 'week-6-service' },
    transports: [
      new transports.Console({
        format: format.combine(format.colorize(), logFormat),
      }),
    ],
  });
  winston.addColors({
    error: 'red',
    warn: 'yellow',
    info: 'cyan',
    debug: 'green'
  });

  return logger;
};
