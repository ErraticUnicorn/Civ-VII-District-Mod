import { TypeNode } from "civ7-modding-tools";
import { DynamicModifierNode } from "../nodes/dynamic_modifier_node";

export class DynamicModifierBuilder {
    _typeNode: TypeNode;
    _dynamicModifierNode: DynamicModifierNode;
    
    constructor(config: {
      modifierType: string;
      collectionType: string;
      effectType: string;
    }) {
      this._typeNode = new TypeNode({
        type: config.modifierType
      });
      
      this._dynamicModifierNode = new DynamicModifierNode({
        modifierType: config.modifierType,
        collectionType: config.collectionType,
        effectType: config.effectType
      });
    }
    
    getTypeNode() {
      return this._typeNode;
    }
    
    getDynamicModifierNode() {
      return this._dynamicModifierNode;
    }
  }