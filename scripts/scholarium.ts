import { 
    ACTION_GROUP_BUNDLE, 
    YIELD, 
    COLLECTION, 
    EFFECT, 
    ModifierBuilder, 
    REQUIREMENT
} from "civ7-modding-tools/src";


//TODO: We lost our adjacency yield changes in the xml, we need to readd them. Still missing <Type>.
import { EnhancedUniqueQuarterBuilder } from "./builders/enhanced_unique_quarter_builder";
import { AdjacencyYieldChangeBuilder } from './builders/adjacency_yield_change_builder';
import { ConstructibleAdjacencyBuilder } from './builders/constructible_adjacency_builder';
import { DynamicModifierBuilder } from './builders/dynamic_modifier_builder';

const MOUNTAIN_ADJACENCY_ID = "MOD_SCHOLARIUM_MOUNTAIN_ADJACENCY";
const QUARTER_ADJACENCY_ID = "MOD_SCHOLARIUM_QUARTER_ADJACENCY";
const SCHOLARIUM_ADJACENCY_TYPE = "MOD_SCHOLARIUM_SCHOLARIUM_ADJACENCY";

const scholariumDynamicModifier = new DynamicModifierBuilder({
  modifierType: SCHOLARIUM_ADJACENCY_TYPE,
  collectionType: COLLECTION.ALL_CITIES,
  effectType: EFFECT.CITY_ACTIVATE_CONSTRUCTIBLE_ADJACENCY
});

const mountainAdjacency = new AdjacencyYieldChangeBuilder({
    id: MOUNTAIN_ADJACENCY_ID,
    yieldType: YIELD.SCIENCE,
    yieldChange: 1,
    age: "AGE_ANTIQUITY",
    adjacentTerrain: "TERRAIN_MOUNTAIN",
    projectMaxYield: true,
    tilesRequired: 1
});

const quarterAdjacency = new AdjacencyYieldChangeBuilder({
    id: QUARTER_ADJACENCY_ID,
    yieldType: YIELD.SCIENCE,
    yieldChange: 1,
    age: "AGE_ANTIQUITY",
    adjacentQuarter: true
});

const libraryMountainAdjacency = new ConstructibleAdjacencyBuilder({
    constructibleType: "BUILDING_LIBRARY",
    yieldChangeId: MOUNTAIN_ADJACENCY_ID,
    requiresActivation: true
});

const libraryQuarterAdjacency = new ConstructibleAdjacencyBuilder({
    constructibleType: "BUILDING_LIBRARY",
    yieldChangeId: QUARTER_ADJACENCY_ID,
    requiresActivation: true
});

const mountainModifier = new ModifierBuilder({
    modifier: {
        id: "MOD_SCHOLARIUM_ADJACENCY_MODIFIER",
        collection: COLLECTION.ALL_CITIES,
        effect: EFFECT.CITY_ACTIVATE_CONSTRUCTIBLE_ADJACENCY,
        requirements: [{
            type: REQUIREMENT.CITY_HAS_UNIQUE_QUARTER,
            arguments: [{ name: 'UniqueQuarterType', value: 'QUARTER_SCHOLARIUM' }]
        }],
        permanent: true,
        arguments: [
            { name: "ConstructibleAdjacency", value: MOUNTAIN_ADJACENCY_ID }
        ]
    }
});

const quarterModifier = new ModifierBuilder({
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
            { name: "ConstructibleAdjacency", value: QUARTER_ADJACENCY_ID }
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
    ]
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