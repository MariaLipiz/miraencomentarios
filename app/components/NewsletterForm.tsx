// components/NewsletterForm.tsx


export default function NewsletterForm() {
  return (
    <form
      action="https://app.convertkit.com/forms/93dbfde7f0/subscriptions"
      method="post"
      className="w-full max-w-md mx-auto space-y-4"
    >
      <div className="flex">
        <input
          type="email"
          name="email_address"
          placeholder="Tu email más loco"
          required
          className="flex-1 px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-900"
        >
          Suscribirme
        </button>
      </div>

      <div className="text-sm text-gray-700">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="terms"
            required
            className="mt-1"
          />
          <span>
            Acepto los{" "}
            <a
              href="/terminos"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black"
            >
              términos y condiciones
            </a>
            .
          </span>
        </label>
      </div>
    </form>
  );
}


