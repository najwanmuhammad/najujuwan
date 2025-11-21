"use client";

import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Info Text */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Let's work <br />
            <span className="text-primary">together.</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            I'm currently seeking an internship opportunity as a Software
            Engineer. Ready to join your team as soon as next month. Open to
            both remote and on-site roles.
          </p>

          <div className="space-y-4 text-neutral-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <span>
                <a href="mailto:muhammad.najwanzf@gmail.com">
                  muhammad.najwanzf@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <span>Indonesia (Available Remote/On-site)</span>
            </div>
          </div>
        </div>

        {/* Right: The Form */}
        <form className="bg-neutral-900/50 border border-white/10 p-8 rounded-3xl space-y-6 backdrop-blur-sm">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400">Name</label>
            <input
              type="text"
              placeholder="Elon Musk"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400">
              Email
            </label>
            <input
              type="email"
              placeholder="company@company.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Hi Najwan, we'd like to interview you..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button
            type="button"
            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
