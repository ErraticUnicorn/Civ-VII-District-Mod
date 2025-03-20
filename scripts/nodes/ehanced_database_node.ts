import { DatabaseNode } from 'civ7-modding-tools/src/nodes';
import { DynamicModifierNode } from './dynamic_modifier_node';
import { TypeNode } from 'civ7-modding-tools';

export class EnhancedDatabaseNode extends DatabaseNode {
    dynamicModifiers: DynamicModifierNode[] = [];

    constructor(payload: Partial<any> = {}) {
        super(payload);
    }
    toXmlElement() {
        const baseXml = super.toXmlElement();
        
        if (!baseXml) {
          return baseXml;
        }

        if (this.dynamicModifiers && this.dynamicModifiers.length > 0) {
            baseXml.Database.DynamicModifiers = this.dynamicModifiers.map(mod => mod.toXmlElement())
        }
        
        return baseXml
    }
}