import prismaClient from "../../prisma";

interface SubRequest{
    user_id: string
}

class SubService {
    async execute({ user_id }: SubRequest){
        return user_id
    }
}

export { SubService }