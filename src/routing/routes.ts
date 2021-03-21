export default class Routes {
    static home = class {
        static root = () => '/'
    }

    static login = class {
        static root = () => '/login'
    }

    static restApi = class {
        static root = () => '/rest-api'
    }
}
