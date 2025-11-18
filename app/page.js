'use client';

import { useState } from 'react';

export default function Home() {
  const [duration, setDuration] = useState(30);
  const [copied, setCopied] = useState(false);

  const scripts = {
    30: {
      bengali: `🎬 বিশ্বাস কোম্পানি থেকে 3 মাসের ভিডিও এডিটিং কোর্স শেষ করলাম!

✅ Premiere Pro-এর A to Z শিখেছি
✅ Canva Pro & Video Editing Bundle পেয়েছি
✅ 24/7 গাইড ও সাপোর্ট পেয়েছি

👨‍🏫 কুন্তল স্যার ও সুদীপ স্যার-এর মতো দক্ষ মেন্টর পেয়েছি

🔥 এখন আমি প্রফেশনাল ভিডিও এডিটর!

📞 আপনিও শিখতে চান? বিশ্বাস কোম্পানিতে যোগ দিন!

#VideoEditing #PremiereProBangla #বিশ্বাসকোম্পানি`,

      english: `🎬 Just completed 3-month Video Editing course from Bishwas Company!

✅ Mastered Premiere Pro A to Z
✅ Got Canva Pro & Video Editing Bundle
✅ 24/7 guidance & support received

👨‍🏫 Amazing mentors: Kuntal Sir & Sudip Sir

🔥 Now I'm a Professional Video Editor!

📞 Want to learn? Join Bishwas Company!

#VideoEditing #PremierePro #BishwasCompany`,

      keyPoints: [
        "Opening: আমি বিশ্বাস কোম্পানি থেকে ভিডিও এডিটিং কোর্স করেছি",
        "Premiere Pro সফটওয়্যার এর A to Z শিখেছি",
        "Canva Pro ও Video Editing Bundle পেয়েছি",
        "24/7 গাইড ও সাপোর্ট",
        "কুন্তল স্যার ও সুদীপ স্যার এর অসাধারণ সহযোগিতা",
        "Closing: এখন প্রফেশনাল ভিডিও এডিটর"
      ]
    },
    45: {
      bengali: `🎥 আমার সাফল্যের গল্প - বিশ্বাস কোম্পানি ✨

আমি 3 মাসের ভিডিও এডিটিং কোর্স করেছি এবং এটা ছিল অসাধারণ একটা অভিজ্ঞতা!

📚 কী কী শিখেছি:
✅ Adobe Premiere Pro - সম্পূর্ণ A to Z
✅ Canva Pro দিয়ে গ্রাফিক্স ডিজাইন
✅ প্রফেশনাল ভিডিও এডিটিং টেকনিক
✅ Video Editing Bundle (সব টুলস)

🌟 বিশেষ সুবিধা:
✅ 24 ঘন্টা গাইড ও সাপোর্ট
✅ কুন্তল স্যার ও সুদীপ স্যার - দুজন অসাধারণ মেন্টর
✅ প্র্যাক্টিক্যাল প্রজেক্ট ভিত্তিক শিক্ষা

💼 এখন আমি একজন কনফিডেন্ট ভিডিও এডিটর!

🔗 আপনিও শিখতে চান? বিশ্বাস কোম্পানিতে যোগ দিন আজই!

#VideoEditing #BishwasCompany #PremiereProBangla #CanvaPro #SkillDevelopment`,

      english: `🎥 My Success Story - Bishwas Company ✨

I completed 3-month Video Editing course and it was an amazing experience!

📚 What I Learned:
✅ Adobe Premiere Pro - Complete A to Z
✅ Graphic Design with Canva Pro
✅ Professional Video Editing Techniques
✅ Complete Video Editing Bundle

🌟 Special Benefits:
✅ 24-hour guidance & support
✅ Kuntal Sir & Sudip Sir - Amazing mentors
✅ Practical project-based learning

💼 Now I'm a confident Video Editor!

🔗 Want to learn? Join Bishwas Company today!

#VideoEditing #BishwasCompany #PremierePro #CanvaPro #SkillDevelopment`,

      keyPoints: [
        "Opening: আমার সাফল্যের গল্প শেয়ার করছি",
        "3 মাসের কোর্স সম্পন্ন করেছি",
        "Premiere Pro-এর সম্পূর্ণ শিক্ষা",
        "Canva Pro এবং Video Editing Bundle",
        "24 ঘন্টা গাইড ও সাপোর্ট সিস্টেম",
        "কুন্তল স্যার ও সুদীপ স্যার এর মেন্টরশিপ",
        "প্র্যাক্টিক্যাল প্রজেক্ট শিখেছি",
        "Closing: এখন প্রফেশনাল ভিডিও এডিটর, আপনিও যোগ দিন"
      ]
    }
  };

  const currentScript = scripts[duration];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            🎬 ভিডিও টেস্টিমোনিয়াল স্ক্রিপ্ট জেনারেটর
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            বিশ্বাস কোম্পানি - ভিডিও এডিটিং কোর্স
          </p>
        </div>

        {/* Duration Selector */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '20px',
            color: '#333'
          }}>
            ⏱️ ভিডিও ডিউরেশন নির্বাচন করুন
          </h2>
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setDuration(30)}
              style={{
                flex: '1',
                minWidth: '200px',
                padding: '20px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                background: duration === 30 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f0f0f0',
                color: duration === 30 ? 'white' : '#333',
                transform: duration === 30 ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
                boxShadow: duration === 30 ? '0 5px 15px rgba(102, 126, 234, 0.4)' : 'none'
              }}
            >
              30 সেকেন্ড
            </button>
            <button
              onClick={() => setDuration(45)}
              style={{
                flex: '1',
                minWidth: '200px',
                padding: '20px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                background: duration === 45 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f0f0f0',
                color: duration === 45 ? 'white' : '#333',
                transform: duration === 45 ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
                boxShadow: duration === 45 ? '0 5px 15px rgba(102, 126, 234, 0.4)' : 'none'
              }}
            >
              45 সেকেন্ড
            </button>
          </div>
        </div>

        {/* Scripts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '30px'
        }}>
          {/* Bengali Script */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#667eea',
                fontWeight: 'bold'
              }}>
                🇧🇩 বাংলা স্ক্রিপ্ট
              </h3>
              <button
                onClick={() => copyToClipboard(currentScript.bengali)}
                style={{
                  padding: '10px 20px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                {copied ? '✓ কপি হয়েছে!' : '📋 কপি করুন'}
              </button>
            </div>
            <pre style={{
              whiteSpace: 'pre-wrap',
              fontFamily: 'inherit',
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#333',
              background: '#f9f9f9',
              padding: '20px',
              borderRadius: '10px',
              border: '2px solid #e0e0e0'
            }}>
              {currentScript.bengali}
            </pre>
          </div>

          {/* English Script */}
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#764ba2',
                fontWeight: 'bold'
              }}>
                🇬🇧 English Script
              </h3>
              <button
                onClick={() => copyToClipboard(currentScript.english)}
                style={{
                  padding: '10px 20px',
                  background: '#764ba2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
            </div>
            <pre style={{
              whiteSpace: 'pre-wrap',
              fontFamily: 'inherit',
              fontSize: '1rem',
              lineHeight: '1.8',
              color: '#333',
              background: '#f9f9f9',
              padding: '20px',
              borderRadius: '10px',
              border: '2px solid #e0e0e0'
            }}>
              {currentScript.english}
            </pre>
          </div>
        </div>

        {/* Key Points */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#667eea',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            📌 গুরুত্বপূর্ণ পয়েন্টস (ভিডিওতে হাইলাইট করুন)
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            {currentScript.keyPoints.map((point, index) => (
              <li key={index} style={{
                padding: '15px',
                marginBottom: '10px',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                borderRadius: '10px',
                borderLeft: '5px solid #667eea',
                fontSize: '1.1rem',
                fontWeight: '500'
              }}>
                <span style={{ color: '#667eea', fontWeight: 'bold' }}>
                  {index + 1}.
                </span> {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Production Tips */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '15px',
          padding: '30px',
          marginTop: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#764ba2',
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            🎥 ভিডিও প্রোডাকশন টিপস
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {[
              { icon: '💡', title: 'ভালো লাইটিং', desc: 'প্রাকৃতিক আলো বা রিং লাইট ব্যবহার করুন' },
              { icon: '🎤', title: 'ক্লিয়ার অডিও', desc: 'ভালো মাইক্রোফোন ব্যবহার করুন' },
              { icon: '📱', title: 'স্ট্যাবল শট', desc: 'ট্রাইপড বা স্ট্যাবিলাইজার ব্যবহার করুন' },
              { icon: '✨', title: 'এনার্জেটিক', desc: 'উৎসাহী ও আত্মবিশ্বাসী থাকুন' },
              { icon: '🎬', title: 'B-Roll', desc: 'কোর্স, সার্টিফিকেট দেখান' },
              { icon: '🎵', title: 'ব্যাকগ্রাউন্ড মিউজিক', desc: 'হালকা ও আকর্ষণীয় মিউজিক যোগ করুন' }
            ].map((tip, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '2px solid #f0f0f0'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{tip.icon}</div>
                <h4 style={{ color: '#667eea', marginBottom: '10px', fontSize: '1.2rem' }}>{tip.title}</h4>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '40px',
          padding: '20px',
          opacity: 0.9
        }}>
          <p style={{ fontSize: '1.1rem' }}>
            ⭐ বিশ্বাস কোম্পানি - আপনার দক্ষতা উন্নয়নের সঙ্গী ⭐
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
            Made with ❤️ for Video Editing Students
          </p>
        </div>
      </div>
    </div>
  );
}
