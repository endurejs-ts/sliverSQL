import { SilverOptions, SilverDatabaseInterface } from './interfaces/index_interface';

class Silversql {
    constructor(private options: SilverOptions) {}
    create(): SilverDatabaseInterface {
        return new SilverDatabase(this.options);
    }
}

class SilverDatabase implements SilverDatabaseInterface {
    constructor(options: SilverOptions) {}
}

export { Silversql as silversql };