import { motion } from "framer-motion";
import Navbar from "./navbar";
import Footer from "./footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden px-4 md:px-8 py-12 md:py-16 mt-16">
        <div className="max-w-4xl mx-auto text-white">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Política de Privacidade – NEXTJAI
          </motion.h1>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introdução</h2>
              <p className="mb-3 text-gray-200">
                Na NEXTJAI, valorizamos a sua privacidade e estamos comprometidos com a proteção dos seus dados pessoais. 
                Esta Política de Privacidade descreve como recolhemos, utilizamos, armazenamos e protegemos as 
                informações que nos fornece ao utilizar o nosso website e os nossos serviços.
              </p>
              <p className="text-gray-200">
                Ao utilizar o nosso site ou fornecer os seus dados pessoais, o utilizador consente com as práticas descritas nesta política.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Responsável pelo Tratamento de Dados</h2>
              <p className="mb-2 text-gray-200">NEXTJAI</p>
              <p className="mb-2 text-gray-200">Email: nextjai.automation@gmail.com</p>
              <p className="text-gray-200">Telefone: +351 915 417 824</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Que dados pessoais recolhemos</h2>
              <p className="mb-3 text-gray-200">Recolhemos e tratamos os seguintes dados:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Informações de contacto: nome, apelido, endereço de e-mail, número de telemóvel.</li>
                <li>Dados comerciais: nome da empresa, cargo, necessidades ou interesses comerciais.</li>
                <li>Dados técnicos: endereço IP, tipo de navegador, sistema operativo, páginas visitadas e tempo de visita (via cookies e ferramentas de análise).</li>
                <li>Comunicações: mensagens enviadas através de formulários de contacto, email ou chat.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Finalidades do tratamento de dados</h2>
              <p className="mb-3 text-gray-200">Os dados recolhidos são utilizados para:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Fornecer e gerir os nossos serviços de automação e inteligência artificial;</li>
                <li>Contactar os utilizadores para fins comerciais, apoio ao cliente ou propostas personalizadas;</li>
                <li>Melhorar o funcionamento do website e a experiência do utilizador;</li>
                <li>Enviar campanhas de marketing automatizadas via email, SMS ou WhatsApp;</li>
                <li>Gerir e manter atualizado o CRM;</li>
                <li>Cumprir obrigações legais.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Base legal para o tratamento</h2>
              <p className="mb-3 text-gray-200">Tratamos os seus dados com base nas seguintes bases legais:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Consentimento: quando subscreve comunicações ou nos contacta voluntariamente.</li>
                <li>Execução de contrato: para fornecimento dos serviços contratados.</li>
                <li>Interesse legítimo: para fins de marketing direto e melhoria dos nossos serviços.</li>
                <li>Obrigação legal: quando exigido por lei ou autoridades competentes.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Partilha de dados com terceiros</h2>
              <p className="mb-3 text-gray-200">Os seus dados poderão ser partilhados com:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Fornecedores e parceiros que nos prestem serviços técnicos, de alojamento ou de comunicação (ex: plataformas de email marketing, servidores cloud);</li>
                <li>Consultores legais ou financeiros, se necessário;</li>
                <li>Autoridades competentes, em caso de obrigação legal.</li>
              </ul>
              <p className="mt-3 text-gray-200">
                A NEXTJAI garante que todos os terceiros cumprem com a legislação de proteção de dados aplicável e apenas tratam os dados conforme instruções contratuais.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Transferência internacional de dados</h2>
              <p className="mb-3 text-gray-200">
                Em alguns casos, os seus dados poderão ser transferidos para fora do Espaço Económico Europeu (EEE), 
                nomeadamente para plataformas de automação ou cloud computing. Nestes casos, garantimos que:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Os países oferecem um nível de proteção adequado reconhecido pela Comissão Europeia; ou</li>
                <li>São adotadas cláusulas contratuais-tipo aprovadas pela UE.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Conservação dos dados</h2>
              <p className="mb-3 text-gray-200">
                Conservamos os seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram recolhidos, 
                salvo obrigação legal em contrário.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Dados de contacto: até 5 anos após o último contacto relevante.</li>
                <li>Dados comerciais ou contratuais: durante o período contratual + 6 anos.</li>
                <li>Dados de marketing: até ao momento em que retire o seu consentimento.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Direitos dos titulares de dados</h2>
              <p className="mb-3 text-gray-200">Nos termos do RGPD, tem os seguintes direitos:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Acesso aos seus dados;</li>
                <li>Retificação de dados inexatos ou incompletos;</li>
                <li>Eliminação dos dados ("direito ao esquecimento");</li>
                <li>Limitação do tratamento;</li>
                <li>Oposição ao tratamento;</li>
                <li>Portabilidade dos dados;</li>
                <li>Retirar o consentimento a qualquer momento (quando aplicável).</li>
              </ul>
              <p className="mt-3 text-gray-200">
                Para exercer os seus direitos, envie um pedido para nextjai.automation@gmail.com .
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Segurança dos dados</h2>
              <p className="mb-3 text-gray-200">
                Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados contra perda, 
                acesso não autorizado, alteração ou divulgação indevida.
              </p>
              <p className="text-gray-200">
                As comunicações são protegidas por encriptação SSL/TLS e os dados são armazenados em servidores seguros.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Cookies e tecnologias semelhantes</h2>
              <p className="mb-3 text-gray-200">O nosso website utiliza cookies para:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-200">
                <li>Analisar o comportamento de navegação (Google Analytics ou ferramentas similares);</li>
                <li>Memorizar preferências do utilizador;</li>
                <li>Oferecer funcionalidades de marketing personalizadas.</li>
              </ul>
              <p className="mt-3 text-gray-200">
                Pode gerir ou desativar cookies nas configurações do seu navegador. 
                Ao continuar a utilizar o site, concorda com o uso de cookies.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Marketing e comunicações automatizadas</h2>
              <p className="text-gray-200">
                Poderemos enviar comunicações comerciais, campanhas automatizadas e notificações via email, SMS ou WhatsApp 
                com base nos seus dados e comportamentos. Pode optar por não receber estas comunicações clicando em 
                "cancelar subscrição" em qualquer mensagem ou contactando-nos diretamente.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">13. Alterações a esta Política</h2>
              <p className="mb-3 text-gray-200">
                Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. 
                As alterações serão publicadas nesta página com data de atualização. Recomendamos que reveja regularmente.
              </p>
              <p className="text-gray-200">
                <strong>Última atualização:</strong> 03 de julho de 2025
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">14. Contactos</h2>
              <p className="mb-3 text-gray-200">
                Se tiver dúvidas ou preocupações sobre esta Política de Privacidade, contacte-nos:
              </p>
              <p className="mb-2 text-gray-200">Email: nextjai.automation@gmail.com</p>
              <p className="text-gray-200">Telefone: +351 915 417 824</p>
            </section>
          </motion.div>
        </div>
      </main>
      <div className="relative w-full">
        {/* Linha divisória animada antes do footer */}
        <motion.div 
        className="w-full flex justify-center mb-4" 
        initial={{ opacity: 0, scaleX: 0.8 }} 
        whileInView={{ opacity: 1, scaleX: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7 }}
        >
        <div className="h-1 w-11/12 md:w-3/4 bg-gradient-to-r from-white/10 via-white/60 to-white/10 rounded-full" style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
        </motion.div>
        {/* Neon glow effect behind the footer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" style={{ filter: 'blur(1px)' }} />
    </div>
    <Footer />
    </div>
  );
}
