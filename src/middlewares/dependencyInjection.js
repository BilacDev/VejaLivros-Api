import { bookRepositoryFactory } from "../data/repositories/factory";

export default (req, res, next) => {
    const repositories = {};
    bookRepositoryFactory();

    Object.defineProperties(repositories, {
        book: {
            get: () => bookRepositoryFactory(),
        },
    });

    req.$repositories = repositories;
    next();
};
