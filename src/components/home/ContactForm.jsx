export const ContactForm = () => {
  return (
    <section className="rounded md:flex">
      <div className="flex-1 bg-slate-900 p-5">
        <h3 className="text-xl md:text-3xl font-medium text-white">
          Love to hear from you, <br />
          Get in touch 👋🏼
        </h3>
      </div>
      <form className="flex-1 p-5 bg-slate-200 text-sm">
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="name">
            Your name
          </label>
          <input
            autoComplete="off"
            className="p-1 rounded shadow-sm bg-slate-50 focus:bg-white"
            id="username"
            name="name"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">
            Your email
          </label>
          <input
            autoComplete="off"
            className="p-1 rounded shadow-sm bg-slate-50 focus:bg-white"
            id="email"
            name="email"
            type="email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="message">
            Your message
          </label>
          <textarea
            className="p-1 bg-slate-50 focus:bg-white rounded"
            id="message"
            name="message"
          />
        </div>

        <button className="px-5 py-1 bg-white mt-2 rounded border-[1px] border-slate-900 transition-colors hover:bg-slate-900 hover:text-white">
          Send
        </button>
      </form>
    </section>
  )
}
