import { UniqueQuarterBuilder } from 'civ7-modding-tools/src';
import { AdjacencyYieldChangeBuilder } from './adjacency_yield_change_builder';
import { ConstructibleAdjacencyBuilder } from './constructible_adjacency_builder';
import { EnhancedDatabaseNode } from '../nodes/ehanced_database_node';
import { DynamicModifierNode } from '../nodes/dynamic_modifier_node';
import { TypeNode } from 'civ7-modding-tools';


export class EnhancedUniqueQuarterBuilder extends UniqueQuarterBuilder {
    _db_node: EnhancedDatabaseNode = new EnhancedDatabaseNode();
    
    bind(items: any[]) {
        const standardItems = items.filter(item => 
            !(item instanceof AdjacencyYieldChangeBuilder || 
              item instanceof ConstructibleAdjacencyBuilder || 
              item.constructor.name === 'TypeNode' ||
              item.constructor.name === 'DynamicModifierNode'));
        
        super.bind(standardItems);
        
        items.forEach(item => {
            if (item instanceof AdjacencyYieldChangeBuilder) {
                if (!this._db_node.adjacencyYieldChanges) {
                    this._db_node.adjacencyYieldChanges = [];
                }
                
                const node = item.getNode();
                this._db_node.adjacencyYieldChanges.push(node);
            }
            
            if (item instanceof ConstructibleAdjacencyBuilder) {
                if (!this._db_node.constructibleAdjacencies) {
                    this._db_node.constructibleAdjacencies = [];
                }
                
                const node = item.getNode();
                this._db_node.constructibleAdjacencies.push(node);
            }

            if (item instanceof TypeNode) {
                if (!this._db_node.typeModifiers) {
                    this._db_node.types = [];
                }
                
                this._db_node.typeModifiers.push(item);
            }
            
            if (item instanceof DynamicModifierNode) {
                if (!this._db_node.dynamicModifiers) {
                    this._db_node.dynamicModifiers = [];
                }
                
                this._db_node.dynamicModifiers.push(item);
            }
        });
        
        return this;
    }
}