import Head from "next/head"
import { Button } from '@/components/landing-page/ui/button'
import Typography from '@/components/landing-page/ui/typography'
import Image from 'next/image'
import Link from "next/link"
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'

import { Header } from '../components/landing-page/header-lp/header'
import { Footer } from '../components/landing-page/footer/index'

import Feature from "@/components/landing-page/feature"

export default function Home(){
  return(
    <>
      <Head>
        <title>Saloon Pro - Il tuo sistema completo</title>   {/*Aqui usamos o titulo para melhorar nosso SEO*/}
      </Head>
      <div className="flex flex-1 justify-center w-full">
        <Header />
      </div>
      <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      

      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          O seu braço direito para a gestao do seu salao
        </Typography>
        <Typography className="max-w-2xl" variant="h5" style={{ color: "#fff"}}>
          Invia automaticamente messaggi di promemoria su WhatsApp ai clienti una volta che sono stati inseriti nell agenda. Non dimenticare mai un appuntamento importante e assicurati che i tuoi clienti siano sempre informati.
        </Typography>
        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
        >
          <Button size="tiny" variant="ghost" className="text-white" style={{ backgroundColor: "#FBB131"}} >
            {`Get Started`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="/hero1.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Quick solutions, less stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Promemoria automatico su WhatsApp per i clienti"
              description="Invia automaticamente messaggi di promemoria su WhatsApp ai clienti una volta che sono stati inseriti nell'agenda. Non dimenticare mai un appuntamento importante e assicurati che i tuoi clienti siano sempre informati."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Visualizzazione Dashboard di fatturato"
              description="Accedi a una dashboard completa del tuo fatturato. Visualizza e analizza le entrate del tuo salone in modo semplice e intuitivo, aiutandoti a prendere decisioni informate per far crescere il tuo business."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Creazione di tipi di tagli/servizi"
              description="Crea e personalizza vari tipi di tagli e servizi. Aggiungi facilmente questi servizi all'agenda dei tuoi clienti, assicurando una gestione efficiente e organizzata degli appuntamenti."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Instant setup, no custom code
          </Typography>
          <Typography className="max-w-2xl" variant="p" style={{ color: "#fff"}}>
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost" className="text-white" style={{ backgroundColor: "#FBB131" }}>
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}