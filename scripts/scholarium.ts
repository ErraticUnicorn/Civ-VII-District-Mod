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

//TODO: Debuging things to try, look up modifer ids in the db in the live game to see if they got loaded
// Can also chnge requirement to both buildings being in the quarter rather than our unique quarter
export const scholariumUniqueQuarter = new UniqueQuarterBuilder({
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
    new ModifierBuilder({
        modifier: {
            collection: COLLECTION.CITY_PLOT_YIELDS,
            effect: EFFECT.PLOT_ADJUST_YIELD,
            requirements: [{
                type: REQUIREMENT.PLOT_UNIQUE_QUARTER,
                arguments: [{ name: 'UniqueQuarterType', value: 'QUARTER_SCHOLARIUM' }]
            }],
            permanent: true,
            arguments: [
                { name: "YieldType", value: YIELD.SCIENCE },
                { name: "Amount", value: 1 },
                { name: "AdjacentTerrain", value: "TERRAIN_MOUNTAIN" },
                { name: "Tooltip", value: 'LOC_QUARTER_SCHOLARIUM_NAME' }
            ]
        }
    }),
    new ModifierBuilder({
        modifier: {
            collection: COLLECTION.CITY_PLOT_YIELDS,
            effect: EFFECT.PLOT_ADJUST_YIELD,
            requirements: [{
                type: REQUIREMENT.PLOT_UNIQUE_QUARTER,
                arguments: [{ name: 'UniqueQuarterType', value: 'QUARTER_SCHOLARIUM' }]
            }],
            permanent: true,
            arguments: [
                { name: "YieldType", value: YIELD.SCIENCE },
                { name: "Amount", value: 1 },
                { name: "AdjacentDistrict", value: "DISTRICT_URBAN" },
                { name: "Tooltip", value: 'LOC_QUARTER_SCHOLARIUM_NAME' }
            ]
        }
    }),
])
