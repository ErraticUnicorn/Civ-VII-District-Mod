import { ConstructibleAdjacencyNode } from "civ7-modding-tools/src/nodes/ConstructibleAdjacencyNode";

export class ConstructibleAdjacencyBuilder {
    _node: ConstructibleAdjacencyNode;
    
    constructor(config) {
      const {
        constructibleType,
        yieldChangeId,
        requiresActivation = false
      } = config;
      
      this._node = new ConstructibleAdjacencyNode({
        constructibleType: constructibleType,
        yieldChangeId: yieldChangeId,
        requiresActivation: requiresActivation
      });
    }
    
    getNode() {
      return this._node;
    }
}