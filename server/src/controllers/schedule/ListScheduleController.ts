import { ListScheduleService } from "../../services/schedule/ListScheduleService";
import { Request, Response } from "express";

class ListScheduleController{
    async handle(request: Request, response: Response){
        const user_id = request.user_id

        const listSchedule = new ListScheduleService()
    }
}

export { ListScheduleController }