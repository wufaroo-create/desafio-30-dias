import type { ComponentType } from 'react'
import {
  Salad,
  Footprints,
  Droplets,
  ShoppingCart,
  UtensilsCrossed,
  TrendingUp,
  Moon,
  Brain,
  BookOpen,
  ClipboardList,
  NotebookPen,
  CalendarCheck,
  CalendarDays,
  Activity,
  Trophy,
  Leaf,
  Clock,
  Apple,
  ShieldCheck,
} from './icons'

export type Benefit = {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    icon: Salad,
    title: 'Alimentação Inteligente',
    description:
      'Aprenda a montar pratos equilibrados, com os nutrientes certos, sem eliminar grupos alimentares ou sofrer com restrições extremas.',
  },
  {
    icon: Footprints,
    title: 'Hábitos Saudáveis',
    description:
      'Descubra como pequenas mudanças no dia a dia — como caminhar mais e movimentar o corpo — criam uma base sólida para o seu bem-estar.',
  },
  {
    icon: Droplets,
    title: 'Hidratação',
    description:
      'Entenda a importância da água para o seu metabolismo e energia, com dicas práticas para manter uma hidratação consistente o dia todo.',
  },
  {
    icon: ShoppingCart,
    title: 'Lista de Compras',
    description:
      'Receba uma lista de compras organizada que evita desperdícios, economiza tempo no mercado e garante que você tenha sempre opções saudáveis em casa.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Planejamento das Refeições',
    description:
      'Organize suas refeições da semana com antecedência para reduzir a ansiedade, evitar escolhas por impulso e manter a constância.',
  },
  {
    icon: TrendingUp,
    title: 'Como Acompanhar Seu Progresso',
    description:
      'Use indicadores simples e realistas para enxergar sua evolução além da balança, celebrando cada conquista ao longo dos 30 dias.',
  },
  {
    icon: Moon,
    title: 'Sono e Recuperação',
    description:
      'Veja como o sono de qualidade potencializa seus resultados, regula o apetite e ajuda o corpo a se recuperar para o próximo dia.',
  },
  {
    icon: Brain,
    title: 'Como Evitar Recaídas',
    description:
      'Conheça estratégias práticas para lidar com a vontade de desistir, os momentos de fraqueza e a pressão de eventos sociais sem culpa.',
  },
]

