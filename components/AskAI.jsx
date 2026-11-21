"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp, FiMessageCircle, FiX } from "react-icons/fi";

const EMAIL = "wijesinghe.anj@gmail.com";
const GREETING =
  "Hi! I'm Siluni's portfolio assistant. What would you like to know about her work?";
const SUGGESTIONS = [
  "What has Siluni built?",
  "Tell me about her internship",
  "What's her tech stack?",
  "How can I contact her?",
];

const AskAI = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, open]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    let reply;
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.reply) reply = data.reply;
      else if (res.status === 429)
        reply = "You're asking quickly! Please wait a few minutes and try again.";
      else if (data.error === "not_configured")
        reply = `The assistant isn't switched on yet. You can reach Siluni directly at ${EMAIL}.`;
      else
        reply =
          `Sorry, I couldn't answer that just now. You can email Siluni at ${EMAIL}.` +
          (data.detail ? `\n\n[dev] ${data.provider} ${data.status}: ${data.detail}` : "");
    } catch {
      reply = `Sorry, something went wrong. You can email Siluni at ${EMAIL}.`;
    }
    setMessages((m) => [...m, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-label="Ask AI about Siluni"
            className="flex h-[min(560px,calc(100svh-6rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden
                       rounded-2xl border border-white/10 bg-[#0a110e]/95 shadow-2xl shadow-black/60 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-400 text-xs font-bold text-[#06100b]">
                S.
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">Siluni&apos;s AI Assistant</p>
                <p className="text-[11px] text-white/40">Projects, skills &amp; experience</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white/40 transition-colors hover:text-emerald-400"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.06] px-3.5 py-2.5 leading-relaxed text-white/80">
                {GREETING}
              </div>

              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-emerald-400/30 px-3 py-1.5 text-xs text-emerald-300 transition-colors hover:bg-emerald-400/10"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.role === "user"
                      ? "ml-auto rounded-tr-sm bg-emerald-400 text-[#06100b]"
                      : "rounded-tl-sm bg-white/[0.06] text-white/80"
                  }`}
                >
                  {m.content}
                </div>
              ))}

              {loading && (
                <div className="flex w-fit gap-1 rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-1.5 pl-3 pr-1.5 focus-within:border-emerald-400/50">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  maxLength={500}
                  placeholder="Ask about Siluni..."
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim() || loading}
                  aria-label="Send"
                  className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-400 text-[#06100b] transition-opacity disabled:opacity-30"
                >
                  <FiArrowUp size={16} />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-white/25">
                AI can make mistakes. Confirm details with Siluni.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full border border-white/15 bg-[#0b120f]/80 px-4 py-2.5 text-sm
                     font-medium text-white shadow-lg shadow-black/40 backdrop-blur-xl transition-colors
                     hover:border-emerald-400/50 hover:text-emerald-300"
        >
          <FiMessageCircle size={16} /> Ask AI
        </button>
      )}
    </div>
  );
};

export default AskAI;
