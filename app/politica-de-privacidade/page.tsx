import Image from "next/image"
import Link from "next/link"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-[#FDF6EC]">
      {/* Header/Logo */}
      <header className="container mx-auto pt-8 pb-4">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-13%20at%2019.50.43-qchumzeCZ0hb9QqM0Uu7Hy0y5RwjND.png"
              alt="Cães Felizes Logo"
              width={300}
              height={120}
              className="h-24 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4A3419] mb-8">Política de Privacidade</h1>

          <div className="prose prose-lg max-w-none text-[#666666] space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">1. Introdução</h2>
              <p>
                A Cães Felizes está comprometida em proteger a privacidade dos usuários do nosso e-book "Um Guia
                Completo de Enriquecimento Ambiental para Todas as Idades". Esta política de privacidade descreve como
                coletamos, usamos e protegemos suas informações pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">2. Coleta de Informações</h2>
              <p>Coletamos as seguintes informações quando você adquire nosso e-book:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Nome</li>
                <li>Endereço de e-mail</li>
                <li>Informações de pagamento (processadas de forma segura por nosso provedor de pagamentos)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">3. Uso das Informações</h2>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Processar sua compra e fornecer acesso ao e-book</li>
                <li>Enviar atualizações e informações relacionadas ao produto</li>
                <li>Responder a suas perguntas e fornecer suporte ao cliente</li>
                <li>Melhorar nossos produtos e serviços</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">4. Proteção de Dados</h2>
              <p>
                Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado,
                alteração, divulgação ou destruição. Seus dados são armazenados em servidores seguros e criptografados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">5. Compartilhamento de Informações</h2>
              <p>
                Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando
                necessário para fornecer os serviços solicitados (como processamento de pagamentos) ou quando exigido
                por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">6. Cookies e Tecnologias Similares</h2>
              <p>
                Nosso site pode usar cookies para melhorar a experiência do usuário. Você pode configurar seu navegador
                para recusar cookies, mas isso pode afetar a funcionalidade de algumas partes do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">7. Seus Direitos</h2>
              <p>Você tem o direito de:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Acessar, corrigir ou excluir suas informações pessoais</li>
                <li>Retirar seu consentimento para o processamento de seus dados</li>
                <li>Solicitar a portabilidade de seus dados</li>
                <li>Apresentar uma reclamação a uma autoridade de proteção de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">8. Alterações na Política de Privacidade</h2>
              <p>
                Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente
                para se manter informado sobre quaisquer mudanças.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#4A3419] mb-4">9. Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco através dos canais de
                suporte fornecidos no momento da compra.
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

