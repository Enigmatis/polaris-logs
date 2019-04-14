## [2.5.1](https://github.com/Enigmatis/polaris-logs/compare/v2.5.0...v2.5.1) (2019-04-14)


### Bug Fixes

* fix timezone to match israel ([155faa5](https://github.com/Enigmatis/polaris-logs/commit/155faa5))

# [2.5.0](https://github.com/Enigmatis/polaris-logs/compare/v2.4.0...v2.5.0) (2019-03-07)


### Bug Fixes

* fixed redundant line separator when using short format ([7ee332c](https://github.com/Enigmatis/polaris-logs/commit/7ee332c))


### Features

* added support for multiple logstash services ([a79fd3f](https://github.com/Enigmatis/polaris-logs/commit/a79fd3f))

# [2.4.0](https://github.com/Enigmatis/polaris-logs/compare/v2.3.0...v2.4.0) (2019-03-07)


### Features

* added support for custom transports ([8766b03](https://github.com/Enigmatis/polaris-logs/commit/8766b03))
* moved rimraf to devDependencies ([ac5bc44](https://github.com/Enigmatis/polaris-logs/commit/ac5bc44))

# [2.3.0](https://github.com/Enigmatis/polaris-logs/compare/v2.2.3...v2.3.0) (2019-03-05)


### Features

* added support for multiple logstash services ([b21fbb5](https://github.com/Enigmatis/polaris-logs/commit/b21fbb5))

## [2.2.3](https://github.com/Enigmatis/polaris-logs/compare/v2.2.2...v2.2.3) (2019-02-24)


### Bug Fixes

* readme fixes ([7ee9e05](https://github.com/Enigmatis/polaris-logs/commit/7ee9e05))

## [2.2.2](https://github.com/Enigmatis/polaris-logs/compare/v2.2.1...v2.2.2) (2019-02-18)


### Bug Fixes

* fixed a bug about throwable serialization ([4c3b5d6](https://github.com/Enigmatis/polaris-logs/commit/4c3b5d6))
* throwable is now serialized appropriately, made logstash optional ([ea8ffe6](https://github.com/Enigmatis/polaris-logs/commit/ea8ffe6))

## [2.2.1](https://github.com/Enigmatis/polaris-logs/compare/v2.2.0...v2.2.1) (2019-02-05)


### Bug Fixes

* **global:** fix bug where unable to import this package ([f675ee8](https://github.com/Enigmatis/polaris-logs/commit/f675ee8))

# [2.2.0](https://github.com/Enigmatis/polaris-logs/compare/v2.1.0...v2.2.0) (2019-01-31)


### Bug Fixes

* jest configuration standard fixes ([16131f0](https://github.com/Enigmatis/polaris-logs/commit/16131f0))
* pre-commit changes ([d08db44](https://github.com/Enigmatis/polaris-logs/commit/d08db44))
* removed tsx and transform in jest config ([b1bb53d](https://github.com/Enigmatis/polaris-logs/commit/b1bb53d))


### Features

* added jest-ts module to the project ([358e84a](https://github.com/Enigmatis/polaris-logs/commit/358e84a))
* fixed jest configuration ([5e7200d](https://github.com/Enigmatis/polaris-logs/commit/5e7200d))

# [2.1.0](https://github.com/Enigmatis/polaris-logs/compare/v2.0.1...v2.1.0) (2019-01-21)


### Bug Fixes

* **import:** now you can import from '[@enigmatis](https://github.com/enigmatis)/polaris-logs' ([5ca80bc](https://github.com/Enigmatis/polaris-logs/commit/5ca80bc))


### Features

* **import:** export now all entities ([f3e87dc](https://github.com/Enigmatis/polaris-logs/commit/f3e87dc))

## [2.0.1](https://github.com/Enigmatis/polaris-logs/compare/v2.0.0...v2.0.1) (2019-01-21)


### Bug Fixes

* **tooling:** ci publish into npm ([cd690f3](https://github.com/Enigmatis/polaris-logs/commit/cd690f3)), closes [#25](https://github.com/Enigmatis/polaris-logs/issues/25)

# [2.0.0](https://github.com/Enigmatis/polaris-logs/compare/v1.0.6...v2.0.0) (2019-01-21)


### Features

* chack ts-lint on ci proccess ([f3d5e49](https://github.com/Enigmatis/polaris-logs/commit/f3d5e49)), closes [#21](https://github.com/Enigmatis/polaris-logs/issues/21)
* **tooling:** comitizen and semantic-release added ([07ee22d](https://github.com/Enigmatis/polaris-logs/commit/07ee22d))


### BREAKING CHANGES

* **tooling:** commit should be lint now
* commit that broke tslint check will fail on travis
