import { AdjacencyYieldChangeNode } from "civ7-modding-tools/dist/nodes/AdjacencyYieldChangeNode";

export class AdjacencyYieldChangeBuilder {
    _node: AdjacencyYieldChangeNode;
    
    constructor(config) {
      const {
        id,
        yieldType,
        yieldChange,
        age,
        adjacentTerrain = null,
        adjacentQuarter = null,
        projectMaxYield = true,
        tilesRequired = 1
      } = config;
      
      const nodeConfig: any = {
        id: id,
        yieldType: yieldType,
        yieldChange: yieldChange,
        age: age,
        adjacentResourceClass: "NO_RESOURCECLASS"
      };
      
      if (adjacentTerrain) {
        nodeConfig.adjacentTerrain = adjacentTerrain;
        nodeConfig.projectMaxYield = projectMaxYield;
        nodeConfig.tilesRequired = tilesRequired;
      }
      
      if (adjacentQuarter) {
        nodeConfig.adjacentQuarter = adjacentQuarter === true ? true : adjacentQuarter;
      }
      
      this._node = new AdjacencyYieldChangeNode(nodeConfig);
    }
    
    getNode() {
      return this._node;
    }
}