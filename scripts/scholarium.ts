import { 
    ACTION_GROUP_BUNDLE, 
    YIELD, 
    COLLECTION, 
    EFFECT, 
    ModifierBuilder, 
    REQUIREMENT
} from "civ7-modding-tools/src";

import { EnhancedUniqueQuarterBuilder } from "./builders/enhanced_unique_quarter_builder";
import { AdjacencyYieldChangeBuilder } from './builders/adjacency_yield_change_builder';
import { ConstructibleAdjacencyBuilder } from './builders/constructible_adjacency_builder';
import { DynamicModifierBuilder } from './builders/dynamic_modifier_builder';

//TODO: Still doesn't work. We need to convert booleans to 0/1, remove some default arguments like NO_RESOURCECLASS
// We still need to abstract more layers of this so we can create new quarters quite simply.
// i.e. { NewQuarter, Adjacency} 
//TODO: Start swapping working code to how we handle ids and see what breaks
const YIELD_MOUNTAIN_ADJACENCY_ID = "ModScholariumMountainScience"
const YIELD_QUARTER_ADJACENCY_ID = "ModScholariumQuarterScience"
const SCHOLARIUM_ADJACENCY_TYPE = "MOD_SCHOLARIUM_SCHOLARIUM_ADJACENCY";

const scholariumDynamicModifier = new DynamicModifierBuilder({
  modifierType: SCHOLARIUM_ADJACENCY_TYPE,
  collectionType: COLLECTION.ALL_CITIES,
  effectType: EFFECT.CITY_ACTIVATE_CONSTRUCTIBLE_ADJACENCY
});

const mountainAdjacency = new AdjacencyYieldChangeBuilder({
    id: YIELD_MOUNTAIN_ADJACENCY_ID,
    yieldType: YIELD.SCIENCE,
    yieldChange: 1,
    age: "AGE_ANTIQUITY",
    adjacentTerrain: "TERRAIN_MOUNTAIN",
    projectMaxYield: true,
    tilesRequired: 1
});

const quarterAdjacency = new AdjacencyYieldChangeBuilder({
    id: YIELD_QUARTER_ADJACENCY_ID,
    yieldType: YIELD.SCIENCE,
    yieldChange: 1,
    age: "AGE_ANTIQUITY",
    adjacentQuarter: true
});

const libraryMountainAdjacency = new ConstructibleAdjacencyBuilder({
    constructibleType: "BUILDING_LIBRARY",
    yieldChangeId: YIELD_MOUNTAIN_ADJACENCY_ID,
    requiresActivation: true
});

const libraryQuarterAdjacency = new ConstructibleAdjacencyBuilder({
    constructibleType: "BUILDING_LIBRARY",
    yieldChangeId: YIELD_QUARTER_ADJACENCY_ID,
    requiresActivation: true
});

const mountainModifier = new ModifierBuilder({
    modifier: {
        id: "MOD_SCHOLARIUM_MOUNTAIN_ADJACENCY_MODIFIER",
        collection: COLLECTION.ALL_CITIES,
        effect: EFFECT.CITY_ACTIVATE_CONSTRUCTIBLE_ADJACENCY,
        requirements: [{
            type: REQUIREMENT.CITY_HAS_UNIQUE_QUARTER,
            arguments: [{ name: 'UniqueQuarterType', value: 'QUARTER_SCHOLARIUM' }]
        }],
        permanent: true,
        arguments: [
            { name: "ConstructibleAdjacency", value: YIELD_MOUNTAIN_ADJACENCY_ID }
        ]
    }
});

const quarterModifier = new ModifierBuilder({
    modifier: {
        id: "MOD_SCHOLARIUM_QUARTER_ADJACENCY_MODIFIER",
        collection: COLLECTION.ALL_CITIES,
        effect: EFFECT.CITY_ACTIVATE_CONSTRUCTIBLE_ADJACENCY,
        requirements: [{
            type: REQUIREMENT.CITY_HAS_UNIQUE_QUARTER,
            arguments: [{ name: 'UniqueQuarterType', value: 'QUARTER_SCHOLARIUM' }]
        }],
        permanent: true,
        arguments: [
            { name: "ConstructibleAdjacency", value: YIELD_QUARTER_ADJACENCY_ID }
        ]
    }
});

export const scholariumUniqueQuarter = new EnhancedUniqueQuarterBuilder({
    actionGroupBundle: ACTION_GROUP_BUNDLE.AGE_ANTIQUITY,
    uniqueQuarter: {
        uniqueQuarterType: 'QUARTER_SCHOLARIUM',
        buildingType1: 'BUILDING_LIBRARY',
        buildingType2: 'BUILDING_GARDEN',
        traitType: 'TRAIT_ANTIQUITY_CIV',
    },
    localizations: [
        { name: 'Scholarium', description: "+1[icon:YIELD_SCIENCE] Science Adjacency for every Mountain +1[icon:YIELD_SCIENCE] for every urban quarter. Scholarium's were built to allow the esoteric to become accessible to the populace. Requires a Garden and Library built in an Urban Quarter." },
    ],
}).bind([
    mountainModifier,
    quarterModifier,
    mountainAdjacency,
    quarterAdjacency,
    libraryMountainAdjacency,
    libraryQuarterAdjacency,
    scholariumDynamicModifier.getTypeNode(),
    scholariumDynamicModifier.getDynamicModifierNode()
]);