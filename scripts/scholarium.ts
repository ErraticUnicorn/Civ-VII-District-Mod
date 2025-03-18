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

/*
Zaibatsus work like this generally:
<?xml version="1.0" encoding="UTF-8"?>
<Database>
    <Types>
        <Row Type="QUARTER_SCHOLARIUM" Kind="KIND_QUARTER"/>
    </Types>
    <UniqueQuarters>
        <Row UniqueQuarterType="QUARTER_SCHOLARIUM" BuildingType1="BUILDING_LIBRARY" BuildingType2="BUILDING_GARDEN" Name="LOC_QUARTER_SCHOLARIUM_NAME" Description="LOC_QUARTER_SCHOLARIUM_DESCRIPTION" TraitType="TRAIT_ANTIQUITY_CIV"/>
    </UniqueQuarters>
    <UniqueQuarterModifiers>
        <Row UniqueQuarterType="QUARTER_SCHOLARIUM" ModifierId="MOD_974C1BED7A5745368492C80EE7A9F055"/>
        <Row UniqueQuarterType="QUARTER_SCHOLARIUM" ModifierId="MOD_97C7E3AD3E8F462E85F7D0FC03F58FE4"/>
        <Row UniqueQuarterType="QUARTER_SCHOLARIUM" ModifierId="MOD_D4C3AB4E03AB4FF484F4CB5194BBDEDC"/>
    </UniqueQuarterModifiers>
    <GameModifiers>
        <Row ModifierId="MOD_974C1BED7A5745368492C80EE7A9F055"/>
        <Row ModifierId="MOD_97C7E3AD3E8F462E85F7D0FC03F58FE4"/>
        <Row ModifierId="MOD_D4C3AB4E03AB4FF484F4CB5194BBDEDC"/>
    </GameModifiers>
    <Adjacency_YieldChanges>
		<Row ID="SCHOLARIUM_GOLD_TEST_ADJACENCY" Age="AGE_ANTIQUITY" YieldType="YIELD_GOLD" YieldChange="5" TilesRequired="1" ProjectMaxYield="true" AdjacentUniqueQuarterType="QUARTER_SCHOLARIUM"/>
		<!-- <Row ID="ZaibatsuWildcardZaibatsuProduction" Age="AGE_MODERN" YieldType="YIELD_PRODUCTION" YieldChange="1" TilesRequired="1" ProjectMaxYield="true" AdjacentUniqueQuarterType="QUARTER_ZAIBATSU"/> -->
    </Adjacency_YieldChanges>
	<Constructible_WildcardAdjacencies>
		<Row YieldChangeId="SCHOLARIUM_GOLD_TEST_ADJACENCY" RequiresActivation="true"/>
		<!-- <Row YieldChangeId="ZaibatsuWildcardZaibatsuProduction" RequiresActivation="true"/> -->
	</Constructible_WildcardAdjacencies>
</Database>

<Modifier id="MOD_D4C3AB4E03AB4FF484F4CB5194BBDEDC" collection="COLLECTION_CITY_PLOT_YIELDS" effect="EFFECT_PLOT_ADJUST_YIELD" permanent="true">
    <SubjectRequirements>
        <Requirement type="REQUIREMENT_PLOT_UNIQUE_QUARTER">
            <Argument name="UniqueQuarterType">QUARTER_SCHOLARIUM</Argument>
        </Requirement>
    </SubjectRequirements>
    <Argument name="PlotEffect">PLOTEFFECT_IS_BURNING</Argument>
    <Argument name="ConstructibleAdjacency">SCHOLARIUM_GOLD_TEST_ADJACENCY</Argument>
</Modifier>

However, this has not resulted in any visible change either

<!-- generated with https://github.com/izica/civ7-modding-tools -->
*/