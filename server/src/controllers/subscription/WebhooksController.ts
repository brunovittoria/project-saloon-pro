import { Request, Response } from "express";
import Stripe from "stripe";
import { stripe } from '../../utils/stripe'

class WebhooksController {
    async handle(request: Request, response: Response){
        let event: Stripe.Event = request.body; //Aqui estamos falando que vamos receber do STRIPE essa resposta em nosso BODY
    
        let endpointSecret: 'whsec_62144c8284459cedd422e3388c7f7b46263c449f53d10e64bf40c0674eacd201'

        if(endpointSecret){ //Se tiver o endpoint secret iremos pegar oq o stripe ta mandando
            const signature = request.headers['stripe-signature'] //Pegamos a assinatura/retorno do stripe

            try{
                //Agora mandamos essas informaçoes no body  para o stripe
                event = stripe.webhooks.constructEvent(
                    request.body,
                    signature,
                    endpointSecret
                )
            }catch(err){
                console.error("Webhook signature failed", err.message)
                return response.sendStatus(400)
            }
        }

        switch(event.type){     //Aqui iremos tratar as varias possibilidades que o STRIPE pode nos retornar, como pgto recusado, pendente e etc...

            case 'customer.subscription.deleted':
                //Caso cancele assinatura do user vamos cancelar-la
                break;

            case 'customer.subscription.updated':
                //Caso tenha alguma atualizaçao de assinatura
                break;

            case 'checkout.session.completed':
                //Criar a assinatura que foi paga com sucesso
                break;

            case 'checkout.session.expired':
                //Caso a sessao do carrinho tenha expirado
                break;
            
            default:
                console.log(`Evento desconhecido ${event.type}`)
        }

        response.send() //Aqui enviamos o retorno pro FE

    }
}

export { WebhooksController }