import  sendQuery from '../Events/request';

export default class HelperDB {
    static insertEntity(entityName:string, entity:any): Promise<any>{
        let keys = Object.keys(entity).join(",");
        let values = Object.values(entity).join(",");
        return sendQuery(`INSERT INTO ${entityName} (${keys}) VALUES (${values});`);
    }


    static updateEntity(entityName: string, entity:any): Promise<any>{
        let sets = Object.keys(entity).map(key=>`${key}=${entity[key]}`).join(",");
        return sendQuery(`UPDATE ${entityName} SET ${sets} WHERE id=${entity['id']}`);
    }

    static saveEntity(entityName: string, entity:any): Promise<any>{
        if(entity['id']){
            return HelperDB.updateEntity(entityName, entity);
        }else{
            return HelperDB.insertEntity(entityName, entity);
        }
    } 

    static deleteEntity(entityName: string, entity:any): Promise<any>{
        if(!entity['id']) throw new Error();
        return sendQuery(`DELETE FROM ${entityName} WHERE id=${entity['id']}`);
    }

}