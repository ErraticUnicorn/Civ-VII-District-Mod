import { UniqueQuarterBuilder } from 'civ7-modding-tools/src';
import { AdjacencyYieldChangeBuilder } from './adjacency_yield_change_builder';
import { ConstructibleAdjacencyBuilder } from './constructible_adjacency_builder';
import { EnhancedDatabaseNode } from '../nodes/ehanced_database_node';
import { DynamicModifierNode } from '../nodes/dynamic_modifier_node';
import { TypeNode } from 'civ7-modding-tools';


export class EnhancedUniqueQuarterBuilder extends UniqueQuarterBuilder {
    constructor(payload: any = {}) {
        super(payload);
        const originalNode = this._always;
        this._always = new EnhancedDatabaseNode();
        
        if (originalNode.types) {
            this._always.types = [...originalNode.types];
        }
    }
    
    bind(items: any[]) {
        const standardItems = items.filter(item => 
            !(item instanceof AdjacencyYieldChangeBuilder || 
              item instanceof ConstructibleAdjacencyBuilder || 
              item instanceof TypeNode ||
              item instanceof DynamicModifierNode)
        )
        
        super.bind(standardItems);
        
        items.forEach(item => {
            if (item instanceof AdjacencyYieldChangeBuilder) {
                if (!this._always.adjacencyYieldChanges) {
                    this._always.adjacencyYieldChanges = [];
                }
                
                const node = item.getNode();
                this._always.adjacencyYieldChanges.push(node);
            }
            
            if (item instanceof ConstructibleAdjacencyBuilder) {
                if (!this._always.constructibleAdjacencies) {
                    this._always.constructibleAdjacencies = [];
                }
                
                const node = item.getNode();
                this._always.constructibleAdjacencies.push(node);
            }

            if (item instanceof TypeNode) {
                console.log(this._always.types.length)
                if (!this._always.types) {
                    this._always.types = [];
                }
                
                this._always.types.push(item);
            }
            
            if (item instanceof DynamicModifierNode) {
                if (!this._always.dynamicModifiers) {
                    this._always.dynamicModifiers = [];
                }
                
                this._always.dynamicModifiers.push(item);
            }
        });
        
        return this;
    }
}