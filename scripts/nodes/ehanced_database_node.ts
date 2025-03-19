import { DatabaseNode } from 'civ7-modding-tools/src/nodes';
import { DynamicModifierNode } from './dynamic_modifier_node';
import { TypeNode } from 'civ7-modding-tools';

export class EnhancedDatabaseNode extends DatabaseNode {
    dynamicModifiers: DynamicModifierNode[] = [];
    typeModifiers: TypeNode[] = [];

    constructor(payload: Partial<any> = {}) {
        super(payload);
    }
    toXmlElement() {
        const baseXml = super.toXmlElement();
        
        if (!baseXml || this.dynamicModifiers.length === 0) {
            return baseXml;
        }

        baseXml.Database.DynamicModifiers = {
            Row: this.dynamicModifiers.map(modifier => modifier.toXmlElement().Row)
        };
        
        return baseXml;
    }
}