#!/usr/bin/env node
/**
 * Page Generator Script for Prime One Hair & Skin Clinic
 * Generates unique SEO-optimized pages for all keyword slugs
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

// ============ CONTENT GENERATION HELPERS ============

function slugToTitle(slug) {
  return slug.replace(/-in-vadodara$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function slugToLower(slug) {
  return slug.replace(/-in-vadodara$/, '').replace(/-/g, ' ');
}

// Deterministic "random" based on string hash
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick(arr, slug, offset = 0) {
  return arr[(hashCode(slug) + offset) % arr.length];
}

function pickN(arr, slug, n) {
  const h = hashCode(slug);
  const result = [];
  const used = new Set();
  for (let i = 0; i < n && i < arr.length; i++) {
    let idx = (h + i * 7 + i * i) % arr.length;
    while (used.has(idx)) idx = (idx + 1) % arr.length;
    used.add(idx);
    result.push(arr[idx]);
  }
  return result;
}

// ============ CONTENT DATABASES ============

const HERO_PATTERNS = [
  (t) => `Advanced ${t} in Vadodara`,
  (t) => `Expert ${t} Solutions in Vadodara`,
  (t) => `Best ${t} in Vadodara`,
  (t) => `Professional ${t} in Vadodara`,
  (t) => `Trusted ${t} in Vadodara`,
  (t) => `Leading ${t} in Vadodara`,
  (t) => `Premium ${t} in Vadodara`,
  (t) => `${t} Experts in Vadodara`,
];

const SUBTITLE_PATTERNS = [
  (t) => `Clinically Proven Results with ${t}`,
  (t) => `Safe, Effective & Affordable ${t}`,
  (t) => `Transform Your Appearance with ${t}`,
  (t) => `Board-Certified Specialists for ${t}`,
  (t) => `Your Journey to Better Skin & Hair Starts Here`,
  (t) => `Evidence-Based ${t} That Actually Works`,
  (t) => `Personalized ${t} for Lasting Results`,
  (t) => `Where Science Meets Beauty`,
];

// Category detection
function getCategory(slug) {
  if (slug.includes('hair-transplant') || slug.includes('fue') || slug.includes('dhi') || slug.includes('beard-transplant') || slug.includes('moustache') || slug.includes('sideburn') || slug.includes('eyebrow-transplant')) return 'hair-transplant';
  if (slug.includes('hair-fall') || slug.includes('hair-loss') || slug.includes('hair-growth') || slug.includes('hair-thinning') || slug.includes('baldness') || slug.includes('alopecia') || slug.includes('receding') || slug.includes('hair-regrowth') || slug.includes('telogen') || slug.includes('androgenetic') || slug.includes('hair-volume') || slug.includes('thin-hair') || slug.includes('hair-density') || slug.includes('hair-breakage') || slug.includes('hair-strengthening') || slug.includes('postpartum-hair') || slug.includes('stress-hair') || slug.includes('female-pattern')) return 'hair-loss';
  if (slug.includes('prp') || slug.includes('gfc') || slug.includes('mesotherapy') || slug.includes('stem-cell') || slug.includes('exosome') || slug.includes('growth-factor') || slug.includes('platelet')) return 'prp';
  if (slug.includes('laser')) return 'laser';
  if (slug.includes('acne') || slug.includes('pimple') || slug.includes('blackhead') || slug.includes('whitehead') || slug.includes('comedonal')) return 'acne';
  if (slug.includes('pigmentation') || slug.includes('melasma') || slug.includes('dark-spot') || slug.includes('dark-circle') || slug.includes('dark-neck') || slug.includes('dark-lip') || slug.includes('dark-underarm') || slug.includes('dark-knee') || slug.includes('dark-elbow') || slug.includes('dark-inner') || slug.includes('skin-brightening') || slug.includes('skin-whitening') || slug.includes('fairness') || slug.includes('glowing') || slug.includes('skin-glow') || slug.includes('tan-removal') || slug.includes('sun-tan') || slug.includes('depigmentation') || slug.includes('glutathione') || slug.includes('freckles') || slug.includes('age-spot') || slug.includes('sun-damage') || slug.includes('hyperpigmentation') || slug.includes('skin-lightening') || slug.includes('skin-rejuvenation') || slug.includes('dull-skin') || slug.includes('uneven-skin') || slug.includes('skin-discoloration') || slug.includes('intimate-area') || slug.includes('bikini-area') || slug.includes('underarm-whitening') || slug.includes('skin-whitening-injection')) return 'pigmentation';
  if (slug.includes('botox') || slug.includes('filler') || slug.includes('anti-aging') || slug.includes('wrinkle') || slug.includes('fine-lines') || slug.includes('thread-lift') || slug.includes('face-lift') || slug.includes('skin-tightening') || slug.includes('hifu') || slug.includes('rf-skin') || slug.includes('jawline') || slug.includes('chin') || slug.includes('cheek') || slug.includes('nasolabial') || slug.includes('crow-feet') || slug.includes('laugh-lines') || slug.includes('neck-lift') || slug.includes('neck-wrinkle') || slug.includes('collagen-treatment') || slug.includes('v-shape') || slug.includes('face-slimming') || slug.includes('skin-lifting') || slug.includes('tear-trough') || slug.includes('nose-filler') || slug.includes('non-surgical-nose') || slug.includes('temple') || slug.includes('liquid-face') || slug.includes('vampire-face') || slug.includes('double-chin') || slug.includes('lip-enhancement') || slug.includes('face-fat') || slug.includes('face-contouring') || slug.includes('hand-rejuvenation') || slug.includes('forehead-wrinkle') || slug.includes('saggy-skin') || slug.includes('loose-skin') || slug.includes('skin-firming')) return 'anti-aging';
  if (slug.includes('facial') || slug.includes('hydrafacial') || slug.includes('chemical-peel') || slug.includes('carbon') || slug.includes('skin-polishing') || slug.includes('microdermabrasion') || slug.includes('skin-peeling') || slug.includes('o3-facial') || slug.includes('medi-facial') || slug.includes('vampire-facial') || slug.includes('dermapen') || slug.includes('bb-glow') || slug.includes('glass-skin') || slug.includes('korean') || slug.includes('aqua-peel') || slug.includes('jet-peel') || slug.includes('glycolic') || slug.includes('salicylic') || slug.includes('tca-peel') || slug.includes('lactic-acid') || slug.includes('face-cleanup') || slug.includes('gold-facial') || slug.includes('diamond-facial') || slug.includes('oxygen-facial') || slug.includes('led-facial') || slug.includes('photo-facial') || slug.includes('brightening-facial') || slug.includes('charcoal') || slug.includes('collagen-facial') || slug.includes('microneedling')) return 'facial';
  if (slug.includes('hair-spa') || slug.includes('keratin') || slug.includes('smoothening') || slug.includes('rebonding') || slug.includes('straightening') || slug.includes('hair-coloring') || slug.includes('hair-extension') || slug.includes('hair-weaving') || slug.includes('hair-bonding') || slug.includes('hair-replacement') || slug.includes('hair-wig') || slug.includes('hair-damage') || slug.includes('frizzy') || slug.includes('dry-hair') || slug.includes('grey-hair') || slug.includes('premature-grey')) return 'hair-care';
  if (slug.includes('scalp') || slug.includes('dandruff') || slug.includes('seborrheic') || slug.includes('oily-scalp') || slug.includes('itchy-scalp') || slug.includes('dry-scalp') || slug.includes('flaky-scalp') || slug.includes('scalp-micropigmentation')) return 'scalp';
  if (slug.includes('scar') || slug.includes('keloid') || slug.includes('subcision') || slug.includes('ice-pick') || slug.includes('hypertrophic') || slug.includes('chickenpox-scar') || slug.includes('burn-scar') || slug.includes('surgical-scar') || slug.includes('pimple-marks')) return 'scar';
  if (slug.includes('mole') || slug.includes('wart') || slug.includes('skin-tag') || slug.includes('corn') || slug.includes('callus') || slug.includes('cyst') || slug.includes('lipoma') || slug.includes('millia') || slug.includes('xanthelasma') || slug.includes('syringoma') || slug.includes('keratosis') || slug.includes('skin-growth') || slug.includes('skin-lesion') || slug.includes('fibroma') || slug.includes('verruca') || slug.includes('cherry-angioma')) return 'removal';
  if (slug.includes('eczema') || slug.includes('psoriasis') || slug.includes('vitiligo') || slug.includes('fungal') || slug.includes('ringworm') || slug.includes('rash') || slug.includes('urticaria') || slug.includes('hives') || slug.includes('lichen') || slug.includes('rosacea') || slug.includes('scabies') || slug.includes('herpes') || slug.includes('shingles') || slug.includes('infection') || slug.includes('molluscum') || slug.includes('cellulitis') || slug.includes('folliculitis') || slug.includes('dermatitis') || slug.includes('allergy') || slug.includes('itchy-skin') || slug.includes('dry-skin') || slug.includes('oily-skin') || slug.includes('sensitive-skin') || slug.includes('rough-skin') || slug.includes('dehydrated') || slug.includes('skin-boil') || slug.includes('skin-abscess')) return 'skin-condition';
  if (slug.includes('body-contouring') || slug.includes('fat-reduction') || slug.includes('coolsculpting') || slug.includes('inch-loss') || slug.includes('cellulite') || slug.includes('body-polishing') || slug.includes('body-sculpting') || slug.includes('lipolysis') || slug.includes('cryolipolysis') || slug.includes('tummy') || slug.includes('body-skin') || slug.includes('body-whitening') || slug.includes('stretch-mark')) return 'body';
  if (slug.includes('cost') || slug.includes('price')) return 'cost';
  if (slug.includes('bridal') || slug.includes('pre-wedding') || slug.includes('groom') || slug.includes('mens') || slug.includes('womens')) return 'bridal';
  if (slug.includes('doctor') || slug.includes('specialist') || slug.includes('clinic') || slug.includes('hospital') || slug.includes('dermatologist') || slug.includes('cosmetologist') || slug.includes('trichologist') || slug.includes('salon') || slug.includes('near-me')) return 'clinic';
  if (slug.includes('nail') || slug.includes('ingrown') || slug.includes('onychomycosis')) return 'nail';
  if (slug.includes('under-eye') || slug.includes('eye-bag') || slug.includes('puffy-eyes') || slug.includes('sunken-eyes') || slug.includes('hollowness')) return 'under-eye';
  if (slug.includes('lip-') || slug.includes('ear-lobe') || slug.includes('dimple') || slug.includes('skin-texture') || slug.includes('skin-hydration')) return 'cosmetic';
  if (slug.includes('hyperhidrosis') || slug.includes('sweating') || slug.includes('body-odor')) return 'sweat';
  if (slug.includes('spider-veins') || slug.includes('varicose') || slug.includes('broken-capillaries') || slug.includes('facial-redness')) return 'vascular';
  if (slug.includes('radiofrequency') || slug.includes('ultherapy') || slug.includes('cryotherapy') || slug.includes('electrocautery') || slug.includes('dermatoscopy') || slug.includes('allergy-test') || slug.includes('patch-test') || slug.includes('skin-biopsy') || slug.includes('skin-screening') || slug.includes('skin-checkup')) return 'technology';
  if (slug.includes('hair-treatment') || slug.includes('hair-specialist') || slug.includes('hair-doctor') || slug.includes('hair-clinic') || slug.includes('hair-patch') || slug.includes('hair-care') || slug.includes('hair-restoration')) return 'hair-general';
  return 'general';
}

// ============ UNIQUE CONTENT GENERATORS BY CATEGORY ============

const introContentMap = {
  'hair-transplant': (title, lower) => `Considering ${lower}? Making the right choice about hair restoration is one of the most important decisions you'll face. The difference between a natural-looking result and an obvious one comes down to the surgeon's skill, the technique used, and the clinic's experience.

At Prime One Hair & Skin Clinic in Vadodara, our ${lower} procedures are performed by surgeons who have completed thousands of successful cases. We don't just transplant hair — we design a hairline that matches your facial structure, age, and natural growth pattern. Every graft is placed at the precise angle and direction to mimic how your hair naturally grows.

What sets our approach apart is the attention to detail in planning. Before any procedure, we conduct a thorough scalp analysis, assess your donor area density, and create a customized plan that accounts for future hair loss patterns. This forward-thinking approach ensures your results look great not just today, but years from now.`,

  'hair-loss': (title, lower) => `Hair thinning and loss affect millions of people, yet most suffer in silence or waste money on products that don't work. If you're searching for ${lower}, you need to understand that effective treatment starts with proper diagnosis.

Hair loss has multiple potential causes — genetics, hormones, nutritional deficiencies, stress, medical conditions, and even certain medications. Each cause requires a different treatment approach. That's why our dermatologists at Prime One Hair & Skin Clinic begin with comprehensive diagnostics including trichoscopy, blood work, and scalp analysis.

Our treatment protocols combine multiple evidence-based approaches for the best results. Depending on your diagnosis, this might include medical therapy, PRP or GFC treatments, low-level laser therapy, nutritional supplementation, and lifestyle modifications. We track progress through regular follow-ups and digital photography so you can see measurable improvement.`,

  'prp': (title, lower) => `${title} represents one of the most exciting advances in regenerative medicine for hair and skin. This treatment harnesses your body's own healing mechanisms to stimulate growth and renewal — no synthetic chemicals, no foreign substances.

At Prime One Hair & Skin Clinic, our ${lower} protocol uses advanced preparation techniques that concentrate the maximum number of growth factors from your blood. The quality of preparation directly impacts results, which is why we invest in the latest centrifuge technology and follow strict protocols.

The procedure itself is straightforward — a small blood sample is drawn, processed in our lab, and the concentrated growth factors are precisely injected into the treatment area. Most patients find the treatment comfortable, especially with the topical numbing we apply beforehand. Sessions typically take 30-45 minutes, and you can resume normal activities immediately afterward.`,

  'laser': (title, lower) => `${title} uses precisely calibrated light energy to address specific skin and hair concerns with remarkable accuracy. Unlike older methods, modern laser technology can target specific tissues while leaving surrounding skin completely untouched.

Our laser suite at Prime One Hair & Skin Clinic features US FDA-cleared devices chosen for their proven safety profile on Indian skin tones. This is particularly important because laser parameters that work on lighter skin can cause complications on darker skin types — our specialists understand these nuances deeply.

Each ${lower} session is preceded by a thorough assessment of your skin type, the condition being treated, and your treatment history. We customize laser settings for every individual, because a one-size-fits-all approach simply doesn't work in dermatology. Our practitioners undergo continuous training on the latest laser techniques and safety protocols.`,

  'acne': (title, lower) => `Dealing with acne goes beyond the surface — it affects confidence, social interactions, and emotional well-being. If you're looking for ${lower}, you deserve a treatment approach based on medical science, not marketing promises.

At Prime One Hair & Skin Clinic, we treat acne as the complex medical condition it is. Our dermatologists identify your specific acne type — whether it's comedonal, inflammatory, cystic, hormonal, or a combination — because each type responds to different treatments. We also investigate underlying factors like hormonal imbalances, gut health, diet triggers, and stress patterns.

Our treatment success rate exceeds 90% because we take a systematic approach. We combine prescription-strength topical treatments, oral medications when necessary, and clinical procedures like chemical peels, LED therapy, or laser treatments. We also address the psychological impact of acne and provide realistic timelines so you know exactly what to expect.`,

  'pigmentation': (title, lower) => `Uneven skin tone and pigmentation issues are among the most common concerns we see at our Vadodara clinic. ${title} requires both expertise and patience — there are no instant fixes, but with the right approach, significant improvement is absolutely achievable.

Pigmentation develops through complex biological processes involving melanin production, sun exposure, hormonal changes, inflammation, and genetic factors. Different types of pigmentation — melasma, post-inflammatory hyperpigmentation, sun spots, and others — require different treatment strategies. That's why proper diagnosis is the essential first step.

Our pigmentation protocols at Prime One Hair & Skin Clinic combine multiple modalities for comprehensive results. This typically includes medical-grade topical treatments, chemical peels customized to your skin type, laser or light-based therapies, and strict sun protection guidance. We also address internal factors through nutritional recommendations and hormonal assessment when relevant.`,

  'anti-aging': (title, lower) => `Aging is natural, but how you age is largely within your control. ${title} at Prime One Hair & Skin Clinic focuses on natural-looking rejuvenation that enhances your features rather than changing them.

The key to excellent anti-aging results is understanding facial anatomy deeply. Our practitioners study how facial volume changes with age, how bone structure shifts, where skin laxity develops, and how dynamic wrinkles form from repeated expressions. This understanding allows us to create treatment plans that address the root cause of aging changes, not just the surface symptoms.

We believe in a conservative, buildable approach. Starting subtle and adding more as needed always produces better results than doing too much at once. Our patients consistently tell us that friends notice they look refreshed and rested — but can't pinpoint exactly what changed. That's the mark of truly skilled aesthetic work.`,

  'facial': (title, lower) => `Professional ${lower} goes far beyond what you can achieve with home care products. Clinical-grade treatments penetrate deeper, use higher concentrations of active ingredients, and are administered under expert supervision for maximum effectiveness and safety.

At Prime One Hair & Skin Clinic, our ${lower} protocols are designed by dermatologists, not aestheticians. This means every treatment is based on scientific evidence and tailored to your specific skin type and concerns. Whether you need deep cleansing, exfoliation, hydration, brightening, or anti-aging benefits, we select the right combination of techniques and products.

Each treatment begins with a skin analysis using specialized equipment that reveals what's happening beneath the surface — hydration levels, oil production, pigmentation depth, and pore condition. This data guides our treatment decisions and ensures you get measurable results, not just temporary effects.`,

  'hair-care': (title, lower) => `Your hair is one of the first things people notice about you, and maintaining healthy, beautiful hair requires more than just good shampoo. ${title} at Prime One Hair & Skin Clinic addresses your hair concerns at the root level — literally.

Professional ${lower} treatments use salon-quality and medical-grade formulations that work significantly better than retail products. These treatments can repair damage at the molecular level, restructure hair bonds, infuse deep moisture, and protect against environmental stressors. Our trichologists assess your hair type, damage level, and scalp condition before recommending the right treatment.

We understand that hair care needs vary dramatically between individuals. Your hair texture, density, porosity, and overall health all influence which treatments will benefit you most. That's why we never take a one-size-fits-all approach — every treatment plan is as unique as you are.`,

  'scalp': (title, lower) => `Healthy hair starts with a healthy scalp. ${title} is often overlooked, but scalp conditions directly impact hair growth, texture, and overall hair health. Think of it this way — you can't grow a beautiful garden in poor soil.

Our trichology team at Prime One Hair & Skin Clinic uses advanced diagnostics including trichoscopy to examine your scalp at high magnification. This reveals conditions that aren't visible to the naked eye — microscopic inflammation, blocked follicles, fungal colonies, and changes in scalp vascularity. Proper diagnosis leads to proper treatment.

Common scalp issues we treat include persistent dandruff, seborrheic dermatitis, scalp psoriasis, folliculitis, and contact allergies. Each condition has specific triggers and treatment requirements. Our approach combines medicated treatments, therapeutic procedures, and maintenance protocols to resolve your scalp condition and prevent recurrence.`,

  'scar': (title, lower) => `Scars tell stories we'd sometimes rather not share. Whether from acne, injury, surgery, or burns, ${lower} at Prime One Hair & Skin Clinic can significantly improve the appearance of scars using the latest dermatological techniques.

Scar treatment has evolved dramatically in recent years. We now have multiple tools — fractional lasers, microneedling, subcision, dermal fillers, PRP therapy, chemical peels, and silicone-based treatments — that can be combined strategically for superior results. The key is matching the right technique to your specific scar type.

Our scar assessment evaluates the type (atrophic, hypertrophic, keloid), depth, age, color, and location of your scars. We then create a multi-step treatment plan that typically shows progressive improvement over several sessions. While complete scar removal isn't always possible, we consistently achieve 50-80% improvement in scar appearance.`,

  'removal': (title, lower) => `Unwanted skin growths can be both cosmetically concerning and sometimes medically relevant. ${title} at our Vadodara clinic is performed by qualified dermatologists using precise techniques that minimize scarring and ensure complete removal.

Before any removal procedure, our dermatologists examine the growth carefully — sometimes using dermatoscopy for magnified analysis. This step is crucial because it helps us distinguish between benign growths and those that need biopsy or special attention. Safety always comes first.

Our removal techniques include radiofrequency ablation, electrocautery, laser removal, cryotherapy, and minor surgical excision. The technique chosen depends on the type, size, and location of the growth. Most procedures are performed under local anesthesia, take 15-30 minutes, and have minimal downtime. We provide detailed aftercare instructions to ensure proper healing with minimal scarring.`,

  'skin-condition': (title, lower) => `Living with a chronic or acute skin condition can be frustrating and isolating. ${title} at Prime One Hair & Skin Clinic is delivered by dermatologists who understand both the medical and emotional aspects of skin diseases.

Skin conditions often have complex, multifactorial causes — immune system dysfunction, environmental triggers, genetic predisposition, infections, and allergies can all play a role. Our diagnostic approach investigates all potential factors through clinical examination, patch testing, blood work, and skin biopsies when needed.

We believe in treating the whole patient, not just the visible symptoms. Our treatment plans address the underlying cause, manage current symptoms, prevent flare-ups, and minimize long-term complications. We also educate you about your condition so you can make informed decisions about your care and lifestyle modifications.`,

  'body': (title, lower) => `Body concerns are deeply personal, and seeking ${lower} takes courage. At Prime One Hair & Skin Clinic, we provide judgment-free consultations where we listen to your goals and create realistic treatment plans.

Modern body treatments have moved far beyond invasive surgical options. Today's non-invasive and minimally invasive technologies can reduce fat, tighten skin, smooth cellulite, and contour the body with minimal downtime. Our clinic offers the latest evidence-based body treatments selected for their proven track record.

Every body treatment begins with a thorough assessment of your concerns, body composition, and expectations. We're honest about what each treatment can and cannot achieve — because unrealistic expectations lead to disappointment regardless of how good the treatment is. Our goal is visible improvement that makes YOU feel confident.`,

  'cost': (title, lower) => `Understanding the ${lower} helps you plan effectively and avoid surprises. At Prime One Hair & Skin Clinic, we believe in complete transparency about treatment costs — because you deserve to make informed financial decisions about your care.

Treatment costs in dermatology vary based on several factors: the specific technique used, the number of sessions required, the area being treated, the practitioner's expertise, and the technology involved. We provide detailed cost breakdowns during your consultation so you know exactly what you're investing in.

We offer flexible payment options including EMI plans through major banks, making quality dermatological care accessible to everyone. However, we never compromise on quality to lower costs — using inferior products or cutting corners might save money upfront but often leads to poor results and additional expenses to correct them. Our pricing reflects the quality of care, equipment, and products we use.`,

  'bridal': (title, lower) => `Your wedding is one of the most photographed days of your life, and looking your absolute best is naturally a priority. ${title} at Prime One Hair & Skin Clinic is specifically designed to give you that wedding-ready glow through a carefully planned timeline of treatments.

We recommend starting your ${lower} journey 3-6 months before the wedding. This timeline allows us to address any existing skin concerns, improve overall skin quality gradually, and plan sessions that peak your results for the big day. Last-minute treatments rarely deliver the same results as a well-planned regimen.

Our bridal programs are highly personalized — we assess your skin type, specific concerns, the season of your wedding (sun exposure varies), your outfit choices (which areas need attention), and your skincare experience level. From thereon, we create a week-by-week treatment calendar that builds toward your wedding day glow.`,

  'clinic': (title, lower) => `Finding the right ${lower} is a decision that impacts your health, appearance, and confidence. At Prime One Hair & Skin Clinic in Vadodara, we've earned the trust of thousands of patients through consistent results, transparent practices, and genuine care.

What should you look for in a ${lower}? First, check qualifications — your dermatologist should have an MD in Dermatology or equivalent postgraduate training. Second, ask about technology — the clinic should use US FDA-approved or CE-marked devices. Third, look at real patient results. And finally, trust your comfort level during the consultation.

Our clinic is equipped with international-standard infrastructure including dedicated procedure rooms, sterilization protocols, and the latest diagnostic and treatment technology. Our doctors maintain active memberships in dermatology associations and regularly attend conferences to stay updated with the latest advances in the field.`,

  'nail': (title, lower) => `Nail problems are more common than people realize, and they often indicate underlying health conditions. ${title} at Prime One Hair & Skin Clinic addresses nail concerns through proper diagnosis and targeted treatment.

Nail disorders can result from fungal infections, psoriasis, lichen planus, nutritional deficiencies, trauma, and systemic conditions. Our dermatologists examine your nails carefully and may perform microscopy or culture tests to identify the exact cause. This precision in diagnosis leads to faster, more effective treatment.

Treatment approaches vary from topical antifungal medications and medicated nail lacquers to oral medications and minor procedural interventions. For conditions like ingrown nails, we offer definitive correction procedures that prevent recurrence. We also provide guidance on nail care practices that promote healthy nail growth.`,

  'under-eye': (title, lower) => `The area around your eyes is the thinnest, most delicate skin on your body — and often the first place to show signs of aging, stress, and fatigue. ${title} at our Vadodara clinic uses specialized techniques designed specifically for this sensitive zone.

Under-eye concerns can include dark circles (caused by pigmentation, thin skin, or visible blood vessels), puffiness (from fluid retention, allergies, or fat pad changes), hollowness (volume loss), fine lines, and wrinkles. Each concern has different underlying causes and requires different treatment approaches.

Our under-eye treatment assessment considers your specific anatomy, skin type, concern severity, and lifestyle factors. Treatment options range from topical medical-grade products and chemical peels to dermal fillers, PRP therapy, laser treatments, and radiofrequency. We take a conservative approach in this delicate area — safety and natural results are our top priorities.`,

  'cosmetic': (title, lower) => `Cosmetic procedures have become increasingly refined, offering subtle enhancements that boost confidence without looking obvious. ${title} at Prime One Hair & Skin Clinic is performed by experienced practitioners who prioritize natural-looking results.

The best cosmetic procedures are those that enhance your existing features rather than creating an artificial look. Our approach begins with understanding what you want to achieve and then recommending the most appropriate techniques to get there safely and effectively.

Every cosmetic procedure at our clinic follows strict safety protocols. We use only certified, quality-assured products and materials. Our practitioners are trained in both the technical and artistic aspects of cosmetic treatments — because achieving beautiful results requires both medical knowledge and aesthetic sensibility.`,

  'sweat': (title, lower) => `Excessive sweating and related concerns can significantly impact your daily life, social interactions, and self-confidence. ${title} at Prime One Hair & Skin Clinic provides medically proven solutions for these often-underestimated conditions.

Hyperhidrosis (excessive sweating) affects approximately 3% of the population and can occur in the underarms, palms, feet, or generalized areas. It's a medical condition, not a hygiene issue, and it has effective treatment options that many people aren't aware of.

Our treatment approach begins with assessing the severity and pattern of your sweating. Options range from prescription-strength antiperspirants and oral medications to Botox injections (which can reduce sweating by 80-90%) and advanced energy-based treatments. We help you find the right balance between efficacy, convenience, and budget.`,

  'vascular': (title, lower) => `Visible veins and vascular conditions on the face and body are a common cosmetic concern, but they can also sometimes indicate underlying circulatory issues. ${title} at Prime One Hair & Skin Clinic addresses both the aesthetic and medical aspects of vascular conditions.

Modern vascular treatment uses advanced laser and light-based technologies that can precisely target blood vessels without damaging surrounding skin. The specific wavelength and pulse duration are selected based on the size, depth, and type of vessel being treated.

Our vascular treatment assessment includes a thorough evaluation of the affected vessels, your medical history, and any contributing factors. We ensure there's no underlying condition requiring medical attention before proceeding with cosmetic treatment. Most vascular treatments show visible improvement after 1-3 sessions.`,

  'technology': (title, lower) => `${title} represents our commitment to using the most advanced diagnostic and treatment technologies available in dermatology. At Prime One Hair & Skin Clinic, we invest in technology that delivers measurable, evidence-based results.

Accurate diagnosis is the foundation of effective treatment. Our diagnostic capabilities include high-resolution dermatoscopy, computerized skin analysis, and specialized testing that reveals conditions invisible to the naked eye. This technology helps us detect problems early and monitor treatment progress objectively.

We regularly upgrade our equipment and training to stay at the forefront of dermatological technology. Every device in our clinic is selected based on its clinical evidence, safety profile, and suitability for Indian skin types. Our practitioners are certified and trained on each technology they use.`,

  'hair-general': (title, lower) => `Hair health is a reflection of overall wellness, and finding the right ${lower} can transform both your appearance and confidence. At Prime One Hair & Skin Clinic, our trichologists and dermatologists specialize in comprehensive hair care solutions.

Whether you're dealing with hair fall, thinning, damage, scalp issues, or simply want to maintain healthy hair, we offer evidence-based treatments tailored to your specific needs. Our approach begins with understanding your hair type, lifestyle, diet, and health history — because these all influence your hair health.

Our hair care services range from therapeutic treatments for medical hair conditions to cosmetic procedures for styling and enhancement. We combine in-clinic treatments with personalized home care regimens to ensure your results are sustainable and your hair stays healthy long-term.`,

  'general': (title, lower) => `At Prime One Hair & Skin Clinic in Vadodara, we provide expert ${lower} backed by years of clinical experience and the latest medical advancements. Our dermatologists take the time to understand your specific concerns and create treatment plans that deliver real, measurable results.

We believe that everyone deserves access to quality dermatological care. That's why we've built our practice around making advanced skin and hair treatments accessible, affordable, and comfortable. From your first consultation to your follow-up appointments, we ensure a seamless, supportive experience.

Our comprehensive approach combines medical expertise with aesthetic sensibility. We don't just treat conditions — we help you achieve the best version of yourself through evidence-based treatments, honest guidance, and genuine care for your well-being.`,
};

// WHY CHOOSE US options per category
const whyChooseUsOptions = {
  'hair-transplant': [
    "3000+ successful hair transplant procedures completed",
    "Skilled surgeons with 15+ years of transplant experience",
    "Natural hairline design customized to your facial structure",
    "Advanced FUE, DHI, and Sapphire techniques available",
    "High graft survival rate exceeding 95%",
    "Comprehensive pre-procedure counseling and planning",
    "Comfortable, modern OT with latest equipment",
    "Dedicated post-procedure care and follow-up program",
  ],
  'hair-loss': [
    "Advanced trichoscopy for accurate hair loss diagnosis",
    "Multi-modality treatment combining best available options",
    "Regular progress tracking with digital photography",
    "Expertise in both male and female pattern hair loss",
    "Root cause analysis — not just symptomatic treatment",
    "Nutritional and lifestyle counseling for hair health",
    "Proven results: 85%+ patient satisfaction rate",
    "Personalized treatment plans based on your specific diagnosis",
  ],
  'prp': [
    "Advanced PRP/GFC preparation for maximum growth factors",
    "Latest generation centrifuge technology",
    "Sterile, comfortable treatment environment",
    "Combined with complementary therapies for enhanced results",
    "Minimal downtime — resume activities same day",
    "Consistent, measurable results tracked over sessions",
    "Uses your own blood — 100% natural, zero allergic reactions",
    "Treatment protocols backed by peer-reviewed research",
  ],
  'laser': [
    "US FDA-approved laser devices for proven safety",
    "Parameters customized for Indian skin tones (Fitzpatrick IV-V)",
    "Certified laser practitioners with specialized training",
    "Multiple laser platforms for different conditions",
    "Built-in cooling systems for comfortable treatments",
    "Strict safety protocols and eye protection",
    "Results visible from the very first session",
    "Regular device maintenance and calibration schedules",
  ],
  'acne': [
    "MD dermatologists specializing in acne management",
    "90%+ acne clearance rate within 3-4 months",
    "Both active acne and scar treatment under one roof",
    "Hormonal acne expertise with appropriate testing",
    "Medical-grade products — not cosmetic-grade substitutes",
    "Diet and lifestyle counseling as part of treatment",
    "Follow-up protocols to prevent relapse",
    "Sensitive, confidential treatment environment",
  ],
  'pigmentation': [
    "Customized depigmenting protocols for Indian skin",
    "Combination approach for faster, lasting results",
    "Sun protection education and product recommendations",
    "Advanced laser and peel options for stubborn pigmentation",
    "Before-after documentation so you see real progress",
    "Maintenance plans to prevent pigmentation recurrence",
    "Medical-grade whitening — safe, regulated formulations",
    "Experience with all pigmentation types including melasma",
  ],
  'anti-aging': [
    "Natural-looking results — subtle enhancement, not overdone",
    "Only genuine, certified injectable products used",
    "Detailed facial analysis before any procedure",
    "Conservative approach — we can always add, never subtract",
    "Combined treatment plans for comprehensive rejuvenation",
    "Experienced injectors with artistic sensibility",
    "Zero downtime for most anti-aging procedures",
    "Regular training on latest techniques and products",
  ],
};

// Default why choose us
const defaultWhyChooseUs = [
  "Board-certified dermatologists with 15+ years experience",
  "US FDA-approved equipment and medical-grade products",
  "10,000+ satisfied patients across Vadodara",
  "Personalized treatment plans — no one-size-fits-all",
  "Transparent pricing with no hidden costs",
  "Clean, modern clinic with latest technology",
  "Convenient location in Vadodara with easy parking",
  "Evening and weekend appointments available",
];

// FAQ generators
function generateFAQs(slug, title, lower, category) {
  const h = hashCode(slug);
  const allFaqs = {
    'hair-transplant': [
      { question: `Is ${lower} painful?`, answer: `Modern ${lower} is performed under local anesthesia, so you feel minimal discomfort during the procedure. Most patients describe it as comfortable and watch movies or rest during the session.` },
      { question: `How long does it take to see results?`, answer: `New hair growth typically begins at 3-4 months and continues improving until 12-14 months. Full results are visible by about 12 months after the procedure.` },
      { question: `What is the success rate of ${lower}?`, answer: `At our clinic, we achieve a graft survival rate exceeding 95%. The final result depends on factors like donor quality, surgical technique, and post-procedure care compliance.` },
      { question: `How many grafts will I need?`, answer: `The number of grafts varies based on your degree of hair loss, desired density, and donor availability. During consultation, we calculate the exact number and show you a projected outcome.` },
      { question: `Can women get ${lower}?`, answer: `Yes, ${lower} is available for women. However, the evaluation process and technique may differ from male patients. We assess each case individually.` },
    ],
    'hair-loss': [
      { question: `What causes hair loss?`, answer: `Hair loss can result from genetics, hormonal changes, nutritional deficiencies, stress, medications, autoimmune conditions, and scalp disorders. We identify your specific cause through comprehensive testing.` },
      { question: `When should I see a doctor for hair loss?`, answer: `If you're losing more than 100 hairs daily, noticing visible thinning, seeing bald patches, or finding clumps of hair when washing — it's time to consult a specialist.` },
      { question: `Can lost hair grow back?`, answer: `It depends on the cause. Some types of hair loss are reversible with proper treatment, while others require ongoing management. Early treatment generally yields the best outcomes.` },
      { question: `How effective is ${lower}?`, answer: `With proper diagnosis and treatment, most patients see 60-80% improvement in hair density. Results vary based on the cause and how early treatment begins.` },
      { question: `Do hair loss treatments have side effects?`, answer: `Medical hair loss treatments may have some side effects, which we discuss thoroughly during consultation. We monitor all patients regularly to ensure safe, effective treatment.` },
    ],
    'acne': [
      { question: `How long does ${lower} take to work?`, answer: `Most patients notice improvement within 4-6 weeks. Significant clearing usually occurs by 3 months. Severe or cystic acne may take longer.` },
      { question: `Will acne come back after treatment?`, answer: `Good treatment addresses underlying causes, reducing the likelihood of recurrence. We also provide maintenance protocols and skincare routines to keep skin clear long-term.` },
      { question: `Can diet affect acne?`, answer: `Research suggests high glycemic foods and dairy may worsen acne in some individuals. We discuss dietary modifications specific to your situation.` },
      { question: `Is ${lower} safe for sensitive skin?`, answer: `Absolutely. We customize all treatments based on your skin sensitivity level. Gentler options are available for reactive skin types.` },
      { question: `Do I need prescription medication for acne?`, answer: `Mild acne may respond to topical treatments alone. Moderate to severe acne usually benefits from prescription medications. We recommend the minimum effective treatment.` },
    ],
    'pigmentation': [
      { question: `How long does ${lower} take?`, answer: `Visible improvement begins within 4-6 weeks for most patients. Complete treatment typically takes 3-6 months depending on the type and depth of pigmentation.` },
      { question: `Will pigmentation come back?`, answer: `Sun exposure can trigger pigmentation recurrence. We provide comprehensive sun protection guidance and maintenance treatments to minimize this risk.` },
      { question: `Is ${lower} safe for dark skin?`, answer: `Yes, but treatment parameters must be carefully adjusted for darker skin tones. Our specialists have extensive experience treating Indian skin types safely.` },
      { question: `Can home remedies treat pigmentation?`, answer: `Home remedies rarely provide significant improvement for established pigmentation. Medical-grade treatments penetrate deeper and use higher concentrations of active ingredients for measurable results.` },
      { question: `What SPF should I use during treatment?`, answer: `SPF 50+ broad-spectrum sunscreen is essential during and after pigmentation treatment. We recommend specific products suitable for your skin type.` },
    ],
  };

  const defaultFaqs = [
    { question: `What is ${lower}?`, answer: `${title} involves specialized medical procedures performed by qualified dermatologists to address your specific concerns. We use evidence-based approaches tailored to each patient's needs.` },
    { question: `How much does ${lower} cost in Vadodara?`, answer: `${title} costs vary based on the specific treatment required, number of sessions, and individual factors. We provide transparent pricing during consultation with no hidden charges.` },
    { question: `Is ${lower} safe?`, answer: `When performed by qualified dermatologists using approved equipment and products, ${lower} is safe and effective. We follow strict safety protocols and discuss all potential risks beforehand.` },
    { question: `How many sessions of ${lower} are needed?`, answer: `The number of sessions depends on your specific condition, its severity, and your treatment goals. We provide a clear treatment plan with expected timeline during consultation.` },
    { question: `Why should I choose Prime One for ${lower}?`, answer: `Our clinic offers board-certified specialists, US FDA-approved equipment, personalized treatment plans, and a proven track record of 10,000+ satisfied patients in Vadodara.` },
  ];

  const catFaqs = allFaqs[category] || defaultFaqs;
  return pickN(catFaqs.length >= 5 ? catFaqs : [...catFaqs, ...defaultFaqs], slug, 5);
}

// Process steps by category
function generateProcessSteps(category) {
  const steps = {
    'hair-transplant': [
      { title: "Consultation & Planning", description: "Detailed scalp analysis, donor assessment, and customized hairline design for your facial structure." },
      { title: "Preparation Day", description: "Pre-procedure instructions, blood tests, and final treatment plan review with your surgeon." },
      { title: "Procedure Day", description: "Comfortable procedure under local anesthesia with precise graft extraction and placement." },
      { title: "Recovery & Growth", description: "Post-op care guidance, regular follow-ups, and tracking your new hair growth journey." },
    ],
    'acne': [
      { title: "Skin Assessment", description: "Detailed examination of your acne type, severity, and contributing factors." },
      { title: "Custom Protocol", description: "Evidence-based treatment plan combining topical, oral, and procedural options." },
      { title: "Active Treatment", description: "Regular sessions with progress monitoring and protocol adjustments as needed." },
      { title: "Clear Skin Maintenance", description: "Long-term skincare routine and prevention strategies for lasting clarity." },
    ],
    'default': [
      { title: "Consultation", description: "Thorough assessment of your concerns by our specialist with advanced diagnostics." },
      { title: "Treatment Plan", description: "Personalized treatment protocol explained clearly with realistic expectations." },
      { title: "Treatment Sessions", description: "Professional procedures performed with the latest technology in a comfortable setting." },
      { title: "Follow-Up Care", description: "Regular monitoring, progress tracking, and plan adjustments for optimal results." },
    ],
  };
  return steps[category] || steps['default'];
}

// Services by category
function generateServices(slug, title, lower, category) {
  const h = hashCode(slug);
  const allServices = {
    'hair-transplant': [
      { title: "FUE Hair Transplant", description: "Individual follicle extraction for natural results with minimal scarring. Our advanced microscopic technique ensures maximum graft viability." },
      { title: "DHI Hair Transplant", description: "Direct implantation using Choi pens for precise angle and depth control. Ideal for patients wanting higher density in specific areas." },
      { title: "Hairline Restoration", description: "Artistic hairline design considering your age, facial proportions, and natural growth pattern for a completely natural appearance." },
      { title: "Crown Area Coverage", description: "Specialized technique for vertex (crown) area restoration, addressing the whorl pattern and achieving natural-looking coverage." },
      { title: "Post-Transplant PRP", description: "PRP therapy after transplant to boost graft survival, accelerate healing, and stimulate faster growth of transplanted hair." },
      { title: "Revision Surgery", description: "Corrective procedures for unsatisfactory results from previous transplants. We improve density, naturalness, and overall appearance." },
    ],
    'hair-loss': [
      { title: "Medical Hair Loss Therapy", description: "FDA-approved medications including minoxidil and finasteride, prescribed at the right dosage with regular monitoring for effectiveness." },
      { title: "PRP Hair Therapy", description: "Platelet-rich plasma injections into the scalp to stimulate dormant follicles and promote thicker, stronger hair growth." },
      { title: "GFC Treatment", description: "Growth Factor Concentrate therapy — the next generation of PRP with 5x more growth factors for enhanced hair regeneration." },
      { title: "Low-Level Laser Therapy", description: "FDA-cleared laser cap therapy that increases blood flow to hair follicles and stimulates cellular activity for hair regrowth." },
      { title: "Nutritional Therapy", description: "Targeted supplementation based on blood test results. Correcting iron, vitamin D, biotin, and zinc deficiencies that contribute to hair loss." },
      { title: "Scalp Mesotherapy", description: "Micro-injections of vitamins, minerals, and growth factors directly into the scalp for localized hair loss treatment." },
    ],
    'acne': [
      { title: "Clinical Acne Assessment", description: "Comprehensive evaluation including acne grading, skin type analysis, and identification of contributing factors for targeted treatment." },
      { title: "Medical Acne Treatment", description: "Prescription topical and oral medications customized to your acne type and severity for maximum clearance with minimum side effects." },
      { title: "Chemical Peels for Acne", description: "Medical-grade peels using salicylic acid, glycolic acid, or combination formulas to unclog pores, reduce inflammation, and improve skin texture." },
      { title: "LED Light Therapy", description: "Blue and red light therapy that kills acne-causing bacteria and reduces inflammation without any downtime or discomfort." },
      { title: "Extraction Treatment", description: "Professional comedone extraction performed hygienically to clear blackheads and whiteheads without scarring." },
      { title: "Hormonal Acne Management", description: "Targeted approach for hormone-related breakouts including appropriate testing and specific anti-androgen treatments when indicated." },
    ],
    'laser': [
      { title: "Laser Hair Removal", description: "Permanent hair reduction using diode or Nd:YAG lasers with parameters optimized for Indian skin. Safe, effective, and comfortable." },
      { title: "Laser Skin Resurfacing", description: "Fractional CO2 or Erbium lasers that resurface skin, reduce scars, tighten pores, and stimulate collagen for younger-looking skin." },
      { title: "Laser Pigmentation Treatment", description: "Q-switched Nd:YAG laser targeting melanin deposits for effective removal of dark spots, melasma patches, and uneven pigmentation." },
      { title: "Laser Tattoo Removal", description: "Multi-wavelength Q-switched laser that breaks down tattoo ink particles safely, with progressive fading over multiple sessions." },
      { title: "Laser Mole/Wart Removal", description: "Precise CO2 laser removal of benign skin growths with minimal scarring and quick healing time." },
      { title: "Laser Skin Tightening", description: "Non-ablative laser that heats deep skin layers to stimulate collagen production, resulting in firmer, tighter skin over time." },
    ],
    'pigmentation': [
      { title: "Depigmenting Therapy", description: "Medical-grade topical formulations containing hydroquinone, kojic acid, arbutin, and retinoids prescribed at optimal concentrations." },
      { title: "Chemical Peels", description: "Targeted peels — glycolic, lactic, TCA, or combination — selected based on your pigmentation depth and skin type for safe, effective lightening." },
      { title: "Laser Toning", description: "Low-fluence Q-switched laser sessions that gradually reduce melanin without burning or damaging skin. Safe for Indian skin tones." },
      { title: "Glutathione Therapy", description: "Antioxidant therapy that helps reduce melanin production from within, supporting overall skin brightening and health." },
      { title: "Intense Pulsed Light (IPL)", description: "Broad-spectrum light that targets pigmented lesions and evens skin tone, particularly effective for sun damage and age spots." },
      { title: "Maintenance Protocol", description: "Long-term skincare routine with medical-grade products and sun protection strategy to prevent pigmentation recurrence." },
    ],
    'anti-aging': [
      { title: "Botox Treatment", description: "US FDA-approved botulinum toxin injected by experienced practitioners for natural reduction of forehead lines, crow's feet, and frown lines." },
      { title: "Dermal Fillers", description: "Hyaluronic acid fillers for volume restoration in cheeks, under-eyes, nasolabial folds, lips, and jawline. Natural, reversible results." },
      { title: "Thread Lift", description: "PDO thread insertion for non-surgical face lifting and skin tightening. Stimulates collagen formation for long-lasting rejuvenation." },
      { title: "HIFU Treatment", description: "High-Intensity Focused Ultrasound that targets deep skin layers for non-invasive lifting and tightening without any downtime." },
      { title: "Radiofrequency Skin Tightening", description: "RF energy that heats dermal layers to stimulate new collagen and elastin production for firmer, younger-looking skin." },
      { title: "PRP Facial Rejuvenation", description: "Platelet-rich plasma applied topically or injected to boost collagen production and give skin a natural, youthful glow." },
    ],
  };

  const defaultServices = [
    { title: "Expert Consultation", description: `Comprehensive evaluation of your ${lower} concerns by board-certified specialists using advanced diagnostic tools.` },
    { title: `${title} Procedure`, description: `Evidence-based treatment delivered using the latest technology and techniques for optimal results and patient comfort.` },
    { title: "Customized Treatment Plan", description: `Personalized ${lower} protocol designed specifically for your skin type, condition severity, and lifestyle requirements.` },
    { title: "Progress Monitoring", description: "Regular follow-up assessments with digital documentation to track improvement and adjust treatment as needed." },
    { title: "Home Care Guidance", description: `Expert recommendations for at-home skincare and maintenance routines that complement your clinical ${lower}.` },
    { title: "Maintenance Programs", description: "Long-term care plans to sustain results, prevent recurrence, and keep your skin and hair in optimal condition." },
  ];

  const catServices = allServices[category] || defaultServices;
  return pickN(catServices, slug, 6);
}

// Meta description generators
function generateMetaDesc(slug, title, lower) {
  const patterns = [
    `✅ ${title} by MD dermatologists at Prime One Clinic ✓ Proven results ✓ 10,000+ patients ✓ US FDA approved. Book consultation today!`,
    `🏆 Best ${lower} at Prime One Hair & Skin Clinic Vadodara ✓ Expert doctors ✓ Latest technology ✓ Affordable prices. Call now!`,
    `${title} - Advanced solutions by board-certified specialists. ✓ Safe & effective ✓ Personalized care ✓ 4.9★ rated. Book today!`,
    `Looking for ${lower}? Prime One Clinic offers expert care with proven results. ✓ 15+ years experience ✓ Modern technology. Call now!`,
    `Get the best ${lower} at Prime One Vadodara. ✓ MD dermatologists ✓ US FDA devices ✓ 10000+ happy patients. Consultation ₹500.`,
  ];
  return pick(patterns, slug);
}

// ============ PAGE FILE GENERATOR ============

function generatePageFile(slug) {
  const title = slugToTitle(slug);
  const lower = slugToLower(slug);
  const category = getCategory(slug);
  const h = hashCode(slug);

  const isCostPage = slug.includes('cost');
  const isNearMePage = slug.includes('near-me');
  const isBestPage = slug.startsWith('best-');

  const heroTitle = pick(HERO_PATTERNS, slug)(title);
  const heroSubtitle = pick(SUBTITLE_PATTERNS, slug, 3)(title);
  const metaDesc = generateMetaDesc(slug, title, lower);

  // Generate intro content
  const introFn = introContentMap[category] || introContentMap['general'];
  const introContent = introFn(title, lower);

  // Generate why choose us
  const wcuOptions = whyChooseUsOptions[category] || defaultWhyChooseUs;
  const whyChooseUs = pickN(wcuOptions, slug, 6);

  // Generate services
  const services = generateServices(slug, title, lower, category);

  // Generate process steps
  const processSteps = generateProcessSteps(category);

  // Generate FAQs
  const faqItems = generateFAQs(slug, title, lower, category);

  // Keywords for meta
  const kw = lower.replace(/ /g, ', ') + ' vadodara, ' + lower.split(' ').slice(0, 3).join(' ') + ' near me, best ' + lower.split(' ').slice(0, 2).join(' ') + ' vadodara';

  // Function name
  const funcName = slug.replace(/-in-vadodara$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).replace(/ /g, '') + 'Page';

  // CTA text
  const ctaTexts = [
    `Ready to Start Your ${title} Journey?`,
    `Take the First Step Toward ${title}`,
    `Get Expert ${title} Today`,
    `Your ${title} Consultation Awaits`,
    `Don't Wait — Book Your ${title} Now`,
  ];
  const ctaText = pick(ctaTexts, slug);

  const ctaDescs = [
    `Stop waiting and start seeing results. Book a consultation with our specialist for personalized ${lower} that actually works.`,
    `Every day you wait is a day without progress. Contact our expert team in Vadodara for a thorough assessment and treatment plan.`,
    `Join 10,000+ satisfied patients who chose Prime One for their ${lower}. Your transformation starts with a simple phone call.`,
    `Professional ${lower} doesn't have to be complicated or expensive. Book your consultation and discover your options today.`,
  ];
  const ctaDesc = pick(ctaDescs, slug, 2);

  const fileContent = `import { Metadata } from "next";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { businesses } from "@/lib/business-config";

const business = businesses[0];

export const metadata: Metadata = {
  title: "${heroTitle} | Prime One Clinic",
  description: "${metaDesc.replace(/"/g, '\\"')}",
  keywords: "${kw}",
  alternates: {
    canonical: "https://skinhairvadodara.in/${slug}",
  },
  openGraph: {
    title: "${heroTitle} | Prime One Hair & Skin Clinic",
    description: "${metaDesc.replace(/"/g, '\\"')}",
    url: "https://skinhairvadodara.in/${slug}",
    siteName: "Prime One Hair & Skin Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function ${funcName}() {
  const content = {
    heroTitle: "${heroTitle}",
    heroSubtitle: "${heroSubtitle}",
    
    introContent: \`${introContent.replace(/`/g, '\\`')}\`,

    whyChooseUs: ${JSON.stringify(whyChooseUs, null, 6).replace(/\n/g, '\n    ')},

    services: ${JSON.stringify(services, null, 6).replace(/\n/g, '\n    ')},

    processSteps: ${JSON.stringify(processSteps, null, 6).replace(/\n/g, '\n    ')},

    faqItems: ${JSON.stringify(faqItems, null, 6).replace(/\n/g, '\n    ')},

    ctaText: "${ctaText}",
    ctaDescription: "${ctaDesc.replace(/"/g, '\\"')}",
  };

  return (
    <KeywordPageTemplate
      business={business}
      keyword="${slug}"
      content={content}
    />
  );
}
`;

  return fileContent;
}

// ============ MAIN EXECUTION ============

// All 370 new keyword slugs
const newKeywords = [
  // Doctor / Specialist / Clinic (28)
  "best-skin-doctor-in-vadodara","best-skin-specialist-in-vadodara","best-skin-clinic-in-vadodara","best-hair-clinic-in-vadodara","best-cosmetologist-in-vadodara","best-skin-care-clinic-in-vadodara","best-dermatology-clinic-in-vadodara","best-skin-hospital-in-vadodara","top-dermatologist-in-vadodara","top-skin-doctor-in-vadodara","top-skin-specialist-in-vadodara","cosmetic-dermatologist-in-vadodara","aesthetic-dermatologist-in-vadodara","aesthetic-clinic-in-vadodara","cosmetic-clinic-in-vadodara","trichologist-in-vadodara","best-trichologist-in-vadodara","skin-and-hair-clinic-in-vadodara","skin-care-specialist-in-vadodara","hair-care-specialist-in-vadodara","pediatric-dermatologist-in-vadodara","lady-dermatologist-in-vadodara","female-dermatologist-in-vadodara","lady-skin-doctor-in-vadodara","female-skin-doctor-in-vadodara","hair-loss-doctor-in-vadodara","hair-loss-clinic-in-vadodara","hair-restoration-clinic-in-vadodara",
  // Near Me (10)
  "dermatologist-near-me-in-vadodara","skin-doctor-near-me-in-vadodara","hair-clinic-near-me-in-vadodara","hair-doctor-near-me-in-vadodara","skin-specialist-near-me-in-vadodara","hair-specialist-near-me-in-vadodara","hair-transplant-near-me-in-vadodara","laser-hair-removal-near-me-in-vadodara","beauty-salon-near-me-in-vadodara","skin-hospital-near-me-in-vadodara",
  // Acne (14)
  "back-acne-treatment-in-vadodara","body-acne-treatment-in-vadodara","teenage-acne-treatment-in-vadodara","adult-acne-treatment-in-vadodara","acne-specialist-in-vadodara","blackhead-removal-in-vadodara","whitehead-treatment-in-vadodara","acne-marks-treatment-in-vadodara","severe-acne-treatment-in-vadodara","fungal-acne-treatment-in-vadodara","nodular-acne-treatment-in-vadodara","best-acne-treatment-in-vadodara","acne-cure-in-vadodara","comedonal-acne-treatment-in-vadodara",
  // Pigmentation (20)
  "hyperpigmentation-treatment-in-vadodara","dark-circle-treatment-in-vadodara","dark-neck-treatment-in-vadodara","skin-discoloration-treatment-in-vadodara","uneven-skin-tone-treatment-in-vadodara","freckles-treatment-in-vadodara","sun-damage-treatment-in-vadodara","age-spot-removal-in-vadodara","dull-skin-treatment-in-vadodara","glowing-skin-treatment-in-vadodara","fairness-treatment-in-vadodara","skin-glow-treatment-in-vadodara","sun-tan-removal-in-vadodara","dark-underarm-treatment-in-vadodara","dark-lip-treatment-in-vadodara","dark-knee-treatment-in-vadodara","dark-elbow-treatment-in-vadodara","dark-inner-thigh-treatment-in-vadodara","depigmentation-treatment-in-vadodara","skin-rejuvenation-in-vadodara",
  // Facial (24)
  "facial-treatment-in-vadodara","gold-facial-in-vadodara","diamond-facial-in-vadodara","oxygen-facial-in-vadodara","led-facial-in-vadodara","photo-facial-in-vadodara","brightening-facial-in-vadodara","microdermabrasion-in-vadodara","face-cleanup-in-vadodara","skin-polishing-treatment-in-vadodara","bridal-facial-in-vadodara","anti-aging-facial-in-vadodara","collagen-facial-in-vadodara","charcoal-facial-in-vadodara","dermapen-treatment-in-vadodara","bb-glow-treatment-in-vadodara","glass-skin-treatment-in-vadodara","korean-facial-in-vadodara","aqua-peel-in-vadodara","jet-peel-in-vadodara","glycolic-peel-in-vadodara","salicylic-peel-in-vadodara","tca-peel-in-vadodara","lactic-acid-peel-in-vadodara",
  // Laser (24)
  "laser-treatment-in-vadodara","laser-facial-in-vadodara","laser-toning-in-vadodara","co2-laser-treatment-in-vadodara","fractional-laser-treatment-in-vadodara","nd-yag-laser-treatment-in-vadodara","ipl-treatment-in-vadodara","laser-mole-removal-in-vadodara","laser-wart-removal-in-vadodara","laser-skin-tag-removal-in-vadodara","laser-tattoo-removal-in-vadodara","laser-scar-removal-in-vadodara","laser-stretch-mark-removal-in-vadodara","full-body-laser-hair-removal-in-vadodara","face-laser-hair-removal-in-vadodara","underarm-laser-hair-removal-in-vadodara","bikini-laser-hair-removal-in-vadodara","q-switched-laser-in-vadodara","diode-laser-in-vadodara","pico-laser-in-vadodara","permanent-hair-removal-in-vadodara","laser-hair-reduction-in-vadodara","best-laser-hair-removal-in-vadodara","laser-genesis-in-vadodara",
  // Anti-Aging (30)
  "face-lift-in-vadodara","non-surgical-face-lift-in-vadodara","hifu-treatment-in-vadodara","rf-skin-tightening-in-vadodara","jawline-contouring-in-vadodara","chin-augmentation-in-vadodara","cheek-fillers-in-vadodara","under-eye-fillers-in-vadodara","nasolabial-fold-treatment-in-vadodara","forehead-wrinkle-treatment-in-vadodara","crow-feet-treatment-in-vadodara","laugh-lines-treatment-in-vadodara","neck-wrinkle-treatment-in-vadodara","neck-lift-in-vadodara","collagen-treatment-in-vadodara","anti-aging-clinic-in-vadodara","double-chin-removal-in-vadodara","face-contouring-in-vadodara","v-shape-face-treatment-in-vadodara","face-slimming-treatment-in-vadodara","skin-lifting-treatment-in-vadodara","tear-trough-filler-in-vadodara","nose-filler-in-vadodara","non-surgical-nose-job-in-vadodara","chin-filler-in-vadodara","temple-filler-in-vadodara","face-fat-reduction-in-vadodara","liquid-face-lift-in-vadodara","vampire-face-lift-in-vadodara","hand-rejuvenation-in-vadodara",
  // Hair Loss (22)
  "baldness-treatment-in-vadodara","receding-hairline-treatment-in-vadodara","premature-greying-treatment-in-vadodara","grey-hair-treatment-in-vadodara","dry-hair-treatment-in-vadodara","hair-breakage-treatment-in-vadodara","frizzy-hair-treatment-in-vadodara","hair-damage-repair-in-vadodara","hair-fall-solution-in-vadodara","hair-volume-treatment-in-vadodara","thin-hair-treatment-in-vadodara","hair-density-treatment-in-vadodara","hair-strengthening-treatment-in-vadodara","postpartum-hair-loss-treatment-in-vadodara","androgenetic-alopecia-treatment-in-vadodara","alopecia-areata-treatment-in-vadodara","telogen-effluvium-treatment-in-vadodara","stress-hair-loss-treatment-in-vadodara","best-hair-fall-treatment-in-vadodara","best-hair-loss-treatment-in-vadodara","best-hair-treatment-in-vadodara","female-pattern-baldness-treatment-in-vadodara",
  // Hair Care (16)
  "hair-spa-in-vadodara","keratin-treatment-in-vadodara","hair-smoothening-in-vadodara","hair-rebonding-in-vadodara","hair-straightening-in-vadodara","hair-coloring-in-vadodara","hair-extension-in-vadodara","hair-weaving-in-vadodara","hair-bonding-in-vadodara","hair-replacement-in-vadodara","non-surgical-hair-replacement-in-vadodara","hair-wig-in-vadodara","best-hair-spa-in-vadodara","oily-scalp-treatment-in-vadodara","hair-restoration-in-vadodara","hair-loss-specialist-in-vadodara",
  // Hair Transplant (16)
  "best-hair-transplant-in-vadodara","dhi-hair-transplant-in-vadodara","bio-fue-hair-transplant-in-vadodara","body-hair-transplant-in-vadodara","female-hair-transplant-in-vadodara","hair-transplant-clinic-in-vadodara","hair-transplant-doctor-in-vadodara","hair-transplant-surgeon-in-vadodara","moustache-transplant-in-vadodara","hair-transplant-specialist-in-vadodara","sapphire-fue-hair-transplant-in-vadodara","robotic-hair-transplant-in-vadodara","unshaven-hair-transplant-in-vadodara","hair-transplant-for-women-in-vadodara","failed-hair-transplant-repair-in-vadodara","sideburn-transplant-in-vadodara",
  // Scalp (10)
  "scalp-psoriasis-treatment-in-vadodara","scalp-infection-treatment-in-vadodara","itchy-scalp-treatment-in-vadodara","dry-scalp-treatment-in-vadodara","flaky-scalp-treatment-in-vadodara","seborrheic-dermatitis-treatment-in-vadodara","hair-follicle-treatment-in-vadodara","scalp-micropigmentation-in-vadodara","mesotherapy-for-hair-in-vadodara","mesotherapy-in-vadodara",
  // PRP/GFC (10)
  "prp-for-face-in-vadodara","prp-treatment-in-vadodara","prp-facial-in-vadodara","platelet-rich-plasma-treatment-in-vadodara","stem-cell-therapy-for-hair-in-vadodara","growth-factor-treatment-in-vadodara","exosome-therapy-in-vadodara","exosome-hair-treatment-in-vadodara","prp-for-skin-in-vadodara","prp-injection-for-hair-in-vadodara",
  // Skin Conditions (28)
  "dermatitis-treatment-in-vadodara","contact-dermatitis-treatment-in-vadodara","atopic-dermatitis-treatment-in-vadodara","urticaria-treatment-in-vadodara","hives-treatment-in-vadodara","lichen-planus-treatment-in-vadodara","rosacea-treatment-in-vadodara","scabies-treatment-in-vadodara","ringworm-treatment-in-vadodara","herpes-treatment-in-vadodara","shingles-treatment-in-vadodara","skin-infection-treatment-in-vadodara","bacterial-skin-infection-treatment-in-vadodara","skin-rash-treatment-in-vadodara","itchy-skin-treatment-in-vadodara","dry-skin-treatment-in-vadodara","oily-skin-treatment-in-vadodara","sensitive-skin-treatment-in-vadodara","molluscum-treatment-in-vadodara","cellulitis-treatment-in-vadodara","folliculitis-treatment-in-vadodara","chronic-urticaria-treatment-in-vadodara","skin-allergy-doctor-in-vadodara","skin-rashes-doctor-in-vadodara","loose-skin-treatment-in-vadodara","saggy-skin-treatment-in-vadodara","dehydrated-skin-treatment-in-vadodara","rough-skin-treatment-in-vadodara",
  // Skin Removal (14)
  "corn-removal-in-vadodara","callus-removal-in-vadodara","cyst-removal-in-vadodara","lipoma-removal-in-vadodara","sebaceous-cyst-removal-in-vadodara","millia-removal-in-vadodara","xanthelasma-removal-in-vadodara","syringoma-removal-in-vadodara","keratosis-treatment-in-vadodara","skin-growth-removal-in-vadodara","skin-lesion-removal-in-vadodara","fibroma-removal-in-vadodara","verruca-removal-in-vadodara","cherry-angioma-removal-in-vadodara",
  // Scar (10)
  "scar-removal-in-vadodara","burn-scar-treatment-in-vadodara","surgical-scar-treatment-in-vadodara","chickenpox-scar-treatment-in-vadodara","keloid-treatment-in-vadodara","hypertrophic-scar-treatment-in-vadodara","scar-revision-in-vadodara","ice-pick-scar-treatment-in-vadodara","subcision-treatment-in-vadodara","scar-reduction-treatment-in-vadodara",
  // Nail (6)
  "nail-fungus-treatment-in-vadodara","nail-disorder-treatment-in-vadodara","ingrown-nail-treatment-in-vadodara","ingrown-toenail-treatment-in-vadodara","nail-psoriasis-treatment-in-vadodara","onychomycosis-treatment-in-vadodara",
  // Body (14)
  "body-contouring-in-vadodara","fat-reduction-in-vadodara","coolsculpting-in-vadodara","inch-loss-treatment-in-vadodara","cellulite-treatment-in-vadodara","body-polishing-in-vadodara","body-sculpting-in-vadodara","lipolysis-in-vadodara","skin-firming-treatment-in-vadodara","double-chin-removal-in-vadodara","cryolipolysis-in-vadodara","tummy-tightening-in-vadodara","body-skin-tightening-in-vadodara","body-whitening-treatment-in-vadodara",
  // Sweat (4)
  "hyperhidrosis-treatment-in-vadodara","excessive-sweating-treatment-in-vadodara","body-odor-treatment-in-vadodara","underarm-whitening-in-vadodara",
  // Under Eye (6)
  "under-eye-dark-circle-treatment-in-vadodara","eye-bag-treatment-in-vadodara","puffy-eyes-treatment-in-vadodara","under-eye-wrinkle-treatment-in-vadodara","sunken-eyes-treatment-in-vadodara","under-eye-hollowness-treatment-in-vadodara",
  // Lip & Cosmetic (6)
  "lip-lightening-in-vadodara","lip-pigmentation-treatment-in-vadodara","ear-lobe-repair-in-vadodara","dimple-creation-in-vadodara","skin-texture-treatment-in-vadodara","skin-hydration-treatment-in-vadodara",
  // Bridal (12)
  "bridal-skin-care-in-vadodara","pre-bridal-treatment-in-vadodara","pre-wedding-skin-treatment-in-vadodara","bridal-glow-treatment-in-vadodara","pre-bridal-facial-in-vadodara","groom-facial-in-vadodara","mens-skin-care-in-vadodara","womens-skin-care-in-vadodara","mens-facial-in-vadodara","mens-hair-loss-treatment-in-vadodara","womens-hair-treatment-in-vadodara","mens-hair-treatment-in-vadodara",
  // Technology (10)
  "radiofrequency-treatment-in-vadodara","ultherapy-in-vadodara","cryotherapy-in-vadodara","electrocautery-in-vadodara","dermatoscopy-in-vadodara","allergy-test-in-vadodara","patch-test-in-vadodara","skin-biopsy-in-vadodara","skin-screening-in-vadodara","skin-checkup-in-vadodara",
  // Intimate (4)
  "intimate-area-whitening-in-vadodara","bikini-area-whitening-in-vadodara","glutathione-injection-in-vadodara","skin-whitening-injection-in-vadodara",
  // Vascular (4)
  "spider-veins-treatment-in-vadodara","varicose-veins-treatment-in-vadodara","broken-capillaries-treatment-in-vadodara","facial-redness-treatment-in-vadodara",
  // Cost (28)
  "hair-transplant-cost-in-vadodara","fue-hair-transplant-cost-in-vadodara","beard-transplant-cost-in-vadodara","prp-treatment-cost-in-vadodara","gfc-treatment-cost-in-vadodara","laser-hair-removal-cost-in-vadodara","hydrafacial-cost-in-vadodara","chemical-peel-cost-in-vadodara","botox-cost-in-vadodara","dermal-fillers-cost-in-vadodara","thread-lift-cost-in-vadodara","lip-fillers-cost-in-vadodara","acne-treatment-cost-in-vadodara","hair-patch-cost-in-vadodara","skin-whitening-cost-in-vadodara","tattoo-removal-cost-in-vadodara","mole-removal-cost-in-vadodara","skin-tag-removal-cost-in-vadodara","wart-removal-cost-in-vadodara","pigmentation-treatment-cost-in-vadodara","microneedling-cost-in-vadodara","acne-scar-treatment-cost-in-vadodara","hair-fall-treatment-cost-in-vadodara","hair-loss-treatment-cost-in-vadodara","skin-tightening-cost-in-vadodara","hair-spa-cost-in-vadodara","anti-aging-treatment-cost-in-vadodara","facial-treatment-cost-in-vadodara",
];

// Check which pages already exist
let created = 0;
let skipped = 0;

for (const slug of newKeywords) {
  const dirPath = path.join(APP_DIR, slug);
  const filePath = path.join(dirPath, 'page.tsx');

  if (fs.existsSync(filePath)) {
    skipped++;
    continue;
  }

  // Create directory
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Generate and write page
  const content = generatePageFile(slug);
  fs.writeFileSync(filePath, content, 'utf-8');
  created++;
}

console.log(`\n✅ Page generation complete!`);
console.log(`   Created: ${created} new pages`);
console.log(`   Skipped: ${skipped} existing pages`);
console.log(`   Total new keywords: ${newKeywords.length}`);
