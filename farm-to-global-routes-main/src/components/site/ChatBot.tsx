import { Link } from "@tanstack/react-router";
import { ArrowUp, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";

import { CoffeeBear } from "@/components/site/CoffeeBear";
import { WhatsAppButton, WhatsAppIcon } from "@/components/site/WhatsAppButton";
import { company, whatsapp, whatsappLink } from "@/data/site";
import { getReply, greeting, type BotReply, type ChatAction } from "@/lib/chat-knowledge";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  actions?: ChatAction[] | undefined;
};

const NUDGE_KEY = "lealvin-chat-nudge-dismissed";

const readNudgeDismissed = () => {
  try {
    return window.sessionStorage.getItem(NUDGE_KEY) === "1";
  } catch {
    return false;
  }
};

const writeNudgeDismissed = () => {
  try {
    window.sessionStorage.setItem(NUDGE_KEY, "1");
  } catch {
    /* storage can be unavailable (private mode); the nudge just reappears */
  }
};

/** Three bouncing coffee beans while Beanie "types". */
function TypingBeans() {
  return (
    <div
      className="flex items-center gap-1.5 px-1 py-1.5"
      aria-label="Beanie is typing"
      role="status"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block h-3 w-2 rounded-full bg-clay"
          style={{ rotate: 25 }}
          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function ActionButton({ action, onNavigate }: { action: ChatAction; onNavigate: () => void }) {
  const base =
    "inline-flex items-center gap-2 rounded-full border border-gold/60 bg-card px-4 py-2 text-[0.7rem] font-semibold tracking-[0.14em] text-foreground uppercase transition-colors hover:bg-gold hover:text-gold-foreground";

  if (action.kind === "whatsapp" && action.href) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" className={base}>
        <WhatsAppIcon className="size-4" />
        {action.label}
      </a>
    );
  }
  if (action.kind === "route" && action.to) {
    return (
      <Link to={action.to} onClick={onNavigate} className={base}>
        {action.label}
      </Link>
    );
  }
  return null;
}

