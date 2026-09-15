import React from 'react';
import { Star, CheckCircle, ShieldCheck, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA } from '../data/printers';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Verified Commercial Buyers
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Trusted by 2,400+ Offices Nationwide
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Read real feedback from business owners, architects, medical offices, and accountants.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="text-center pr-3 border-r border-slate-200">
              <div className="text-2xl font-black text-slate-900 font-display">4.8</div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-xs">
              <div className="font-bold text-slate-800">Overall Satisfaction</div>
              <div className="text-slate-500">Based on 1,840+ verified deliveries</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  "{review.title}"
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {review.content}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{review.author}</div>
                  <div className="text-[11px] text-slate-500">{review.role} • {review.company}</div>
                </div>

                {review.verifiedBuyer && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
