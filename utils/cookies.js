import Cookies from 'universal-cookie';

export const cookies = new Cookies();

export function setInitialCookies() {
    cookies.set('masterCookie', false, { path: '/' });
    cookies.set('theme', 'light', { path: '/' });
    cookies.set('markRead', true, { path: '/' });
    cookies.set('sharing', [false, false, true, true, true], { path: '/' });
}

// Master Cookie
export function saveMasterCookie(masterCookie) {

    cookies.set('masterCookie', masterCookie, { path: '/' });
    console.log("Saved Master cookie: " + cookies.get('masterCookie'))
}

export function readMasterCookie() {
    console.log("Current Master cookie: " + cookies.get('masterCookie'));
    return cookies.get('masterCookie');
}

// Theme Cookie
export function saveThemeCookie(theme) {
    cookies.set('theme', theme, { path: '/' });
    console.log("Saved Theme cookie: " + cookies.get('theme'));
}

export function readThemeCookie() {
    console.log("Current Theme cookie: " + cookies.get('theme'));
    return cookies.get('theme')
}

// Mark as Read Cookie
export function saveMarkReadCookie(markRead) {
    cookies.set('markRead', markRead, { path: '/' });
    console.log("Saved Mark Read cookie: " + cookies.get('markRead'));
}

export function readMarkReadCookie() {
    console.log("Current Mark Read cookie: " + cookies.get('markRead'));
    return cookies.get('markRead');
}

// Sharing Cookie
export function saveSharingCookie(sharing) {
    cookies.set('sharing', sharing, { path: '/' });
}

export function readSharingCookie() {
    return cookies.get('sharing');
}

// Set theme to body
export function setTheme() {
    document.body.classList.remove('theme--light', 'theme--dark');
    readThemeCookie() === undefined ?
        document.body.classList.add('theme--light') : document.body.classList.add('theme--' + readThemeCookie());
}

export default cookies;
