"use client";

import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/24808904-f5c3-455b-8bda-a420985754e5";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD_CLASS =
  "rounded-[10px] border-[3px] border-ink bg-white px-3 py-[10px] text-[16px] text-ink outline-none focus:border-poke-blue";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[10px] border-[3px] border-grass-green bg-[#eaf7ec] px-4 py-8 text-center font-pixel text-[13px] leading-[1.8] text-grass-green">
        ✔ MESSAGE SENT
        <br />
        I&rsquo;LL BE IN TOUCH SOON!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="flex flex-col gap-[6px]">
        <span className="font-pixel text-[11px] text-ink">NAME</span>
        <input type="text" name="name" required className={FIELD_CLASS} />
      </label>

      <label className="flex flex-col gap-[6px]">
        <span className="font-pixel text-[11px] text-ink">EMAIL</span>
        <input type="email" name="email" required className={FIELD_CLASS} />
      </label>

      <label className="flex flex-col gap-[6px]">
        <span className="font-pixel text-[11px] text-ink">MESSAGE</span>
        <textarea name="message" required rows={4} className={`resize-none ${FIELD_CLASS}`} />
      </label>

      {status === "error" && (
        <div className="rounded-[10px] border-[3px] border-fire-red bg-[#fdece9] px-3 py-2 font-pixel text-[11px] text-fire-red">
          SOMETHING WENT WRONG — TRY AGAIN OR EMAIL ME DIRECTLY.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-xl border-4 border-ink bg-fire-red px-[24px] py-[15px] font-pixel text-sm tracking-wide text-white shadow-[5px_5px_0_#17171b] transition-transform duration-150 ease-out hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_#17171b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-x-0 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "SENDING..." : "▶ SEND MESSAGE"}
      </button>
    </form>
  );
}
