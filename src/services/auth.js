import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/time.js';
import { Session } from '../models/session.js';
import crypto from 'crypto';

export const createSession = (userId) => {
  const accessToken = crypto.randomBytes(30).toString('base64');
  const refreshToken = crypto.randomBytes(30).toString('base64');

  return Session.create({
    userId,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};

export const setSessionCookies = (res, session) => {
  const isProd = process.env.NODE_ENV === 'production';

  const cookieOptions = {
    httpOnly: true, // Защита от XSS (JS не может прочитать куку)
    secure: isProd, // В продакшене (HTTPS) обязательно true
    // Если фронт и бек на разных доменах в проде, используем 'none'
    // Если на одном (или в разработке на localhost), 'lax' — самый стабильный выбор
    sameSite: isProd ? 'none' : 'lax',
    path: '/', // Чтобы куки были доступны для всех путей сайта
  };

  // Устанавливаем Access Token
  res.cookie('accessToken', session.accessToken, {
    ...cookieOptions,
    maxAge: FIFTEEN_MINUTES,
  });

  // Устанавливаем Refresh Token
  res.cookie('refreshToken', session.refreshToken, {
    ...cookieOptions,
    maxAge: ONE_DAY,
  });

  // Устанавливаем ID сессии
  res.cookie('sessionId', session._id, {
    ...cookieOptions,
    maxAge: ONE_DAY,
  });
};
