import Head from "next/head"
import { Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import Link from "next/link"
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'

import Feature from "@/components/feature"

export default function Home(){
  return(
    <>
      <Head>
        <title>Saloon Pro - Il tuo sistema completo</title>   {/*Aqui usamos o titulo para melhorar nosso SEO*/}
      </Head>
      <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Text className="max-w-2xl" variant="h1">
          Information you need during on-call emergencies
        </Text>
        <Text className="max-w-2xl" variant="h5">
          Quickly link new on-call tickets to similar past
          incidents and their solutions. All directly in
          Slack the moment an incident happens.
        </Text>
        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
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
          <Text className="max-w-2xl" variant="h1">
            Quick solutions, less stress
          </Text>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Fix emergencies fast"
              description="Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks"
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Universally compatible"
              description="Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system"
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Secure for your org"
              description="We keep your data safe by taking top security measures."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Text className="max-w-2xl" variant="h1">
            Instant setup, no custom code
          </Text>
          <Text className="max-w-2xl" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Text>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Text className="max-w-2xl" variant="h1">
            Get in touch
          </Text>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}