export type Included = {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export const includedItems: Included[] = [
  {
    icon: BookOpen,
    title: 'Ebook Premium (30 Dias)',
    description:
      'Um guia completo dia a dia, com orientações claras e práticas para conduzir cada etapa do seu desafio com confiança.',
  },
  {
    icon: ClipboardList,
    title: 'Cardápio Básico',
    description:
      'Sugestões de refeições equilibradas que você pode adaptar ao seu gosto e rotina, sem complicação.',
  },
  {
    icon: NotebookPen,
    title: 'Planner Alimentar',
    description:
      'Planeje e registre suas refeições em um layout elegante que torna a organização simples e visual.',
  },
  {
    icon: ShieldCheck,
    title: 'Checklist Diário',
    description:
      'Um checklist rápido para conferir se você cumpriu os hábitos essenciais do dia em poucos segundos.',
  },
  {
    icon: CalendarCheck,
    title: 'Calendário do Desafio',
    description:
      'Acompanhe os 30 dias em um calendário visual que mantém você motivado e focado até o final.',
  },
  {
    icon: Activity,
    title: 'Rastreador de Hábitos',
    description:
      'Marque seus hábitos diários e construa uma sequência de consistência que fortalece sua disciplina.',
  },
  {
    icon: Trophy,
    title: 'Diário de Progresso',
    description:
      'Registre suas conquistas, energia e evolução ao longo do desafio para enxergar o quanto você evoluiu.',
  },
]

export type Reason = {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export const reasons: Reason[] = [
  {
    icon: Salad,
    title: 'Alimentação equilibrada',
    description:
      'Em vez de dietas restritivas, você aprende a comer de forma equilibrada — com prazer e sem culpa.',
  },
  {
    icon: Clock,
    title: 'Consistência diária',
    description:
      'O segredo está no esforço constante. Pequenos acertos, repetidos todos os dias, geram grandes mudanças.',
  },
  {
    icon: Leaf,
    title: 'Pequenas mudanças sustentáveis',
    description:
      'Ajustes simples e realistas que cabem na sua rotina e que você consegue manter por muito tempo.',
  },
  {
    icon: CalendarDays,
    title: 'Organização da rotina',
    description:
      'Quando a rotina fica organizada, as escolhas saudáveis acontecem com naturalidade — não por força de vontade.',
  },
]

export type Audience = {
  icon: ComponentType<{ className?: string }>
  text: string
}

export const audience: Audience[] = [
  { icon: Leaf, text: 'Iniciantes que estão começando agora' },
  { icon: TrendingUp, text: 'Pessoas que querem emagrecer com saúde' },
  { icon: Brain, text: 'Quem já tentou várias dietas sem constância' },
  { icon: ShieldCheck, text: 'Quem busca criar hábitos duradouros' },
  { icon: Clock, text: 'Pessoas com uma rotina corrida' },
]

export type Bonus = {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}

export const bonuses: Bonus[] = [
  {
    icon: NotebookPen,
    title: 'Planner Alimentar',
    description:
      'Planeje cada refeição da semana e mantenha sua alimentação sempre organizada e no caminho certo.',
  },
  {
    icon: ShoppingCart,
    title: 'Lista de Compras Saudável',
    description:
      'Uma lista pronta para levar ao mercado, com os itens essenciais para uma despensa saudável.',
  },
  {
    icon: CalendarDays,
    title: 'Calendário de Hábitos',
    description:
      'Acompanhe e marque seus hábitos diários em um calendário visual que mantém você engajado.',
  },
  {
    icon: Apple,
    title: 'Guia de Lanches Saudáveis',
    description:
      'Ideias práticas e saborosas de lanches para os intervalos, sem comprometer o seu progresso.',
  },
]

export type Testimonial = {
  name: string
  role: string
  photo: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Mariana Lopes',
    role: 'São Paulo, SP',
    photo:
      'https://images.pexels.com/photos/7665704/pexels-photo-7665704.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop',
    quote:
      'Eu estava cansada de começar e parar dietas. O desafio me ajudou a criar uma rotina organizada e, pela primeira vez, me senti no controle. Hoje tenho muito mais disposição no dia a dia.',
  },
  {
    name: 'Rafael Andrade',
    role: 'Belo Horizonte, MG',
    photo:
      'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop',
    quote:
      'O material é de altíssima qualidade, super fácil de seguir pelo celular. Gostei muito do planner alimentar — organizou minha semana inteira e acabou com a ansiedade de não saber o que comer.',
  },
  {
    name: 'Camila Ferreira',
    role: 'Curitiba, PR',
    photo:
      'https://images.pexels.com/photos/14566062/pexels-photo-14566062.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop',
    quote:
      'Minha alimentação melhorou de verdade. Não foi nada extremo, foram pequenas mudanças que eu consegui manter. A parte de lanches saudáveis salvou meus intervalos da tarde no trabalho.',
  },
  {
    name: 'Beatriz Nunes',
    role: 'Recife, PE',
    photo:
      'https://images.pexels.com/photos/35367077/pexels-photo-35367077.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop',
    quote:
      'A facilidade para seguir o desafio foi o que mais me surpreendeu. Tudo é explicado de um jeito claro, e o checklist diário me deixou sempre ciente do que fazer. Virei muito mais constante.',
  },
  {
    name: 'Lucas Martins',
    role: 'Porto Alegre, RS',
    photo:
      'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&fit=crop',
    quote:
      'Confesso que estava cético, mas a qualidade do material me conquistou. O acompanhamento de progresso me ajudou a enxergar evolução além do peso — minha energia e meu sono melhoraram bastante.',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Como recebo o ebook?',
    answer:
      'Após a confirmação do pagamento, você recebe um e-mail com o link de acesso a todo o material. O download fica disponível imediatamente, sem espera.',
  },
  {
    question: 'Preciso fazer academia?',
    answer:
      'Não. O desafio é baseado em hábitos saudáveis e em pequenas mudanças no dia a dia, como caminhadas e mais movimento. Não é necessário frequência em academia, embora você possa complementar se quiser.',
  },
  {
    question: 'Serve para iniciantes?',
    answer:
      'Sim. O conteúdo foi pensado especialmente para quem está começando agora, com linguagem simples e passos graduais. Não é necessário nenhum conhecimento prévio sobre nutrição.',
  },
  {
    question: 'Posso acessar pelo celular?',
    answer:
      'Sim. Todo o material é digital e compatível com celular, tablet e computador. Você pode consultar o ebook, o planner e os checklists de onde estiver.',
  },
  {
    question: 'Quanto tempo tenho de acesso?',
    answer:
      'O acesso é vitalício. Depois de adquirido, o material fica disponível para você consultar quantas vezes quiser, no seu ritmo, inclusive para repetir o desafio.',
  },
  {
    question: 'Existe suporte em caso de dúvidas?',
    answer:
      'Sim. Você encontra um canal de contato dentro do material para enviar dúvidas sobre o uso e a organização do desafio. O suporte foca no uso do produto.',
  },
  {
    question: 'Quando recebo o material?',
    answer:
      'Imediatamente após a confirmação da compra. Você não precisa esperar — o link de download chega no seu e-mail assim que o pagamento é aprovado.',
  },
  {
    question: 'Preciso comprar alimentos ou suplementos caros?',
    answer:
      'Não. As sugestões usam ingredientes acessíveis e comuns, encontrados em qualquer mercado. O foco é organização e equilíbrio, não produtos especiais.',
  },
  {
    question: 'O desafio promete emagrecer tantos quilos?',
    answer:
      'Não. O desafio não promove resultados garantidos ou específicos. Ele ajuda você a construir hábitos saudáveis e uma rotina sustentável. A evolução varia de pessoa para pessoa.',
  },
  {
    question: 'Funciona para quem tem uma rotina muito corrida?',
    answer:
      'Sim. Na verdade, o desafio foi desenhado para pessoas ocupadas. A organização prévia das refeições e os checklists rápidos economizam tempo e reduzem decisões no meio do corre-corre.',
  },
  {
    question: 'Posso repetir o desafio depois dos 30 dias?',
    answer:
      'Sim. Como o acesso é vitalício, você pode refazer os 30 dias quantas vezes quiser, consolidando ainda mais os hábitos ao longo do tempo.',
  },
  {
    question: 'É adequado para vegetarianos?',
    answer:
      'O cardápio básico e as orientações são flexíveis e podem ser adaptados a diferentes preferências alimentares. Você ajusta as sugestões ao seu estilo de alimentação.',
  },
]
