import { Request, Response } from 'express'
import db from '../database/db'



const ScheduleController = () => {

  const getSchedule = (request: Request, response: Response) => {
    return response.json(db());
  }

  const getCategories = (request: Request, response: Response) => {
    
    if(db().scheduleCategory){
      var categories = db().scheduleCategory.map(item => (
        {
          id: item.id,
          name: item.name
        }
      ))
      return response.json(categories);

    } else {
      return response.json({Message: "Not found!"});
    }

  }

  const getCategorieById = (request: Request<{id:string}>, response: Response) => {

    const id = request.params.id;

    if(db().scheduleCategory.findIndex(item => item.id === id) !== -1){
      
      var categorie = db().scheduleCategory.filter(item => item.id === id)


      return response.json(categorie);

    } else {
      return response.json({Message: "Bad Request!"});
    }

  }

  return {
    getSchedule,
    getCategories,
    getCategorieById
  }

}
export default ScheduleController