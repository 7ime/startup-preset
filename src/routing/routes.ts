export default class Routes {
    static home = class {
        static root = () => '/'
    }

    static login = class {
        static root = () => '/login'
    }

    static loginByPhone = class {
        static root = () => '/login-by-phone'
    }

    static restApi = class {
        static root = () => '/rest-api'
    }
}
