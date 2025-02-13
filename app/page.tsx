import Image from "next/image"
import { PhoneIcon as WhatsappIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DogEnrichmentLanding() {
  return (
    <div className="min-h-screen bg-[#FDF6EC]">
      {/* Header/Logo */}
      <header className="container mx-auto pt-8 pb-4">
        <div className="flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-13%20at%2019.50.43-qchumzeCZ0hb9QqM0Uu7Hy0y5RwjND.png"
            alt="Cães Felizes Logo"
            width={300}
            height={120}
            className="h-24 w-auto"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4A3419]">
                Descubra Como Criar um{" "}
                <span className="text-[#F5A524]">Ambiente Estimulante e Enriquecedor para seu Cão</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-[#4A3419]">
                Um Guia Completo de Enriquecimento Ambiental para Todas as Idades
              </h2>
            </div>

            <p className="text-[#666666] leading-relaxed">
              O enriquecimento ambiental é <span className="font-medium">essencial para o bem-estar do seu cão</span>,
              promovendo exercício físico, estimulação mental e satisfação de necessidades comportamentais naturais.
            </p>

            <Button className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 px-8 rounded-full text-lg">
              QUERO TRANSFORMAR A VIDA DO MEU CÃO
            </Button>
          </div>

          {/* Right Column - Video Card */}
          <div className="relative bg-[#F5A524] rounded-2xl overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Dog enrichment demonstration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
                <h3 className="text-2xl md:text-3xl font-bold text-center px-4">ASSISTA O VÍDEO E DESCUBRA MAIS</h3>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4A3419]">
              Os <span className="text-[#F5A524]">5 Princípios Fundamentais</span> do Enriquecimento Ambiental para Cães
            </h2>

            <div className="space-y-4">
              <p className="text-[#666666] leading-relaxed">
                <span className="font-medium">Variedade Sensorial:</span> Forneça diversos estímulos sensoriais através
                de diferentes texturas, cheiros e sons.
              </p>
              <p className="text-[#666666] leading-relaxed">
                <span className="font-medium">Desafio Mental:</span> Proponha atividades que desafiem o cérebro do seu
                cão através de jogos e treinamentos.
              </p>
              <p className="text-[#666666] leading-relaxed">
                <span className="font-medium">Exercício Físico:</span> Garanta atividade física regular com passeios e
                brincadeiras adequadas.
              </p>
              <p className="text-[#666666] leading-relaxed">
                <span className="font-medium">Controle de Escolha:</span> Permita que seu cão tenha controle sobre
                algumas decisões em seu ambiente.
              </p>
              <p className="text-[#666666] leading-relaxed">
                <span className="font-medium">Interação Social:</span> Promova a interação saudável com outros cães e
                humanos.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Dog enjoying enrichment activities"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="text-[#F5A524]">Estratégias Específicas</span>
            <span className="text-[#4A3419]"> para Cada Fase da Vida</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Filhotes */}
          <div className="bg-white rounded-2xl p-6 text-center space-y-4">
            <h3 className="text-[#4A3419] text-xl font-bold">Filhotes</h3>
            <p className="text-[#666666] text-sm">
              Brinquedos interativos, jogos de aprendizado e socialização adequada para um desenvolvimento saudável.
            </p>
          </div>

          {/* Adultos */}
          <div className="bg-white rounded-2xl p-6 text-center space-y-4">
            <h3 className="text-[#4A3419] text-xl font-bold">Adultos</h3>
            <p className="text-[#666666] text-sm">
              Atividades de farejar, treinamento de obediência e jogos de inteligência para manter o estímulo.
            </p>
          </div>

          {/* Idosos */}
          <div className="bg-white rounded-2xl p-6 text-center space-y-4">
            <h3 className="text-[#4A3419] text-xl font-bold">Idosos</h3>
            <p className="text-[#666666] text-sm">
              Atividades de baixa intensidade, estimulação cognitiva suave e exercícios adaptados para mobilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="bg-[#2A1810] py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-[#F5A524] text-xl font-medium">Conteúdo do E-book</h3>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">Capítulos do Guia Completo</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Chapter 1 */}
            <div className="bg-[#FDF6EC] rounded-2xl p-6 md:p-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-[#F5A524] text-white px-4 py-1 rounded-full text-sm font-medium">CAPÍTULO 1</span>
                </div>
                <h3 className="text-[#4A3419] text-2xl font-bold">Introdução ao Enriquecimento Ambiental</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  Descubra a importância do enriquecimento ambiental como parte essencial do cuidado com cães,
                  promovendo o exercício físico, estimulando a mente e satisfazendo as necessidades naturais de
                  comportamento.
                </p>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="bg-[#FDF6EC] rounded-2xl p-6 md:p-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-[#F5A524] text-white px-4 py-1 rounded-full text-sm font-medium">CAPÍTULO 2</span>
                </div>
                <h3 className="text-[#4A3419] text-2xl font-bold">Compreendendo o Enriquecimento Ambiental</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  Aprenda a definição de enriquecimento ambiental como o processo de tornar o ambiente de vida de um
                  animal mais estimulante e desafiador, oferecendo estímulos mentais, sensoriais e físicos.
                </p>
              </div>
            </div>

            {/* Chapter 3 */}
            <div className="bg-[#FDF6EC] rounded-2xl p-6 md:p-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-[#F5A524] text-white px-4 py-1 rounded-full text-sm font-medium">CAPÍTULO 3</span>
                </div>
                <h3 className="text-[#4A3419] text-2xl font-bold">Princípios do Enriquecimento Ambiental</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  Explore os princípios essenciais, como variedade sensorial, desafio mental, exercício físico, controle
                  de escolha e interação social.
                </p>
              </div>
            </div>

            {/* Chapter 4 */}
            <div className="bg-[#FDF6EC] rounded-2xl p-6 md:p-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-[#F5A524] text-white px-4 py-1 rounded-full text-sm font-medium">CAPÍTULO 4</span>
                </div>
                <h3 className="text-[#4A3419] text-2xl font-bold">Estratégias de Enriquecimento Ambiental</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  Conheça estratégias específicas para filhotes, adultos e cães idosos, incluindo brinquedos
                  interativos, jogos de aprendizado, atividades de farejar, treinamento de obediência, passeios
                  exploratórios e exercícios de mobilidade.
                </p>
              </div>
            </div>

            {/* Chapter 5 */}
            <div className="bg-[#FDF6EC] rounded-2xl p-6 md:p-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-[#F5A524] text-white px-4 py-1 rounded-full text-sm font-medium">CAPÍTULO 5</span>
                </div>
                <h3 className="text-[#4A3419] text-2xl font-bold">Criando um Ambiente Enriquecido</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  Receba dicas práticas para tornar a casa e o quintal mais estimulantes e seguros para o cão, além de
                  aprender a explorar novos ambientes externos de forma enriquecedora.
                </p>
              </div>
            </div>

            {/* Chapter 6 */}
            <div className="bg-[#FDF6EC] rounded-2xl p-6 md:p-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-[#F5A524] text-white px-4 py-1 rounded-full text-sm font-medium">CAPÍTULO 6</span>
                </div>
                <h3 className="text-[#4A3419] text-2xl font-bold">Solução de Problemas e Considerações Especiais</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  Aborde problemas de comportamento e descubra estratégias de enriquecimento ambiental para resolvê-los,
                  adequando o enriquecimento às necessidades individuais de cada cão e considerando cães com
                  necessidades especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-[#FDF6EC] py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Lifetime Access */}
            <div className="text-center space-y-4 mb-16">
              <div className="w-20 h-20 mx-auto mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#F5A524]">
                  <path
                    d="M70.7,20.3c-7.8-7.8-20.5-7.8-28.3,0L30.3,32.4c-1.6,1.6-1.6,4.1,0,5.7c1.6,1.6,4.1,1.6,5.7,0l12.1-12.1
                    c4.7-4.7,12.3-4.7,17,0c4.7,4.7,4.7,12.3,0,17L52.9,55.1c-1.6,1.6-1.6,4.1,0,5.7c0.8,0.8,1.8,1.2,2.8,1.2c1,0,2.1-0.4,2.8-1.2
                    l12.1-12.1C78.5,40.8,78.5,28.1,70.7,20.3z"
                  />
                  <path
                    d="M47.1,61.3c-1.6-1.6-4.1-1.6-5.7,0L29.3,73.4c-4.7,4.7-12.3,4.7-17,0c-4.7-4.7-4.7-12.3,0-17l12.1-12.1
                    c1.6-1.6,1.6-4.1,0-5.7c-1.6-1.6-4.1-1.6-5.7,0L6.7,50.7c-7.8,7.8-7.8,20.5,0,28.3c3.9,3.9,9,5.9,14.1,5.9c5.1,0,10.2-2,14.1-5.9
                    l12.1-12.1C48.7,65.4,48.7,62.9,47.1,61.3z"
                  />
                </svg>
              </div>
              <h2 className="text-[#4A3419] text-3xl md:text-4xl font-bold">Acesso Vitalício ao E-book</h2>
              <p className="text-[#666666] max-w-2xl mx-auto">
                Adquira hoje e tenha acesso permanente a todo o conteúdo e atualizações futuras
              </p>
            </div>

            {/* Guarantee */}
            <div className="text-center space-y-4">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20(6)-YrpKDyiFCvxinZMXb4HrAmAh9akGaQ.png"
                  alt="7 dias de garantia"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-[#F5A524] font-medium">Satisfação Garantida!</p>
              <h2 className="text-[#4A3419] text-3xl md:text-4xl font-bold">7 Dias de Garantia</h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                <p className="text-[#666666]">
                  Se você não ficar completamente satisfeito com o conteúdo, devolvemos seu investimento integralmente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#2A1810] py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <h3 className="text-[#4A3419] text-2xl font-bold mb-2">
                  E-book <span className="text-[#F5A524]">Cães Felizes</span>
                </h3>
                <p className="text-[#666666] text-sm mb-4">
                  Um guia completo de enriquecimento ambiental para todas as idades
                </p>
                <div className="bg-[#F5A524] text-white py-1 px-4 rounded-full inline-block mb-6">Oferta Especial</div>
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-[#666666]">de R$ 97 por apenas</div>
                  <div className="text-4xl font-bold text-[#4A3419]">R$ 47,00</div>
                  <div className="text-sm text-[#666666]">pagamento único</div>
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-full text-lg">
                  QUERO TRANSFORMAR A VIDA DO MEU CÃO
                </Button>
              </div>

              {/* Benefits Card */}
              <div className="bg-[#FDF6EC] rounded-2xl p-8">
                <h3 className="text-[#4A3419] text-xl font-bold mb-4">O que está incluído:</h3>
                <ul className="space-y-4">
                  {[
                    "E-book completo em formato PDF",
                    "Acesso vitalício ao conteúdo",
                    "Atualizações gratuitas",
                    "Bônus: Guia de Brinquedos DIY",
                    "Bônus: Calendário de Atividades",
                    "7 dias de garantia incondicional",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#666666]">
                      <span className="text-[#F5A524] font-bold">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5A524] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#4A3419]">
            <div>© Cães Felizes | Todos Os Direitos Reservados</div>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5511993285473?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20ebook%20Cão%20Feliz."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Suporte
              </a>
              <Link href="/termos-de-uso" className="hover:underline">
                Termos de Uso
              </Link>
              <Link href="/politica-de-privacidade" className="hover:underline">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511993285473?text=Olá,%20gostaria%20de%20saber%20mais%20informações%20sobre%20o%20ebook%20Cão%20Feliz."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
      >
        <WhatsappIcon className="w-6 h-6 text-white" />
      </a>
    </div>
  )
}

