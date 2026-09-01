-- Create questions table in Supabase Database
CREATE TABLE IF NOT EXISTS public.questions (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT DEFAULT '',
    "desc" TEXT DEFAULT '',
    used BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- Allow public read, insert, update, delete for anonymous user
CREATE POLICY "Allow public read access" ON public.questions FOR SELECT USING (true);
CREATE POLICY "Allow public insert access" ON public.questions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update access" ON public.questions FOR UPDATE USING (true);
CREATE POLICY "Allow public delete access" ON public.questions FOR DELETE USING (true);

-- Enable Realtime for questions table
ALTER PUBLICATION supabase_realtime ADD TABLE public.questions;

-- Seed initial pageant questions if table is empty
INSERT INTO public.questions (id, title, category, "desc", used)
VALUES
  ('tc1', 'ผ้าทอล้านนากับเวทีแฟชั่นระดับโลก', 'อัตลักษณ์ไทย & เสน่ห์ล้านนา ๒๕๖๙', 'คุณจะประยุกต์และส่งเสริมผ้าทออัตลักษณ์ล้านนาให้กลายเป็นแฟชั่นระดับโลกที่คนรุ่นใหม่สวมใส่ในชีวิตประจำวันได้อย่างไร?', false),
  ('tc2', 'เสน่ห์การท่องเที่ยววัฒนธรรมล้านนา', 'อัตลักษณ์ไทย & เสน่ห์ล้านนา ๒๕๖๙', 'หากคุณเป็นทูตการท่องเที่ยวถิ่นไทยงาม คุณจะนำเสนอเสน่ห์และภูมิปัญญาของล้านนาอย่างไรให้ดึงดูดนักเดินทางทั่วโลก?', false),
  ('tc3', 'อาหารพื้นถิ่นและภูมิปัญญาไทย', 'อัตลักษณ์ไทย & เสน่ห์ล้านนา ๒๕๖๙', 'อาหารไทยและอาหารเหนือได้รับการยอมรับระดับโลก คุณจะสานต่อภูมิปัญญาพื้นบ้านของแต่ละท้องถิ่นอย่างไรไม่ให้สูญหาย?', false),
  ('tc4', 'รอยยิ้มและการต้อนรับแบบไทยล้านนา', 'อัตลักษณ์ไทย & เสน่ห์ล้านนา ๒๕๖๙', 'ในโลกที่ความสัมพันธ์เริ่มเหินห่าง "มิตรไมตรีและน้ำใจไมตรี" มีความสำคัญอย่างไรต่อการสร้างสันติภาพและความเข้าใจอันดี?', false),
  ('k1', 'เสน่ห์ล้านนา (LANNA CHARM & GRACE)', 'Keyword Speech', 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', false),
  ('k2', 'SOFT POWER (ซอฟต์พาวเวอร์ไทย)', 'Keyword Speech', 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', false),
  ('k3', 'EMPOWERMENT (การเสริมสร้างพลังบวก)', 'Keyword Speech', 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', false),
  ('k4', 'SUSTAINABILITY (ความยั่งยืน)', 'Keyword Speech', 'กล่าวสุนทรพจน์ 30 วินาที ในมุมมองของคุณเกี่ยวกับคำนี้บนเวทีประกวด', false),
  ('f1', 'พลังแห่งสตรีกับการขับเคลื่อนประเทศ', 'รอบ 3 คนสุดท้าย (Final Question)', 'ในฐานะตัวแทนผู้หญิงยุคใหม่ คุณคิดว่าบทบาทใดของสตรีที่มีพลังสูงสุดในการขับเคลื่อนเศรษฐกิจและสังคมไทยในเวทีโลก?', false),
  ('f2', 'ความงามที่แท้จริงในยุคดิจิทัล', 'รอบ 3 คนสุดท้าย (Final Question)', 'ในยุคที่โซเชียลมีเดียมีอิทธิพลต่อค่านิยมความงาม คุณจะนิยาม "คุณค่าและความงามที่แท้จริง" ของนางสาวถิ่นไทยงามอย่างไร?', false)
ON CONFLICT (id) DO NOTHING;
