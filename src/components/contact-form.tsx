export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div className="bg-black text-white p-8 rounded-lg flex flex-col h-full relative overflow-hidden">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Informações de Contacto
          </h2>
          <p className="text-gray-400 mb-8">
            Diga algo para iniciar uma conversa!
          </p>
        </div>

        <div className="flex-grow mb-16 pl-4">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span>📞</span>
              <span>+102 3456 789</span>
            </div>
            <div className="flex items-center gap-4">
              <span>✉️</span>
              <span>demo@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Floating circles */}
        <div className="absolute bottom-[66px] right-[94px]">
          <div className="relative">
            <div className="absolute w-48 h-48 bg-gray-600 rounded-full opacity-60 animate-float-slow"></div>
            <div className="absolute w-40 h-40 bg-gray-500 rounded-full opacity-60 animate-float-fast -ml-16 mt-8"></div>
          </div>
        </div>

        <div className="flex gap-4 mt-auto">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-xl"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-xl"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nome</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-gray-200 focus:outline-none focus:border-black"
              placeholder="João"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Apelido</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-gray-200 focus:outline-none focus:border-black"
              placeholder="Silva"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full h-10 px-3 rounded-md border border-gray-200 focus:outline-none focus:border-black"
              placeholder="example@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Telemóvel</label>
            <input
              type="tel"
              className="w-full h-10 px-3 rounded-md border border-gray-200 focus:outline-none focus:border-black"
              placeholder="+1 234 567 890"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Qual o assunto?</label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="subject" className="text-black" />
              <span>Consulta Geral</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="subject" className="text-black" />
              <span>Orçamento</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Mensagem</label>
          <textarea
            className="w-full h-32 px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-black resize-none"
            placeholder="Escreva a sua mensagem..."
          />
        </div>

        <div className="flex justify-end">
          <button className="w-fit px-8 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
            Enviar Mensagem
          </button>
        </div>
      </div>
    </div>
  );
}