export function ChatBot() {
  const reduceMotion = useReducedMotion() ?? false;
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [greeted, setGreeted] = useState(false);
  const [nudge, setNudge] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [wavingNow, setWavingNow] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "bot", text: greeting.text },
  ]);
  const [suggestions, setSuggestions] = useState<string[]>(greeting.suggestions ?? []);

  const nextId = useRef(1);
  const replyTimer = useRef<number | undefined>(undefined);
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Clear any pending reply on unmount. */
  useEffect(() => () => window.clearTimeout(replyTimer.current), []);

  /* Friendly nudge bubble a few seconds after load, unless dismissed already. */
  useEffect(() => {
    if (readNudgeDismissed()) return;
    const show = window.setTimeout(() => setNudge(true), 4500);
    const hide = window.setTimeout(() => setNudge(false), 16000);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  /* Beanie waves every so often while the chat is closed. */
  useEffect(() => {
    if (open || reduceMotion) return;
    let stop: number | undefined;
    const wave = () => {
      setWavingNow(true);
      stop = window.setTimeout(() => setWavingNow(false), 2100);
    };
    const first = window.setTimeout(wave, 1500);
    const every = window.setInterval(wave, 11000);
    return () => {
      window.clearTimeout(first);
      window.clearTimeout(stop);
      window.clearInterval(every);
    };
  }, [open, reduceMotion]);

  /* Wave on first open. */
  useEffect(() => {
    if (!open || greeted) return;
    setGreeted(true);
    setWavingNow(true);
    const stop = window.setTimeout(() => setWavingNow(false), 2100);
    return () => window.clearTimeout(stop);
  }, [open, greeted]);

  /* Focus the field on open; close with Escape. */
  useEffect(() => {
    if (!open) return;
    const focus = window.setTimeout(() => inputRef.current?.focus(), 250);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focus);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* Keep the newest message in view. */
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
  }, [messages, typing, suggestions, reduceMotion]);

  const toggle = useCallback(() => {
    setOpen((current) => !current);
    setNudge(false);
    writeNudgeDismissed();
  }, []);

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || typing) return;

      setMessages((current) => [...current, { id: nextId.current++, role: "user", text }]);
      setInput("");
      setSuggestions([]);
      setTyping(true);

      const reply: BotReply = getReply(text);
      const delay = 550 + Math.min(reply.text.length * 4, 900);

      replyTimer.current = window.setTimeout(() => {
        setTyping(false);
        setMessages((current) => [
          ...current,
          { id: nextId.current++, role: "bot", text: reply.text, actions: reply.actions },
        ]);
        setSuggestions(reply.suggestions ?? []);
      }, delay);
    },
    [typing],
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send(input);
  };

  return (
    <>
      <WhatsAppButton hidden={open} />

      {/* Chat window */}
      <AnimatePresence>
        {open ? (
          <motion.section
            key="panel"
            role="dialog"
            aria-label="Chat with Beanie, the LeAlvin coffee concierge"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed z-50 flex flex-col overflow-hidden rounded-2xl border border-gold/40 bg-background shadow-elevated max-sm:inset-3 sm:right-5 sm:bottom-28 sm:h-[min(36rem,calc(100dvh-8rem))] sm:w-96 lg:right-10"
          >
            {/* Header */}
            <header className="surface-espresso relative flex items-center gap-3 px-4 py-3">
              <div className="relative flex size-14 shrink-0 items-end justify-center overflow-hidden rounded-full border border-gold/50 bg-sand">
                <CoffeeBear className="mt-1 w-12" waving={wavingNow} thinking={typing} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg leading-tight">Beanie</p>
                <p className="flex items-center gap-2 text-xs text-espresso-muted">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold/60 motion-reduce:animate-none" />
                    <span className="relative inline-flex size-2 rounded-full bg-gold" />
                  </span>
                  {company.brand} coffee concierge
                </p>
              </div>
              <button
                type="button"
                onClick={toggle}
                aria-label="Close chat"
                className="flex size-9 items-center justify-center rounded-full text-espresso-muted transition-colors hover:bg-espresso-foreground/10 hover:text-gold"
              >
                <X className="size-5" />
              </button>
            </header>

            {/* Messages */}
            <div
              ref={scroller}
              className="chat-scroll flex-1 space-y-4 overflow-y-auto bg-sand/60 px-4 py-5"
              aria-live="polite"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.28 }}
                  className={cn(
                    "flex flex-col gap-2",
                    message.role === "user" ? "items-end" : "items-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line",
                      message.role === "user"
                        ? "rounded-br-sm bg-primary text-primary-foreground"
                        : "rounded-bl-sm border border-border bg-card text-card-foreground",
                    )}
                  >
                    {message.text}
                  </div>
                  {message.actions?.length ? (
                    <div className="flex max-w-[92%] flex-wrap gap-2">
                      {message.actions.map((action) => (
                        <ActionButton
                          key={action.label}
                          action={action}
                          onNavigate={() => setOpen(false)}
                        />
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}

              {typing ? (
                <div className="flex items-start">
                  <div className="rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-2">
                    <TypingBeans />
                  </div>
                </div>
              ) : null}

              {!typing && suggestions.length > 0 ? (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => send(suggestion)}
                      className="rounded-full border border-clay/40 bg-background px-3.5 py-1.5 text-xs text-clay transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              ) : null}
            </div>

            {/* WhatsApp hand-off */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border-t border-border bg-card px-4 py-2 text-[0.7rem] font-semibold tracking-[0.14em] text-clay uppercase transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <WhatsAppIcon className="size-4" />
              Prefer WhatsApp? {whatsapp.display}
            </a>

            {/* Composer */}
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 border-t border-border bg-background p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about our coffee…"
                aria-label="Type your message"
                maxLength={400}
                autoComplete="off"
                className="min-w-0 flex-1 rounded-full border border-input bg-card px-4 py-2.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent sm:text-sm"
              />
              <button
                type="submit"
                aria-label="Send message"
                disabled={typing || input.trim().length === 0}
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground transition-all hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-40"
              >
                <ArrowUp className="size-5" />
              </button>
            </form>
          </motion.section>
        ) : null}
      </AnimatePresence>

      {/* Nudge bubble */}
      <AnimatePresence>
        {nudge && !open ? (
          <motion.div
            key="nudge"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ transformOrigin: "bottom right" }}
            className="fixed right-[6.75rem] bottom-9 z-40 hidden max-w-60 sm:block lg:right-[8.75rem]"
          >
            <div className="relative rounded-2xl rounded-br-sm border border-gold/50 bg-card py-3 pr-9 pl-4 text-sm shadow-elevated">
              <button
                type="button"
                onClick={toggle}
                className="text-left"
                aria-label="Open chat with Beanie"
              >
                <span className="font-display">Fancy a coffee chat?</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Ask Beanie about grades, samples &amp; shipping.
                </span>
              </button>
              <button
                type="button"
                aria-label="Dismiss"
                onClick={() => {
                  setNudge(false);
                  writeNudgeDismissed();
                }}
                className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        type="button"
        onClick={toggle}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        aria-label={open ? "Close chat" : "Chat with Beanie, our coffee concierge"}
        aria-expanded={open}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "fixed right-5 bottom-6 z-50 flex size-[4.5rem] items-end justify-center overflow-hidden rounded-full border-2 border-gold bg-sand shadow-elevated lg:right-10",
          open && "max-sm:hidden",
        )}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex size-full items-center justify-center bg-espresso text-gold"
            >
              <X className="size-7" />
            </motion.span>
          ) : (
            <motion.span
              key="bear"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex size-full items-end justify-center"
            >
              <CoffeeBear className="mb-0.5 w-[3.6rem]" waving={wavingNow || hovering} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
