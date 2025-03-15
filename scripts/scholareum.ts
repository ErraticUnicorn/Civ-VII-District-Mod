import { 
    ACTION_GROUP_BUNDLE, 
    YIELD, 
    COLLECTION, 
    EFFECT, 
    ModifierBuilder, 
    REQUIREMENT, 
    UniqueQuarterBuilder,
} from "civ7-modding-tools/src";

//TODO: Ensure adjacencies work as expected with multiple quarters, add city center adjacency?
// Add narrative?
export const scholareumUniqueQuarter = new UniqueQuarterBuilder({
    actionGroupBundle: ACTION_GROUP_BUNDLE.AGE_ANTIQUITY,
    uniqueQuarter: {
        uniqueQuarterType: 'QUARTER_SCHOLAREUM',
        buildingType1: 'BUILDING_LIBRARY',
        buildingType2: 'BUILDING_GARDEN',
        traitType: 'TRAIT_ANTIQUITY_CIV',
    },
    localizations: [
        { name: 'Scholareum', description: "+1[icon:YIELD_SCIENCE] Science Adjacency for every Mountain +1[icon:YIELD_SCIENCE] for every urban quarter. Scholareum's were built to allow the esoteric to become accessible to the populace. Requires a Garden and Library built in an Urban Quarter." },
    ]
}).bind([
    new ModifierBuilder({
        modifier: {
            collection: COLLECTION.CITY_PLOT_YIELDS,
            effect: EFFECT.PLOT_ADJUST_YIELD,
            permanent: true,
            requirements: [{
                type: REQUIREMENT.PLOT_UNIQUE_QUARTER,
                arguments: [{ name: 'UniqueQuarterType', value: 'QUARTER_SCHOLAREUM' }]
            }],
            arguments: [
                { name: "YieldType", value: YIELD.SCIENCE },
                { name: "YieldChange", value: 1 },
                { name: "AdjacentTerrain", value: "TERRAIN_MOUNTAIN" },
                { name: "Tooltip", value: 'LOC_QUARTER_SCHOLAREUM_NAME' }
            ]
        }
    }),
    new ModifierBuilder({
        modifier: {
            collection: COLLECTION.CITY_PLOT_YIELDS,
            effect: EFFECT.PLOT_ADJUST_YIELD,
            permanent: true,
            requirements: [{
                type: REQUIREMENT.PLOT_UNIQUE_QUARTER,
                arguments: [{ name: 'UniqueQuarterType', value: 'QUARTER_SCHOLAREUM' }]
            }],
            arguments: [
                { name: "YieldType", value: YIELD.SCIENCE },
                { name: "YieldChange", value: 1 },
                { name: "AdjacentDistrict", value: "DISTRICT_URBAN" },
                { name: "Tooltip", value: 'LOC_QUARTER_SCHOLAREUM_NAME' }
            ]
        }
    }),
])
