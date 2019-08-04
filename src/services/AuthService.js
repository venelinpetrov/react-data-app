class AuthService {
    constructor() {
        this._isAuthenticated = false;
    }

    get isAuthenticated() {
        return this._isAuthenticated;
    }

    authenticate(cb) {
        this._isAuthenticated = true;
        setTimeout(() => {
            cb();
        }, 200);
    }

    signOut(cb) {
        this._isAuthenticated = false;
        setTimeout(() => {
            cb && cb();
        }, 200);
    }
}

export default new AuthService();