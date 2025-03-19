import { BaseNode } from "civ7-modding-tools/src/nodes/BaseNode";

export class DynamicModifierNode extends BaseNode {
  modifierType: string;
  collectionType: string;
  effectType: string;

  constructor(data: {
    modifierType: string;
    collectionType: string;
    effectType: string;
  }) {
    super();
    this.modifierType = data.modifierType;
    this.collectionType = data.collectionType;
    this.effectType = data.effectType;
  }
}