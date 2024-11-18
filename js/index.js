import lodash from 'lodash';

export function getRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return lodash.times(length, () => lodash.sample(chars)).join('');
}