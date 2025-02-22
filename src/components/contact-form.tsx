export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div className="bg-black text-white p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Informação de contactos</h2>
        <p className="text-gray-400 mb-8">
          Diz algo para começar o chat em direto!
        </p>

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

        <div className="flex gap-4 mt-12">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            𝕏
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            in
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            fb
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Primeiro Nome</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-gray-200 focus:outline-none focus:border-black"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Último Nome</label>
            <input
              type="text"
              className="w-full h-10 px-3 rounded-md border border-gray-200 focus:outline-none focus:border-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full h-10 px-3 rounded-md border border-gray-200 focus:outline-none focus:border-black"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Número de Telefone</label>
            <input
              type="tel"
              className="w-full h-10 px-3 rounded-md border border-gray-200 focus:outline-none focus:border-black"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Assunto?</label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="subject" className="text-black" />
              <span>Marcar Reúnião</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="subject" className="text-black" />
              <span>Dúvida</span>
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

        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
          Enviar Mensagem
        </button>
      </div>
    </div>
  );
}
