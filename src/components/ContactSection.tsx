import React, { useState } from 'react';
import { 
  Building2, 
  PhoneCall, 
  Mail, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Hardware Compatibility & Availability',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact-section" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Business Transparency
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Contact PrintTech Direct & Logistics Depot
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Direct customer assistance, hardware consultation, and order tracking support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Business Details & Address */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Headquarters & Domestic Depot
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <div className="font-bold text-slate-800">PrintTech Direct Solutions LLC</div>
                  <div>450 Technology Parkway, Suite 300</div>
                  <div>Peachtree Corners, GA 30092</div>
                  <div className="text-slate-400">United States</div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <PhoneCall className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Toll-Free Hotline: 1-888-676-9138</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 font-semibold">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Customer Desk: support@printtechdirect.com</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-800">Hours of Operation (Eastern Time):</div>
                    <div>Mon – Fri: 8:00 AM – 8:00 PM EST</div>
                    <div>Sat: 9:00 AM – 5:00 PM EST</div>
                    <div className="text-emerald-700 font-semibold text-[11px] mt-1">Average Response SLA: Under 45 minutes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Ads Compliance Box */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-900 space-y-1.5">
              <span className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Commercial Entity & Return Address
              </span>
              <p className="text-[11px] text-blue-800 leading-relaxed">
                All customer returns with authorized RMA numbers should be addressed to our Peachtree Corners Logistics Receiving Dock. Contact support first for your complimentary prepaid return shipping label.
              </p>
            </div>
          </div>

          {/* Interactive Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 font-display mb-1">
                Send an Inquiry or Tracking Request
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Submit your inquiry and our commercial support specialists will follow up immediately.
              </p>

              {formSent ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Message Successfully Transmitted</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Thank you, {formData.name}. Ticket #PT-{Math.floor(1000 + Math.random() * 9000)} has been generated. We will reply to {formData.email} shortly.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-xs text-blue-600 font-semibold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Inquiry Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Hardware Compatibility & Availability">Hardware Compatibility & Availability</option>
                      <option value="Order Tracking & Freight Inquiries">Order Tracking & Freight Status</option>
                      <option value="RMA Return & Exchange Request">RMA Return & Exchange Request</option>
                      <option value="Bulk Purchase / Educational Tax Exemption">Bulk Fleet / Tax-Exempt Discount</option>
                      <option value="OEM Warranty Registration Assistance">OEM Warranty Registration Assistance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Your Message or Question *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please specify printer model numbers, estimated volume, or order number..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
