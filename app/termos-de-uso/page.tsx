import Image from "next/image"
import Link from "next/link"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-[#FDF6EC]">
      {/* Header/Logo */}
      <header className="container mx-auto pt-8 pb-4">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Cães Felizes Logo"
              width={200}
              height={80}
              className="h-20 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4A3419] mb-8">Termos de Uso</h1>

          <div className="prose prose-lg max-w-none text-[#666666] space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o e-book "Cães Felizes: Um Guia Completo de Enriquecimento Ambiental para Todas as
                Idades", você concorda com estes termos de uso. Se você não concordar com qualquer parte destes termos,
                não deverá utilizar nosso produto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">2. Uso do Conteúdo</h2>
              <p>
                Todo o conteúdo presente no e-book é protegido por direitos autorais e é de propriedade exclusiva de
                Cães Felizes. O acesso ao conteúdo é pessoal e intransferível.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>É proibida a reprodução total ou parcial do conteúdo sem autorização prévia</li>
                <li>O conteúdo não pode ser compartilhado ou revendido</li>
                <li>O acesso é limitado ao comprador original</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">3. Responsabilidades</h2>
              <p>
                As informações contidas no e-book são fornecidas apenas para fins educacionais. O usuário é responsável
                por:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Adaptar as técnicas às necessidades específicas do seu cão</li>
                <li>Consultar um profissional veterinário quando necessário</li>
                <li>Utilizar as informações de maneira segura e responsável</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">4. Política de Reembolso</h2>
              <p>
                Oferecemos garantia de satisfação de 7 dias. Se você não estiver satisfeito com o produto, poderá
                solicitar reembolso integral dentro deste período, sem questionamentos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">5. Alterações nos Termos</h2>
              <p>
                Reservamos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor
                imediatamente após sua publicação. O uso continuado do produto após as alterações implica na aceitação
                dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">6. Suporte e Contato</h2>
              <p>
                Para questões relacionadas ao produto ou suporte, entre em contato através dos canais oficiais
                fornecidos no momento da compra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">7. Disposições Gerais</h2>
              <p>
                Estes termos constituem o acordo integral entre as partes com relação ao uso do produto. A invalidade de
                qualquer disposição não afeta as demais disposições destes termos.
              </p>
            </section>

            <section className="mt-8">
              <p className="text-sm">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F5A524] py-4 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#4A3419]">
            <div>© Cães Felizes | Todos Os Direitos Reservados</div>
            <div className="flex gap-4">
              <Link href="#" className="hover:underline">
                Suporte
              </Link>
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
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
      >
        <WhatsappIcon className="w-6 h-6 text-white" />
      </a>
    </div>
  )
}

