import { Mod } from 'civ7-modding-tools/src';
import { scholariumUniqueQuarter } from './scholarium';

let mod = new Mod({
    id: 'district-mod',
    name: "Turnip Games' District Mod",
    description: "Bringing districts back.",
    authors: "by Turnip Games (Luke Escobar & David Wert)",
    version: '1',
});

mod.add([
    scholariumUniqueQuarter,
]);

mod.build('./dist');

/*
BUG:
[2025-03-24 22:15:17]	[frontend]: Validating Foreign Key Constraints...
[2025-03-24 22:15:17]	[frontend]: Passed Validation.
[2025-03-24 22:15:17]	[localization]: StartupErrorMessages.xml
[2025-03-24 22:15:17]	[localization]: Database XML root elements must start with either <Database> or <GameEffects>.
[2025-03-24 22:15:17]	[localization]: Validating Foreign Key Constraints...
[2025-03-24 22:15:17]	[localization]: Passed Validation.
[2025-03-24 22:15:17]	[FullTextSearch]: Initializing FullTextSearch
[2025-03-24 22:15:17]	[HallofFame]: Database found. Checking versions...
[2025-03-24 22:15:17]	[HallofFame]: Database is up-to-date!
[2025-03-24 22:15:17]	[HallofFame]: UpdateAggregateDataPoints took 0.001105 seconds.
[2025-03-24 22:15:18]	[frontend]: Validating Foreign Key Constraints...
[2025-03-24 22:15:18]	[frontend]: Passed Validation.
[2025-03-24 22:15:19]	[HallofFame]: UpdateAggregateDataPoints took 0.009975 seconds.
[2025-03-24 22:15:20]	[localization]: Rebuilding database.
[2025-03-24 22:15:20]	[localization] Warning: Attempting to shutdown database with outstanding queries.
[2025-03-24 22:15:20]	[localization]: StartupErrorMessages.xml
[2025-03-24 22:15:20]	[localization]: Database XML root elements must start with either <Database> or <GameEffects>.
[2025-03-24 22:15:20]	[frontend]: Rebuilding database.
[2025-03-24 22:15:20]	[frontend]: Validating Foreign Key Constraints...
[2025-03-24 22:15:20]	[frontend]: Passed Validation.
[2025-03-24 22:15:20]	[HallofFame]: UpdateAggregateDataPoints took 0.012586 seconds.
[2025-03-24 22:15:44]	[localization]: Rebuilding database.
[2025-03-24 22:15:44]	[localization]: StartupErrorMessages.xml
[2025-03-24 22:15:44]	[localization]: Database XML root elements must start with either <Database> or <GameEffects>.
[2025-03-24 22:15:44]	[frontend]: Rebuilding database.
[2025-03-24 22:15:44]	[frontend]: Validating Foreign Key Constraints...
[2025-03-24 22:15:44]	[frontend]: Passed Validation.
[2025-03-24 22:15:45]	[HallofFame]: UpdateAggregateDataPoints took 0.018698 seconds.
[2025-03-24 22:16:02]	[localization]: Rebuilding database.
[2025-03-24 22:16:02]	[localization]: StartupErrorMessages.xml
[2025-03-24 22:16:02]	[localization]: Database XML root elements must start with either <Database> or <GameEffects>.
[2025-03-24 22:16:07]	[gameplay]: Validating Foreign Key Constraints...
[2025-03-24 22:16:07]	[gameplay]: Passed Validation.
[2025-03-24 22:16:36]	[FullTextSearch]: FTS - Creating Context
[2025-03-24 22:17:32]	[localization]: Rebuilding database.
[2025-03-24 22:17:32]	[localization]: StartupErrorMessages.xml
[2025-03-24 22:17:32]	[localization]: Database XML root elements must start with either <Database> or <GameEffects>.
[2025-03-24 22:17:32]	[frontend]: Rebuilding database.
[2025-03-24 22:17:32]	[frontend]: Validating Foreign Key Constraints...
[2025-03-24 22:17:32]	[frontend]: Passed Validation.
[2025-03-24 22:17:32]	[HallofFame]: UpdateAggregateDataPoints took 0.015214 seconds.
[2025-03-24 22:19:13]	[localization]: Rebuilding database.
[2025-03-24 22:19:13]	[localization]: StartupErrorMessages.xml
[2025-03-24 22:19:13]	[localization]: Database XML root elements must start with either <Database> or <GameEffects>.
[2025-03-24 22:19:13]	[gameplay]: Rebuilding database.
[2025-03-24 22:19:18]	[gameplay]: Validating Foreign Key Constraints...
[2025-03-24 22:19:18]	[gameplay]: Passed Validation.
[2025-03-24 22:20:13]	[FullTextSearch]: FTS - Creating Context
[2025-03-24 22:36:27]	[localization]: Rebuilding database.
[2025-03-24 22:36:27]	[localization]: StartupErrorMessages.xml
[2025-03-24 22:36:27]	[localization]: Database XML root elements must start with either <Database> or <GameEffects>.
[2025-03-24 22:36:27]	[frontend]: Rebuilding database.
[2025-03-24 22:36:27]	[frontend]: Validating Foreign Key Constraints...
[2025-03-24 22:36:27]	[frontend]: Passed Validation.
*/